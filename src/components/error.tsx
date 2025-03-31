import { ReactNode } from 'react';
import { LogoBird } from './logo/logo';

interface ErrorPageProps {
    title: string;
    children?: ReactNode;
}

export function ErrorPage({ title, children }: ErrorPageProps) {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-main">
            <LogoBird />
            <h1 className="text-3xl">{title}</h1>
            {children}
        </div>
    );
}
