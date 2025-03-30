import { FaHouse, FaMoneyBill } from 'react-icons/fa6';
import { RoleSideBar } from './types';

export const TREASURER_SIDEBAR: RoleSideBar = {
    icon: FaMoneyBill,
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
