import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.admin.create({
        data: {
            position: 'Admin',
            user: {
                create: {
                    person: {
                        create: {
                            email: process.env.ADMIN_EMAIL!,
                            firstName: '',
                            lastName: '',
                        },
                    },
                },
            },
        },
    });
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
