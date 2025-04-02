'use server';

import prisma from '@/db';
import { StudyPhaseFormType, StudyProceedingsParamsEditorFormType } from './schema';
import { dbg } from '@/lib/utils';

interface ServerStudyProceedings {
    studyProceedingsData: StudyProceedingsParamsEditorFormType;
    studyProceedingsId: string;
}

export async function getStudyProceedings(
    code: string
): Promise<ServerStudyProceedings | undefined> {
    try {
        const studyInfos = await prisma.studyInfos.findUnique({
            where: { code },
            include: {
                study: {
                    include: {
                        studyProceedings: {
                            include: { phases: { include: { deliverable: true } } },
                        },
                    },
                },
            },
        });
        const study = studyInfos?.study;
        if (!study) {
            throw new Error('Failed to load study');
        }
        let studyProceedings = study.studyProceedings;
        if (!studyProceedings) {
            const studyWithProceedings = await prisma.study.update({
                where: { id: study.id },
                data: { studyProceedings: { create: {} } },
            });
            if (!studyWithProceedings.studyProceedingsId) {
                throw new Error('Failed to get study infos');
            }
            studyProceedings = await prisma.studyProceedings.findUnique({
                where: { id: studyWithProceedings.studyProceedingsId },
                include: { phases: { include: { deliverable: true } } },
            });
        }
        if (!studyProceedings) {
            throw new Error('Failed to get created study proceedings');
        }
        return {
            studyProceedingsId: studyProceedings.id,
            studyProceedingsData: {
                studyProcessStep: studyProceedings.studyProcessStep,
                phases: studyProceedings.phases.map(
                    ({ jehs, deliverable, unitPrice, startDate, endDate, phaseStatus }) => ({
                        jehs,
                        deliverable: !!deliverable,
                        unitPrice,
                        startDate,
                        endDate,
                        phaseStatus,
                    })
                ),
            },
        };
    } catch (e) {
        console.error(`[getStudyInfos] ${e}`);
    }
}
