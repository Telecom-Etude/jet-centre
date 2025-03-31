'use server';

import prisma from '@/db';
import { DEFAULT_MRI_VALUES, FormType } from './schema';
import { Domain, Level } from '@prisma/client';

export interface AdminDisplay {
    email: string;
    firstName: string;
    lastName: string;
}

export interface MriServerData {
    data: FormType;
    admins: AdminDisplay[];
}

export async function loadMriData(code: string): Promise<MriServerData | undefined> {
    try {
        const infos = await prisma.studyInfos.findUnique({
            where: { code },
            include: {
                study: {
                    include: {
                        mri: true,
                        cdps: {
                            include: {
                                user: {
                                    include: { person: true },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!infos) {
            throw new Error('Failed to fetch mission in database.');
        }
        const study = infos.study;
        if (!study) {
            throw new Error('studyInfo exists without study.');
        }
        const mri = study.mri;
        const data: FormType = {
            title: infos.title ?? '',
            wageLowerBound: mri?.wageLowerBound ?? 0,
            wageUpperBound: mri?.wageUpperBound ?? 0,
            wageLevel: mri?.wageLevel ?? Level.Low,
            difficulty: mri?.difficulty ?? Level.Low,
            mainDomain: mri?.mainDomain || infos.domain[0] || Domain.EmbeddedSystems,
            introductionText:
                mri?.introductionText ?? infos.description ?? DEFAULT_MRI_VALUES.introductionText,
            descriptionText: mri?.descriptionText ?? DEFAULT_MRI_VALUES.descriptionText,
            timeLapsText: mri?.timeLapsText ?? DEFAULT_MRI_VALUES.timeLapsText,
            requiredSkillsText: mri?.requiredSkillsText ?? DEFAULT_MRI_VALUES.requiredSkillsText,
        };
        const admins =
            study.cdps
                .map((cdp) => cdp.user.person)
                .map(({ email, firstName, lastName }) => ({ email, firstName, lastName })) || [];
        return {
            admins,
            data,
        };
    } catch (e) {
        console.error(`[loadMriData] ${e}`);
    }
}

export async function storeMriData(code: string, data: FormType) {
    try {
        await prisma.studyInfos.update({
            where: { code },
            include: {
                study: {
                    include: {
                        mri: true,
                    },
                },
            },
            data: {
                study: {
                    update: {
                        mri: {
                            update: {
                                data: {
                                    wageLowerBound: data.wageLowerBound,
                                    wageUpperBound: data.wageUpperBound,
                                    wageLevel: data.wageLevel,
                                    difficulty: data.difficulty,
                                    mainDomain: data.mainDomain,
                                    introductionText: data.introductionText,
                                    descriptionText: data.descriptionText,
                                    timeLapsText: data.timeLapsText,
                                    requiredSkillsText: data.requiredSkillsText,
                                },
                            },
                        },
                    },
                },
            },
        });
        return true;
    } catch (e) {
        console.error(`[storeMriData] ${e}`);
        return false;
    }
}
