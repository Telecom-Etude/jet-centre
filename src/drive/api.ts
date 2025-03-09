'use server';

import { auth } from '../actions/auth';
import { DriveFile } from './types';
import { driveFileToDriveFile, FileType, googleDrive, makeMimeType } from './interface';
import { dbg, log } from '@/lib/utils';

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

export async function getMissionFolder(code: string): Promise<DriveFile[] | undefined> {
    try {
        const session = await auth();
        const drive = googleDrive(session);
        const folderList = await drive.files.list({
            q: `'${process.env.DOSSIER_SUIVI}' in parents`,
        });
        const mission_folders = folderList.data.files?.map(driveFileToDriveFile) || [];
        const mimeType = makeMimeType(FileType.Folder);
        let missionFolderId = mission_folders.find(
            (file) => file.name == code && file.mimeType == mimeType
        )?.id;
        if (!missionFolderId) {
            log(`Creating folder for study ${code}`);
            const fileMetadata = {
                name: code,
                mimeType,
                parents: [process.env.DOSSIER_SUIVI],
            };
            const creationResponse = await drive.files.create({
                requestBody: fileMetadata,
                fields: 'id',
            });
            missionFolderId = dbg(creationResponse.data.id, 'dossier mission') || undefined;
        }
        if (missionFolderId) {
            const fileList = await drive.files.list({
                q: `'${missionFolderId}' in parents`,
            });
            return fileList.data.files?.map(driveFileToDriveFile);
        }
    } catch (e) {
        console.error(`[getMissionFolder]`, e);
    }
}
