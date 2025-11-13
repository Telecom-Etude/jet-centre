'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getPositionName, getValidPositions } from '@/data/positions';
import { Gender } from '@/types/misc';

import { getPosition, updatePosition } from './users';

interface UserEditorProps {
    adminId: string;
    email: string | null;
    position: string | null;
}

enum Status {
    Ok,
    Saving,
    Checking,
    Error,
}

export function UserEditor({ adminId, email, position }: UserEditorProps) {
    const [uiPosition, setUiPosition] = useState(position ?? undefined);
    const [status, setStatus] = useState(Status.Ok);
    const { update } = useSession();

    return (
        <div className="bg-box-background flex items-center gap-main p-2 rounded-sm">
            <p className="w-full px-2">{email || 'no-email'}</p>
            {status === Status.Ok ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="w-full px-2 justify-start" variant="outline">
                            {getPositionName(uiPosition, Gender.Other).name}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        {getValidPositions().map((position, i) => (
                            <DropdownMenuItem
                                key={i}
                                onSelect={async () => {
                                    setStatus(Status.Saving);
                                    await updatePosition(adminId, position);
                                    setStatus(Status.Checking);
                                    const dbPosition = await getPosition(adminId);
                                    if (dbPosition !== undefined) {
                                        setUiPosition(dbPosition ?? undefined);
                                        setStatus(Status.Ok);
                                        await update({ position });
                                    } else {
                                        setStatus(Status.Error);
                                    }
                                }}
                            >
                                {getPositionName(position, Gender.Other).name}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : status === Status.Saving ? (
                <p className="w-full py-2">Saving...</p>
            ) : status === Status.Checking ? (
                <p className="w-full py-2">Checking...</p>
            ) : (
                <p className="w-full py-2">An error occurred.</p>
            )}
        </div>
    );
}
