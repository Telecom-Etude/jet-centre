import { PrismaClient } from '@prisma/client';

import { seedAdminsTestData } from './seed/admins';
import { seedAssigneesTestData } from './seed/assignees';
import { seedClientsTestData } from './seed/client';
import { seedCompaniesTestData } from './seed/company';
import { seedStudiesTestData } from './seed/study';
import { seedStudyAssigneesTestData } from './seed/study-assignee';
import { seedStudyClientsTestData } from './seed/study-client';

const db = new PrismaClient();

async function seedFirstUser() {
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
}

async function seedTestData() {
    const assignees = await seedAssigneesTestData(db);

    const admins = await seedAdminsTestData(db);
    const studies = await seedStudiesTestData(db, admins);
    const studiesWithMri = studies.filter(
        (study): study is { studyId: string; mriId: string } => study.mriId !== undefined
    );
    await seedStudyAssigneesTestData(db, assignees, studiesWithMri);

    const clients = await seedClientsTestData(db);
    const companyClients = clients
        .filter((client) => !client.privateIndividual)
        .map((client) => client.clientId);
    await seedCompaniesTestData(db, companyClients);

    const studyIds = studies.map((study) => study.studyId);
    const clientIds = clients.map((client) => client.clientId);
    await seedStudyClientsTestData(db, clientIds, studyIds);
}

async function main() {
    await seedFirstUser();

    if (process.env.ENV === 'prod') return;
    if (process.env.ENV !== 'dev')
        throw new Error(
            `Invalid ENV var in .env: expected 'prod' or 'dev', found ${process.env.ENV}`
        );

    if (!process.env.NO_DB_INIT) {
        process.stdout.write('🌱  Adding the test data for development database.');
        seedTestData();
    }

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
