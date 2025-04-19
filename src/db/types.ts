import { CompanySize, Domain, Level, StudyProgressStep } from '@prisma/client';
import { StaticImageData } from 'next/image';

import Data from '@/../public/mri/domains/data.png';
import Dev from '@/../public/mri/domains/dev.png';
import Cyber from '@/../public/mri/domains/cyber.png';
import Se from '@/../public/mri/domains/se.png';
import Reseaux from '@/../public/mri/domains/reseaux.png';
import Ima from '@/../public/mri/domains/ima.png';
import Market from '@/../public/mri/domains/market.png';

interface EnumInfo {
    display: string;
}

export const STUDY_STEPS: Record<StudyProgressStep, EnumInfo> = {
    Created: { display: 'En cours de création' },
    Recruited: { display: 'En cours de recrutement' },
    TripartiteMeeting: { display: 'TripartiteMeeting' },
    DocumentsWrote: { display: 'WritingDocuments' },
    InStudy: { display: 'InStudy' },
    Ended: { display: 'Ended' },
    CompanyFactored: { display: 'CompanyFactored' },
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

export interface DomainInfo extends EnumInfo {
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
    /// marché
    MarketAnalysis: { display: 'Étude de marché', image: Market },
    StateOfTheArt: { display: "État de l'art", image: Market },
};

export const DOMAIN_NAMES: Domain[] = Object.keys(DOMAINS) as Domain[];

export const COMPANY_SIZES: CompanySize[] = [
    'MicroEntreprise',
    'PetiteEntreprise',
    'MoyenneEntreprise',
    'GrandeEntreprise',
];
