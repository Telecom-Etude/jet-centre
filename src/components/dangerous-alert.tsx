'use client';

import { ReactNode } from 'react';

import { LogoBird } from './logo/logo';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTitle,
} from './ui/alert-dialog';

interface DangerousErrorProps {
    open: boolean;
    title: string;
    children?: ReactNode;
    onOpenChange: (open: boolean) => void;
}

export function DangerousError({ title, children, open, onOpenChange }: DangerousErrorProps) {
    return (
        <AlertDialog defaultOpen={false} open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent className="flex text-center flex-col items-center justify-center gap-main">
                <AlertDialogTitle className="text-center">{title}</AlertDialogTitle>
                <LogoBird />
                <p>Ceci est une erreur grave, merci de la signaler au plus vite.</p>
                {children}
                <AlertDialogCancel className="w-full" onClick={() => onOpenChange(false)}>
                    Ok
                </AlertDialogCancel>
            </AlertDialogContent>
        </AlertDialog>
    );
}
