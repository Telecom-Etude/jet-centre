import { TREASURER_SIDEBAR } from './treasurer';
import { VPO_SIDEBAR } from './vpo';
import { SECRETARY_GENERAL_SIDEBAR } from './secge';
import { COMMERCIAL_DIRECTOR_SIDEBAR } from './dirco';
import { SideBarGroup } from './types';
import { FaGears, FaHouse, FaNoteSticky } from 'react-icons/fa6';
import { MRI_ICON, TRESO_ICON } from './tabs';
import { PiStudent } from 'react-icons/pi';
import { GiFinishLine } from 'react-icons/gi';

export const ROLES_SIDEBARS = {
    Trésorier: TREASURER_SIDEBAR,
    VPO: VPO_SIDEBAR,
    SecGe: SECRETARY_GENERAL_SIDEBAR,
    DirCo: COMMERCIAL_DIRECTOR_SIDEBAR,
} as const;

export const CDP_SIDEBAR: SideBarGroup[] = [
    {
        title: 'Pré-étude',
        items: [
            {
                title: "Paramètres de l'étude",
                icon: FaGears,
                href: '/params',
            },
            {
                title: 'Écriture MRI',
                icon: MRI_ICON,
                href: '/mri',
            },
            {
                title: "Sélection d'intervenants",
                icon: PiStudent,
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
                href: '/notes',
            },
            {
                title: 'Documents de mission',
                icon: FaNoteSticky,
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
                href: '/dashboard',
            },
            {
                title: "Finalisation de l'étude",
                icon: GiFinishLine,
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
                href: '/treso',
            },
        ],
    },
];
