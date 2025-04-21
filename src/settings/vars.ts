import { CompanySize as PgCompanySize } from '@prisma/client';

import { z } from '@/lib/zod';

/**
 * See {@link https://www.economie.gouv.fr/cedef/entreprises-categories}.
 */
export const zCompanySize = z.enum([
    'Micro-entreprise',
    'Petite entreprise',
    'Moyenne entreprise',
    'Grande entreprise',
]);
export type CompanySize = z.infer<typeof zCompanySize>;

export function toPgCompanySize(companySize: CompanySize): PgCompanySize {
    switch (companySize) {
        case 'Micro-entreprise':
            return 'MicroEntreprise';
        case 'Petite entreprise':
            return 'PetiteEntreprise';
        case 'Moyenne entreprise':
            return 'MoyenneEntreprise';
        case 'Grande entreprise':
            return 'GrandeEntreprise';
    }
}

export const DATA_FILES_PATH = './data';
export const ANIMATION_DURATION_MS = 200;
