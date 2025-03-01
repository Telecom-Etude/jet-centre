'use client';

import * as React from 'react';

// import { NavMain } from '@/components/nav-main';
// import { NavProjects } from '@/components/nav-projects';
// import { NavUser } from '@/components/nav-user';
// import { TeamSwitcher } from '@/components/team-switcher';
import { useSidebar } from '@/components/ui/sidebar';

import {
    Sidebar,
    SidebarHeader,
    SidebarSeparator,
    SidebarContent,
    SidebarFooter
} from '@/components/ui/sidebar';

import { cn } from '@/lib/utils';
import { SidebarLogo } from './sidebar-logo';
import { UserDropdownMenu } from '../user-dropdown-menu';
import { SidebarSwitch } from './sidebar-switch';

export function SidebarApp({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { state, isMobile } = useSidebar();
    const expanded = state == 'expanded';

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className={cn('items-center', expanded ? 'p-4' : '')}>
                <SidebarLogo />
            </SidebarHeader>

            <SidebarSeparator />

            <SidebarContent>
                <SidebarSwitch isOpen={expanded} />
            </SidebarContent>

            <SidebarFooter>
                <UserDropdownMenu isOpen={expanded} isMobile username="Nicolas Glady" />
            </SidebarFooter>
        </Sidebar>
    );
}
