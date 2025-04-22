import { FaHouse } from 'react-icons/fa6';

import { TRESO_ICON } from './tabs';
import { RoleSideBar } from './types';

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
                    prefix: 'treso',
                },
            ],
        },
    ],
};
