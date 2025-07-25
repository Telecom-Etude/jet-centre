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

enum Status {
    Ok,
    None,
    Checking,
    Redirecting,
    Exists,
}

export default function Page() {
    const [status, setStatus] = useState(Status.Ok);
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
                        className={
                            status === Status.Exists
                                ? 'border-primary'
                                : status === Status.None
                                  ? 'border-destructive'
                                  : 'border-border'
                        }
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {(status === Status.None && (
                        <p className="text-sm text-center text-destructive">
                            Merci de donner un nom à l'entreprise pour continuer.
                        </p>
                    )) ||
                        (status === Status.Exists && (
                            <Link
                                href={`edit-company/${id}`}
                                className="text-sm text-center text-primary"
                            >
                                Une entreprise avec ce nom existe déjà, cliquez ici pour la modifier
                            </Link>
                        ))}
                </CardContent>
                <CardFooter className="flex justify-center">
                    {status === Status.Checking || status === Status.Redirecting ? (
                        <LoadingFullStops />
                    ) : (
                        <Button className="px-main">Créer</Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}
