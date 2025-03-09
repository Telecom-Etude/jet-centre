'use server';

import { auth } from '../actions/auth';
import { DriveFile } from './types';
import { driveFileToDriveFile, FileType, googleDrive, makeMimeType } from './interface';

export async function getFileIds(): Promise<string[]> {
    const session = await auth();

    return googleDrive(session)
        .files.list({
            pageSize: 10,
            q: `mimeType = '${makeMimeType(FileType.Folder)}'`,
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

export async function getFolderContents(folderId: string): Promise<DriveFile[]> {
    const session = await auth();
    const response = await googleDrive(session).files.list({ q: `'${folderId}' in parents` });
    return response.data.files?.map(driveFileToDriveFile) || [];
}

export async function getMissionFolder(code: string): Promise<string | undefined> {
    const mission_folders = await getFolderContents(process.env.DOSSIER_SUIVI);
    const mimeType = makeMimeType(FileType.Folder);
    return mission_folders.find((file) => file.name == code && file.mimeType == mimeType)?.id;
}
