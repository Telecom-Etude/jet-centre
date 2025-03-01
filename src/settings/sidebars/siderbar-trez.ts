import { FaHouse } from 'react-icons/fa6';
import { IconType } from 'react-icons/lib';

type SideBarItem = {
    title: string;
    href: string;
    icon: IconType;
};

export type SideBarGroup = {
    title: string;
    items: SideBarItem[];
};

export const sidebar_trez: SideBarGroup[] = [
    {
        title: 'default',
        items: [
            {
                title: 'disponibilités',
                icon: FaHouse,
                href: '/'
            }
        ]
    }
];
