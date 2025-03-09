'use server';

import { Session } from 'next-auth';
import { auth } from '../actions/auth';
import { driveFileToDriveFile, FileType, DriveFile } from './interface';
import { log } from '@/lib/utils';
import { drive_v3, google } from 'googleapis';
import prisma from '@/db';

function googleDrive(session: Session | null): drive_v3.Drive {
    const googleAuth = new google.auth.OAuth2({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
    });
    googleAuth.setCredentials({
        access_token: session?.user.access_token,
        refresh_token: session?.user.refresh_token,
    });
    return google.drive({ version: 'v3', auth: googleAuth });
}

export async function getFileIds(): Promise<string[]> {
    const session = await auth();

    return googleDrive(session)
        .files.list({
            pageSize: 10,
        })
        .then(
            (req) =>
                req.data.files?.map((file) => file.id ?? null).filter((id) => id !== null) || []
        );
}

export async function getFiles(fileIds: string[]): Promise<Promise<DriveFile>[]> {
    return auth().then((session) => {
        return fileIds.map(async (fileId) => {
            return googleDrive(session)
                .files.get({ fileId, fields: 'iconLink,thumbnailLink,name,webViewLink,mimeType' })
                .then((req) => driveFileToDriveFile(req.data));
        });
    });
}

export async function getFileModifiedDate(fileId: string): Promise<string> {
    const session = await auth();

    const file = await googleDrive(session).files.get({ fileId, fields: 'modifiedTime' }, {});

    return file?.data?.modifiedTime || '';
}

async function getMissionFolderIdFromDrive(code: string): Promise<string | undefined> {
    try {
        const session = await auth();
        const drive = googleDrive(session);
        const folderList = await drive.files.list({
            q: `'${process.env.DOSSIER_SUIVI}' in parents`,
        });
        const mission_folders = folderList.data.files?.map(driveFileToDriveFile) || [];
        const missionFolderId = mission_folders.find(
            (file) => file.name == code && file.mimeType == FileType.Folder
        )?.id;
        if (missionFolderId) {
            return missionFolderId;
        }
        log(`Creating folder for study ${code}`);
        const fileMetadata = {
            name: code,
            mimeType: FileType.Folder,
            parents: [process.env.DOSSIER_SUIVI],
        };
        const creationResponse = await drive.files.create({
            requestBody: fileMetadata,
            fields: 'id',
        });
        return creationResponse.data.id || undefined;
    } catch (e) {
        console.error(`[getMissionFolder] ${e}`);
    }
}

export async function getMissionFolderId(code: string): Promise<string | undefined> {
    try {
        const study = await prisma.studyInfos.findUnique({
            where: { code },
        });
        const folderId = study?.googleFolder;
        if (folderId) {
            return folderId;
        }
        const googleFolder = await getMissionFolderIdFromDrive(code);
        await prisma.studyInfos.update({ where: { code }, data: { googleFolder } });
        return googleFolder;
    } catch (e) {
        console.error(`[getMissionFiles] ${e}`);
    }
}

export async function getMissionFiles(code: string): Promise<DriveFile[] | undefined> {
    try {
        const folderId = await getMissionFolderId(code);
        const session = await auth();
        const drive = googleDrive(session);
        if (folderId) {
            return recursiveSearch(drive, folderId);
        }
    } catch (e) {
        console.error(`[getMissionFiles] ${e}`);
    }
}

async function recursiveSearch(
    drive: drive_v3.Drive,
    folderId: string
): Promise<DriveFile[] | undefined> {
    let folderContent;
    try {
        folderContent = await drive.files.list({
            q: `'${folderId}' in parents`,
        });
    } catch (e) {
        console.log(`[recursiveSearch] ${e}`);
        return;
    }
    const items = folderContent?.data.files;
    if (items) {
        const files = [];
        for (const item of items) {
            if (item.mimeType === FileType.Folder) {
                if (item.id) {
                    const children = await recursiveSearch(drive, item.id);
                    if (children) {
                        files.push(...children);
                    }
                }
            } else {
                files.push(item);
            }
        }
        return files.map(driveFileToDriveFile);
    }
    console.log(`[recursiveSearch] Failed to load content from drive request`);
}
