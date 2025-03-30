import { FaHouse } from 'react-icons/fa6';
import { RoleSideBar } from './types';
import { TRESO_ICON } from './tabs';

export const TREASURER_SIDEBAR: RoleSideBar = {
    icon: TRESO_ICON,
    sidebar: [
        {
            title: 'default',
            items: [
                {
                    title: 'disponibilités',
                    icon: FaHouse,
                    href: '/',
                },
            ],
        },
    ],
};
