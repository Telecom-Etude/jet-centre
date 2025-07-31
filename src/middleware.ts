/**
 * In our case, the middleware's goal is to handle authentication.
 * This module exports a default function that acts as a middleware for Next.js.
 * It is responsible for redirecting or rewriting URLs based on the authentication status.
 * The module also exports a configuration object for specifying the URL matcher.
 * The middleware is great as it intercepts all requests before they reach the page.
 *
 * @file middleware.ts
 * @donotmove - This file mus't be moved to another directory, as
 * it's location has got importance.
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { Session } from 'next-auth';

import { auth } from './actions/auth';
import { redis } from './db';
import { log } from './lib/utils';
import { isAuthorisedToRoute, isNonAuthPublicRoute, ROUTES } from './routes';
import { ROLES_SIDEBARS } from './settings/sidebars/sidebars';

/**
 * Redirect current url onto another page.
 *
 * Contrarely to rewrite, this actually edits the URL and history.
 * */
function redirect(url: string, request: NextAuthRequest): NextResponse {
    return NextResponse.redirect(new URL(url, request.nextUrl));
}

/**
 * Rewrite current url onto another page.
 *
 *
 * Rewrite means that the page of the given url will be rendered, but in the navigation bar,
 * you will still be able to see the old URL that caused the error.
 *
 * This is useful for instance when accessing a non-existant page because of a typo.
 * The user has to solely change one character instead of having to rewrite the entire url
 * because it was replaced by /error/not-found.
 *
 * The history of visited page will also log the page the user trying to access and not the one he was rewritten to.
 * */
function rewrite(url: string, request: NextAuthRequest): NextResponse {
    return NextResponse.rewrite(new URL(url, request.nextUrl));
}

/**
 * Handles the logic for redis in the middleware
 */
async function redisMiddleware() {
    if (!process.env.NO_CACHE) {
        const res = await redis?.get('test');
        console.log('redis returned', res);
        if (res === null) {
            redis?.set('test', 0);
        } else {
            redis?.incr('test');
        }
    }
}

/**
 * Handles the logic for users that are logged in.
 */
async function loggedInMiddleware(
    pathname: string,
    position: string | undefined,
    request: NextAuthRequest
) {
    if (pathname === ROUTES.signIn) return redirect(ROUTES.loginRedirect, request);

    if (pathname === ROUTES.signOut) return NextResponse.next();

    if (isNonAuthPublicRoute(pathname)) return NextResponse.next();

    if (!position || !(position in ROLES_SIDEBARS)) return rewrite(ROUTES.invalidPosition, request);

    const isAuthorised = isAuthorisedToRoute(pathname, position as keyof typeof ROLES_SIDEBARS);

    if (!isAuthorised) return rewrite(ROUTES.unauthorised, request);

    return NextResponse.next();
}

/**
 * Extends the internal NextAuth type to add `auth` session.
 *
 * @interface NextAuthRequest
 * @extends {NextRequest}
 */
interface NextAuthRequest extends NextRequest {
    auth: Session | null;
}

/**
 * Main function of the middleware.
 */
export default auth(async (request: NextAuthRequest) => {
    const session = request.auth;
    const isLoggedIn = !!session?.user.email;
    const position = session?.user.position;
    const { pathname } = request.nextUrl;
    log(`middleware at ${pathname} [loggedIn=${isLoggedIn}] [pos=${position}] `);

    redisMiddleware();

    if (process.env.DEV_MODE) return NextResponse.next();

    if (!isLoggedIn) {
        if (isNonAuthPublicRoute(pathname)) return NextResponse.next();
        if (pathname === ROUTES.signIn) return NextResponse.next();
        return redirect(ROUTES.signIn, request);
    }

    return loggedInMiddleware(pathname, position, request);
});

/**
 * @property {string[]} matcher - An array of URL patterns to match against.
 * The middleware will solely be applied to URLs that match this patterns.
 */
export const config = {
    runtime: 'nodejs',
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
    ],
};
