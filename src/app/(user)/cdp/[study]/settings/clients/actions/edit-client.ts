import { Address, Prisma } from '@prisma/client';

import prisma from '@/db';

import { ClientFormType } from '../schema';

export type Data<UpdateInput, UncheckedUpdateInput> =
    | (Prisma.Without<UpdateInput, UncheckedUpdateInput> & UncheckedUpdateInput)
    | (Prisma.Without<UncheckedUpdateInput, UpdateInput> & Prisma.ClientUpdateInput);

type PlainAddress = Omit<Address, 'id' | 'personId' | 'companyId'>;

export async function editStudyClient(clientId: string, clientData: ClientFormType) {
    try {
        const data: Data<Prisma.ClientUpdateInput, Prisma.ClientUncheckedUpdateInput> = {
            job: clientData.job,
            person: {
                update: {
                    firstName: clientData.firstName,
                    lastName: clientData.lastName,
                    email: clientData.email,
                    phone_number: clientData.number,
                },
            },
        };

        if (!data.person?.update) throw new Error('unreachable: missing update on person');

        if (clientData.address) {
            const address: PlainAddress = {
                streetNumber: clientData.address.number,
                streetName: clientData.address.street,
                city: clientData.address.city,
                country: clientData.address.country,
                postalCode: clientData.address.postalCode,
            };

            if (clientData.address.id) {
                data.person.update.address = {
                    update: address,
                };
            } else {
                data.person.update.address = {
                    create: address,
                };
            }
        }

        if (clientData.company) {
            if (clientData.company.id) {
                data.company = {
                    update: {
                        where: { id: clientData.company.id },
                        data: {
                            name: clientData.company.name,
                            companyInfos: {
                                update: {
                                    size: clientData.company.size ?? null,
                                    ca: clientData.company.ca ?? null,
                                    domains: clientData.company.domains,
                                },
                            },
                        },
                    },
                };
            } else {
                data.company = {
                    create: {
                        name: clientData.company.name,
                        companyInfos: {
                            create: {
                                size: clientData.company.size ?? null,
                                ca: clientData.company.ca ?? null,
                                domains: clientData.company.domains,
                            },
                        },
                    },
                };
            }

            if (clientData.company.address) {
                const address: PlainAddress = {
                    streetNumber: clientData.company.address?.number,
                    streetName: clientData.company.address?.street,
                    city: clientData.company.address?.city,
                    country: clientData.company.address?.country,
                    postalCode: clientData.company.address?.postalCode,
                };

                if (data.company.create && clientData.address?.id) {
                    throw new Error("unreachable: address can't exist without company");
                } else if (data.company.create) {
                    data.company.create.address = { create: address };
                } else if (data.company.update && clientData.address?.id) {
                    data.company.update.address = { update: address };
                } else if (data.company.update) {
                    data.company.update.address = { create: address };
                } else throw new Error('unreachable: company has neither create or update');
            }
        }

        await prisma.client.update({
            where: { id: clientId },
            data,
        });
    } catch (e) {
        console.error(`[editStudyClient] ${e}`);
    }
}
