import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { SideBarGroup } from '@/settings/sidebars/siderbar-trez';
import Link from 'next/link';

type Props = {
    sidebar_groups: SideBarGroup[];
};

export function SidebarList({ sidebar_groups }: Props) {
    return (
        <div className="flex-grow">
            {sidebar_groups.map((sidebar_group, i) => (
                <SidebarGroup key={i}>
                    <SidebarGroupLabel>{sidebar_group.title}</SidebarGroupLabel>
                    <SidebarMenu>
                        {sidebar_group.items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton tooltip={item.title} asChild>
                                    <Link href={item.href}>
                                        {item.icon && <item.icon />}
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
