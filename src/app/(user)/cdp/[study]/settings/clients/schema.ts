import { CompanySize, Domain } from '@prisma/client';
import { z } from 'zod';

const addressSchema = z.object({
    id: z.string().optional(),
    number: z.string(),
    street: z.string(),
    city: z.string(),
    country: z.string(),
    postalCode: z.string(),
});

const companySchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    address: addressSchema.optional(),
    size: z.nativeEnum(CompanySize).optional(),
    ca: z.number().optional(),
    domains: z.array(z.nativeEnum(Domain)),
});

export const clientFormSchema = z.object({
    studyClientId: z.string().optional(),
    clientId: z.string().optional(),
    company: companySchema.optional(),
    job: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    number: z.string().optional(),
    email: z.string().optional(),
    address: addressSchema.optional(),
});

type clientFormSchemaTypes = z.ZodObject<{
    studyClientId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodString>;
    company: z.ZodOptional<typeof companySchema>;
    job: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    number: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<typeof addressSchema>;
}>;

export type ClientFormType = z.infer<clientFormSchemaTypes>;

export type StudyClientsFormType = z.infer<
    z.ZodObject<{ clients: z.ZodArray<clientFormSchemaTypes>; studyId: z.ZodString }>
>;
