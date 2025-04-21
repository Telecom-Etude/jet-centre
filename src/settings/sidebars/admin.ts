import { FaPeopleGroup } from 'react-icons/fa6';
import { MdAdminPanelSettings } from 'react-icons/md';

import { RoleSideBar } from './types';

export const ADMIN_SIDEBAR: RoleSideBar = {
    icon: MdAdminPanelSettings,
    sidebar: [
        {
            title: 'User management',
            items: [
                {
                    title: 'Users',
                    icon: FaPeopleGroup,
                    href: '/users',
                },
            ],
        },
    ],
};
