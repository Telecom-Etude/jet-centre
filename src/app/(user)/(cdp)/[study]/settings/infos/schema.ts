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
