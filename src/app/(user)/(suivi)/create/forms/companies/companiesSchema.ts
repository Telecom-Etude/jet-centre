import { z, EMPTY_STRING, required, nonemptyexcluded } from '@/lib/zod';
import { zCompanySize, zDOMAINS } from '@/settings/vars';

const zIdx = z.object({
    idx: z.number().int(),
});

const zIsNew = z.object({
    isNew: z.boolean(),
});

// ====================================================== //
// ======================= Contact ====================== //
// ====================================================== //

export const zContact = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    job: z.string(),
    excluded: z.boolean().default(false),
    id: z.string(),
});

// ~~~~~~~~~~~ Contact Creation ~~~~~~~~~~ //
export const contactCreationSchema = z.object({
    firstName: z.string().superRefine(required),
    lastName: z.string().superRefine(required),
    email: z.string().email(),
    tel: z.string().or(EMPTY_STRING),
    job: z.string(),
    description: z.string(),
    excluded: z.boolean().default(false),
});

export type ContactCreationSchema = z.infer<typeof contactCreationSchema>;
export const emptyContactCreationSchema: ContactCreationSchema = {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    description: '',
    job: '',
    excluded: false,
};

// ~~~~~~~~~~ Contact Form Value ~~~~~~~~~ //
export const zNewContact = contactCreationSchema.merge(zIsNew);
export type NewContact = z.infer<typeof zNewContact>;

export const zContactFormValue = zNewContact.or(zContact);
export type ContactFormValue = z.infer<typeof zContactFormValue>;

// ====================================================== //
// ======================= Company ====================== //
// ====================================================== //

// ~~~~~~~~~~~~~~~ Company ~~~~~~~~~~~~~~~ //
export type CompanySize = z.infer<typeof zCompanySize>;
export const COMPANY_SIZES: CompanySize[] = zCompanySize.options;

export const zCompany = z.object({
    id: z.string(),
    name: z.string().superRefine(required),
    size: zCompanySize.or(EMPTY_STRING).nullish(),
    domains: z.array(zDOMAINS).or(EMPTY_STRING),
    ca: z.number().or(EMPTY_STRING).nullable(),
    address: z.object({
        number: z.string(),
        street: z.string(),
        city: z.string(),
        zip: z.string(),
        country: z.string(),
    }),
    members: zContactFormValue.array().superRefine(nonemptyexcluded),
});
export type Company = z.infer<typeof zCompany>;

export const zNewCompany = zCompany.merge(zIsNew);
export type NewCompany = z.infer<typeof zNewCompany>;

export const zCompanyFormValue = zNewCompany.merge(zIdx).or(zCompany.merge(zIdx));
export type CompanyFormValue = z.infer<typeof zCompanyFormValue>;

export const emptyCompany = {
    name: '',
    size: '',
    domains: [],
    ca: '',
    address: {
        number: '',
        street: '',
        city: '',
        zip: '',
        country: '',
    },
    members: [],
};

// ~~~~~~~~~~~~~~ Companies ~~~~~~~~~~~~~~ //
export const companiesCreationSchema = z.object({
    companies: z.array(zCompanyFormValue.nullable()),
});
export type CompaniesCreationSchema = z.infer<typeof companiesCreationSchema>;

export const emptyCompaniesCreationSchema: CompaniesCreationSchema = { companies: [] };
