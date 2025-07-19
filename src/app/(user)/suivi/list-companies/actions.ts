'use server';

import db from '@/db';
import { CompanyName } from './types';

export async function getCompanies(): Promise<CompanyName[] | undefined> {
    try {
        const companies = await db.company.findMany({ select: { id: true, name: true } });
        return companies;
    } catch (e) {
        console.error(`[getCompanies] ${e}`);
    }
}
