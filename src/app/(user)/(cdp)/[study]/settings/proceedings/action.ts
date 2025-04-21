'use server';

import { StudyProgressStep } from '@prisma/client';

import prisma from '@/db';
import { dbg } from '@/lib/utils';

import { StudyPhaseFormType, StudyProceedingsParamsEditorFormType } from './schema';

export interface ServerStudyProceedings {
    serverStudyProceeding: StudyProceedingsParamsEditorFormType;
    serverStudyProceedingId: string;
}

export async function getStudyProceedings(
    code: string
): Promise<ServerStudyProceedings | undefined> {
    try {
        dbg(code, 'code');
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
                    ({ deliverable, startDate, endDate, ...phase }) => ({
                        ...phase,
                        deliverable: deliverable ?? undefined,
                        startDate: startDate ?? undefined,
                        endDate: endDate ?? undefined,
                    })
                ),
            },
        };
    } catch (e) {
        console.error(`[getStudyProceedings] ${e}`);
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
                        title: phase.title,
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
export async function updatePhase(phase: StudyPhaseFormType) {
    try {
        await prisma.phase.update({
            where: { id: phase.id },
            data: {
                title: phase.title,
                jehs: phase.jehs,
                deliverable: {
                    update: {
                        data: {
                            description: phase.deliverable?.description,
                            status: phase.deliverable?.status,
                        },
                    },
                },
                unitPrice: phase.unitPrice,
                startDate: phase.startDate,
                endDate: phase.endDate,
            },
        });
    } catch (e) {
        console.error(`[updatePhase] ${e}`);
    }
}

export async function deletePhase(phaseId: string) {
    try {
        await prisma.phase.delete({
            where: {
                id: phaseId,
            },
        });
    } catch (e) {
        console.error(`[deletePhase] ${e}`);
    }
}

export async function updateStudyStep(
    studyProcessStep: StudyProgressStep,
    studyProceedingId: string
) {
    try {
        await prisma.studyProceedings.update({
            where: { id: studyProceedingId },
            data: {
                studyProcessStep,
            },
        });
    } catch (e) {
        console.log(`[updateStudyStep] ${e}`);
    }
}
