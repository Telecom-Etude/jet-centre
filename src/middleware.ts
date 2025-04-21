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
import { authorizedRoutes, DEFAULT_LOGIN_REDIRECT, UNAUTHORIZED_REDIRECT } from './routes';

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

    if (!process.env.NO_CACHE) {
        const res = await redis?.get('test');
        console.log('redis returned', res);
        if (res === null) {
            redis?.set('test', 0);
        } else {
            redis?.incr('test');
        }
    }

    if (process.env.DEV_MODE) {
        return;
    }

    const { pathname } = request.nextUrl;

    if (isLoggedIn) {
        if (pathname === '/auth/signin') {
            return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, request.nextUrl));
        }
    } else {
        if (pathname !== '/auth/signin') {
            return NextResponse.redirect(new URL('/auth/signin', request.nextUrl));
        }
    }

    const pathnamePosition = '/' + pathname.split('/')[1];
    if (pathnamePosition != UNAUTHORIZED_REDIRECT) {
        const authorizedPath = authorizedRoutes[position as keyof typeof authorizedRoutes];
        const isAuthorized =
            authorizedRoutes.default.includes(pathnamePosition) ||
            authorizedPath?.includes(pathnamePosition);
        if (!isAuthorized && isLoggedIn) {
            return NextResponse.redirect(new URL(UNAUTHORIZED_REDIRECT, request.nextUrl));
        }
    }

    return NextResponse.next();
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
