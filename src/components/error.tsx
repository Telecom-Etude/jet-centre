import { ReactNode } from 'react';

import {
    AlertDialog,
    AlertDialogDescription,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import { LogoBird } from './logo/logo';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

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

interface DangerousErrorProps extends ErrorPageProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function DangerousError({ title, children, open, onOpenChange }: DangerousErrorProps) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>
                <div className="h-full w-full flex flex-col items-center justify-center gap-main">
                    <LogoBird />
                    <p className="text-xl">
                        Ceci est une erreur grave, merci de la signaler au plus vite.
                    </p>
                    {children}
                </div>
            </AlertDialogDescription>
        </AlertDialog>
    );
}
