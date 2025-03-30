import { TREASURER_SIDEBAR } from './treasurer';
import { VPO_SIDEBAR } from './vpo';
import { SECRETARY_GENERAL_SIDEBAR } from './secge';
import { COMMERCIAL_DIRECTOR_SIDEBAR } from './dirco';

export const ROLES_SIDEBARS = {
    Trésorier: TREASURER_SIDEBAR,
    VPO: VPO_SIDEBAR,
    SecGe: SECRETARY_GENERAL_SIDEBAR,
    DirCo: COMMERCIAL_DIRECTOR_SIDEBAR,
} as const;
