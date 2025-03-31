'use server';

import prisma from '@/db';

export async function getUsers() {
    try {
        return await prisma.admin.findMany({ include: { user: { include: { person: true } } } });
    } catch (e) {
        console.error(`[getUsers] ${e}`);
    }
}
