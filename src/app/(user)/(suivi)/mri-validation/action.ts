'use server';

import prisma from '@/db';
import { MriStatus } from '@prisma/client';

export async function getStudyInfosWithMRI(code: string) {
    try {
        return await prisma.studyInfos.findUnique({
            where: { code },
            include: {
                study: {
                    include: {
                        mri: true,
                        cdps: { include: { user: { include: { person: true } } } },
                    },
                },
            },
        });
    } catch (e) {
        console.error(`[getStudyInfosWithMRI] ${e}`);
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
                OR: [{ status: MriStatus.Finished }, { status: MriStatus.Validated }],
            },
        });
    } catch (e) {
        console.error(`[listMri] ${e}`);
    }
}
