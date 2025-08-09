'use server';

import { MriStatus } from '@prisma/client';

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

export async function listMriToValidate() {
    try {
        return await prisma.mri.findMany({
            include: {
                study: {
                    include: {
                        information: true,
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
