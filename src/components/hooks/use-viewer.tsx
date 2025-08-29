// app/viewer-context.tsx
'use client';

import { createContext, useContext } from 'react';

import { ViewerResult } from '@/data/user';

const ViewerContext = createContext<ViewerResult | null>(null);

export function ViewerProvider({
    children,
    value,
}: {
    children: React.ReactNode;
    value: ViewerResult;
}) {
    return <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>;
}

export function useViewer() {
    const ctx = useContext(ViewerContext);
    if (!ctx) {
        throw new Error('useViewer must be used within a ViewerProvider');
    }
    return ctx;
}
