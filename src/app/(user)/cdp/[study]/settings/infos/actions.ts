'use server';

import prisma from '@/db';

import { StudyInfosParamsEditorFormType } from './schema';

export interface ServerStudyInfos {
    serverStudyInfo: StudyInfosParamsEditorFormType;
    studyInfoId: string;
}

export async function getStudyInfos(code: string): Promise<ServerStudyInfos | undefined> {
    try {
        const studyInfos = await prisma.studyInfos.findUnique({ where: { code } });
        if (!studyInfos) {
            throw new Error('Study infos not found');
        }
        return {
            studyInfoId: studyInfos?.id,
            serverStudyInfo: {
                cc: studyInfos.cc,
                applicationFee: studyInfos.applicationFee,
                domains: studyInfos.domains,
                title: studyInfos.title ?? undefined,
            },
        };
    } catch (e) {
        console.error(`[getStudyInfos] ${e}`);
    }
}

export async function updateStudyInfos(
    studyInfoId: string,
    data: StudyInfosParamsEditorFormType
): Promise<StudyInfosParamsEditorFormType | undefined> {
    try {
        const studyInfos = await prisma.studyInfos.update({ where: { id: studyInfoId }, data });
        return {
            title: studyInfos.title ?? undefined,
            applicationFee: studyInfos.applicationFee,
            cc: studyInfos.cc,
            domains: studyInfos.domains,
        };
    } catch (e) {
        console.error(`[updateStudyInfos] ${e}`);
    }
}
