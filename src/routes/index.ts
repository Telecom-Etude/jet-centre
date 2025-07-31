const ERROR_PREFIX = '/error/';
const AUTH_PREFIX = '/auth/';

export const MIDDLEWARE_ERRORS = {
    unauthorised: 'unauthorised',
    invalidPosition: 'invalid-position',
};

export const ROUTES = {
    loginRedirect: '/',
    /* Error routes */
    unauthorised: ERROR_PREFIX + MIDDLEWARE_ERRORS.unauthorised,
    invalidPosition: ERROR_PREFIX + MIDDLEWARE_ERRORS.invalidPosition,
    /* Auth routes */
    signIn: AUTH_PREFIX + 'signin',
    signOut: AUTH_PREFIX + 'signout',
} as const;

export type StudyParams = { params: Promise<{ study: string }> };
