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

export type MriFormType = z.infer<typeof mriCreationSchema>;

export const DEFAULT_MRI_VALUES = {
    introductionText: 'Nous vous proposons une étude...',
    requiredSkillsText: 'Nous recherchons un.e intervenant.e ayant des compétences en...',
    timeLapsText: 'Le client désire commencer le plus tôt possible.',
    descriptionText: 'Le but de cette étude est de...',
};

export function equalEltDebug(name: string, left: any, right: any) {
    if (left != right) {
        throw new Error(`name mismatch: ${left} != ${right}`);
    }
}

export function equalMri(left: MriFormType, right: MriFormType): boolean {
    equalEltDebug('wageLowerBound', left.wageLowerBound, right.wageUpperBound);
    equalEltDebug('wageLowerBound', left.wageLowerBound, right.wageLowerBound);
    equalEltDebug('wageUpperBound', left.wageUpperBound, right.wageUpperBound);
    equalEltDebug('wageLevel', left.wageLevel, right.wageLevel);
    equalEltDebug('difficulty', left.difficulty, right.difficulty);
    equalEltDebug('mainDomain', left.mainDomain, right.mainDomain);
    equalEltDebug('introductionText', left.introductionText, right.introductionText);
    equalEltDebug('descriptionText', left.descriptionText, right.descriptionText);
    equalEltDebug('timeLapsText', left.timeLapsText, right.timeLapsText);
    equalEltDebug('requiredSkillsText', left.requiredSkillsText, right.requiredSkillsText);
    return false;
}
