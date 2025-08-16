'use server';

import { MriStatus } from '@prisma/client';

import prisma from '@/db';
import { dbg } from '@/lib/utils';

import { adminDisplay, DEFAULT_MRI_VALUES, MriFormType, MriServerData } from './schema';

export async function loadStudyMris(code: string): Promise<MriServerData[] | undefined> {
    try {
        const infos = await prisma.studyInfos.findUnique({
            where: { code },
            include: {
                study: {
                    include: {
                        mris: true,
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

        const mris = study.mris;

        return mris.map((mri) => {
            const data: MriFormType = {
                title: mri?.title || infos?.title || DEFAULT_MRI_VALUES.title,
                wageLowerBound: mri?.wageLowerBound ?? DEFAULT_MRI_VALUES.wageLowerBound,
                wageUpperBound: mri?.wageUpperBound ?? DEFAULT_MRI_VALUES.wageUpperBound,
                wageLevel: mri?.wageLevel ?? DEFAULT_MRI_VALUES.wageLevel,
                difficulty: mri?.difficulty ?? DEFAULT_MRI_VALUES.difficulty,
                mainDomain: mri?.mainDomain || infos.domains[0] || DEFAULT_MRI_VALUES.mainDomain,
                introductionText: mri?.introductionText ?? DEFAULT_MRI_VALUES.introductionText,
                descriptionText: mri?.descriptionText ?? DEFAULT_MRI_VALUES.descriptionText,
                timeLapsText: mri?.timeLapsText ?? DEFAULT_MRI_VALUES.timeLapsText,
                requiredSkillsText:
                    mri?.requiredSkillsText ?? DEFAULT_MRI_VALUES.requiredSkillsText,
                gformUrl: mri.gformUrl ?? DEFAULT_MRI_VALUES.gformUrl,
            };

            return {
                mriId: mri.id,
                admins: study.cdps.map(adminDisplay),
                data,
                status: mri?.status || MriStatus.InProgress,
            };
        });
    } catch (e) {
        console.error(`[loadStudyMris] ${e}`);
    }
}

export async function createNewMri(studyCode: string): Promise<MriServerData | undefined> {
    try {
        const infos = await prisma.studyInfos.findUnique({
            where: { code: studyCode },
            include: {
                study: {
                    include: {
                        mris: true,
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
        const mriData = {
            ...DEFAULT_MRI_VALUES,
            title: infos?.title || DEFAULT_MRI_VALUES.title,
            mainDomain: infos.domains[0] || DEFAULT_MRI_VALUES.mainDomain,
        };
        const newMri = await prisma.mri.create({
            data: {
                ...mriData,
                study: {
                    connect: { id: study.id },
                },
            },
        });
        return {
            mriId: newMri.id,
            admins: study.cdps.map(adminDisplay),
            status: MriStatus.InProgress,
            data: mriData,
        };
    } catch (e) {
        console.error(`[createNewMri] ${e}`);
    }
}

export async function storeMriData(mriId: string, data: MriFormType): Promise<string | undefined> {
    try {
        const mriData = {
            title: data.title,
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

        const updatedMri = await prisma.mri.update({
            where: { id: mriId },
            data: { ...mriData },
        });
        return updatedMri.id;
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

export async function deleteMri(mriId: string): Promise<boolean> {
    try {
        await prisma.mri.delete({
            where: { id: mriId },
        });
        return true;
    } catch (e) {
        console.error(`[deleteMri] ${e}`);
        return false;
    }
}
