/**
 * This is for setting up the authentication methods. It defines
 * which pages contain the sign/signout content, and what providers
 * are used. For `Jet Centre`, we use only Google to allow only Telecom
 * Etude's administrator to access the tool.
 *
 * @file auth.ts
 */

import type { Account, NextAuthConfig, Profile, Session, User } from 'next-auth';
import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';
import Google, { GoogleProfile } from 'next-auth/providers/google';

import prisma from '@/db';
import { ROUTES } from '@/routes';

async function getUserPosition(email: string): Promise<string | undefined> {
    try {
        const person = await prisma.person.findUnique({
            where: {
                email,
            },

            select: {
                user: true,
            },
        });

        const admin = await prisma.admin.findFirst({
            where: { userId: person?.user?.id },
            select: {
                position: true,
            },
        });

        return admin?.position ?? undefined;
    } catch (e) {
        console.error(`[auth:getUserPosition] ${e}`);
    }
}

const config = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    scope: [
                        'openid email profile https://www.googleapis.com/auth/drive https://mail.google.com',
                    ],
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
    ],
    pages: {
        signIn: ROUTES.signIn,
        signOut: ROUTES.signOut,
    },
    callbacks: {
        /** Callback called after redirection from {@link accounts.google.com} in the OAuth procedure.
         * All the returned information is stored in profile.
         * See Auth.js documentation for more information.
         *
         * @returns
         *  - true: continy the sign-in process, the @ref jwt function is called.
         *  - false: abort everything
         *  */
        async signIn({ profile }: { profile?: Profile }) {
            if (!profile) return false;

            const { email, given_name, family_name, picture } = profile as GoogleProfile;

            if (!given_name || !family_name) return false;

            const firstName = given_name;
            const lastName = family_name;
            const image = picture;

            await prisma.person.upsert({
                where: { email },

                create: {
                    email,
                    firstName,
                    lastName,
                    user: {
                        create: {
                            admin: {
                                create: {
                                    image,
                                },
                            },
                        },
                    },
                },

                update: {
                    firstName,
                    lastName,
                    user: {
                        update: {
                            admin: {
                                update: {
                                    image,
                                },
                            },
                        },
                    },
                },
            });

            return true;
        },

        /** Callback called to populate the JWTs.
         * It is typically called right after the @ref signIn function.
         */
        async jwt({
            user,
            token,
            account,
            profile,
            trigger,
        }: {
            user: User;
            trigger?: 'signIn' | 'signUp' | 'update' | undefined;
            token: JWT;
            account?: Account | null;
            profile?: Profile;
        }) {
            if (trigger === 'update') {
                token.position = (await getUserPosition(token.email)) ?? token.position;
            }
            if (!trigger) return token;

            if (account?.access_token) {
                token.access_token = account.access_token;
                token.refresh_token = account.refresh_token;
            }

            if (!profile || !user) return token;

            const firstName = profile.given_name;
            const lastName = profile.family_name;
            const email = profile.email;

            if (!firstName || !lastName || !email) return token;

            token.firstName = firstName;
            token.lastName = lastName;
            token.position = (await getUserPosition(email)) ?? token.position;
            return token;
        },

        async session({ session, token }: { session: Session; token: JWT }) {
            session.user.firstName = token.firstName;
            session.user.lastName = token.lastName;

            return {
                ...session,
                user: {
                    ...session.user,
                    position: token.position,
                    access_token: token.access_token ?? session.user.access_token,
                    refresh_token: token.refresh_token ?? session.user.refresh_token,
                },
            };
        },
    },
} as const satisfies NextAuthConfig;

export const googleId = Google({}).id;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
