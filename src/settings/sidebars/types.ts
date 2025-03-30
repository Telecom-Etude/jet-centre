import { IconType } from 'react-icons/lib';

export interface SideBarItem {
    title: string;
    icon: IconType;
    href: string;
}

export interface SideBarGroup {
    title: string;
    items: SideBarItem[];
}

export interface RoleSideBar {
    icon: IconType;
    sidebar: SideBarGroup[];
}
