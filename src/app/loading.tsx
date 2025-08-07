'use client';

/**
 * Page rendered when a thrown error wasn't caught.
 *
 * @file error.tsx
 *
 */

import { useEffect, useState } from 'react';

import { ErrorPage } from '@/components/error';

const DELAY_TO_SHOW_LOADING_PAGE = 0; // milliseconds

export default function Loading() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), DELAY_TO_SHOW_LOADING_PAGE);
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;
    return <ErrorPage title="Loading..." />;
}
