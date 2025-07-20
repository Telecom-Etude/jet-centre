'use server';

import db from '@/db';
import { Address } from '@prisma/client';

export async function upsertAddress(
    address: Omit<Address, 'id'> & { id: string | undefined }
): Promise<Address | undefined> {
    try {
        const dbAddress = await db.address.upsert({
            where: { id: address.id },
            update: address,
            create: address,
        });
        return dbAddress;
    } catch (e) {
        console.error(`[upsertAddress] ${e}`);
    }
}
