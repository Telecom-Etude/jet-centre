import { FaGears, FaHouse, FaNoteSticky } from 'react-icons/fa6';
import { GiFinishLine } from 'react-icons/gi';
import { PiStudent } from 'react-icons/pi';

import { ADMIN_SIDEBAR } from './admin';
import { COMMERCIAL_DIRECTOR_SIDEBAR } from './dirco';
import { SECRETARY_GENERAL_SIDEBAR } from './secge';
import { MRI_ICON, TRESO_ICON } from './tabs';
import { TREASURER_SIDEBAR } from './treasurer';
import { SideBarGroup } from './types';
import { VPO_SIDEBAR } from './vpo';

export const ROLES_SIDEBARS = {
    Trésorier: TREASURER_SIDEBAR,
    VPO: VPO_SIDEBAR,
    SecGe: SECRETARY_GENERAL_SIDEBAR,
    DirCo: COMMERCIAL_DIRECTOR_SIDEBAR,
    Info: ADMIN_SIDEBAR,
    Admin: ADMIN_SIDEBAR,
} as const;

export const CDP_SIDEBAR: SideBarGroup[] = [
    {
        title: 'Pré-étude',
        items: [
            {
                title: "Paramètres de l'étude",
                icon: FaGears,
                prefix: 'cdp',
                href: '/settings',
            },
            {
                title: 'Écriture MRI',
                icon: MRI_ICON,
                prefix: 'cdp',
                href: '/mri',
            },
            {
                title: "Sélection d'intervenants",
                icon: PiStudent,
                prefix: 'cdp',
                href: '/assignees',
            },
        ],
    },
    {
        title: 'Documents',
        items: [
            {
                title: 'Notes clients & étude',
                icon: FaNoteSticky,
                prefix: 'cdp',
                href: '/notes',
            },
            {
                title: 'Documents de mission',
                icon: FaNoteSticky,
                prefix: 'cdp',
                href: '/docs',
            },
        ],
    },
    {
        title: 'Suivi',
        items: [
            {
                title: 'Tableau de bord',
                icon: FaHouse,
                prefix: 'cdp',
                href: '/dashboard',
            },
            {
                title: "Finalisation de l'étude",
                icon: GiFinishLine,
                prefix: 'cdp',
                href: '/finalisation',
            },
        ],
    },
    {
        title: 'Espace fun',
        items: [
            {
                title: 'Espace trésorerie',
                icon: TRESO_ICON,
                prefix: 'cdp',
                href: '/treso',
            },
        ],
    },
];
