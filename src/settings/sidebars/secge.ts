import { VscOrganization } from 'react-icons/vsc';

import { MRI_VALIDATION } from './tabs';
import { RoleSideBar } from './types';

export const SECRETARY_GENERAL_SIDEBAR: RoleSideBar = {
    icon: VscOrganization,
    sidebar: [
        {
            title: 'Nouvelles études',
            items: [MRI_VALIDATION],
        },
    ],
};
