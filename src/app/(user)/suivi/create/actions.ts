'use server';

import { Domain, NotificationLevel } from '@prisma/client';

import prisma from '@/db';
import { CompanySize, toPgCompanySize } from '@/settings/vars';

import { StudyCreationSchema } from './forms/schema';
import { NewAdmin } from './forms/settings/settingsSchema';

export async function createNewStudy(data: StudyCreationSchema) {
    const falseId = Math.random().toString().repeat(5);

    const cdps = await Promise.all(
        data.settings.cdps.map(async (cdp) => {
            const person = await prisma.person.findUnique({
                where: {
                    name: { firstName: cdp.firstName, lastName: cdp.lastName },
                },
                select: {
                    user: true,
                },
            });
            return { userId: person?.user?.id ?? falseId, ...cdp };
        })
    );

    const companies_ = await Promise.all(
        data.companies.companies.map(async (company) => {
            if (!company) return null;

            const members = await Promise.all(
                company.members.map(async (member) => {
                    const person = await prisma.person.findUnique({
                        where: {
                            name: { firstName: member.firstName, lastName: member.lastName },
                        },
                    });
                    return { personId: person?.id ?? falseId, ...member };
                })
            );

            return { ...company, members };
        })
    );
    const companies = companies_.filter((c) => c !== null);

    await prisma.study.create({
        data: {
            cdps: {
                connectOrCreate: cdps.map((cdp) => ({
                    where: {
                        userId: cdp.userId,
                    },
                    create: {
                        user: {
                            create: {
                                person: {
                                    create: {
                                        email: cdp.email,
                                        firstName: cdp.firstName,
                                        lastName: cdp.lastName,
                                        // If we don't connect, that means we have a new user
                                        phone_number: orUndefined((cdp as NewAdmin).tel),
                                    },
                                },
                                settings: {
                                    create: {
                                        theme: 'dark',
                                        notificationLevel: NotificationLevel.High,
                                        gui: true,
                                    },
                                },
                            },
                        },
                    },
                })),
            },
            clients: {
                create: companies
                    .map((company) => {
                        let address = undefined;
                        if (company.address) {
                            address = {
                                create: {
                                    streetNumber: company.address?.number,
                                    streetName: company.address?.street,
                                    city: company.address?.city,
                                    zipCode: company.address?.zip,
                                    country: company.address?.country,
                                },
                            };
                        }

                        return company.members
                            .filter((member) => !(member.excluded ?? false))
                            .map((member) => {
                                return {
                                    client: {
                                        connectOrCreate: {
                                            where: {
                                                personId: member.personId,
                                            },
                                            create: {
                                                job: member.job,
                                                person: {
                                                    create: {
                                                        email: member.email,
                                                        firstName: member.firstName,
                                                        lastName: member.lastName,
                                                    },
                                                },
                                                company: {
                                                    connectOrCreate: {
                                                        where: {
                                                            name: company.name,
                                                        },
                                                        create: {
                                                            name: company.name,
                                                            address,
                                                            companyInfos: {
                                                                create: {
                                                                    ca: orUndefined(company.ca),
                                                                    size: map(
                                                                        orUndefined(
                                                                            company.size
                                                                        ) as CompanySize,
                                                                        toPgCompanySize
                                                                    ),
                                                                    domains: !isEmptyString(
                                                                        company.domains
                                                                    )
                                                                        ? (company.domains as unknown as Domain[])
                                                                        : [],
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                };
                            });
                    })
                    .flat(),
            },
            information: {
                create: {
                    code: data.settings.code,
                    title: data.settings.name,
                    estimatedDuration: orUndefined(data.settings.duration),
                    deadlinePreStudy: map(orUndefined(data.settings.deadline), (x) => new Date(x)),
                    cc: data.settings.cc,
                },
            },
        },
    });
}

function isEmptyString<T>(value: T): boolean {
    return typeof value === 'string' && value === '';
}

function orUndefined<T>(value: T | string | null | undefined): T | undefined {
    return value === null || value === undefined || (typeof value === 'string' && value === '')
        ? undefined
        : (value as T);
}

function map<T, V>(x: T | undefined, callback?: (x: T) => V): V | undefined {
    return x === undefined ? undefined : callback!(x as T);
}
