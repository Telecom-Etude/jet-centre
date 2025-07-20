'use server';

import db from '@/db';
import { Address } from '@prisma/client';

export async function upsertAddress(
    address: Omit<Address, 'id'> & { id: string | undefined }
): Promise<Address | undefined> {
    if (address.id === undefined) {
        try {
            const dbAddress = await db.address.create({
                data: address,
            });
            return dbAddress;
        } catch (e) {
            console.error(
                `[upsertAddress-create] ${e}\n----------\n\x1b[31m${JSON.stringify(address)}\x1b[0m\n----------\n`
            );
        }
    } else {
        try {
            const dbAddress = await db.address.upsert({
                where: { id: address.id },
                update: address,
                create: address,
            });
            return dbAddress;
        } catch (e) {
            console.error(
                `[upsertAddress-upsert] ${e}\n----------\n\x1b[31m${JSON.stringify(address)}\x1b[0m\n----------\n`
            );
        }
    }
}
