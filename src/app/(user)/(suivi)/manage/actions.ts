'use server';

import prisma from '@/db';
import { Domain, StudyProgressStep } from '@prisma/client';

export interface ClientsData {
    admins: string[];
    seniors: string[];
    refs: string[];
    auditors: string[];
    clientsName: string[];
    clientsEmail: string[];
}

const Referents = ['VPO', 'President'];

const Qualite = [
    'Respo Qualite',
    'Respo Gestion Des Etudes',
    'Charge Ressources Internes',
    'Charge Gestion des Risques',
    'Charge Image de Marque',
];

export async function getClientsData(): Promise<ClientsData> {
    const rawAdmins = await prisma.admin.findMany({
        select: {
            user: { select: { person: { select: { firstName: true, lastName: true } } } },
            position: true,
            senior: true,
        },
    });
    const admins = rawAdmins
        .filter((admin) => !admin.senior)
        .map((admin) => admin.user.person.firstName + ' ' + admin.user.person.lastName);
    const seniors = rawAdmins
        .filter((admin) => admin.senior)
        .map((admin) => admin.user.person.firstName + ' ' + admin.user.person.lastName);
    const refs = rawAdmins
        .filter((admin) => (admin.position ? Referents.includes(admin.position) : false))
        .map((admin) => admin.user.person.firstName + ' ' + admin.user.person.lastName);

    const auditors = rawAdmins
        .filter((admin) => (admin.position ? admin.position in Qualite : false))
        .map((admin) => admin.user.person.firstName + ' ' + admin.user.person.lastName);

    const rawClients = await prisma.client.findMany({
        select: { person: { select: { firstName: true, lastName: true, email: true } } },
    });
    const clientsName = rawClients.map(
        (client) => client.person.firstName + ' ' + client.person.lastName
    );
    const clientsEmail = rawClients.map((client) => client.person.email);

    const data = {
        admins: admins,
        seniors: seniors,
        refs: refs,
        auditors: auditors,
        clientsName: clientsName,
        clientsEmail: clientsEmail,
    };
    return data;
}

export async function updateDatabase(data: string[] | string, type: string, id: string) {
    console.log(type);
    switch (type) {
        case 'step': {
            if (typeof data !== 'string') {
                throw new TypeError('Expected type string data');
            }
            const updated = await prisma.study.update({
                where: { id: id },
                data: { progress: { update: { step: { set: data as StudyProgressStep } } } },
            });
            console.log(updated);
            console.log('Updated !');
            break;
        }
        case 'refs':
            break;
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
            const updated = await prisma.study.update({
                where: { id: id },
                data: { cdps: { set: newCDPs.map((id) => id) } },
            });
            console.log(newCDPs);
            console.log(updated);
            console.log('Updated !');
            break;
        }
        case 'senior_cdps': {
            break;
        }
        case 'auditor': {
            break;
        }
        case 'type_study': {
            if (typeof data === 'string') {
                throw new TypeError('Expected type string[] data');
            }
            const domain: Domain[] = data.map((domain) => domain as Domain);
            const updated = await prisma.study.update({
                where: { id: id },
                data: {
                    information: { update: { domain: { set: domain.map((domain) => domain) } } },
                },
            });
            console.log(updated);
            console.log('Updated !');
            break;
        }
        case 'client_name': {
            if (typeof data === 'string') {
                throw new TypeError('Expected type string[] data');
            }
            const firstNames = data.map((name) => name.split(' ')[0]);
            const lastNames = data.map((name) => name.split(' ')[1]);
            const newClients = await prisma.studyClient.findMany({
                select: { id: true },
                where: {
                    client: {
                        person: {
                            AND: { firstName: { in: firstNames }, lastName: { in: lastNames } },
                        },
                    },
                },
            });
            const updated = await prisma.study.update({
                where: { id: id },
                data: { clients: { set: newClients.map((id) => id) } },
            });
            console.log(newClients);
            console.log(updated);
            console.log('Updated !');
            break;
        }
        case 'client_email':
            break;
        case 'next_deadline':
            break;
        case 'date_pre_study':
            break;
        case 'last_check':
            break;
        case 'next_check':
            break;
        case 'gap':
            break;
        case 'end_rm':
            break;
        case 'pvrf':
            break;
        case 'av_number':
            break;
        case 'title': {
            if (typeof data !== 'string') {
                throw new TypeError('Expected type string[] data');
            }
            const updated = await prisma.study.update({
                where: { id: id },
                data: { information: { update: { title: data } } },
            });
            console.log(updated);
            console.log('Updated !');
            break;
        }
        case 'info':
            break;
        default:
            throw new Error("Value of 'type' does not match a column !");
    }
}
