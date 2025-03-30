import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { SideBarGroup } from '@/settings/sidebars/types';
import Link from 'next/link';

type Props = {
    sidebar_groups: SideBarGroup[];
    missionCode?: string;
};

export function SidebarList({ sidebar_groups, missionCode }: Props) {
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
                                            missionCode ? '/' + missionCode + item.href : item.href
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
