import { ROLE_NAME_CDP } from '../src/settings/roles';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const cdp = await prisma.roles.upsert({
        where: { name: ROLE_NAME_CDP },
        update: {},
        create: {
            name: ROLE_NAME_CDP,
        },
    });

    console.log('Role created :', cdp);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
