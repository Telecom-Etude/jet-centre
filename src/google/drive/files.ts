'use server';

import { drive_v3 } from 'googleapis';

import { googleDrive } from '@/google/api';

import { getMissionFolderId } from './folders';
import { NameIdFile, TemplateName, TEMPLATES } from './template';
import { DriveFile, driveFileToDriveFile, FileType } from './types';

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

async function copyFile(file: NameIdFile, code: string): Promise<DriveFile | null> {
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

export async function renameFile(fileId: string, name: string): Promise<DriveFile | null> {
    try {
        const drive = await googleDrive();
        const file = await drive.files.update({
            fileId,
            requestBody: {
                name,
            },
        });
        return driveFileToDriveFile(file.data);
    } catch (e) {
        console.error(`[renameFile] ${e}`);
        return null;
    }
}

export async function trashFile(fileId: string, trashed: boolean): Promise<boolean> {
    try {
        const drive = await googleDrive();
        const res = await drive.files.update({
            fileId,
            requestBody: { trashed },
        });
        return res.status <= 300;
    } catch (e) {
        console.error(`[deleteFile] ${e}`);
        return false;
    }
}

export async function copyTemplate(code: string, templateName: TemplateName): Promise<boolean> {
    try {
        const template = TEMPLATES[templateName];
        await copyFile({ name: templateName, id: template.id }, code);
        if (template.excel) {
            await copyFile(template.excel, code);
        }
        return true;
    } catch (e) {
        console.error(`[copyTemplateWithExcel] ${e}`);
        return false;
    }
}

export async function getMissionFiles(code: string, trash?: boolean): Promise<DriveFile[] | null> {
    try {
        const folderId = await getMissionFolderId(code);
        const drive = await googleDrive();
        if (folderId) {
            return recursiveSearch(drive, folderId, !!trash);
        }
        throw new Error('Failed to access google drive study folder.');
    } catch (e) {
        console.error(`[getMissionFiles] ${e}`);
        return null;
    }
}

async function recursiveSearch(
    drive: drive_v3.Drive,
    folderId: string,
    trash: boolean
): Promise<DriveFile[] | null> {
    try {
        const folderContent = await drive.files.list({
            q: `'${folderId}' in parents and trashed=${trash}`,
        });
        const items = folderContent?.data.files;
        if (items) {
            const files = [];
            for (const item of items) {
                if (item.mimeType === FileType.Folder) {
                    if (item.id) {
                        const children = await recursiveSearch(drive, item.id, trash);
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

export async function newFileInMissionFolder(code: string, mimeType: FileType, name: string) {
    try {
        const drive = await googleDrive();
        const missionFolder = await getMissionFolderId(code);
        if (!missionFolder) {
            throw new Error('Failed to get mission folder Id');
        }
        await drive.files.create({
            requestBody: {
                name,
                mimeType,
                parents: [missionFolder],
            },
        });
    } catch (e) {
        console.error(`[newFile] ${e}`);
    }
}
