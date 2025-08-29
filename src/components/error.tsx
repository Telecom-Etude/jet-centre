import { ReactNode } from 'react';

import { LogoBird } from './logo/logo';

interface ErrorPageProps {
    title: string;
    children?: ReactNode;
}

export function ErrorPage({ title, children }: ErrorPageProps) {
    return (
        <div className="flex w-full h-full place-items-center justify-center">
            <div className="p-main flex flex-col gap-main">
                <div className="flex flex-col items-center gap-2">
                    <LogoBird />
                    <h1 className="text-3xl">{title}</h1>
                </div>
                {children}
            </div>
        </div>
    );
}
