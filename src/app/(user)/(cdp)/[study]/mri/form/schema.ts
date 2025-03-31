import { z } from '@/lib/zod';
import { Domain, Level, MriStatus } from '@prisma/client';

export interface AdminDisplay {
    email: string;
    firstName: string;
    lastName: string;
}

export interface MriServerData {
    data: MriFormType;
    admins: AdminDisplay[];
    mriId?: string;
    status: MriStatus;
}

export function adminDisplay(cdp: {
    user: { person: { email: string; firstName: string; lastName: string } };
}): AdminDisplay {
    return cdp.user.person;
}

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

export function equalMri(left: MriFormType, right: MriFormType): boolean {
    return (
        left.wageLowerBound == right.wageUpperBound &&
        left.wageLowerBound == right.wageLowerBound &&
        left.wageUpperBound == right.wageUpperBound &&
        left.wageLevel == right.wageLevel &&
        left.difficulty == right.difficulty &&
        left.mainDomain == right.mainDomain &&
        left.introductionText == right.introductionText &&
        left.descriptionText == right.descriptionText &&
        left.timeLapsText == right.timeLapsText &&
        left.requiredSkillsText == right.requiredSkillsText
    );
}
