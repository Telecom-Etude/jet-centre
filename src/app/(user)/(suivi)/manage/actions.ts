'use server';

import prisma from '@/db';

export interface ClientsData {
    admins: string[];
    clientsName: string[];
    clientsEmail: string[];
}

export async function getClientsData(): Promise<ClientsData> {
    const rawAdmins = await prisma.admin.findMany({
        select: {
            user: { select: { person: { select: { firstName: true, lastName: true } } } },
        },
    });
    const admins = rawAdmins.map(
        (admin) => admin.user.person.firstName + ' ' + admin.user.person.lastName
    );

    const rawClients = await prisma.client.findMany({
        select: { person: { select: { firstName: true, lastName: true, email: true } } },
    });
    const clientsName = rawClients.map(
        (client) => client.person.firstName + ' ' + client.person.lastName
    );
    const clientsEmail = rawClients.map((client) => client.person.email);

    const data = {
        admins: admins,
        clientsName: clientsName,
        clientsEmail: clientsEmail,
    };
    return data;
}

export async function updateDatabase(data: string[] | string, type: string, id: string) {
    switch (type) {
        case 'step':
        case 'refs':
        case 'cdps': {
            if (typeof data === 'string') {
                throw new TypeError('Expected type string[] data');
            }
            const firstNames = data.map((name) => name.split(' ')[0]);
            const lastNames = data.map((name) => name.split(' ')[1]);
            const newCDPs = await prisma.admin.findMany({
                select: { id: true },
                where: {
                    user: {
                        person: {
                            AND: { firstName: { in: firstNames }, lastName: { in: lastNames } },
                        },
                    },
                },
            });
            await prisma.study.update({
                where: { id: id },
                data: { cdps: { set: newCDPs.map((id) => id) } },
            });
            console.log('Updated !');
        }
        case 'type_study':
        case 'client_name':
        case 'client_email':
        case 'next_deadline':
        case 'date_pre_study':
        case 'last_check':
        case 'next_check':
        case 'gap':
        case 'end_rm':
        case 'pvrf':
        case 'av_number':
        case 'title':
        case 'info':
    }
}
