import { sidebars } from '@/settings/sidebars/sidebar-all';
import { SidebarList } from './sidebar-list';

export default function SidebarRole() {
    const sidebar_groups = sidebars.trez;

    return <SidebarList sidebar_groups={sidebar_groups} />;
}
