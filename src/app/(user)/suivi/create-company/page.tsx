'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { LoadingFullStops } from '@/components/loading';
import Link from 'next/link';

enum CreationStatus {
    Ok,
    Checking,
    NoName,
    Exists,
    Creating,
    DbFailed,
    Redirecting,
}

const STATUS_INFOS: Record<CreationStatus, { pending?: boolean; border?: string; error?: string }> =
    {
        [CreationStatus.Ok]: {},
        [CreationStatus.Checking]: { pending: true },
        [CreationStatus.NoName]: { border: 'border-destructive', error: 'Merci de donner un nom.' },
        [CreationStatus.Exists]: { border: 'border-primary' },
        [CreationStatus.Creating]: { pending: true },
        [CreationStatus.DbFailed]: {
            border: 'border-destructive',
            error: "Une erreur inattendue s'est produite. Merci de faire un ticket SOS.",
        },
        [CreationStatus.Redirecting]: { pending: true },
    };

export default function Page() {
    const [status, setCreationStatus] = useState(CreationStatus.Ok);
    const [name, setName] = useState<string | undefined>();
    const [id, setId] = useState<string | undefined>();

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
                        <Button className="px-main">Créer</Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}
