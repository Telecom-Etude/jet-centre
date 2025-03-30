import './globals.css';
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import { NextFont } from 'next/dist/compiled/@next/font';
import { TopBar } from '@/components/navigation/topbar';
import { SidebarApp } from '@/components/navigation/sidebar/sidebar-app';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { SessionProvider } from 'next-auth/react';
import { get_user_sidebar_info } from '@/actions/cdp';
import { auth } from '@/actions/auth';
import { Session } from 'next-auth';

/**
 * Font used by the website, this is the font that is part of our corporate identity. This font mus't be modified.
 *
 * @type {NextFont}
 */
const avenir: NextFont = localFont({
    src: [
        {
            path: '../fonts/Avenir/Avenir-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/Avenir/Avenir-Demi.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../fonts/Avenir/Avenir-DemiIt.otf',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../fonts/Avenir/Avenir-It.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../fonts/Avenir/Avenir-Regular.otf',
            weight: '400',
            style: 'normal',
        },
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
}: Readonly<{
    children: ReactNode;
}>): Promise<ReactNode> {
    const session = await auth();

    return (
        <html lang="fr">
            <body className={cn(avenir.className, 'dark h-dvh')}>
                {session ? <AdminSideBar session={session}>{children}</AdminSideBar> : children}
            </body>
        </html>
    );
}

async function AdminSideBar({ children, session }: { children: ReactNode; session: Session }) {
    return (
        <SessionProvider>
            <SidebarProvider>
                <SidebarApp
                    userInfo={await get_user_sidebar_info(session.user.email || undefined)}
                />
                <SidebarInset>
                    <header className="flex px-4 p-2 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
                        <TopBar />
                    </header>
                    <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <div className="min-h-0 flex-1">{children}</div>
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </SessionProvider>
    );
}
