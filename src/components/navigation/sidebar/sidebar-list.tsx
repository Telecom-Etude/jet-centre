import Link from 'next/link';

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { SideBarGroup } from '@/settings/sidebars/types';

interface SidebarListProps {
    sidebar_groups: SideBarGroup[];
    missionCode?: string;
}

export function SidebarList({ sidebar_groups, missionCode }: SidebarListProps) {
    return (
        <div className="flex-grow">
            {sidebar_groups.map((sidebar_group, i) => (
                <SidebarGroup key={i}>
                    <SidebarGroupLabel>{sidebar_group.title}</SidebarGroupLabel>
                    <SidebarMenu>
                        {sidebar_group.items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    className="hover:bg-accent"
                                    tooltip={item.title}
                                    asChild
                                >
                                    <Link
                                        href={
                                            missionCode
                                                ? `/${item.prefix}/${missionCode}${item.href}`
                                                : `/${item.prefix}${item.href}`
                                        }
                                    >
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            ))}
        </div>
    );
}
