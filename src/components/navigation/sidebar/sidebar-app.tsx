'use client';

import * as React from 'react';

import { useSidebar } from '@/components/ui/sidebar';
import {
    Sidebar,
    SidebarHeader,
    SidebarSeparator,
    SidebarContent,
    SidebarFooter,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { StudyWithCode } from '@/types/user';

import { UserDropdownMenu } from '../user-dropdown-menu';

import { SidebarLogo } from './sidebar-logo';
import { SidebarSwitch } from './sidebar-switch';

export function SidebarApp({ initialStudies }: { initialStudies: StudyWithCode[] }) {
    const { state } = useSidebar();
    const expanded = state == 'expanded';

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className={cn('items-center', expanded ? 'p-4' : '')}>
                <SidebarLogo />
            </SidebarHeader>

            <SidebarSeparator />

            <SidebarContent>
                <SidebarSwitch isOpen={expanded} initialStudies={initialStudies} />
            </SidebarContent>

            <SidebarFooter>
                <UserDropdownMenu isOpen={expanded} isMobile />
            </SidebarFooter>
        </Sidebar>
    );
}
