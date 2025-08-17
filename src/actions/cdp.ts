'use server';

/**
 * Module that communicates with the database for the CDPs.
 */

import { Position, Gender } from '@prisma/client';

import prisma from '@/db';

/**
 * Function to fetch the different mission of a CDP.
 *
 * @export
 * @param {(string | undefined)} email of the user
 * @return {{ missions: string[]; position: string }} the list of codes of the missions (e.g. [224AE, 224028]) and the position (e.g. "Trésorier" or "Chargée template")
 */
export async function get_user_sidebar_info(name: {
    firstName: string;
    lastName: string;
}): Promise<
    { missions: string[]; position: Position | undefined; gender: Gender | undefined } | undefined
> {
    try {
        const person = await prisma.person.findUnique({
            where: { name: { firstName: name.firstName, lastName: name.lastName } },
            include: {
                user: {
                    include: {
                        admin: {
                            include: {
                                studies: {
                                    include: {
                                        information: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        const admin = person?.user?.admin;
        if (!admin) {
            return;
        }
        const missions = admin.studies.map((study) => study.information.code) || [];
        const position = admin.position ?? undefined;
        const gender = person.gender ?? undefined;
        return { missions, position, gender };
    } catch (e) {
        console.error('[get_user_missions] Prisma error: \n', e);
    }
}
