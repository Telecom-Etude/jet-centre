'use server';

import { Domain, Level, Mri, MriStatus, Prisma } from '@prisma/client';

import prisma from '@/db';

import { isExecutiveBoard } from './positions';
import { Viewer } from './user';

export type PublicMRI = {
    id: string;
    studyTitle: string | null;
    mriTitle: string | null;
    mriDifficulty: Level | null;
    mriMainDomain: Domain | null;
    mriStatus: MriStatus;
    introductionText: string | null;
};

export type StudyMRIListItem = {
    id: string;
    mriTitle: string | null;
    mriStatus: MriStatus;
};

type ClassicLastActionPayload = {
    include: {
        user: {
            include: {
                person: {
                    select: {
                        firstName: true;
                        lastName: true;
                    };
                };
            };
        };
    };
};

export type MriWithStudyAndAssignees = Prisma.MriGetPayload<{
    include: {
        study: {
            include: {
                cdps: true;
                information: true;
            };
        };
        lastEditedAction: ClassicLastActionPayload;
    };
}>;

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
            where: {
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
            },
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
    const isExec = isExecutiveBoard(viewer);

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
                    {
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
                                        confidential: isExec,
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
                    },
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
                {
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
                },
            ],
        },
    });
}

async function createEmptyMRI(viewer: Viewer, studyCode: string): Promise<Mri> {
    const infos = await prisma.studyInfos.findFirst({
        where: {
            AND: [
                { code: studyCode },
                {
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
                },
            ],
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

export async function setMRITitle(viewer: Viewer, mriId: string, title: string) {
    await prisma.mri.updateMany({
        where: {
            AND: [
                { id: mriId },
                {
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
                },
            ],
        },
        data: {
            title,
        },
    });
}

export async function setMRIIntroductionText(
    viewer: Viewer,
    mriId: string,
    introductionText: string
) {
    await prisma.mri.updateMany({
        where: {
            AND: [
                { id: mriId },
                {
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
                },
            ],
        },
        data: {
            introductionText,
        },
    });
}

export async function createEmptyStudyMRI(
    viewer: Viewer,
    studyCode: string
): Promise<StudyMRIListItem> {
    return getStudyMRIListItemFromMri(await createEmptyMRI(viewer, studyCode));
}
