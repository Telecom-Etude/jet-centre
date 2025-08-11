import { Dispatch, SetStateAction, useState } from 'react';
import { FaEye, FaPencil, FaTrash } from 'react-icons/fa6';

import { IconButton } from '@/components/buttons';
import { LoadingFullStops } from '@/components/loading';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { COMPANY_SIZES, DOMAINS } from '@/db/types';
import { personName, reloadWindow } from '@/lib/utils';

import { removeStudyClient } from './actions';
import { EditClientDialog } from './edit-client';
import { ClientFormType } from './schema';

interface ViewClientDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    client: ClientFormType;
}

function ViewClientDialog({ isOpen, setIsOpen, client }: ViewClientDialogProps) {
    return (
        <Dialog open={isOpen} onOpenChange={() => setIsOpen((isOpen) => !isOpen)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{personName(client)}</DialogTitle>
                    <div className="grid grid-cols-2">
                        <p>Métier</p>
                        <p>{client.job}</p>
                        <p>Email</p>
                        <p>{client.email || 'Inconnu'}</p>
                        <p>Numéro de téléphone</p>
                        <p>{client.number || 'Inconnu'}</p>
                        <p>Adresse</p>
                        <p>
                            {client.address === undefined
                                ? 'Inconnue'
                                : `${client.address.number} ${client.address.street}, ${client.address.postalCode}, ${client.address.city}, ${client.address.country}`}
                        </p>
                    </div>
                    {client.company === undefined ? (
                        <p>Entreprise non spécifiée</p>
                    ) : (
                        <>
                            <Separator />
                            <h2>Son entreprise</h2>
                            <div className="grid grid-cols-2">
                                <p>Nom</p>
                                <p>{client.company.name}</p>
                                <p>Taille</p>
                                <p>
                                    {client.company.size === undefined
                                        ? 'Inconnu'
                                        : COMPANY_SIZES[client.company.size].display}
                                </p>
                                <p>CA</p>
                                <p>{client.company.ca || 'Inconnu'}</p>
                                <p>Domaines</p>
                                <div>
                                    {client.company.domains.map((domain, i) => (
                                        <p key={i}>{DOMAINS[domain].display}</p>
                                    ))}
                                </div>
                                <p>Adresse</p>
                                <p>
                                    {client.company.address === undefined
                                        ? 'Inconnue'
                                        : `${client.company.address.number} ${client.company.address.street}, ${client.company.address.postalCode}, ${client.company.address.city}, ${client.company.address.country}`}
                                    ,
                                </p>
                            </div>
                        </>
                    )}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

interface DeleteClientDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    studyClientId: string;
}

function DeleteClientDialog({ isOpen, setIsOpen, studyClientId }: DeleteClientDialogProps) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <AlertDialog open={isOpen} onOpenChange={() => setIsOpen((isOpen) => !isOpen)}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Confirmer la suppression du client</AlertDialogTitle>
                    <AlertDialogDescription>
                        Ce client sera enlevé de cette étude. Il existera toujours dans la base si
                        vous désirez l&apos;ajouter plus tard. Changer le client risque de corrompre
                        certaines données si l&apos;étude est trop avancée.
                    </AlertDialogDescription>
                    {isLoading ? (
                        <div className="w-full items-center flex justify-center">
                            <LoadingFullStops />
                        </div>
                    ) : (
                        <div className="w-full items-center flex justify-between pt-4">
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                Annuler la suppression
                            </Button>
                            <Button
                                variant="default"
                                onClick={() => {
                                    setIsLoading(true);
                                    removeStudyClient(studyClientId).then(() => reloadWindow());
                                }}
                            >
                                Confirmer la suppression
                            </Button>
                        </div>
                    )}
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export function DisplayStudyClient({ client }: { client: ClientFormType }) {
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const studyClientId: string | undefined = client.studyClientId;

    return (
        <div className="flex justify-between items-center border rounded-md pl-2 border-input">
            {studyClientId === undefined ? (
                <p>Failed to load client</p>
            ) : (
                <>
                    <p>{personName(client)}</p>
                    <div>
                        <IconButton
                            hoverContent="See client information"
                            Icon={FaEye}
                            onClick={() => setIsViewOpen(true)}
                        />
                        <IconButton
                            hoverContent="Update client infromation"
                            onClick={() => setIsEditorOpen(true)}
                            Icon={FaPencil}
                        />
                        <IconButton
                            hoverContent="Remove client from study"
                            Icon={FaTrash}
                            onClick={() => setIsDeleteOpen(true)}
                        />
                    </div>
                    <DeleteClientDialog
                        isOpen={isDeleteOpen}
                        setIsOpen={setIsDeleteOpen}
                        studyClientId={studyClientId}
                    />
                    <EditClientDialog
                        isOpen={isEditorOpen}
                        setIsOpen={setIsEditorOpen}
                        client={client}
                    />
                    <ViewClientDialog
                        isOpen={isViewOpen}
                        setIsOpen={setIsViewOpen}
                        client={client}
                    />
                </>
            )}
        </div>
    );
}
