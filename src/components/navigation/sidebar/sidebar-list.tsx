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
    sidebarGroups: SideBarGroup[];
    studyCode?: string;
}

export function SidebarList({ sidebarGroups, studyCode }: SidebarListProps) {
    return (
        <div className="flex-grow">
            {sidebarGroups.map((sidebar_group, i) => (
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
                                            studyCode ? '/cdp/' + studyCode + item.href : item.href
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
