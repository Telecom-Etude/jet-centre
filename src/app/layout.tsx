import './globals.css';
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import { NextFont } from 'next/dist/compiled/@next/font';

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
            style: 'normal'
        },
        {
            path: '../fonts/Avenir/Avenir-Demi.otf',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../fonts/Avenir/Avenir-DemiIt.otf',
            weight: '600',
            style: 'italic'
        },
        {
            path: '../fonts/Avenir/Avenir-It.otf',
            weight: '400',
            style: 'italic'
        },
        {
            path: '../fonts/Avenir/Avenir-Regular.otf',
            weight: '400',
            style: 'normal'
        }
    ]
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
    children
}: Readonly<{
    children: ReactNode;
}>): Promise<ReactNode> {
    return (
        <html lang="fr">
            <body className={cn(avenir.className, 'dark h-dvh')}>{children}</body>
        </html>
    );
}
