import z from 'zod';

const required_error = 'Ce champ est obligatoire. Merci de le remplir';
const min_size_error = (type: string) => `Merci de fournir un ${type} d'au moins 2 lettres`;

export const mriSubscriptionSchema = z.object({
    firstName: z.string().min(2, min_size_error('prénom')).nonoptional({ error: required_error }),
    lastName: z
        .string()
        .min(2, min_size_error('nom de famille'))
        .nonoptional({ error: required_error }),
    email: z.email({ error: 'Cet email est invalid' }).nonoptional({ error: required_error }),
});

export type MriSubscriptionType = z.infer<typeof mriSubscriptionSchema>;
