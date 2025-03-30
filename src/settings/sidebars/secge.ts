import { VscOrganization } from 'react-icons/vsc';
import { RoleSideBar } from './types';
import { MRI_VALIDATION } from './tabs';

export const SECRETARY_GENERAL_SIDEBAR: RoleSideBar = {
    icon: VscOrganization,
    sidebar: [
        {
            title: 'Nouvelles études',
            items: [MRI_VALIDATION],
        },
    ],
};
