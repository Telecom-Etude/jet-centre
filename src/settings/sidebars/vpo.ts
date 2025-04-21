import { GoOrganization } from 'react-icons/go';

import { CREATE_STUDY } from './tabs';
import { RoleSideBar } from './types';

export const VPO_SIDEBAR: RoleSideBar = {
    icon: GoOrganization,
    sidebar: [
        {
            title: 'Nouvelles études',
            items: [CREATE_STUDY],
        },
    ],
};
