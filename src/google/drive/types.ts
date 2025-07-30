import { drive_v3 } from 'googleapis';

export type DriveFile = {
    id: string;
    name: string;
    icon: string | null;
    thumbnail: string | null;
    webViewLink: string | null;
    mimeType: FileType | null;
};

export function driveFileToDriveFile(file: drive_v3.Schema$File): DriveFile {
    return {
        id: file.id || '[ERROR] missing id',
        name: file.name || '[ERROR] missing name',
        icon: file.iconLink ?? null,
        thumbnail: file.thumbnailLink ?? null,
        webViewLink: file.webViewLink ?? null,
        mimeType: (file.mimeType && (file.mimeType as FileType)) || null, //TODO: Type-safety lost: mimeType can be an unknown FileType
    };
}

const COMMON_PREFIX = 'application/vnd.google-apps.';

export enum FileType {
    Folder = `${COMMON_PREFIX}folder`,
    Document = `${COMMON_PREFIX}document`,
    Spreadsheet = `${COMMON_PREFIX}spreadsheet`,
    Presentation = `${COMMON_PREFIX}presentation`,
    Forms = `${COMMON_PREFIX}forms`,
    Pdf = 'application/pdf',
}

export const FILE_POSSIBLE_CREATION = [
    { name: 'Document', type: FileType.Document },
    { name: 'Spreadsheet', type: FileType.Spreadsheet },
    { name: 'Presentation', type: FileType.Presentation },
    { name: 'Forms', type: FileType.Forms },
];

export function googleUrl(id: string, fileType: FileType | null): string | undefined {
    switch (fileType) {
        case FileType.Folder:
            return `https://drive.google.com/drive/folders/${id}`;
        case FileType.Document:
            return `https://docs.google.com/document/d/${id}`;
        case FileType.Spreadsheet:
            return `https://docs.google.com/spreadsheets/d/${id}`;
        case FileType.Presentation:
            return `https://docs.google.com/presentation/d/${id}`;
        case FileType.Forms:
            return `https://docs.google.com/forms/d/${id}`;
        case FileType.Pdf:
            return `https://drive.google.com/file/d/${id}/view`;
        default:
    }
}
