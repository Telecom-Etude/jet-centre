'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { UserAvatar } from '@/components/ui/user-avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface UserDropdownMenuProps {
    username: string;
}

export const UserDropdownMenu = ({ username }: UserDropdownMenuProps) => {
    const [open, setOpen] = useState(false);

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <div className="w-full">
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="secondary"
                        className="w-full justify-between rounded-lg hover:bg-accent h-auto"
                    >
                        <span className="font-medium">{username}</span>
                        <UserAvatar />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="start"
                    className="w-[--radix-popper-anchor-width] bg-background rounded-lg p-0 flex flex-col [&>*]:px-2 [&>*]:py-1"
                    sideOffset={8}
                >
                    <Button
                        variant="ghost"
                        className="w-full text-left justify-start rounded-none"
                        onClick={() => setOpen(false)}
                    >
                        Profile
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full text-left justify-start rounded-none"
                        onClick={() => setOpen(false)}
                    >
                        Settings
                    </Button>
                    <Button
                        variant="destructive"
                        className="w-full text-left justify-start rounded-none"
                        onClick={() => setOpen(false)}
                    >
                        Log out
                    </Button>
                </DropdownMenuContent>
            </div>
        </DropdownMenu>
    );
};
