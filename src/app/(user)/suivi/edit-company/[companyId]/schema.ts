import { z } from 'zod';

const required_error = 'Ce champ est obligatoire. Merci de le remplir';
const min_size_error = "Merci de fournir un prénom d'au moins 2 lettres";

export const newEmployeeSchema = z.object({
    firstName: z.string({ required_error }).min(2, min_size_error),
    lastName: z.string({ required_error }).min(2, min_size_error),
    job: z.string({ required_error }).min(2, min_size_error),
});

export type NewEmployeeSchemaType = z.infer<typeof newEmployeeSchema>;
