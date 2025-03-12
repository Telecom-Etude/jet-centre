/**
 * This is for setting up the authentication methods. It defines
 * which pages contain the sign/signout content, and what providers
 * are used. For `Jet Centre`, we use only Google to allow only Telecom
 * Etude's administrator to access the tool.
 *
 * @file auth.ts
 */

import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

const config = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    scope: ['openid email profile https://www.googleapis.com/auth/drive'],
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
    },
    callbacks: {
        async jwt({ token, account }) {
            if (account?.access_token) {
                token.access_token = account.access_token;
                token.refresh_token = account.refresh_token;
            }
            return token;
        },
        async session({ session, token }) {
            if (token.access_token) {
                return {
                    ...session,
                    user: {
                        ...session.user,
                        access_token: token.access_token,
                        refresh_token: token.refresh_token,
                    },
                };
            }

            return session;
        },
    },
} satisfies NextAuthConfig;

export const googleId = Google({}).id;
export const { handlers, auth, signIn, signOut } = NextAuth(config);
