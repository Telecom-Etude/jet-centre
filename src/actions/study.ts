'use server';

import prisma from '@/db';

export interface ServerMriData {
    description?: string;
    domain?: string;
    title?: string;
}

export async function loadMriData(code: string): Promise<ServerMriData | undefined> {
    try {
        const infos = await prisma.studyInfos.findUnique({
            where: { code },
            include: { domain: true },
        });
        if (!infos) {
            throw new Error('Failed to fetch mission in database.');
        }
        return {
            title: infos.title ?? undefined,
            domain: infos.domain[0]?.name,
            description: infos.description ?? undefined,
        };
    } catch (e) {
        console.error(`[loadMriData] ${e}`);
    }
}
