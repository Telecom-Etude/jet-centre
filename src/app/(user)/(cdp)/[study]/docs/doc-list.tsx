'use client';

import { Button } from '@/components/ui/button';
import { getMissionFiles } from '@/drive/files';
import { DriveFile, googleUrl } from '@/drive/types';
import { useState } from 'react';
import { FileExplorerBox } from './file-explorer';

export function DocumentList({
    study,
    initialMissions,
}: {
    study: string;
    initialMissions: DriveFile[];
}) {
    const [selectedFile, selectFile] = useState<undefined | DriveFile>();
    const [missions, setMissions] = useState<null | DriveFile[]>(initialMissions);
    const [loading, setLoading] = useState(false);

    const loadFiles = () => {
        setLoading(true);
        getMissionFiles(study).then((serverMissions) => {
            setMissions(serverMissions);
            setLoading(false);
        });
    };

    return (
        <div className="flex h-full">
            {selectedFile ? (
                <FrameFile file={selectedFile} closeFrame={() => selectFile(undefined)} />
            ) : (
                <FileExplorerBox {...{ selectFile, missions, loadFiles, loading, study }} />
            )}
        </div>
    );
}

function FrameFile({ file, closeFrame }: { file: DriveFile; closeFrame: () => void }) {
    return (
        <div className="relative w-full h-full">
            <iframe
                src={googleUrl(file.id, file.mimeType)}
                className="absolute inset-0 w-full h-full"
            >
                Loading...
            </iframe>
            <Button
                className="absolute bottom-4 right-4 z-10 font-bold rounded"
                onClick={() => closeFrame()}
            >
                Close this file!
            </Button>
        </div>
    );
}
