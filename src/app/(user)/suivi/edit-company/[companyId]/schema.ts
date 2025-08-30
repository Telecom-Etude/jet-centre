import { z } from 'zod';

const required_error = 'Ce champ est obligatoire. Merci de le remplir';
const min_size_error = (type: string) => `Merci de fournir un ${type} d'au moins 2 lettres`;

export const newEmployeeSchema = z.object({
    firstName: z.string().min(2, min_size_error('prénom')).nonoptional({ error: required_error }),
    lastName: z
        .string()
        .min(2, min_size_error('nom de famille'))
        .nonoptional({ error: required_error }),
    job: z.string().min(2, min_size_error("nom d'emploi")).nonoptional({ error: required_error }),
});

export type NewEmployeeSchemaType = z.infer<typeof newEmployeeSchema>;

export interface Member {
    firstName: string;
    lastName: string;
    personId: string;
    clientId: string;
    job: string;
}

export interface PossibleMember {
    firstName: string;
    lastName: string;
    id: string;
    client: { id: string } | null;
}
