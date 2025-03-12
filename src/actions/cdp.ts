'use server';

/**
 * Module that communicates with the database for the CDPs.
 */

import prisma from '@/db';

/**
 * Function to fetch the different mission of a CDP.
 *
 * @export
 * @param {(string | undefined)} email of the user
 * @return {{ missions: string[]; position: string }} the list of codes of the missions (e.g. [224AE, 224028]) and the position (e.g. "Trésorier" or "Chargée template")
 */
export async function get_user_sidebar_info(
    email: string | undefined
): Promise<{ missions: string[]; position: string } | undefined> {
    if (!email) {
        return;
    }
    try {
        const person = await prisma.people.findUnique({
            where: { email },
            include: {
                User: {
                    include: {
                        Admins: {
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
        const admin = person?.User?.Admins;
        if (!admin) {
            return;
        }
        const missions = admin.studies.map((study) => study.information.code) || [];
        const position = admin.position || 'Non défini';
        return { missions, position };
    } catch (e) {
        console.error('[get_user_missions] Prisma error: \n', e);
    }
}
