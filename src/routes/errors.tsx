import { ReactNode } from 'react';

import { MIDDLEWARE_ERRORS, ROUTES } from '.';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export interface ErrorDisplayInformation {
    title: string;
    text: string;
    children?: ReactNode;
}

/**
 * Get the information to display on the error page for each of the middleware errors that can occur.
 *
 * This content will be display on the page at {ERROR_PREFIX}/{error}.
 * */
export function getErrorDisplayInformation(error: string): ErrorDisplayInformation {
    switch (error) {
        case MIDDLEWARE_ERRORS.unauthorised:
            return {
                title: "Vous n'êtes pas autotisés à accéder à cette page.",
                text: "Merci de contacter le pôle info s'il vous manque des permissions.",
            };
        case MIDDLEWARE_ERRORS.invalidPosition:
            return {
                title: 'Votre rôle dans la JE a été mal défini.',
                text: "Ceci n'est pas normal, merci de vous déconnecter/reconnecter. Si vous voyez toujours cette erreur, merci de contacter le pôle info au plus vite!",
                children: (
                    <Button asChild>
                        <Link href={ROUTES.signOut}>Déconnectez-vous</Link>
                    </Button>
                ),
            };
        default:
            return {
                title: 'Erreur inconnue',
                text: "Une erreur inconnue s'est produite. Contactez le pôle info!",
            };
    }
}
