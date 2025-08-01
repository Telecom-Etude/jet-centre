import { ReactNode } from 'react';
import { FaFileCircleQuestion, FaFilePdf, FaFolder, FaWpforms } from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { LuPresentation, LuFileSpreadsheet } from 'react-icons/lu';

import { FileType } from '@/google/drive/types';

export function getMimeTypeIcon(fileType: FileType | null): ReactNode {
    switch (fileType) {
        case FileType.Folder:
            return <FaFolder className="text-yellow-500" />;
        case FileType.Document:
            return <IoDocumentTextOutline className="text-blue-500" />;
        case FileType.Spreadsheet:
            return <LuFileSpreadsheet className="text-green-500" />;
        case FileType.Presentation:
            return <LuPresentation className="text-orange-500" />;
        case FileType.Forms:
            return <FaWpforms className="text-purple-500" />;
        case FileType.Pdf:
            return <FaFilePdf className="text-red-500" />;
        default:
            return <FaFileCircleQuestion className="text-rose-500" />;
    }
}
