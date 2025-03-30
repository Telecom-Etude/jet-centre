'use client';

/**
 * Page rendered when a thrown error wasn't caught.
 *
 * @file error.tsx
 *
 */

import { LogoBird } from '@/components/logo/logo';

export default function Error() {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-main">
            <LogoBird />
            <h1 className="text-3xl">500 - Internal error</h1>
            <p>Veuillez rafraîchir la page pour réessayer.</p>
            <p>Merci de signaler ce bug au pôle info, en faisant en Ticket SOS.</p>
        </div>
    );
}
