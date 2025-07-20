'use client';

/**
 * Page rendered when a thrown error wasn't caught.
 *
 * @file error.tsx
 *
 */

import { ErrorPage } from '@/components/error';
import { useEffect, useState } from 'react';

const DELAY_TO_SHOW_LOADING_PAGE = 500; // milliseconds

export default function Loading() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), DELAY_TO_SHOW_LOADING_PAGE);
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;
    return <ErrorPage title="Loading..." />;
}
