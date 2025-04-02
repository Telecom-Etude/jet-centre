import { Domain } from '@prisma/client';
import { z } from 'zod';

export const studyInfosParamsEditorFormSchema = z.object({
    title: z
        .string()
        .min(10, {
            message: 'Titre invalide.',
        })
        .optional(),
    applicationFee: z.number().optional(),
    cc: z.boolean(),
    domains: z.array(z.nativeEnum(Domain)),
});

export type StudyInfosParamsEditorFormType = z.infer<typeof studyInfosParamsEditorFormSchema>;

export function checkEqual(
    lhs: StudyInfosParamsEditorFormType,
    rhs: StudyInfosParamsEditorFormType
) {
    if (
        lhs.title !== rhs.title &&
        lhs.applicationFee !== rhs.applicationFee &&
        lhs.cc !== rhs.cc &&
        lhs.domains.length === rhs.domains.length
    )
        return false;
    for (let i = 0; i < lhs.domains.length; ++i) {
        if (lhs.domains[i] !== rhs.domains[i]) return false;
    }
    return true;
}
