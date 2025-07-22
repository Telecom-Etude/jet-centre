'use server';

import db from '@/db';
import { personName } from '@/lib/utils';
import { CompanyInfos } from '@prisma/client';

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

export async function getCompanyLessPeople() {
    try {
        const companyLessPeople = await db.person.findMany({
            select: {
                firstName: true,
                lastName: true,
                id: true,
                clients: { select: { id: true } },
            },
        });

        return companyLessPeople.map((person) => ({
            value: person.id,
            label: personName(person),
            disable: !!person.clients,
            clientId: person.clients?.id,
        }));
    } catch (e) {
        console.error(`[peopleNotInCompany] ${e}`);
    }
}

export async function addPersonToCompany(personId: string, companyId: string, job: string) {
    try {
        return await db.client.create({ data: { personId, companyId, job } });
    } catch (e) {
        console.error(`[addPersonToCompany] ${e}`);
    }
}
