import { arrayEqual } from '@/lib/utils';
import { PhaseStatus, StudyProgressStep } from '@prisma/client';
import { z } from 'zod';

export const studyPhaseFormSchema = z.object({
    jehs: z.number(),
    deliverable: z.boolean(),
    unitPrice: z.number(),
    startDate: z.date(),
    endDate: z.date(),
    phaseStatus: z.nativeEnum(PhaseStatus),
});

export type StudyPhaseFormType = z.infer<typeof studyPhaseFormSchema>;

export const studyProceedingsParamsEditorFormSchema = z.object({
    studyProcessStep: z.nativeEnum(StudyProgressStep),
    phases: z.array(studyPhaseFormSchema),
});

export type StudyProceedingsParamsEditorFormType = z.infer<
    typeof studyProceedingsParamsEditorFormSchema
>;

export function checkEqual(
    lhs: StudyProceedingsParamsEditorFormType,
    rhs: StudyProceedingsParamsEditorFormType
) {
    return (
        lhs.studyProcessStep === rhs.studyProcessStep &&
        arrayEqual(
            lhs.phases,
            rhs.phases,
            (phase_lhs, phase_rhs) =>
                phase_lhs.jehs === phase_rhs.jehs &&
                phase_lhs.deliverable === phase_rhs.deliverable &&
                phase_lhs.unitPrice === phase_rhs.unitPrice &&
                phase_lhs.startDate === phase_rhs.startDate &&
                phase_lhs.endDate === phase_rhs.endDate &&
                phase_lhs.phaseStatus === phase_rhs.phaseStatus
        )
    );
}
