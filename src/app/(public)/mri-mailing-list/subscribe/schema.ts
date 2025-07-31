import z from 'zod';

const required_error = 'Ce champ est obligatoire. Merci de le remplir';
const min_size_error = (type: string) => `Merci de fournir un ${type} d'au moins 2 lettres`;

export const mriSubscriptionSchema = z.object({
    firstName: z.string({ required_error }).min(2, min_size_error('prénom')),
    lastName: z.string({ required_error }).min(2, min_size_error('nom de famille')),
    email: z.string({ required_error }).email('Cet email est invalid'),
});

export type MriSubscriptionType = z.infer<typeof mriSubscriptionSchema>;
