import { RoleSideBar } from './types';
import { CREATE_STUDY, MANAGE_STUDIES } from './tabs';
import { GoOrganization } from 'react-icons/go';

export const VPO_SIDEBAR: RoleSideBar = {
    icon: GoOrganization,
    sidebar: [
        {
            title: 'Nouvelles études',
            items: [CREATE_STUDY],
        },
        {
            title: 'Suivi des études',
            items: [MANAGE_STUDIES],
        },
    ],
};
