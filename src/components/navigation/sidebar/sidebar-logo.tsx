'use client';

import * as React from 'react';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { LogoBird } from '@/components/logo/logo';

export function SidebarLogo() {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton size="lg" className="hover:bg-inherit active:bg-inherit">
                    <LogoBird />
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-lg">JET&nbsp;CENTRE</h1>
                        <p className="text-sm text-muted-foreground">Telecom Etude</p>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
