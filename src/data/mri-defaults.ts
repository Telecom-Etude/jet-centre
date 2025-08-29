import { Domain, Level } from '@prisma/client';

export const DEFAULT_MRI_VALUES = {
    title: 'Sans titre',
    wageLowerBound: 0,
    wageUpperBound: 0,
    wageLevel: Level.Low,
    difficulty: Level.Low,
    mainDomain: Domain.EmbeddedSystems,
    introductionText: 'Nous vous proposons une étude...',
    descriptionText: 'Le but de cette étude est de...',
    timeLapsText: 'Le client désire commencer le plus tôt possible.',
    requiredSkillsText: 'Nous recherchons un.e intervenant.e ayant des compétences en...',
} as const;
