import { LogoBird } from '@/components/logo/logo';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { MriSubscriptionForm } from './form';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Page() {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-main">
            <LogoBird />
            <Card>
                <CardHeader>
                    <CardTitle className="font-semi text-primary text-center">
                        S'abonner aux MRIs
                    </CardTitle>
                    <CardDescription>
                        Inscrivez-vous à la liste de diffusion de Telecom Etude pour recevoir toutes
                        les offres de mission !
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col space-y-main">
                    <MriSubscriptionForm />
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
