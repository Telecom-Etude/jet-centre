'use server';

import { Domain, Level, MriStatus } from '@prisma/client';

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
