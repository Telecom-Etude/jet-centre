'use server';

import prisma from '@/db';

export async function getAdmins() {
    try {
        return await prisma.admin.findMany({ include: { user: { include: { person: true } } } });
    } catch (e) {
        console.error(`[getUsers] ${e}`);
    }
}

export async function updatePosition(adminId: string, position: string) {
    try {
        return await prisma.admin.update({ where: { id: adminId }, data: { position } });
    } catch (e) {
        console.error(`[updatePosition] ${e}`);
    }
}

export async function getPosition(adminId: string) {
    try {
        const admin = await prisma.admin.findUnique({ where: { id: adminId } });
        return admin?.position;
    } catch (e) {
        console.error(`[updatePosition] ${e}`);
    }
}
