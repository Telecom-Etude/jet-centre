'use server';

import prisma from '@/db';
import { adminDisplay, DEFAULT_MRI_VALUES, MriFormType, MriServerData } from './schema';
import { Domain, Level, MriStatus } from '@prisma/client';
import { dbg } from '@/lib/utils';

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
        const data: MriFormType = {
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
        return {
            mriId: mri?.id,
            admins: study.cdps.map(adminDisplay),
            data,
            status: mri?.status || MriStatus.InProgress,
        };
    } catch (e) {
        console.error(`[loadMriData] ${e}`);
    }
}

export async function storeMriData(code: string, data: MriFormType): Promise<string | undefined> {
    try {
        const mriData = {
            wageLowerBound: data.wageLowerBound,
            wageUpperBound: data.wageUpperBound,
            wageLevel: data.wageLevel,
            difficulty: data.difficulty,
            mainDomain: data.mainDomain,
            introductionText: data.introductionText,
            descriptionText: data.descriptionText,
            timeLapsText: data.timeLapsText,
            requiredSkillsText: data.requiredSkillsText,
            status: MriStatus.InProgress,
        };

        dbg(mriData, 'storing');

        const studyInfos = await prisma.studyInfos.update({
            where: { code },
            include: {
                study: {
                    include: {
                        mri: true,
                    },
                },
            },
            data: {
                title: data.title,
                study: {
                    update: {
                        mri: {
                            upsert: {
                                create: { ...mriData },
                                update: { ...mriData },
                            },
                        },
                    },
                },
            },
        });
        return studyInfos.study?.mri?.id;
    } catch (e) {
        console.error(`[storeMriData] ${e}`);
    }
}

export async function setMriStatus(mriId: string, status: MriStatus) {
    try {
        return await prisma.mri.update({
            where: { id: mriId },
            data: { status },
        });
    } catch (e) {
        console.error(`[validateMri] ${e}`);
    }
}
