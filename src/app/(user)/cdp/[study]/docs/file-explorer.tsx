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
import { Button } from '@/components/ui/button';
import { DriveFile, googleUrl } from '@/drive/types';
import { useState } from 'react';
import { FaArrowRightFromBracket, FaArrowUpFromBracket, FaPencil, FaTrash } from 'react-icons/fa6';
import Link from 'next/link';
import { trashFile, renameFile } from '@/drive/files';
import { Input } from '@/components/ui/input';
import { TemplateCopyDialog } from './clone-template';
import { DustbinDialog } from './dustbin';
import { NewFileDialog } from './new-file';
import { reloadWindow } from '@/lib/utils';

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
                        <BoxButtonTrash onClick={() => setDustbinOpen(true)} />
                        <BoxButtonReload onClick={() => loadFiles()} />
                        <BoxButtonTemplate onClick={() => setTemplateDialogOpen(true)} />
                        <BoxButtonPlus onClick={() => setNewFileOpen(true)} />
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
        <div className="flex items-center space-x-main">
            <Button
                variant="ghost"
                onClick={() => {
                    trashFile(file.id, true).then(() => reloadWindow());
                }}
                className="w-full h-full no-padding"
            >
                <FaTrash className="w-full h-full" />
            </Button>
            <Button
                variant="ghost"
                onClick={() => enterRenameMode()}
                className="w-full h-full no-padding"
            >
                <FaPencil className="w-full h-full" />
            </Button>
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
