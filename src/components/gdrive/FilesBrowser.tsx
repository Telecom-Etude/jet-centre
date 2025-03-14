'use client';

import { getFileIds, getFiles } from '@/drive/api';
import { use, useState } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Skeleton } from '../ui/skeleton';
import { DriveFile } from '@/drive/types';

function FileComponent({ pFile }: { pFile: Promise<DriveFile> | null }) {
    const file = pFile === null ? null : use(pFile);

    const isLoaded = file !== null;

    const thumbnailSrc = (isLoaded && file.thumbnail) || '';
    const webViewLink = (isLoaded && file.webViewLink) || '#';

    const isFolder = isLoaded && file.mimeType == 'application/vnd.google-apps.folder';

    if (isLoaded) {
        console.log(file);
    }

    return (
        <button
            onDoubleClick={() => {
                if (isLoaded) {
                    if (!isFolder) {
                        window.open(webViewLink, '_blank')?.focus();
                    }
                }
            }}
        >
            <div className="flex flex-col bg-card rounded-md p-2 space-y-2 border border-sidebar-border">
                {file && (
                    <>
                        <div className="flex space-x-2 place-items-center">
                            {file.icon && (
                                <Image src={file.icon} width={16} height={16} alt="icon"></Image>
                            )}
                            <span className="text-nowrap overflow-hidden">{file.name}</span>
                        </div>
                        <div className="overflow-hidden h-[200px]">
                            {file.thumbnail && (
                                <Image
                                    src={thumbnailSrc}
                                    width={0}
                                    height={0}
                                    alt="thumbnail"
                                    className="w-full"
                                    sizes="50vw"
                                ></Image>
                            )}
                        </div>
                    </>
                )}
                {!file && (
                    <>
                        <div className="flex space-x-2 place-items-center">
                            <Skeleton className="size-[16px]" />
                            <span className="text-nowrap overflow-hidden">Loading...</span>
                        </div>
                        <div className="overflow-hidden h-[200px]">
                            <Skeleton className="h-full" />
                        </div>
                    </>
                )}
            </div>
        </button>
    );
}

const FilesBrowser = () => {
    const itemsPerPage = 10;
    const [files, setFiles] = useState<(Promise<DriveFile> | null)[]>([]);

    async function fetchFiles() {
        setFiles(new Array(itemsPerPage).fill(null));
        const fileIds = await getFileIds();
        const files = await getFiles(fileIds);

        setFiles(files);
    }

    function go() {
        fetchFiles();
    }

    return (
        <div>
            <Button onClick={go}>Refresh</Button>
            <div className="grid grid-cols-4 gap-4">
                {files.map((file, i) => (
                    <FileComponent key={i} pFile={file} />
                ))}
            </div>
        </div>
    );
};

export default FilesBrowser;
