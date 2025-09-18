/// Warning: this file may end up on the client

import { Gender } from '@/types/misc';

import { Viewer } from './user';

const positions = [
    'president',
    'internal_vice_president',
    'operational_vice_president',
    'external_vice_president',
    'treasurer',
    'vice_treasurer',
    'general_secretary',
    'commercial_director',
    'info',
] as const;

export type Position = (typeof positions)[number];

const executivePositions: Position[] = [
    'president',
    'internal_vice_president',
    'operational_vice_president',
    'external_vice_president',
    'treasurer',
    'vice_treasurer',
    'general_secretary',
    'commercial_director',
];

export type ExtendedPosition = Position | 'admin';

// export type ExecutivePosition = (typeof executivePositions)[number];

export function isValidPosition(pos: string): pos is Position {
    return (positions as readonly string[]).includes(pos);
}

export function isExecutiveBoard(viewer: Viewer): boolean {
    if (!viewer.position) return false;
    return executivePositions.includes(viewer.position);
}

export function getPositionName(
    position: Position,
    gender?: Gender
): { name: string; shortName: string } {
    const genderIndex = gender === Gender.Male ? 0 : gender === Gender.Female ? 1 : 2;
    const d: Record<Position, { name: string; shortName: string }> = {
        president: {
            name: ['Président', 'Présidente', 'Président.e'][genderIndex],
            shortName: 'Prez',
        },
        internal_vice_president: {
            name: ['Vice-président interne', 'Vice-présidente interne', 'Vice-président.e interne'][
                genderIndex
            ],
            shortName: 'VPI',
        },
        operational_vice_president: {
            name: [
                'Vice-président opérationnel',
                'Vice-présidente opérationnel',
                'Vice-président.e opérationnel',
            ][genderIndex],
            shortName: 'VPO',
        },
        external_vice_president: {
            name: ['Vice-président externe', 'Vice-présidente externe', 'Vice-président.e externe'][
                genderIndex
            ],
            shortName: 'VPE',
        },
        treasurer: {
            name: ['Trésorier', 'Trésorière', 'Trésorier.ère'][genderIndex],
            shortName: 'Trez',
        },
        vice_treasurer: {
            name: ['Vice-trésorier', 'Vice-trésorière', 'Vice-trésorier.ère'][genderIndex],
            shortName: 'VTrez',
        },
        general_secretary: {
            name: ['Secrétaire général', 'Secrétaire générale', 'Secrétaire général.e'][
                genderIndex
            ],
            shortName: 'SecGe',
        },
        commercial_director: {
            name: ['Directeur commercial', 'Directrice commerciale', 'Directeur.rice commercial.e'][
                genderIndex
            ],
            shortName: 'DirCo',
        },
        info: { name: 'Responsable informatique', shortName: 'Respo Info' },
    };
    return d[position];
}
