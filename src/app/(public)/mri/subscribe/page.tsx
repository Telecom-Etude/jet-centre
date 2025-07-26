import Link from 'next/link';

import { LogoBird } from '@/components/logo/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { Inner } from '././inner';

export default function Page() {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-main">
            <LogoBird />
            <Card>
                <CardHeader className="space-y-main">
                    <CardTitle className="font-semi text-primary text-center">
                        S'abonner aux MRIs
                    </CardTitle>
                    <CardDescription className="text-center italic">
                        Inscrivez-vous à la liste de diffusion de Telecom Etude pour recevoir toutes
                        les offres de mission !
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col space-y-main">
                    <Inner />
                    <div className="flex items-center space-x-2 w-full">
                        <Separator className="bg-primary flex-1" />
                        <p className="text-primary">ou</p>
                        <Separator className="bg-primary flex-1" />
                    </div>
                    <Button variant="outline" asChild className="m-auto">
                        <Link href="/404">S'inscrire avec le SSO de Télécom Paris</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
