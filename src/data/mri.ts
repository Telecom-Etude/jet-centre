'use server';

import { Mri, Prisma } from '@prisma/client';

import prisma from '@/db';
import {
    MRIModifyFieldErrorCode,
    MRIModifyFieldResult,
    MriWithStudyAndAssignees,
    PublicMRI,
    StudyMRIListItem,
} from '@/types/mri';

import { isExecutiveBoard } from './positions';
import { Viewer } from './user';

export async function getPublicMRIs(viewer: Viewer): Promise<PublicMRI[]> {
    return (
        await prisma.mri.findMany({
            include: {
                study: {
                    include: {
                        information: true,
                    },
                },
            },
            where: isMriAccessibleToViewer(viewer),
        })
    ).map((mri) => {
        return {
            id: mri.id,
            studyTitle: mri.study.information.title,
            mriTitle: mri.title,
            mriDifficulty: mri.difficulty,
            mriMainDomain: mri.mainDomain,
            mriStatus: mri.status,
            introductionText: mri.introductionText,
        };
    });
}

function getStudyMRIListItemFromMri(mri: {
    id: Mri['id'];
    status: Mri['status'];
    title: Mri['title'];
}): StudyMRIListItem {
    return {
        id: mri.id,
        mriStatus: mri.status,
        mriTitle: mri.title,
    };
}

export async function getStudyMRIsFromCode(
    viewer: Viewer,
    studyCode: string
): Promise<StudyMRIListItem[]> {
    return (
        await prisma.mri.findMany({
            where: {
                AND: [
                    {
                        study: {
                            information: {
                                code: studyCode,
                            },
                        },
                    },
                    isMriAccessibleToViewer(viewer),
                ],
            },
            select: {
                id: true,
                status: true,
                title: true,
            },
        })
    ).map(getStudyMRIListItemFromMri);
}

export async function getMRIFromId(
    viewer: Viewer,
    mriId: string
): Promise<MriWithStudyAndAssignees | null> {
    return await prisma.mri.findFirst({
        include: {
            study: {
                include: {
                    cdps: true,
                    information: true,
                },
            },
            lastEditedAction: {
                include: {
                    user: {
                        include: {
                            person: {
                                select: {
                                    firstName: true,
                                    lastName: true,
                                },
                            },
                        },
                    },
                },
            },
        },
        where: {
            AND: [
                {
                    id: mriId,
                },
                isMriAccessibleToViewer(viewer),
            ],
        },
    });
}

async function createEmptyMRI(viewer: Viewer, studyCode: string): Promise<Mri> {
    const infos = await prisma.studyInfos.findFirst({
        where: {
            AND: [{ code: studyCode }, isMriAccessibleToViewer(viewer)],
        },
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

    return await prisma.mri.create({
        data: {
            study: {
                connect: {
                    id: study.id,
                },
            },
            lastEditedAction: {
                create: {
                    userId: viewer.id,
                },
            },
        },
    });
}

const isMriAccessibleToViewer = (viewer: Viewer) => ({
    OR: [
        {
            // If the study is not confidential
            study: {
                information: {
                    confidential: false,
                },
            },
        },
        {
            // If the user is a member of the executive board
            study: {
                information: {
                    confidential: isExecutiveBoard(viewer),
                },
            },
        },
        {
            // If the user is a CDP on the study
            study: {
                cdps: {
                    some: {
                        userId: viewer.id,
                    },
                },
            },
        },
    ],
});

const isMriEditable = (viewer: Viewer, mriId: string): Prisma.MriWhereInput => ({
    AND: [{ id: mriId, status: 'InProgress' }, isMriAccessibleToViewer(viewer)],
});

const registerViewerActionOnMRIs = async (viewer: Viewer, ids: string[]) => {
    const now = new Date();

    await prisma.action.updateMany({
        where: {
            Mri: {
                some: {
                    id: {
                        in: ids,
                    },
                },
            },
        },
        data: {
            userId: viewer.id,
            date: now,
        },
    });
};

export async function setMRITitle(
    viewer: Viewer,
    mriId: string,
    title: string
): Promise<MRIModifyFieldResult> {
    const ids = (
        await prisma.mri.updateManyAndReturn({
            where: isMriEditable(viewer, mriId),
            data: {
                title,
            },
            select: {
                id: true,
            },
        })
    ).map((el) => el.id);

    registerViewerActionOnMRIs(viewer, ids);

    if (ids.length > 0) {
        return { status: 'success' };
    } else {
        return { status: 'error', error: MRIModifyFieldErrorCode.NoMRIOrLocked };
    }
}

export async function setMRIIntroductionText(
    viewer: Viewer,
    mriId: string,
    introductionText: string
): Promise<MRIModifyFieldResult> {
    const ids = (
        await prisma.mri.updateManyAndReturn({
            where: isMriEditable(viewer, mriId),
            data: {
                introductionText: introductionText,
            },
            select: {
                id: true,
            },
        })
    ).map((el) => el.id);

    registerViewerActionOnMRIs(viewer, ids);

    if (ids.length > 0) {
        return { status: 'success' };
    } else {
        return { status: 'error', error: MRIModifyFieldErrorCode.NoMRIOrLocked };
    }
}

export async function setMRIRequiredSkillsText(
    viewer: Viewer,
    mriId: string,
    requiredSkillsText: string
): Promise<MRIModifyFieldResult> {
    const ids = (
        await prisma.mri.updateManyAndReturn({
            where: isMriEditable(viewer, mriId),
            data: {
                requiredSkillsText,
            },
            select: {
                id: true,
            },
        })
    ).map((el) => el.id);

    registerViewerActionOnMRIs(viewer, ids);

    if (ids.length > 0) {
        return { status: 'success' };
    } else {
        return { status: 'error', error: MRIModifyFieldErrorCode.NoMRIOrLocked };
    }
}

export async function setMRITimeLapsText(
    viewer: Viewer,
    mriId: string,
    timeLapsText: string
): Promise<MRIModifyFieldResult> {
    const ids = (
        await prisma.mri.updateManyAndReturn({
            where: isMriEditable(viewer, mriId),
            data: {
                timeLapsText,
            },
            select: {
                id: true,
            },
        })
    ).map((el) => el.id);

    registerViewerActionOnMRIs(viewer, ids);

    if (ids.length > 0) {
        return { status: 'success' };
    } else {
        return { status: 'error', error: MRIModifyFieldErrorCode.NoMRIOrLocked };
    }
}

export async function setMRIDescriptionText(
    viewer: Viewer,
    mriId: string,
    descriptionText: string
): Promise<MRIModifyFieldResult> {
    const ids = (
        await prisma.mri.updateManyAndReturn({
            where: isMriEditable(viewer, mriId),
            data: {
                descriptionText,
            },
            select: {
                id: true,
            },
        })
    ).map((el) => el.id);

    registerViewerActionOnMRIs(viewer, ids);

    if (ids.length > 0) {
        return { status: 'success' };
    } else {
        return { status: 'error', error: MRIModifyFieldErrorCode.NoMRIOrLocked };
    }
}

export async function createEmptyStudyMRI(
    viewer: Viewer,
    studyCode: string
): Promise<StudyMRIListItem> {
    return getStudyMRIListItemFromMri(await createEmptyMRI(viewer, studyCode));
}
