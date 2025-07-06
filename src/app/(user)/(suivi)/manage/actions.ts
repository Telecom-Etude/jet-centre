'use server';

import prisma from '@/db';

export async function getData() {
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
