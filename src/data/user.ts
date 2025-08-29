'use server';

import { User } from 'next-auth';

import { auth } from '@/actions/auth';

import { isValidPosition, Position } from './positions';

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
