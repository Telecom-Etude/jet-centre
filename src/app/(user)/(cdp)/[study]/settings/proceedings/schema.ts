import { arrayEqual } from '@/lib/utils';
import { DeliverableStatus, StudyProgressStep } from '@prisma/client';
import { z } from 'zod';

export const deliverableFormSchema = z.object({
    description: z.string(),
    status: z.nativeEnum(DeliverableStatus),
});

export type DeliverableFormType = z.infer<typeof deliverableFormSchema>;

export const studyPhaseFormSchema = z.object({
    title: z.string(),
    jehs: z.number(),
    deliverable: deliverableFormSchema.optional(),
    unitPrice: z.number(),
    startDate: z.date(),
    endDate: z.date(),
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
                phase_lhs.deliverable?.description === phase_rhs.deliverable?.description &&
                phase_lhs.deliverable?.status === phase_rhs.deliverable?.status &&
                phase_lhs.unitPrice === phase_rhs.unitPrice &&
                phase_lhs.startDate === phase_rhs.startDate &&
                phase_lhs.endDate === phase_rhs.endDate
        )
    );
}
