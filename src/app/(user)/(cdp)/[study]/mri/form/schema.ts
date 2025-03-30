import { z } from '@/lib/zod';
import { Domain, Level } from '@prisma/client';

export const mriCreationSchema = z.object({
    title: z.string(),
    wageLowerBound: z.number(),
    wageUpperBound: z.number(),
    wageLevel: z.nativeEnum(Level),
    difficulty: z.nativeEnum(Level),
    mainDomain: z.nativeEnum(Domain),
    introductionText: z.string(),
    descriptionText: z.string(),
    timeLapsText: z.string(),
    requiredSkillsText: z.string(),
});

export type FormType = z.infer<typeof mriCreationSchema>;

export const DEFAULT_MRI_VALUES = {
    introductionText: 'Nous vous proposons une étude...',
    requiredSkillsText: 'Nous recherchons un.e intervenant.e ayant des compétences en...',
    timeLapsText: 'Le client désire commencer le plus tôt possible.',
    descriptionText: 'Le but de cette étude est de...',
};
