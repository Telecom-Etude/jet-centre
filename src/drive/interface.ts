import { drive_v3, google } from 'googleapis';
import { Session } from 'next-auth';
import { DriveFile } from './types';

export function googleDrive(session: Session | null) {
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

export function driveFileToDriveFile(file: drive_v3.Schema$File): DriveFile {
    return {
        id: file.id || '[ERROR] missing id',
        name: file.name || '[ERROR] missing name',
        icon: file.iconLink ?? null,
        thumbnail: file.thumbnailLink ?? null,
        webViewLink: file.webViewLink ?? null,
        mimeType: file.mimeType ?? null,
    };
}

export enum FileType {
    Folder,
    Document,
}

export function makeMimeType(file_type: FileType): string {
    const commonPrefix = 'application/vnd.google-apps.';
    switch (file_type) {
        case FileType.Folder: {
            return commonPrefix + 'folder';
        }
        case FileType.Document: {
            return commonPrefix + 'document';
        }
    }
}
