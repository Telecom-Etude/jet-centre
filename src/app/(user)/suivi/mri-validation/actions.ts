'use server';

import { Mri, MriStatus, Prisma, StudyInfos } from '@prisma/client';

import prisma from '@/db';

export async function fetchMriById(mriId: string) {
    try {
        const mri = await prisma.mri.findUnique({
            where: { id: mriId },
            include: {
                study: {
                    include: {
                        cdps: {
                            include: {
                                user: {
                                    include: {
                                        person: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        return mri ?? undefined;
    } catch (e) {
        console.error(`[fetchMriById] ${e}`);
    }
}

export interface MriToValidate extends Mri {
    study: {
        information: StudyInfos;
        cdps: {
            user: {
                person: { email: string | null };
            };
        }[];
    };
}

export async function listMriToValidate(): Promise<MriToValidate[] | undefined> {
    try {
        return await prisma.mri.findMany({
            include: {
                study: {
                    include: {
                        information: true,
                        cdps: {
                            select: {
                                user: {
                                    select: {
                                        person: { select: { email: true } },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            where: {
                OR: [
                    { status: MriStatus.Finished },
                    { status: MriStatus.Validated },
                    { status: MriStatus.Sent },
                ],
            },
        });
    } catch (e) {
        console.error(`[listMri] ${e}`);
    }
}
