import prisma from '@/db';

import { Company } from './forms/companies/companiesSchema';
import Inner from './inner';

export default async function CreateStudy() {
    // -------- Companies ------- //
    const rawCompanies = await prisma.company.findMany({
        include: {
            address: true,
            companyInfos: true,
            members: {
                include: {
                    person: true,
                },
            },
        },
    });

    const companies: Company[] = rawCompanies.map((company) => ({
        id: company.id,
        name: company.name,
        size: company.companyInfos.size,
        domains: company.companyInfos.domains,
        ca: company.companyInfos.ca,
        address: {
            number: company.address.number,
            street: company.address.street,
            city: company.address.city,
            zip: company.address.zipCode,
            country: company.address.country,
        },
        members: company.members.map((member) => ({
            id: member.id,
            firstName: member.person.firstName,
            lastName: member.person.lastName,
            email: member.person.email,
            job: member.job,
            excluded: false,
        })),
    }));

    // ----- Administrator ---- //
    const rawAdmin = await prisma.admin.findMany({
        select: {
            id: true,
            user: {
                select: {
                    person: {
                        select: {
                            firstName: true,
                            lastName: true,
                            email: true,
                        },
                    },
                },
            },
        },
    });
    const admins = rawAdmin.map((admin) => ({
        id: admin.id,
        firstName: admin.user.person.firstName,
        lastName: admin.user.person.lastName,
        email: admin.user.person.email,
    }));

    return <Inner companies={companies} admins={admins} />;
}
