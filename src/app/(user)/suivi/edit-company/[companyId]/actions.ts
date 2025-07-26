'use server';

import { CompanyInfos } from '@prisma/client';

import db from '@/db';

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

/**
 * Retrieves all the people that are not employees in any company.
 */
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
        return people?.filter((person) => person.client === null);
    } catch (e) {
        console.error(`[peopleNotInCompany] ${e}`);
    }
}

/**
 * Creates a person and the associated employee in one go.
 */
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

/**
 * Updates the name of person
 */
export async function updatePerson(firstName: string, lastName: string, personId: string) {
    try {
        return await db.person.update({ where: { id: personId }, data: { firstName, lastName } });
    } catch (e) {
        console.error(`[updatePerson] ${e}`);
    }
}

/**
 * Updates the job of an employee
 * */
export async function updateJob(job: string, clientId: string) {
    try {
        return await db.client.update({ where: { id: clientId }, data: { job } });
    } catch (e) {
        console.error(`[updateJob] ${e}`);
    }
}

/**
 * Removes a person from a company.
 *
 * The person will still exist after this deletion
 * */
export async function removeClient(clientId: string) {
    try {
        return await db.client.delete({ where: { id: clientId } });
    } catch (e) {
        console.error(`[removeClient] ${e}`);
    }
}

/**
 * Adds an existing person to a company
 * */
export async function createClient(personId: string, companyId: string) {
    try {
        return await db.client.create({ data: { personId, companyId, job: '' } });
    } catch (e) {
        console.error(`[createClient] ${e}`);
    }
}
