import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed_dev() {
    const email = process.env.ADMIN_EMAIL || 'example@telecom-etude.fr';
    const position = process.env.ADMIN_POSITION || 'president';

    const admin = await prisma.admin.create({
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

    const study = await prisma.study.create({
        data: {
            information: {
                create: {
                    title: 'Dummy study',
                    code: '224042',
                    cc: false,
                },
            },
            cdps: {
                connect: {
                    userId: admin.userId,
                },
            },
        },
    });

    await prisma.mri.create({
        data: {
            study: {
                connect: {
                    id: study.id,
                },
            },
            descriptionText: 'Bla bla bla ceci est le texte de description du MRI 1.',
            difficulty: 'High',
            introductionText:
                "Bla bla bla ceci est le texte d'introduction du MRI. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            title: 'Titre du MRI 1',
        },
    });

    await prisma.mri.create({
        data: {
            study: {
                connect: {
                    id: study.id,
                },
            },
            descriptionText: 'Bla bla bla ceci est le texte de description du MRI 2.',
            difficulty: 'Medium',
            introductionText:
                "Bla bla bla ceci est le texte d'introduction du MRI 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            title: 'Titre du MRI 2',
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
    if (process.env.NODE_ENV === 'production') return await seed_prod();

    await seed_dev();
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
