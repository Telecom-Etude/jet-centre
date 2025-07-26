'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { LoadingFullStops } from '@/components/loading';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import { getCompanyByName, createCompanyWithName } from './actions';

enum CreationStatus {
    Ok,
    NoName,
    Checking,
    CheckingFailed,
    Exists,
    Creating,
    CreationFailed,
    Redirecting,
}

const STATUS_INFOS: Record<CreationStatus, { pending?: boolean; border?: string; error?: string }> =
    {
        [CreationStatus.Ok]: {},
        [CreationStatus.NoName]: { border: 'border-destructive', error: 'Merci de donner un nom.' },
        [CreationStatus.Checking]: { pending: true },
        [CreationStatus.CheckingFailed]: {
            border: 'border-destructive',
            error: "Une erreur inattendue s'est produite lors de la vérification du nom. Merci de faire un ticket SOS.",
        },
        [CreationStatus.Exists]: { border: 'border-primary' },
        [CreationStatus.Creating]: { pending: true },
        [CreationStatus.CreationFailed]: {
            border: 'border-destructive',
            error: "Une erreur inattendue s'est produite lors de la création de l'entreprise. Merci de faire un ticket SOS.",
        },
        [CreationStatus.Redirecting]: { pending: true },
    };

export default function Page() {
    const [status, setStatus] = useState(CreationStatus.Ok);
    const [name, setName] = useState<string>('');
    const [id, setId] = useState<string | undefined>();

    const router = useRouter();

    const tryCreate = () => {
        setStatus(CreationStatus.Checking);
        setId(undefined);
        if (!name) return setStatus(CreationStatus.NoName);
        getCompanyByName(name).then((id) => {
            if (id === undefined) return setStatus(CreationStatus.CheckingFailed);
            if (id !== null) {
                setId(id);
                return setStatus(CreationStatus.Exists);
            }
            createCompanyWithName(name).then((id) => {
                if (!id) return setStatus(CreationStatus.CreationFailed);
                router.push(`/suivi/edit-company/${id}`);
            });
        });
    };

    return (
        <div className="p-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-primary font-semi text-center">
                        Créer une nouvelle entreprise
                    </CardTitle>
                    <CardDescription className="italic text-center">
                        Renseigner son nom ci-dessous. Vous serez rediriger vers une page pour
                        renseigner d'avantage d'informations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Input
                        placeholder="Nom de l'entreprise"
                        className={STATUS_INFOS[status]?.border ?? 'border-border'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {(status === CreationStatus.Exists && (
                        <Link
                            href={`edit-company/${id}`}
                            className="text-sm text-center text-primary"
                        >
                            Une entreprise avec ce nom existe déjà, cliquez ici pour la modifier
                        </Link>
                    )) ||
                        (STATUS_INFOS[status].error && (
                            <p className="text-sm text-center text-destructive">
                                {STATUS_INFOS[status].error}
                            </p>
                        ))}
                </CardContent>
                <CardFooter className="flex justify-center">
                    {STATUS_INFOS[status].pending ? (
                        <LoadingFullStops />
                    ) : (
                        <Button className="px-main" onClick={tryCreate}>
                            Créer
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}
