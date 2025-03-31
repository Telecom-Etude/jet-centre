/**
 * Page rendered when no page was found. This is a default 404 page.
 *
 * @file not-found.tsx
 */

import { ErrorPage } from '@/components/error';

export default function NotFound() {
    return ErrorPage({ title: '404 - Page Not Found' });
}
