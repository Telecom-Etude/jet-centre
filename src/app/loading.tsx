'use client';

/**
 * Page rendered when a thrown error wasn't caught.
 *
 * @file error.tsx
 *
 */

import { ErrorPage } from '@/components/error';

export default function Loading() {
    return <ErrorPage title="Loading..." />;
}
