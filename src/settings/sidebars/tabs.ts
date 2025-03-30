import { FaMailBulk } from 'react-icons/fa';
import { SideBarItem } from './types';
import { FaMoneyBill, FaBriefcase } from 'react-icons/fa6';
import { IconType } from 'react-icons/lib';

export const MRI_ICON: IconType = FaMailBulk;
export const TRESO_ICON: IconType = FaMoneyBill;

export const MRI_VALIDATION: SideBarItem = {
    title: 'Validation MRI',
    icon: MRI_ICON,
    href: '/mri-validation',
};

export const CREATE_STUDY: SideBarItem = {
    title: 'Nouvelle étude',
    icon: FaBriefcase,
    href: '/create',
};
