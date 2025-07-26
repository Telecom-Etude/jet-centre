'use server';

import db from '@/db';

export async function getCompanyByName(companyName: string): Promise<string | undefined | null> {
    try {
        const company = await db.company.findUnique({
            where: { name: companyName },
            select: { id: true },
        });
        return company?.id ?? null;
    } catch (e) {
        console.error(`[getCompanyByName] ${e}`);
    }
}

export async function createCompanyWithName(companyName: string): Promise<string | undefined> {
    try {
        const company = await db.company.create({
            data: { name: companyName, companyInfos: { create: {} } },
        });
        return company.id;
    } catch (e) {
        console.error(`[createCompanyWithName] ${e}`);
    }
}
