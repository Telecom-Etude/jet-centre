import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '@/components/ui/sidebar';
import { SideBarGroup } from '@/settings/sidebars/siderbar-trez';

type Props = {
    sidebar_groups: SideBarGroup[];
};

export function SidebarList({ sidebar_groups }: Props) {
    return (
        <div className="flex-grow">
            {sidebar_groups.map((sidebar_group, i) => (
                <SidebarGroup key={sidebar_group.title}>
                    <SidebarGroupLabel>{sidebar_group.title}</SidebarGroupLabel>
                    <SidebarMenu>
                        {sidebar_group.items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton tooltip={item.title}>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            ))}
        </div>
    );
}
