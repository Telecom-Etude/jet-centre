'use client';

import Link from 'next/link';
import { useState } from 'react';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import { subscribePerson } from './actions';
import { MriSubscriptionForm } from './form';
import { MriSubscriptionType } from './schema';
import { FoundPerson, SubscribePersonReturn, SubscribePersonStatus } from './types';

export function Inner() {
    const [serverData, setServerData] = useState<SubscribePersonReturn | undefined>();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState<undefined | MriSubscriptionType>();

    const updateServer = (values: MriSubscriptionType, person?: FoundPerson) => {
        setFormValues(formValues);
        setLoading(true);
        setServerData(undefined);
        subscribePerson(values, person).then((data) => {
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
                                if (!data || !data.server.person.email) return;
                                updateServer(
                                    { ...data.client, email: data.server.person.email },
                                    data.server.person
                                );
                            }}
                        >
                            Continuer avec {getDataUnchecked()?.server.person.email}
                        </AlertDialogAction>
                        <AlertDialogAction
                            onClick={() => {
                                const data = getDataUnchecked();
                                if (!data) return;
                                updateServer(data.client, data.server.person);
                            }}
                        >
                            Continuer avec {getDataUnchecked()?.client.email}
                        </AlertDialogAction>
                        <AlertDialogAction asChild>
                            <Link href="mailto:info@telecom-etude.fr">
                                Ce n&apos;est pas mon email. Contacter la DSI.
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
