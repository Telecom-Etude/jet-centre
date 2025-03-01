import { DOMAINS, zDOMAINS } from '@/settings/vars';
import { z } from '@/lib/zod';

const zDIFFICULTIES = z.enum(['Faible', 'Moyenne', 'Élevée']);
const zPAYS = z.enum(['Faible', 'Moyenne', 'Élevée']);

export type Difficulties = z.infer<typeof zDIFFICULTIES>;
export const DIFFICULTIES: Difficulties[] = zDIFFICULTIES.options;

export type Pays = z.infer<typeof zPAYS>;
export const PAYS: Pays[] = zPAYS.options;

export const mriCreationSchema = z.object({
    title: z.string(),
    intro: z.string(),
    domain: zDOMAINS,
    difficulty: zDIFFICULTIES,
    pay_level: zPAYS,
    pay_under: z.number(),
    pay_over: z.number(),
    skills: z.string(),
    due_date: z.string(),
    description: z.string()
});

export type FormType = z.infer<typeof mriCreationSchema>;

export const emptyMriCreationSchema = {
    title: '',
    intro: '',
    domain: '',
    pay_under: '',
    pay_over: '',
    difficulty: '',
    pay_level: '',
    skills: '',
    due_date: '',
    description: ''
};

export const defaultMriCreationSchema = {
    ...emptyMriCreationSchema,
    ...{
        intro: 'Nous vous proposons une étude...',
        skills: 'Nous recherchons un.e intervenant.e ayant des compétences en...',
        due_date: 'Le client désire commencer le plus tôt possible.',
        description: 'Le but de cette étude est de...'
    }
};
