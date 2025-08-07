'use server';

import { User } from 'next-auth';

import { auth } from '@/actions/auth';

import { isValidPosition, Position } from './positions';

export type Viewer = User & { position?: Position };

enum ViewerResultErrorType {
    InvalidPosition,
    InvalidSession,
}

type ViewerResult =
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
    if (!isValidPosition(session.user.position))
        return {
            status: 'error',
            type: ViewerResultErrorType.InvalidPosition,
            message: `position ${session.user.position} is invalid`,
        };
    return {
        status: 'success',
        viewer: {
            ...session,
            position: session.user.position as Position, // Already checked
        },
    };
};
