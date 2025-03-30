/**
 * Page rendered when no page was found. This is a default 404 page.
 *
 * @file not-found.tsx
 */

import { LogoBird } from '@/components/logo/logo';

export default function NotFound() {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-main">
            <LogoBird />
            <h1 className="text-3xl">404 - Page Not Found</h1>
        </div>
    );
}
