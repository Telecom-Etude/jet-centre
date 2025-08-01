import { PrismaClient } from '@prisma/client';

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
    if (process.env.ENV === 'dev') return await seedDev();

    throw new Error(`Invalid ENV var in .env: expected 'prod' or 'dev', found ${process.env.ENV}`);
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
