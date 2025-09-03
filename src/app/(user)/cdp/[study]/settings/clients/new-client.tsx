import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { InputFormElement } from '@/components/meta-components/form/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { reloadWindow } from '@/lib/utils';

import { newStudyClient } from './actions';
import { clientFormSchema, ClientFormType } from './schema';

function NewStudyClientForm({ onSubmit }: { onSubmit: (values: ClientFormType) => void }) {
    const form = useForm<ClientFormType>({
        resolver: zodResolver(clientFormSchema),
    });

    return (
        <>
            <FormProvider {...form}>
                <form className="space-y-main py-main">
                    <InputFormElement
                        className="mb-0"
                        form={form}
                        label="Nom de l'emploi"
                        name="job"
                    />
                    <InputFormElement form={form} label="Prénom" name="firstName" />
                    <InputFormElement form={form} label="Nom de famille" name="lastName" />
                </form>
            </FormProvider>
            <Button
                type="button"
                className="w-full"
                onClick={(e) => {
                    e.preventDefault();
                    form.handleSubmit(onSubmit)();
                }}
            >
                Valider
            </Button>
        </>
    );
}

export function NewStudyClientDialog({
    studyId,
    clientAddOpen,
    setClientAddOpen,
}: {
    studyId: string;
    clientAddOpen: boolean;
    setClientAddOpen: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <Dialog open={clientAddOpen} onOpenChange={setClientAddOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Nouveau client</DialogTitle>
                    <NewStudyClientForm
                        onSubmit={(client) =>
                            newStudyClient(studyId, client).then(() => reloadWindow())
                        }
                    />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
