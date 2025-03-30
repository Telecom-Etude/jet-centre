import { RoleSideBar } from './types';
import { CREATE_STUDY, MRI_VALIDATION } from './tabs';
import { FaPhone } from 'react-icons/fa6';

export const COMMERCIAL_DIRECTOR_SIDEBAR: RoleSideBar = {
    icon: FaPhone,
    sidebar: [
        {
            title: 'Nouvelles études',
            items: [MRI_VALIDATION, CREATE_STUDY],
        },
    ],
};
