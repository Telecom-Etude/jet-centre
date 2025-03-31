import { RoleSideBar } from './types';
import { MdAdminPanelSettings } from 'react-icons/md';
import { FaPeopleGroup } from 'react-icons/fa6';

export const ADMIN_SIDEBAR: RoleSideBar = {
    icon: MdAdminPanelSettings,
    sidebar: [
        {
            title: 'User management',
            items: [
                {
                    title: 'Users',
                    icon: FaPeopleGroup,
                    href: 'users',
                },
            ],
        },
    ],
};
