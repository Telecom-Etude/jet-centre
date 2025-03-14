import { auth } from '@/actions/auth';
import { googleDrive } from './api';
import { DriveFile, driveFileToDriveFile, FileType } from './types';
import { Session } from 'next-auth';
import { getMissionFolderId } from './folders';
import { drive_v3 } from 'googleapis';

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
    return auth().then((session: Session | null) => {
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

export async function copyTemplate(templateId: string, code: string): Promise<DriveFile | null> {
    try {
        const folderId = await getMissionFolderId(code);
        const session = await auth();
        const drive = googleDrive(session);
        if (!folderId) {
            throw new Error('Failed to access google drive study folder.');
        }
        const res = await drive.files.copy({
            fileId: templateId,
            requestBody: { parents: [folderId] },
        });
        return driveFileToDriveFile(res.data);
    } catch (e) {
        console.error(`[copyTemplate] ${e}`);
        return null;
    }
}

export async function getMissionFiles(code: string): Promise<DriveFile[] | null> {
    try {
        const folderId = await getMissionFolderId(code);
        const session = await auth();
        const drive = googleDrive(session);
        if (folderId) {
            return recursiveSearch(drive, folderId);
        } else {
            throw new Error('Failed to access google drive study folder.');
        }
    } catch (e) {
        console.error(`[getMissionFiles] ${e}`);
        return null;
    }
}

async function recursiveSearch(
    drive: drive_v3.Drive,
    folderId: string
): Promise<DriveFile[] | null> {
    let folderContent;
    try {
        folderContent = await drive.files.list({
            q: `'${folderId}' in parents`,
        });
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
        throw new Error('Failed to load content from drive request.');
    } catch (e) {
        console.log(`[recursiveSearch] ${e}`);
        return null;
    }
}
