'use client';

import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface UserEditorProps {
    id: string;
    email: string;
    position: string | null;
}

export function UserEditor({ id, email, position }: UserEditorProps) {
    const [getPosition, setPosition] = useState(position ?? undefined);

    const updatePosition = (value: string) => {};

    return (
        <div className="bg-box-background flex items-center gap-main p-2 rounded-sm">
            <p className="w-full px-2">{email}</p>
            <Input
                defaultValue={position || 'Unset'}
                onBlur={(e) => updatePosition(e.target.value)}
            />
        </div>
    );
}
