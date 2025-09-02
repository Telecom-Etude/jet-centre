import { CompanySize, DeliverableStatus, Domain, Level, StudyProgressStep } from '@prisma/client';

import { DOMAIN_IMAGES, DoubleImage } from './images';
interface EnumInfo {
    display: string;
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
    image: DoubleImage;
}

export const DOMAINS: Record<Domain, DomainInfo> = {
    // data
    Chatbot: { display: 'Chatbot', image: DOMAIN_IMAGES.data },
    DataScience: { display: 'Data Science', image: DOMAIN_IMAGES.data },
    MachineLearning: { display: 'Machine Learning', image: DOMAIN_IMAGES.data },
    IntelligenceArtificielle: { display: 'IA', image: DOMAIN_IMAGES.data },
    // dev
    WebDev: { display: 'Développement Web', image: DOMAIN_IMAGES.dev },
    MobileDev: { display: 'Développement Mobile', image: DOMAIN_IMAGES.dev },
    AppDev: { display: 'Développement Logiciel', image: DOMAIN_IMAGES.dev },
    // cyber
    Cybersecurity: { display: 'Cybersécurité', image: DOMAIN_IMAGES.cyber },
    Cryptography: { display: 'Cryptographie', image: DOMAIN_IMAGES.cyber },
    // réseaux
    Networks: { display: 'Réseaux', image: DOMAIN_IMAGES.networks },
    Telecommunications: { display: 'Télécommunications', image: DOMAIN_IMAGES.networks },
    Internet: { display: 'Internet', image: DOMAIN_IMAGES.networks },
    IoT: { display: 'IoT', image: DOMAIN_IMAGES.networks },
    // se
    EmbeddedSystems: { display: 'Systèmes Embarqués', image: DOMAIN_IMAGES.se },
    // ima
    Image: { display: 'Image', image: DOMAIN_IMAGES.Ima },
    ComputerVision: { display: 'Computer Vision', image: DOMAIN_IMAGES.ima },
    ComputerGraphics: { display: 'Computer Graphics', image: DOMAIN_IMAGES.ima },
    d_3D: { display: '3D', image: DOMAIN_IMAGES.Ima },
    // marché
    MarketAnalysis: { display: 'Étude de marché', image: DOMAIN_IMAGES.market },
    StateOfTheArt: { display: "État de l'art", image: DOMAIN_IMAGES.market },
};

export const DOMAIN_NAMES: Domain[] = Object.keys(DOMAINS) as Domain[];

export const COMPANY_SIZES = {
    MicroEntreprise: { display: 'Micro entreprise' },
    PetiteEntreprise: { display: 'Petite entreprise' },
    MoyenneEntreprise: { display: 'Moyenne entreprise' },
    GrandeEntreprise: { display: 'Grande entreprise' },
} as const;

export const COMPANY_SIZE_NAMES: CompanySize[] = Object.keys(COMPANY_SIZES) as CompanySize[];
