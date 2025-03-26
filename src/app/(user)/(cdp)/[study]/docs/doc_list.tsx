'use client';

import {
    Box,
    BoxButtonPlus,
    BoxButtonReload,
    BoxContent,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
} from '@/components/boxes/boxes';
import { Button } from '@/components/ui/button';
import { getMissionFiles } from '@/drive/files';
import { DriveFile, googleUrl } from '@/drive/types';
import { useEffect, useState, useCallback } from 'react';
import { FaArrowRightFromBracket, FaArrowUpFromBracket } from 'react-icons/fa6';
import Link from 'next/link';
import { dbg } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog';

export function DocumentList({ study }: { study: string }) {
    const [selectedFile, selectFile] = useState<undefined | DriveFile>();

    const [files, setFiles] = useState<undefined | DriveFile[]>();
    const [loading, setLoading] = useState(true);

    const loadFiles = useCallback(() => {
        setLoading(true);
        getMissionFiles(study).then((serverMissions) => {
            if (serverMissions !== undefined) {
                setFiles(serverMissions || []);
            }
            setLoading(false);
        });
    }, [study]);

    useEffect(() => {
        loadFiles();
    }, [loadFiles]);

    return (
        <div className="flex h-full">
            {selectedFile ? (
                <FrameFile file={selectedFile} closeFrame={() => selectFile(undefined)} />
            ) : (
                <FileExplorer {...{ selectFile, files, loadFiles, loading }} />
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
                onClick={closeFrame}
            >
                Close this file!
            </Button>
        </div>
    );
}

interface FileExplorerProps {
    files?: DriveFile[];
    selectFile: (id: DriveFile) => void;
    loadFiles: () => void;
    loading: boolean;
}

function FileExplorer({ selectFile, files, loadFiles, loading }: FileExplorerProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Box className="w-full">
                <BoxHeader>
                    <BoxTitle>Documents de l&apos;étude</BoxTitle>
                    <BoxHeaderBlock>
                        <BoxButtonReload onClick={loadFiles} />
                        <BoxButtonPlus onClick={() => setOpen(true)} />
                    </BoxHeaderBlock>
                </BoxHeader>
                <BoxContent>
                    {loading ? (
                        <p>Loading...</p>
                    ) : files === undefined ? (
                        <p>
                            Erreur lors de la mise à jour des documents.. Merci de faire un ticket
                            SOS (en haut à droite).
                        </p>
                    ) : files.length !== 0 ? (
                        <div className="flex flex-col space-y-main">
                            {dbg(files, 'files').map((file) => {
                                const url = googleUrl(file.id, file.mimeType);
                                return (
                                    <div
                                        className="bg-accent text-start p-2 rounded flex justify-between items-center"
                                        key={file.id}
                                    >
                                        <p className="w-full">{file.name}</p>
                                        <div className="flex items-center space-x-main">
                                            {url && (
                                                <Button
                                                    variant="ghost"
                                                    asChild
                                                    className="w-full h-full"
                                                >
                                                    <Link
                                                        href={url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full h-full no-padding"
                                                    >
                                                        <FaArrowUpFromBracket className="w-full h-full" />
                                                    </Link>
                                                </Button>
                                            )}
                                            <Button
                                                variant="ghost"
                                                onClick={() => selectFile(file)}
                                                className="w-full h-full no-padding"
                                            >
                                                <FaArrowRightFromBracket className="w-full h-full" />
                                            </Button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p>Aucun document n'est présent dans le dossier d'étude.</p>
                    )}
                </BoxContent>
            </Box>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Cloner un template</DialogTitle>
                    </DialogHeader>
                    <div>
                        <div></div>
                    </div>
                    <DialogClose>Cancel</DialogClose>
                </DialogContent>
            </Dialog>
        </>
    );
}
