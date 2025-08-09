import { PrismaClient } from '@prisma/client';

import { seedAdminsTestData } from './seed/admins';
import { seedAssigneesTestData } from './seed/assignees';
import { seedStudiesTestData } from './seed/study';
import { seedStudyAssigneesTestData } from './seed/study-assignee';
import { seedClientsTestData } from './seed/client';
import { seedCompaniesTestData } from './seed/company';

const db = new PrismaClient();

async function seedDev() {
    const email = process.env.ADMIN_EMAIL;
    if (!email) return console.error('ADMIN_EMAIL not provided. Skipping seed.');

    const position = process.env.ADMIN_POSITION ?? 'Info';

    await db.admin.create({
        data: {
            position,
            user: {
                create: {
                    person: {
                        create: {
                            email,
                            firstName: '',
                            lastName: '',
                        },
                    },
                },
            },
        },
    });

async function seedProd() {
    const email = 'admin@telecom-etude.fr';

    await db.admin.create({
        data: {
            position: 'Info',
            user: {
                create: {
                    person: {
                        create: {
                            email,
                            firstName: 'admin',
                            lastName: 'admin',
                        },
                    },
                },
            },
        },
    });
}

async function main() {
    if (process.env.ENV === 'prod') return await seedProd();
    if (process.env.ENV !== 'dev')
        throw new Error(
            `Invalid ENV var in .env: expected 'prod' or 'dev', found ${process.env.ENV}`
        );

    await seedDev();

    const assignees = await seedAssigneesTestData(db);

    const admins = await seedAdminsTestData(db);
    const studies = await seedStudiesTestData(db, admins);
    const studiesWithMri = studies.filter(
        (study): study is { studyId: string; mriId: string } => study.mriId !== undefined
    );
    const studyAssignees = await seedStudyAssigneesTestData(db, assignees, studiesWithMri);

    const clients = await seedClientsTestData(db);
    const companyClients = clients
        .filter((client) => !client.privateIndividual)
        .map((client) => client.clientId);
    await seedCompaniesTestData(db, companyClients);

    return;
}

main()
    .then(async () => {
        await db.$disconnect();
    })
    .catch(async (e) => {
        console.error(`#####\n${e}\n#####`);
        await db.$disconnect();
        process.exit(1);
    });
