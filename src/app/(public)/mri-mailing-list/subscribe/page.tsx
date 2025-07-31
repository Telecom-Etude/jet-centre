import { LogoBird } from '@/components/logo/logo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Inner } from '././inner';

export default function Page() {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-main">
            <LogoBird />
            <Card>
                <CardHeader className="space-y-main">
                    <CardTitle className="font-semi text-primary text-center">
                        S&apos;abonner aux MRIs
                    </CardTitle>
                    <CardDescription className="text-center italic">
                        Inscrivez-vous à la liste de diffusion de Telecom Etude pour recevoir toutes
                        les offres de mission !
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col space-y-main">
                    <Inner />
                </CardContent>
            </Card>
        </div>
    );
}
