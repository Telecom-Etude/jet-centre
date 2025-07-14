'use server';

import db from '@/db';

export interface ClientListItem {
    id: string;
    name: string;
    independant?: boolean;
}

export async function getClients(): Promise<ClientListItem[] | undefined> {
    try {
        const companies = await db.company.findMany({ select: { id: true, name: true } });
        const raw_independant_clients = await db.client.findMany({
            where: { company: undefined },
            select: { id: true, person: { select: { firstName: true, lastName: true } } },
        });
        const independant_clients = raw_independant_clients.map(
            ({ id, person: { firstName, lastName } }) => ({
                id,
                name: firstName + ' ' + lastName,
                independant: true,
            })
        );
        return companies.concat(independant_clients);
    } catch (e) {
        console.error(`[getCompanies] ${e}`);
    }
}
