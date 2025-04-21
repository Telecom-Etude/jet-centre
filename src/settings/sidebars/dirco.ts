import { FaPhone } from 'react-icons/fa6';

import { CREATE_STUDY, MRI_VALIDATION } from './tabs';
import { RoleSideBar } from './types';

export const COMMERCIAL_DIRECTOR_SIDEBAR: RoleSideBar = {
    icon: FaPhone,
    sidebar: [
        {
            title: 'Nouvelles études',
            items: [CREATE_STUDY, MRI_VALIDATION],
        },
    ],
};
