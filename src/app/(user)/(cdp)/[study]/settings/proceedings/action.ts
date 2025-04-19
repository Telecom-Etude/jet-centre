'use server';

import prisma from '@/db';
import { StudyPhaseFormType, StudyProceedingsParamsEditorFormType } from './schema';

export interface ServerStudyProceedings {
    serverStudyProceeding: StudyProceedingsParamsEditorFormType;
    serverStudyProceedingId: string;
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
            serverStudyProceedingId: studyProceedings.id,
            serverStudyProceeding: {
                studyProcessStep: studyProceedings.studyProcessStep,
                phases: studyProceedings.phases.map(
                    ({ jehs, deliverable, unitPrice, startDate, endDate }) => ({
                        jehs,
                        deliverable: deliverable ?? undefined,
                        unitPrice,
                        startDate,
                        endDate,
                    })
                ),
            },
        };
    } catch (e) {
        console.error(`[getStudyInfos] ${e}`);
    }
}

export async function addPhase(studyProceedingsId: string, phase: StudyPhaseFormType) {
    try {
        let deliverable = undefined;
        if (phase.deliverable) {
            deliverable = {
                create: {
                    description: phase.deliverable?.description,
                    status: phase.deliverable?.status,
                },
            };
        }
        await prisma.studyProceedings.update({
            where: { id: studyProceedingsId },
            data: {
                phases: {
                    create: {
                        jehs: phase.jehs,
                        deliverable: deliverable,
                        unitPrice: phase.unitPrice,
                        startDate: phase.startDate,
                        endDate: phase.endDate,
                    },
                },
            },
        });
    } catch (e) {
        console.error(`[addPhase] ${e}`);
    }
}
