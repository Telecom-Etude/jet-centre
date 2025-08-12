import {
    CompanySize,
    DeliverableStatus,
    Domain,
    Level,
    StudyProgressStep,
    Gender,
    Position,
} from '@prisma/client';
import { StaticImageData } from 'next/image';

import Cyber from '@/../public/mri/domains/cyber.png';
import Data from '@/../public/mri/domains/data.png';
import Dev from '@/../public/mri/domains/dev.png';
import Ima from '@/../public/mri/domains/ima.png';
import Market from '@/../public/mri/domains/market.png';
import Reseaux from '@/../public/mri/domains/reseaux.png';
import Se from '@/../public/mri/domains/se.png';

interface EnumInfo {
    display: string;
}

interface PositionInfo {
    display: {
        [key in Gender]: String;
    };
}

export const DELIVERABLE_STEPS: Record<DeliverableStatus, EnumInfo> = {
    NotStarted: { display: 'Non commencé' },
    InProgress: { display: 'En cours' },
    Finished: { display: 'Fini' },
    Given: { display: 'Rendu' },
};

export const DELIVERABLE_STEPS_NAMES = Object.keys(DELIVERABLE_STEPS) as DeliverableStatus[];

export const STUDY_STEPS: Record<StudyProgressStep, EnumInfo> = {
    Created: { display: 'En cours de création' },
    Recruited: { display: 'En cours de recrutement' },
    TripartiteMeeting: { display: 'Réunion tripartite' },
    DocumentsWrote: { display: 'Documents écrits' },
    InStudy: { display: 'Mission en cours' },
    Ended: { display: 'Mission finie' },
    CompanyFactored: { display: 'Entreprise facturée' },
    AssigneePaid: { display: 'AssigneePaid' },
    SatisfactionFormSent: { display: 'QS envoyé' },
    WarrantyExpired: { display: 'Période de garantie finie' },
};

export const STUDY_STEPS_NAMES = Object.keys(STUDY_STEPS) as StudyProgressStep[];

export const LEVELS: Record<Level, EnumInfo> = {
    Low: { display: 'Faible' },
    Medium: { display: 'Moyenne' },
    High: { display: 'Haute' },
};

export const LEVEL_NAMES: Level[] = Object.keys(LEVELS) as Level[];

interface DomainInfo extends EnumInfo {
    image: StaticImageData;
}

export const DOMAINS: Record<Domain, DomainInfo> = {
    // data
    Chatbot: { display: 'Chatbot', image: Data },
    DataScience: { display: 'Data Science', image: Data },
    MachineLearning: { display: 'Machine Learning', image: Data },
    IntelligenceArtificielle: { display: 'IA', image: Data },
    // dev
    WebDev: { display: 'Développement Web', image: Dev },
    MobileDev: { display: 'Développement Mobile', image: Dev },
    AppDev: { display: 'Développement Logiciel', image: Dev },
    // cyber
    Cybersecurity: { display: 'Cybersécurité', image: Cyber },
    Cryptography: { display: 'Cryptographie', image: Cyber },
    // réseaux
    Networks: { display: 'Réseaux', image: Reseaux },
    Telecommunications: { display: 'Télécommunications', image: Reseaux },
    Internet: { display: 'Internet', image: Reseaux },
    IoT: { display: 'IoT', image: Reseaux },
    // se
    EmbeddedSystems: { display: 'Systèmes Embarqués', image: Se },
    // ima
    Image: { display: 'Image', image: Ima },
    ComputerVision: { display: 'Computer Vision', image: Ima },
    ComputerGraphics: { display: 'Computer Graphics', image: Ima },
    d_3D: { display: '3D', image: Ima },
    // marché
    MarketAnalysis: { display: 'Étude de marché', image: Market },
    StateOfTheArt: { display: "État de l'art", image: Market },
};

export const DOMAIN_NAMES: Domain[] = Object.keys(DOMAINS) as Domain[];

export const COMPANY_SIZES = {
    MicroEntreprise: { display: 'Micro entreprise' },
    PetiteEntreprise: { display: 'Petite entreprise' },
    MoyenneEntreprise: { display: 'Moyenne entreprise' },
    GrandeEntreprise: { display: 'Grande entreprise' },
} as const;

export const COMPANY_SIZE_NAMES: CompanySize[] = Object.keys(COMPANY_SIZES) as CompanySize[];

export const POSITIONS: Record<Position, PositionInfo> = {
    Tres: {
        display: { masculine: 'Trésorier.e', feminine: 'Trésorier.e', other: 'Trésorier.e' },
    },
    VPO: {
        display: {
            masculine: 'Vice-Président Opérationel',
            feminine: 'Vice-Présidente Opérationelle',
            other: 'Vice-Président.e Opérationel.le',
        },
    },
    SecGe: {
        display: {
            masculine: 'Secrétaire Général',
            feminine: 'Secrétaire Générale',
            other: 'Secrétaire Général.e',
        },
    },
    DirCo: {
        display: {
            masculine: 'Directeur Commercial',
            feminine: 'Directrice Commerciale',
            other: 'Directeurice Commercial.e',
        },
    },
    Info: { display: { masculine: 'Pôle Info', feminine: 'Pôle Info', other: 'Pôle Info' } },
    Pres: { display: { masculine: 'Président', feminine: 'Présidente', other: 'Président.e' } },
} as const;

export const POSITION_NAMES: Position[] = Object.keys(POSITIONS) as Position[];
