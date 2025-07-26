'use client';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import { useState } from 'react';
import { subscribePerson } from './actions';
import { SubscribePersonReturn, SubscribePersonStatus } from './types';
import { MriSubscriptionType } from './schema';
import { MriSubscriptionForm } from './form';
import Link from 'next/link';

export function Inner() {
    const [serverData, setServerData] = useState<SubscribePersonReturn | undefined>();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState<undefined | MriSubscriptionType>();

    const updateServer = (values: MriSubscriptionType, personId?: string) => {
        setFormValues(formValues);
        setLoading(true);
        setServerData(undefined);
        subscribePerson(values, personId).then((data) => {
            setServerData(data);
            setLoading(false);
        });
    };

    const getDataUnchecked = () => {
        if (serverData?.status === SubscribePersonStatus.WrongEmail && formValues !== undefined)
            return { server: serverData, client: formValues };
    };

    return (
        <>
            <AlertDialog open={serverData?.status === SubscribePersonStatus.WrongEmail}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Vous avez déjà renseigné une adresse</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction
                            onClick={() => {
                                const data = getDataUnchecked();
                                if (!data) return;
                                updateServer(
                                    { ...data.client, email: data.server.email },
                                    data.server.id
                                );
                            }}
                        >
                            Continuer avec {getDataUnchecked()?.server.email}
                        </AlertDialogAction>
                        <AlertDialogAction
                            onClick={() => {
                                const data = getDataUnchecked();
                                if (!data) return;
                                updateServer(data.client, data.server.id);
                            }}
                        >
                            Continuer avec {getDataUnchecked()?.client.email}
                        </AlertDialogAction>
                        <AlertDialogAction asChild>
                            <Link href="mailto:info@telecom-etude.fr">
                                Ce n'est pas mon email. Contacter la DSI.
                            </Link>
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <MriSubscriptionForm
                subscribePerson={updateServer}
                disabled={loading || serverData !== undefined}
            />
        </>
    );
}
