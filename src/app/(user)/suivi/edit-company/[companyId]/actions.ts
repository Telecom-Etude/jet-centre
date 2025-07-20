'use server';

import db from '@/db';
import { Domain } from '@prisma/client';

export async function updateDomains(
    companyInfosId: string,
    domains: Domain[]
): Promise<Domain[] | undefined> {
    try {
        const updated = await db.companyInfos.update({
            where: { id: companyInfosId },
            data: { domains },
        });
        return updated.domains;
    } catch (e) {
        console.error(`[updateDomains] ${e}`);
    }
}
