import { parseArgs } from 'node:util';

import { PrismaClient } from '@prisma/client';

const options = {
    environment: { type: 'string' as const },
};

const prisma = new PrismaClient();

async function seed_dev() {
    const email = process.env.ADMIN_EMAIL || 'example@telecom-etude.fr';
    const position = process.env.ADMIN_POSITION || 'president';

    await prisma.admin.create({
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

async function seed_prod() {
    const email = 'admin@telecom-etude.fr';

    await prisma.admin.create({
        data: {
            position: 'respo-info',
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

async function main() {
    const {
        values: { environment },
    } = parseArgs({ options });

    switch (environment) {
        case 'dev':
            await seed_dev();
            break;
        case 'prod':
            await seed_prod();
            break;
        default:
            break;
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(`#####\n${e}\n#####`);
        await prisma.$disconnect();
        process.exit(1);
    });
