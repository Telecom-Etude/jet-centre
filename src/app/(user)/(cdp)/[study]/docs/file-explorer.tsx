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
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { TEMPLATES } from '@/drive/template';
import { DriveFile, googleUrl } from '@/drive/types';
import { useState } from 'react';
import { FaArrowRightFromBracket, FaArrowUpFromBracket } from 'react-icons/fa6';
import Link from 'next/link';

interface FileExplorerProps {
    missions: DriveFile[] | null;
    selectFile: (file: DriveFile) => void;
    loadFiles: () => void;
    loading: boolean;
    study: string;
}

export function FileExplorerBox({
    selectFile,
    missions,
    loadFiles,
    loading,
    study,
}: FileExplorerProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Box className="w-full">
                <BoxHeader>
                    <BoxTitle>Documents de l&apos;étude</BoxTitle>
                    <BoxHeaderBlock>
                        <BoxButtonReload onClick={() => loadFiles()} />
                        <BoxButtonPlus onClick={() => setOpen(true)} />
                    </BoxHeaderBlock>
                </BoxHeader>
                <BoxContent>
                    {loading ? (
                        <p>Loading...</p>
                    ) : missions === null ? (
                        <p>
                            Erreur lors de la mise à jour des documents.. Merci de faire un ticket
                            SOS (en haut à droite).
                        </p>
                    ) : missions.length !== 0 ? (
                        <FileExplorer missions={missions} selectFile={selectFile} />
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
                    <div className="flex flex-col gap-4">
                        {TEMPLATES.map(({ fileId, excelId, name }, i) => {
                            return (
                                <Button
                                    variant="outline"
                                    key={i}
                                    onClick={() => {
                                        window.alert(`${fileId}, ${name}, ${study}, ${excelId}`);
                                    }}
                                >
                                    {name}
                                </Button>
                            );
                        })}
                    </div>
                    <DialogClose>Cancel</DialogClose>
                </DialogContent>
            </Dialog>
        </>
    );
}

function FileExplorer({
    missions,
    selectFile,
}: {
    missions: DriveFile[];
    selectFile: (file: DriveFile) => void;
}) {
    return (
        <div className="flex flex-col space-y-main">
            {missions.map((file) => {
                return (
                    <div
                        className="bg-accent text-start p-2 rounded flex justify-between items-center"
                        key={file.id}
                    >
                        <p className="w-full">{file.name}</p>
                        <FileButtons
                            url={googleUrl(file.id, file.mimeType)}
                            selectFile={selectFile}
                            file={file}
                        />
                    </div>
                );
            })}
        </div>
    );
}

function FileButtons({
    url,
    file,
    selectFile,
}: {
    url?: string;
    file: DriveFile;
    selectFile: (file: DriveFile) => void;
}) {
    return (
        <div className="flex items-center space-x-main">
            {url && (
                <Button variant="ghost" asChild className="w-full h-full">
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
    );
}
