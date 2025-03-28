'use server';

import { googleDrive } from './api';
import { DriveFile, driveFileToDriveFile, FileType } from './types';
import { getMissionFolderId } from './folders';
import { drive_v3 } from 'googleapis';
import { NameIdFile } from './template';

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

async function copyTemplate(file: NameIdFile, code: string): Promise<DriveFile | null> {
    try {
        const folderId = await getMissionFolderId(code);
        const drive = await googleDrive();
        if (!folderId) {
            throw new Error('Failed to access google drive study folder.');
        }
        const res = await drive.files.copy({
            fileId: file.id,
            requestBody: { parents: [folderId] },
        });
        const driveFile = driveFileToDriveFile(res.data);
        await drive.files.update({
            fileId: driveFile.id,
            requestBody: {
                name: file.name,
            },
        });
        return driveFile;
    } catch (e) {
        console.error(`[copyTemplate] ${e}`);
        return null;
    }
}

export async function copyTemplateWithExcel(
    file: NameIdFile,
    code: string,
    excel?: NameIdFile
): Promise<boolean> {
    try {
        await copyTemplate(file, code);
        if (excel) {
            await copyTemplate(excel, code);
        }
        return true;
    } catch (e) {
        console.error(`[copyTemplateWithExcel] ${e}`);
        return false;
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
    } catch (e) {
        console.error(`[getMissionFiles] ${e}`);
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
