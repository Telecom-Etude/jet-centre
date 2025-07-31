const ERROR_PREFIX = '/error';
const AUTH_PREFIX = '/auth';

export const ROUTES = {
    loginRedirect: '/',
    unauthorised: ERROR_PREFIX + '/unauthorized',
    invalidPosition: ERROR_PREFIX + '/invalid-position',
    signIn: AUTH_PREFIX + '/signin',
    signOut: AUTH_PREFIX + '/signout',
    missingRedirect: ERROR_PREFIX + '/missing-redirect',
} as const;

export type StudyParams = { params: Promise<{ study: string }> };
