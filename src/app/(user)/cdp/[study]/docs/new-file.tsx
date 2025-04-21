import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { newFileInMissionFolder } from '@/drive/files';
import { FILE_POSSIBLE_CREATION } from '@/drive/types';
import { reloadWindow } from '@/lib/utils';

import { FileExplorerDialogProps } from './utils';

export function NewFileDialog({ open, setOpen, study }: FileExplorerDialogProps) {
    const [position, setPosition] = useState<number | undefined>(undefined);
    const [missingType, setMissingType] = useState(false);
    const [missingName, setMissingName] = useState(false);
    const [name, setName] = useState('');

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Création de nouveaux fichier</DialogTitle>
                    <DialogDescription>
                        Pour cloner un template, merci d&apos;utiliser l&apos;autre menu.
                    </DialogDescription>
                </DialogHeader>
                <Input
                    className={missingName ? ' border-destructive ' : ''}
                    onChange={(e) => {
                        setName(e.target.value);
                        setMissingName(false);
                    }}
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className={missingType ? ' border-destructive ' : ''}
                            onClick={() => setMissingType(false)}
                        >
                            {position === undefined
                                ? 'Type de fichier'
                                : FILE_POSSIBLE_CREATION[position].name}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                            value={undefined}
                            onValueChange={(i) => setPosition(parseInt(i))}
                        >
                            {FILE_POSSIBLE_CREATION.map(({ name }, i) => (
                                <DropdownMenuRadioItem key={i} value={i.toString()}>
                                    {name}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className="flex gap-main">
                    <DialogClose className="w-full">Annuler</DialogClose>
                    <Button
                        type="submit"
                        className="w-full"
                        onClick={() => {
                            if (name.length === 0) {
                                setMissingName(true);
                            } else if (position === undefined) {
                                setMissingType(true);
                            } else {
                                newFileInMissionFolder(
                                    study,
                                    FILE_POSSIBLE_CREATION[position].type,
                                    name
                                ).then(() => reloadWindow());
                            }
                        }}
                    >
                        Créer
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
