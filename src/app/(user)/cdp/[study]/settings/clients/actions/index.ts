'use server';

import { Prisma } from '@prisma/client';

import prisma from '@/db';

import { ClientFormType, StudyClientsFormType } from '../schema';

import { Data } from './edit-client';

export async function getStudyClients(
    studyCode: string
): Promise<StudyClientsFormType | undefined> {
    try {
        const study = (
            await prisma.studyInfos.findUnique({
                where: { code: studyCode },
                select: {
                    study: {
                        select: {
                            id: true,
                            clients: {
                                select: {
                                    id: true,
                                    client: {
                                        include: {
                                            company: {
                                                select: {
                                                    name: true,
                                                    companyInfos: true,
                                                    address: true,
                                                },
                                            },
                                            person: { include: { address: true } },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            })
        )?.study;
        if (!study) {
            throw new Error('Erroneous study code');
        }

        const clients: ClientFormType[] = study.clients.map(({ id, client }) => {
            const missionClient: ClientFormType = {
                studyClientId: id,
                clientId: client.id,
                job: client.job,
                firstName: client.person.firstName,
                lastName: client.person.lastName,
                email: client.person.email ?? undefined,
                number: client.person.phone_number ?? undefined,
            };

            if (client.person.address) {
                missionClient.address = {
                    number: client.person.address.streetNumber,
                    street: client.person.address.streetName,
                    city: client.person.address.city,
                    country: client.person.address.country,
                    postalCode: client.person.address.postalCode,
                };
            }

            if (client.company) {
                missionClient.company = {
                    name: client.company.name,
                    size: client.company.companyInfos.size ?? undefined,
                    ca: client.company.companyInfos.ca ?? undefined,
                    domains: client.company.companyInfos.domains,
                    id: client.company.companyInfos.id,
                };

                if (client.company.address) {
                    missionClient.company.address = {
                        number: client.company.address.streetNumber,
                        street: client.company.address.streetName,
                        city: client.company.address.city,
                        country: client.company.address.country,
                        postalCode: client.company.address.postalCode,
                    };
                }
            }
            return missionClient;
        });

        return {
            clients,
            studyId: study.id,
        };
    } catch (e) {
        console.error(`[getStudyClients] ${e}`);
    }
}

export async function newStudyClient(studyId: string, clientData: ClientFormType) {
    try {
        const data: Data<Prisma.StudyUpdateInput, Prisma.StudyUncheckedUpdateInput> = {
            clients: {
                create: {
                    client: {
                        create: {
                            job: clientData.job,
                            person: {
                                create: {
                                    firstName: clientData.firstName,
                                    lastName: clientData.lastName,
                                    email: clientData.email,
                                    phone_number: clientData.number,
                                },
                            },
                        },
                    },
                },
            },
        };

        if (
            !data.clients?.create ||
            !('client' in data.clients.create) ||
            !data.clients?.create?.client?.create?.person?.create
        ) {
            throw new Error('unreachable: missing create on person');
        }

        if (clientData.address) {
            data.clients.create.client.create.person.create.address = {
                create: {
                    streetNumber: clientData.address?.number,
                    streetName: clientData.address?.street,
                    city: clientData.address?.city,
                    country: clientData.address?.country,
                    postalCode: clientData.address?.postalCode,
                },
            };
        }

        if (clientData.company) {
            data.clients.create.client.create.company = {
                create: {
                    name: clientData.company?.name,
                    address: {},
                    companyInfos: {
                        create: {
                            domains: clientData.company?.domains,
                            size: clientData.company?.size,
                            ca: clientData.company?.ca,
                        },
                    },
                },
            };

            if (!data.clients.create.client.create.company.create)
                throw new Error('unreachable: missing create on company');
            if (clientData.company.address) {
                data.clients.create.client.create.company.create.address = {
                    create: {
                        streetNumber: clientData.company?.address?.number,
                        streetName: clientData.company?.address?.street,
                        city: clientData.company?.address?.city,
                        country: clientData.company?.address?.country,
                        postalCode: clientData.company?.address?.postalCode,
                    },
                };
            }
        }

        await prisma.study.update({
            where: { id: studyId },
            data,
        });
    } catch (e) {
        console.error(`[newStudyClient] ${e}`);
    }
}

export async function removeStudyClient(studyClientId: string) {
    try {
        await prisma.studyClient.delete({ where: { id: studyClientId } });
    } catch (e) {
        console.error(`[removeStudyClient] ${e}`);
    }
}
