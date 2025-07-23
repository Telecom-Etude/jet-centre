'use server';

import db from '@/db';
import { CompanyInfos } from '@prisma/client';
import { PossibleMember } from './schema';

export async function updateCompanyInfos(
    companyInfos: CompanyInfos
): Promise<CompanyInfos | undefined> {
    try {
        return await db.companyInfos.update({
            where: { id: companyInfos.id },
            data: companyInfos,
        });
    } catch (e) {
        console.error(`[updateDomains] ${e}`);
    }
}

export async function getPossibleMembers(): Promise<PossibleMember[] | undefined> {
    try {
        const people = await db.person.findMany({
            select: {
                firstName: true,
                lastName: true,
                id: true,
                client: { select: { id: true } },
            },
        });
        return people ?? undefined;
    } catch (e) {
        console.error(`[peopleNotInCompany] ${e}`);
    }
}

export async function createMember(
    firstName: string,
    lastName: string,
    job: string,
    companyId: string
) {
    try {
        const person = await db.person.create({ data: { firstName, lastName } });
        if (!person) throw new Error("Person couldn't be created");
        const client = await db.client.create({
            data: { job, companyId, personId: person.id },
        });
        if (!client) throw new Error("Client couldn't be created");
        return { client, person };
    } catch (e) {
        console.error(`[createMember] ${e}`);
    }
}

export async function addPersonToCompany(personId: string, companyId: string, job: string) {
    try {
        return await db.client.create({ data: { personId, companyId, job } });
    } catch (e) {
        console.error(`[addPersonToCompany] ${e}`);
    }
}
