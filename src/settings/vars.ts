import { z } from '@/lib/zod';
import { Domain as PgDomain, CompanySize as PgCompanySize } from '@prisma/client';

// ~~~~~~~~~~~~~~~~~ Zod ~~~~~~~~~~~~~~~~~ //
export const zDOMAINS = z.enum([
    'Data Science',
    'Machine Learning',
    'Intelligence Artificielle',
    'Développement Web',
    'Développement Mobile',
    'Développement logiciel',
    'Cybersécurité',
    'Cryptographie',
    'Systèmes embarqués',
    'Internet des objets',
    'Réseaux',
    'Télécommunications',
    'Internet',
    'Image',
    'Computer Graphics',
    '3D',
    'Étude de marché',
    "État de l'art",
]);

export type Domain = z.infer<typeof zDOMAINS>;
export const DOMAINS: Domain[] = zDOMAINS.options;

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

export function toPgDomain(domain: Domain): PgDomain {
    switch (domain) {
        case 'Data Science':
            return 'DataScience';
        case 'Machine Learning':
            return 'MachineLearning';
        case 'Intelligence Artificielle':
            return 'IntelligenceArtificielle';
        case 'Développement Web':
            return 'DeveloppementWeb';
        case 'Développement Mobile':
            return 'DeveloppementMobile';
        case 'Développement logiciel':
            return 'DeveloppementLogiciel';
        case 'Cybersécurité':
            return 'CyberSecurite';
        case 'Cryptographie':
            return 'Cryptographie';
        case 'Systèmes embarqués':
            return 'SystemesEmbarques';
        case 'Internet des objets':
            return 'InternetDesObjets';
        case 'Réseaux':
            return 'Reseaux';
        case 'Télécommunications':
            return 'Telecommunications';
        case 'Internet':
            return 'Internet';
        case 'Image':
            return 'Image';
        case 'Computer Graphics':
            return 'ComputerGraphics';
        case '3D':
            return 'd_3D';
        case 'Étude de marché':
            return 'EtudeDeMarche';
        case "État de l'art":
            return 'EtatDeLArt';
    }
}

// ~~~~~~~~~~~~~~~~~ Misc ~~~~~~~~~~~~~~~~ //
export const DATA_FILES_PATH = './data';
export const ANIMATION_DURATION_MS = 200;
