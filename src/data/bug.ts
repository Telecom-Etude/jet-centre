'use server';

import prisma from '@/db';

import { Viewer } from './user';

export async function registerBug(viewer: Viewer | null, history: string, description: string) {
    await prisma.bugReport.create({
        data: {
            user:
                viewer !== null
                    ? {
                          connect: {
                              id: viewer.id,
                          },
                      }
                    : undefined,
            date: new Date(),
            history,
            description,
        },
    });
}
