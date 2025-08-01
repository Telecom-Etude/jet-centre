import Link from 'next/link';
import { useState } from 'react';
import { FaArrowRightFromBracket, FaArrowUpFromBracket, FaPencil, FaTrash } from 'react-icons/fa6';

import {
    Box,
    BoxButtonPlus,
    BoxButtonReload,
    BoxButtonTemplate,
    BoxButtonTrash,
    BoxContent,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
} from '@/components/boxes/boxes';
import { getMimeTypeIcon } from '@/components/google/file-icons';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Input } from '@/components/ui/input';
import { trashFile, renameFile } from '@/google/drive/files';
import { DriveFile, googleUrl } from '@/google/drive/types';
import { reloadWindow } from '@/lib/utils';

import { TemplateCopyDialog } from './clone-template';
import { DustbinDialog } from './dustbin';
import { NewFileDialog } from './new-file';

interface FileExplorerProps {
    missions: DriveFile[] | null;
    selectFile: (file: DriveFile) => void;
    loadFiles: () => void;
    setLoading: (loading: boolean) => void;
    loading: boolean;
    study: string;
}

export function FileExplorerBox({
    selectFile,
    missions,
    loadFiles,
    setLoading,
    loading,
    study,
}: FileExplorerProps) {
    const [newFileOpen, setNewFileOpen] = useState(false);
    const [templateDialogOpen, setTemplateDialogOpen] = useState(false);
    const [dustbinOpen, setDustbinOpen] = useState(false);

    return (
        <>
            <Box className="w-full">
                <BoxHeader>
                    <BoxTitle>Documents de l&apos;étude</BoxTitle>
                    <BoxHeaderBlock>
                        <HoverCard>
                            <HoverCardTrigger>
                                <BoxButtonTrash onClick={() => setDustbinOpen(true)} />
                            </HoverCardTrigger>
                            <HoverCardContent>Ouvrir la corbeille.</HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                                <BoxButtonReload onClick={() => loadFiles()} />
                            </HoverCardTrigger>
                            <HoverCardContent>
                                Synchroniser les données avec Google Drive.
                            </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                                <BoxButtonTemplate onClick={() => setTemplateDialogOpen(true)} />
                            </HoverCardTrigger>
                            <HoverCardContent>Cloner un template.</HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                            <HoverCardTrigger>
                                <BoxButtonPlus onClick={() => setNewFileOpen(true)} />
                            </HoverCardTrigger>
                            <HoverCardContent>Créer un nouveau fichier vierge.</HoverCardContent>
                        </HoverCard>
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
                        <p>Aucun document n&apos;est présent dans le dossier d&apos;étude.</p>
                    )}
                </BoxContent>
            </Box>
            <TemplateCopyDialog
                open={templateDialogOpen}
                setOpen={setTemplateDialogOpen}
                study={study}
                setLoading={setLoading}
            />
            <NewFileDialog open={newFileOpen} setOpen={setNewFileOpen} study={study} />
            <DustbinDialog open={dustbinOpen} setOpen={setDustbinOpen} study={study} />
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
            {missions.map((file, i) => (
                <FileItem key={i} file={file} selectFile={selectFile} />
            ))}
        </div>
    );
}

function FileItem({
    file,
    selectFile,
}: {
    file: DriveFile;
    selectFile: (file: DriveFile) => void;
}) {
    const [isRenaming, setRenaming] = useState(false);
    const enterRenameMode = () => setRenaming(true);
    const [reloading, setReloading] = useState(false);

    return (
        <div
            className="bg-accent p-2 rounded flex justify-between items-center space-x-main"
            key={file.id}
        >
            <div>{getMimeTypeIcon(file.mimeType)}</div>
            {reloading ? (
                <p className="w-full">Updating name...</p>
            ) : isRenaming ? (
                <Input
                    className="h-fit"
                    defaultValue={file.name}
                    placeholder={file.name}
                    onBlur={(e) => {
                        setReloading(true);
                        renameFile(file.id, e.target.value).then(() => reloadWindow());
                    }}
                />
            ) : (
                <p className="w-full">{file.name}</p>
            )}
            <FileButtons
                url={googleUrl(file.id, file.mimeType)}
                selectFile={selectFile}
                enterRenameMode={enterRenameMode}
                file={file}
            />
        </div>
    );
}

interface FileButtonsProps {
    url?: string;
    file: DriveFile;
    selectFile: (file: DriveFile) => void;
    enterRenameMode: () => void;
}

function FileButtons({ url, file, selectFile, enterRenameMode }: FileButtonsProps) {
    return (
        <div className="flex  space-x-main">
            <HoverCard>
                <HoverCardTrigger>
                    <Button
                        variant="ghost"
                        onClick={() => {
                            trashFile(file.id, true).then(() => reloadWindow());
                        }}
                        className="no-padding"
                    >
                        <FaTrash />
                    </Button>
                </HoverCardTrigger>
                <HoverCardContent>Déplacer vers la corbeille.</HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger>
                    <Button
                        variant="ghost"
                        onClick={() => enterRenameMode()}
                        className="no-padding"
                    >
                        <FaPencil />
                    </Button>
                </HoverCardTrigger>
                <HoverCardContent>Renommer.</HoverCardContent>
            </HoverCard>
            {url && (
                <HoverCard>
                    <HoverCardTrigger>
                        <Button variant="ghost" asChild>
                            <Link
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="no-padding"
                            >
                                <FaArrowUpFromBracket />
                            </Link>
                        </Button>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        Ouvrir dans directement dans Google, dans un nouvel onglet.
                    </HoverCardContent>
                </HoverCard>
            )}
            <HoverCard>
                <HoverCardTrigger>
                    <Button variant="ghost" onClick={() => selectFile(file)} className="no-padding">
                        <FaArrowRightFromBracket />
                    </Button>
                </HoverCardTrigger>
                <HoverCardContent>
                    Ouvrir le fichier en mode intégré à la page. Synchroniser les données avec
                </HoverCardContent>
            </HoverCard>
        </div>
    );
}
