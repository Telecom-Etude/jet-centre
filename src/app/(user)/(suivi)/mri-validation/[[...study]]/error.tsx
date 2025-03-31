'use client';

/**
 * Page rendered when a thrown error wasn't caught.
 *
 * @file error.tsx
 *
 */

import { ErrorPage } from '@/components/error';

export default function Error() {
    return (
        <ErrorPage title="500 - Internal Error">
            <p>Veuillez rafraîchir la page pour réessayer.</p>
            <p>Merci de signaler ce bug au pôle info, en faisant en Ticket SOS.</p>
        </ErrorPage>
    );
}
