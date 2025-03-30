import { RoleSideBar } from './types';
import { CREATE_STUDY } from './tabs';
import { GoOrganization } from 'react-icons/go';

export const VPO_SIDEBAR: RoleSideBar = {
    icon: GoOrganization,
    sidebar: [
        {
            title: 'default',
            items: [CREATE_STUDY],
        },
    ],
};
