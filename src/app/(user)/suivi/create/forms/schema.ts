import { z } from '@/lib/zod';

import { companiesCreationSchema, emptyCompaniesCreationSchema } from './companies/companiesSchema';
import { emptySettingsCreationSchema, settingsCreationSchema } from './settings/settingsSchema';

export const studyCreationSchema = z.object({
    settings: settingsCreationSchema,
    companies: companiesCreationSchema,
});

export type StudyCreationSchema = z.infer<typeof studyCreationSchema>;

export const emptyStudyCreationSchema: StudyCreationSchema = {
    settings: emptySettingsCreationSchema,
    companies: emptyCompaniesCreationSchema,
};
