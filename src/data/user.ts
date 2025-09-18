'use server';

import { User } from 'next-auth';

import { auth } from '@/actions/auth';
import prisma from '@/db';
import { StudyWithCode } from '@/types/user';

import { isExecutiveBoard, isValidPosition, Position } from './positions';

export type Viewer = Omit<User, 'id'> & {
    id: NonNullable<User['id']>;
    firstName: string;
    lastName: string;
    position?: Position;
};

enum ViewerResultErrorType {
    InvalidPosition,
    InvalidSession,
    InvalidUser,
}

export type ViewerResult =
    | { status: 'success'; viewer: Viewer }
    | { status: 'error'; type: ViewerResultErrorType; message: string };

export const getViewer = async (): Promise<ViewerResult> => {
    const session = await auth();
    if (session === null)
        return {
            status: 'error',
            type: ViewerResultErrorType.InvalidSession,
            message: 'Got null session while trying to get viewer',
        };
    const position = session.user.position;
    if (!isValidPosition(position))
        return {
            status: 'error',
            type: ViewerResultErrorType.InvalidPosition,
            message: `position ${session.user.position} is invalid`,
        };
    const user = session.user;
    if (user.id === undefined) {
        return {
            status: 'error',
            type: ViewerResultErrorType.InvalidUser,
            message: `user (id: ${user.id}, email: ${user.email}) is invalid`,
        };
    }
    return {
        status: 'success',
        viewer: {
            ...user,
            id: user.id,
            position,
        },
    };
};

const isStudyAccessibleToViewer = (viewer: Viewer) => ({
    OR: [
        {
            // If the study is not confidential
            information: {
                confidential: false,
            },
        },
        {
            // If the user is a member of the executive board
            information: {
                confidential: isExecutiveBoard(viewer),
            },
        },
        {
            // If the user is a CDP on the study
            cdps: {
                some: {
                    userId: viewer.id,
                },
            },
        },
    ],
});

export async function getUserStudies(viewer: Viewer): Promise<StudyWithCode[]> {
    return (
        await prisma.study.findMany({
            include: {
                information: {
                    select: {
                        code: true,
                    },
                },
            },
            where: {
                AND: [
                    {
                        cdps: {
                            some: {
                                userId: viewer.id,
                            },
                        },
                    },
                    isStudyAccessibleToViewer(viewer),
                ],
            },
        })
    ).map((study) => {
        return {
            id: study.id,
            information: {
                code: study.information.code,
            },
        };
    });
}
