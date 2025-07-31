'use client';

import { useState } from 'react';

import { Input } from '@/components/ui/input';

import { getPosition, updatePosition } from './users';
import { useSession } from 'next-auth/react';

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
                <Input
                    defaultValue={uiPosition || 'Unset'}
                    onBlur={async (e) => {
                        setStatus(Status.Saving);
                        await updatePosition(adminId, e.target.value);
                        setStatus(Status.Checking);
                        const dbPosition = await getPosition(adminId);
                        if (dbPosition) {
                            setUiPosition(dbPosition);
                            setStatus(Status.Ok);
                            await update({ position });
                        } else {
                            setStatus(Status.Error);
                        }
                    }}
                />
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
