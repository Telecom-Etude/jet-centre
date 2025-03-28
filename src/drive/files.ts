'use server';

import { googleDrive } from './api';
import { DriveFile, driveFileToDriveFile, FileType } from './types';
import { getMissionFolderId } from './folders';
import { drive_v3 } from 'googleapis';

export async function getFileIds(): Promise<string[]> {
    const drive = await googleDrive();

    return drive.files
        .list({
            pageSize: 10,
        })
        .then(
            (req) =>
                req.data.files?.map((file) => file.id ?? null).filter((id) => id !== null) || []
        );
}

export async function getFiles(fileIds: string[]): Promise<Promise<DriveFile>[]> {
    const drive = await googleDrive();

    return fileIds.map(async (fileId) => {
        return drive.files
            .get({ fileId, fields: 'iconLink,thumbnailLink,name,webViewLink,mimeType' })
            .then((req) => driveFileToDriveFile(req.data));
    });
}

export async function getFileModifiedDate(fileId: string): Promise<string> {
    const file = await (await googleDrive()).files.get({ fileId, fields: 'modifiedTime' }, {});

    return file?.data?.modifiedTime || '';
}

export async function copyTemplate(templateId: string, code: string): Promise<DriveFile | null> {
    try {
        const folderId = await getMissionFolderId(code);
        const drive = await googleDrive();
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

export async function copyTemplateWithExcel(templateId: string, code: string, excelId?: string) {
    try {
        await copyTemplate(templateId, code);
        if (excelId) {
            await copyTemplate(excelId, code);
        }
    } catch (e) {
        console.error(`[copyTemplateWithExcel] ${e}`);
    }
}

export async function getMissionFiles(code: string): Promise<DriveFile[] | null> {
    try {
        const folderId = await getMissionFolderId(code);
        const drive = await googleDrive();
        if (folderId) {
            return recursiveSearch(drive, folderId);
        }
        throw new Error('Failed to access google drive study folder.');
    } catch {
        // console.error(`[getMissionFiles] ${e}`);
        return null;
    }
}

async function recursiveSearch(
    drive: drive_v3.Drive,
    folderId: string
): Promise<DriveFile[] | null> {
    try {
        const folderContent = await drive.files.list({
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
        console.error(`[recursiveSearch] ${e}`);
        return null;
    }
}
