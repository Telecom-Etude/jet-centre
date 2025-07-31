'use client';

import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { UserAvatar } from '@/components/ui/user-avatar';
import { ROUTES } from '@/routes';

interface UserDropdownMenuProps {
    isMobile: boolean;
    isOpen: boolean;
}

export const UserDropdownMenu = ({ isMobile, isOpen }: UserDropdownMenuProps) => {
    const session = useSession();
    const avatarUrl = session.data?.user.image ?? null;
    const username = session.data?.user.name ?? null;

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            variant="secondary"
                            className="w-full items-center flex justify-between"
                        >
                            {isOpen && <span className="font-medium">{username}</span>}
                            <UserAvatar round={isOpen} avatarUrl={avatarUrl} />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-background"
                        side={isMobile ? 'bottom' : 'right'}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <UserAvatar avatarUrl={avatarUrl} />
                                {isOpen && <span className="font-medium">{username}</span>}
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="space-x-2 cursor-pointer focus:text-primary-foreground"
                            asChild
                        >
                            <Link href={ROUTES.signOut}>
                                <LogOut />
                                <p>Log out</p>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
};
