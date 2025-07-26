import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { LoadingFullStops } from '@/components/loading';
import { DropdownManyFormElement } from '@/components/meta-components/form/dropdownMany';
import { DropdownSingleFormElement } from '@/components/meta-components/form/dropdownSingle';
import { InputFormElement } from '@/components/meta-components/form/input';
import { AlertDialogTitle } from '@/components/ui/alert-dialog';
import { AlertDialog, AlertDialogCancel, AlertDialogContent } from '@/components/ui/alert-dialog';
import { AlertDialogFooter, AlertDialogHeader } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { COMPANY_SIZE_NAMES, COMPANY_SIZES, DOMAIN_NAMES, DOMAINS } from '@/db/types';
import { dbg, personName, reloadWindow } from '@/lib/utils';

import { editStudyClient } from './actions/edit-client';
import { clientFormSchema, ClientFormType } from './schema';

interface EnableBoxProps {
    label: string;
    onCheckedChange: (value: boolean) => void;
    checked: boolean;
}

function EnableBox({ label, onCheckedChange, checked }: EnableBoxProps) {
    return (
        <div className="flex items-center gap-x-2">
            <Checkbox onCheckedChange={onCheckedChange} checked={checked} />
            <p>{label}</p>
        </div>
    );
}

interface EditClientFormProps {
    client: ClientFormType;
    onSubmit: (values: ClientFormType) => void;
    isLoading: boolean;
}

function EditClientForm({ onSubmit, client, isLoading }: EditClientFormProps) {
    const form = useForm<ClientFormType>({
        resolver: zodResolver(clientFormSchema),
        defaultValues: client,
    });

    dbg(client, '=============== editing client ==============');

    const [editCompany, setEditCompany] = useState(!!client.address?.id);
    const [editAddress, setEditAddress] = useState(!!client.company?.id);
    const [editCompanyAddress, setEditCompanyAddress] = useState(!!client.company?.address?.id);

    return (
        <>
            <FormProvider {...form}>
                <form className="grid grid-cols-2 gap-10">
                    <div className="space-y-main py-main">
                        <h2>Informations sur le client</h2>
                        <InputFormElement form={form} label="Prénom" name="firstName" />
                        <InputFormElement form={form} label="Nom de famille" name="lastName" />
                        <InputFormElement
                            className="mb-0"
                            form={form}
                            label="Nom de l'emploi"
                            name="job"
                        />
                        <InputFormElement form={form} label="Email" name="email" />
                        <InputFormElement form={form} label="Numéro de téléphone" name="number" />
                        <Separator />
                        <h2>Addresse du client</h2>
                        <EnableBox
                            checked={editAddress}
                            onCheckedChange={setEditAddress}
                            label="Addresse du client"
                        />
                        {editAddress && (
                            <>
                                <div className="grid-cols-5 grid gap-x-main">
                                    <InputFormElement
                                        form={form}
                                        className="mb-0"
                                        label="N°"
                                        name="address.number"
                                    />
                                    <InputFormElement
                                        className="col-span-4 mb-0"
                                        form={form}
                                        label="Rue"
                                        name="address.street"
                                    />
                                </div>
                                <div className="grid-cols-2 grid gap-x-main">
                                    <InputFormElement
                                        className="mb-0"
                                        form={form}
                                        label="Ville"
                                        name="address.city"
                                    />
                                    <InputFormElement
                                        className="mb-0"
                                        form={form}
                                        label="Code postal"
                                        name="address.zipCode"
                                    />
                                </div>
                                <InputFormElement form={form} label="Pays" name="address.country" />
                            </>
                        )}
                    </div>
                    <div className="space-y-main py-main">
                        <h2>L&apos;entreprise</h2>
                        <EnableBox
                            checked={editCompany}
                            onCheckedChange={setEditCompany}
                            label="Entreprise du client"
                        />
                        {editCompany && (
                            <>
                                <InputFormElement form={form} label="Nom" name="company.name" />
                                <InputFormElement
                                    form={form}
                                    label="Chiffre d'Affaire"
                                    name="company.ca"
                                    type="number"
                                />
                                <DropdownSingleFormElement
                                    form={form}
                                    label="Taille"
                                    name="company.size"
                                    values={COMPANY_SIZE_NAMES}
                                    displayValue={(size) =>
                                        size ? COMPANY_SIZES[size].display : ''
                                    }
                                />
                                <DropdownManyFormElement
                                    form={form}
                                    label="Domaines"
                                    name="company.domains"
                                    values={DOMAIN_NAMES}
                                    displayValue={(domain) =>
                                        domain ? DOMAINS[domain].display : ''
                                    }
                                />
                                <Separator />
                                <h2>Adresse de l&apos;entreprise</h2>
                                <EnableBox
                                    checked={editCompanyAddress}
                                    onCheckedChange={setEditCompanyAddress}
                                    label="Adresse de l'entreprise"
                                />
                                {editCompanyAddress && (
                                    <>
                                        <div className="grid-cols-5 grid gap-x-main">
                                            <InputFormElement
                                                form={form}
                                                className="mb-0"
                                                label="N°"
                                                name="company.address.number"
                                            />
                                            <InputFormElement
                                                className="col-span-4 mb-0"
                                                form={form}
                                                label="Rue"
                                                name="company.address.street"
                                            />
                                        </div>
                                        <div className="grid-cols-2 grid gap-x-main">
                                            <InputFormElement
                                                className="mb-0"
                                                form={form}
                                                label="Ville"
                                                name="company.address.city"
                                            />
                                            <InputFormElement
                                                className="mb-0"
                                                form={form}
                                                label="Code postal"
                                                name="company.address.zipCode"
                                            />
                                        </div>
                                        <InputFormElement
                                            form={form}
                                            label="Pays"
                                            name="company.address.country"
                                        />
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </form>
            </FormProvider>
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <LoadingFullStops />
                </div>
            ) : (
                <Button
                    type="button"
                    className="w-full"
                    onClick={(e) => {
                        e.preventDefault();
                        form.handleSubmit((values) => {
                            if (!editAddress) values.address = undefined;
                            if (!editCompany) values.company = undefined;
                            if (values.company && !editCompanyAddress)
                                values.company.address = undefined;
                            onSubmit(values);
                        })();
                    }}
                >
                    Valider
                </Button>
            )}
        </>
    );
}

interface EditClientDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    client: ClientFormType;
}

export function EditClientDialog({ isOpen, setIsOpen, client }: EditClientDialogProps) {
    const clientId = client.clientId;
    const [isLoading, setIsLoading] = useState(false);

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogContent className="emin-w-[900px]">
                <AlertDialogHeader>
                    <AlertDialogTitle>Edition de {personName(client)}</AlertDialogTitle>
                </AlertDialogHeader>
                {clientId === undefined ? (
                    <p>Erreur lors du chargement du client</p>
                ) : (
                    <EditClientForm
                        client={client}
                        onSubmit={(newClientData) => {
                            setIsLoading(true);
                            editStudyClient(clientId, newClientData).then(() => reloadWindow());
                        }}
                        isLoading={isLoading}
                    />
                )}
                <AlertDialogFooter>
                    <AlertDialogCancel className="w-full">Annuler</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
