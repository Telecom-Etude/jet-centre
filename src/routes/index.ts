const ERROR_PREFIX = '/error/';
const AUTH_PREFIX = '/auth/';

export const MIDDLEWARE_ERRORS = {
    unauthorised: 'unauthorised',
    invalidPosition: 'invalid-position',
};

const PUBLIC_ROUTE_PREFIXES = [AUTH_PREFIX, ERROR_PREFIX, 'mri-mailing-list', 'posulter'];

export function isPublicRoute(pathname: string) {
    if (pathname === '/') return true;

    for (const prefix of PUBLIC_ROUTE_PREFIXES) if (pathname.startsWith(prefix)) return true;

    return false;
}

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
