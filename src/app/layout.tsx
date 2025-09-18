import './globals.css';
import { NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

import { ViewerProvider } from '@/components/hooks/use-viewer';
import { SidebarApp } from '@/components/navigation/sidebar/sidebar-app';
import { TopBar } from '@/components/navigation/topbar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';
import { getUserStudies, getViewer } from '@/data/user';
import { cn } from '@/lib/utils';

/**
 * Font used by the website, this is the font that is part of our corporate identity. This font mus't be modified.
 *
 * @type {NextFont}
 */
const avenir: NextFont = localFont({
    src: [
        { path: '../fonts/Avenir/Avenir-Bold.otf', weight: '700' },
        { path: '../fonts/Avenir/Avenir-Demi.otf', weight: '600' },
        { path: '../fonts/Avenir/Avenir-DemiIt.otf', weight: '600', style: 'italic' },
        { path: '../fonts/Avenir/Avenir-It.otf', weight: '400', style: 'italic' },
        { path: '../fonts/Avenir/Avenir-Regular.otf', weight: '400' },
    ],
});

/**
 * Root layout: everything of the website is rendered inside this.
 *
 * @default
 * @export
 * @async
 * @param {children: ReactNode} - children is the the component of the rendered
 * `page.tsx` corresponding to the url of the client
 * @return {Promise<ReactNode>}
 */
export default async function RootLayout({
    children,
}: {
    children: ReactNode;
}): Promise<ReactNode> {
    return (
        <html lang="fr">
            <body className={cn(avenir.className, 'h-dvh w-dvw')}>
                <AdminSideBar>{children}</AdminSideBar>
            </body>
        </html>
    );
}

async function AdminSideBar({ children }: { children: ReactNode }) {
    const viewerResult = await getViewer();

    const viewerValid = viewerResult.status == 'success';

    const initialStudies = viewerValid ? await getUserStudies(viewerResult.viewer) : [];

    return (
        <SessionProvider>
            {viewerValid ? (
                <ViewerProvider value={viewerResult}>
                    <SidebarProvider>
                        <Toaster richColors position="bottom-right" closeButton />
                        <SidebarApp initialStudies={initialStudies} />
                        <SidebarInset className="flex h-dvh w-full flex-col">
                            <header className="sticky top-0 flex w-full items-center gap-2 p-2 px-4 bg-background">
                                <TopBar />
                            </header>
                            <main className="flex flex-1 flex-col gap-4 overflow-auto p-4 pt-0">
                                <div className="flex-1 min-h-0">{children}</div>
                            </main>
                        </SidebarInset>
                    </SidebarProvider>
                </ViewerProvider>
            ) : (
                <main className="flex flex-1 flex-col gap-4 overflow-auto p-4 pt-0">
                    <div className="flex-1 min-h-0">{children}</div>
                </main>
            )}
        </SessionProvider>
    );
}
