'use client';

import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { getPosition, updatePosition } from './users';

interface UserEditorProps {
    adminId: string;
    email: string;
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

    return (
        <div className="bg-box-background flex items-center gap-main p-2 rounded-sm">
            <p className="w-full px-2">{email}</p>
            {status === Status.Ok ? (
                <Input
                    defaultValue={uiPosition || 'Unset'}
                    onBlur={(e) => {
                        setStatus(Status.Saving);
                        updatePosition(adminId, e.target.value).then(() => {
                            setStatus(Status.Checking);
                            getPosition(adminId).then((position) => {
                                if (position) {
                                    setUiPosition(position);
                                    setStatus(Status.Ok);
                                } else {
                                    setStatus(Status.Error);
                                }
                            });
                        });
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
