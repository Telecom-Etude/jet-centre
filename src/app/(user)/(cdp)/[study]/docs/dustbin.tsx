import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { getMissionFiles, trashFile } from '@/drive/files';
import { reloadWindow } from './file-explorer';
import { useEffect, useState } from 'react';
import { DriveFile } from '@/drive/types';

export function DustbinDialog({
    open,
    setOpen,
    study,
}: {
    study: string;
    open: boolean;
    setOpen: (open: boolean) => void;
}) {
    const [files, setFiles] = useState<DriveFile[] | undefined | null>(undefined);

    useEffect(() => {
        getMissionFiles(study, true).then((files) => setFiles(files));
    }, [study]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Récupérer des fichiers supprimés</DialogTitle>
                </DialogHeader>
                {files === undefined ? (
                    <p>Loading...</p>
                ) : files === null ? (
                    <p>Une erreur s&apos;est produite. Merci de signaler cette erreur.</p>
                ) : files.length === 0 ? (
                    <p>Aucun fichier supprimé depuis ce dossier</p>
                ) : (
                    <div className="flex flex-col gap-4">
                        {files.map((file, i) => (
                            <Button
                                variant="outline"
                                key={i}
                                onClick={() => {
                                    trashFile(file.id, false).then(() => {
                                        setFiles(undefined);
                                        reloadWindow();
                                    });
                                }}
                            >
                                {file.name}
                            </Button>
                        ))}
                    </div>
                )}
                <DialogClose>Annuler</DialogClose>
            </DialogContent>
        </Dialog>
    );
}
