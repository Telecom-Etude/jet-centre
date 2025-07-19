'use server';

import db from '@/db';
import { CompanyName } from './types';
import { Address, Client, Company, CompanyInfos, Person } from '@prisma/client';

export async function getCompanies(): Promise<CompanyName[] | undefined> {
    try {
        const companies = await db.company.findMany({ select: { id: true, name: true } });
        return companies;
    } catch (e) {
        console.error(`[getCompanies] ${e}`);
    }
}

export interface FullCompany extends Company {
    address: Address | null;
    companyInfos: CompanyInfos;
    members: Member[];
}

interface Member extends Client {
    person: Person;
    studyClients: StudyClient[];
}

type StudyClient = { study: { information: { code: string } } };

export async function getCompanyFromId(id: string): Promise<FullCompany | null> {
    try {
        const company = await db.company.findUnique({
            where: { id },
            include: {
                address: true,
                companyInfos: true,
                members: {
                    include: {
                        person: true,
                        studyClients: {
                            select: {
                                study: { select: { information: { select: { code: true } } } },
                            },
                        },
                    },
                },
            },
        });

        return company;
    } catch (e) {
        console.error(`[getCompanyFromId] ${e}`);
        return null;
    }
}
