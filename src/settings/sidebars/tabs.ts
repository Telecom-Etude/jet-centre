import { FaMailBulk } from 'react-icons/fa';
import { SideBarItem } from './types';
import { FaBriefcase } from 'react-icons/fa6';

export const MRI_VALIDATION: SideBarItem = {
    title: 'Validation MRI',
    icon: FaMailBulk,
    href: '/mri-validation',
};

export const CREATE_STUDY: SideBarItem = {
    title: 'Nouvelle étude',
    icon: FaBriefcase,
    href: '/create',
};
