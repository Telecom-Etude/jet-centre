import { Company } from './forms/companies/companiesSchema';
import Inner from './inner';
import prisma from '@/db';

export default async function CreateStudy() {
    // -------- Companies ------- //
    const rawCompanies = await prisma.companies.findMany({
        include: {
            address: true,
            companyInfos: true,
            members: {
                include: {
                    person: true
                }
            }
        }
    });

    // TODO: fix this ts-ignore
    // @ts-ignore (I don't see what ts don't like here, so I'll ignore it)
    const companies: Company[] = rawCompanies.map((c) => ({
        id: c.id,
        name: c.name,
        size: c.companyInfos.size,
        domains: c.companyInfos.domains,
        ca: c.companyInfos.ca,
        address: {
            number: c.address.number,
            street: c.address.street,
            city: c.address.city,
            zip: c.address.zipCode,
            country: c.address.country
        },
        members: c.members.map((m) => ({
            id: m.id,
            firstName: m.person.firstName,
            lastName: m.person.lastName,
            email: m.person.email,
            job: m.job,
            excluded: false
        }))
    }));

    // ----- Administrator ---- //
    const rawAdmin = await prisma.admins.findMany({
        select: {
            id: true,
            user: {
                select: {
                    person: {
                        select: {
                            firstName: true,
                            lastName: true,
                            email: true
                        }
                    }
                }
            }
        }
    });
    const admins = rawAdmin.map((a) => ({
        id: a.id,
        firstName: a.user.person.firstName,
        lastName: a.user.person.lastName,
        email: a.user.person.email
    }));

    return (
        <>
            <Inner companies={companies} admins={admins} />
        </>
    );
}
