/**
 * This is for setting up the authentication methods. It defines
 * which pages contain the sign/signout content, and what providers
 * are used. For `Jet Centre`, we use only Google to allow only Telecom
 * Etude's administrator to access the tool.
 *
 * @file auth.ts
 */

import type { NextAuthConfig, Profile } from 'next-auth';
import NextAuth from 'next-auth';
import Google, { GoogleProfile } from 'next-auth/providers/google';

import prisma from '@/db';

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
        async jwt({ user, token, account }) {
            if (account?.access_token) {
                token.access_token = account.access_token;
                token.refresh_token = account.refresh_token;
            }
            if (user !== undefined) {
                const person = await prisma.person.findUnique({
                    where: { email: token.email ?? undefined },
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
                const position = admin?.position ?? undefined;
                token.position = position;
            }

            return token;
        },
        async session({ session, token }) {
            if (token.access_token) {
                return {
                    ...session,
                    user: {
                        ...session.user,
                        position: token.position,
                        access_token: token.access_token,
                        refresh_token: token.refresh_token,
                    },
                };
            }

            return session;
        },
        async signIn({ profile }: { profile?: Profile }) {
            if (!profile) return false;
            const { email, given_name, family_name, picture } = profile as GoogleProfile;
            const firstName = given_name ?? '<no given_name>';
            const lastName = family_name ?? '<no family_name>';
            const image = picture;
            if (!email) return false;
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
    },
} satisfies NextAuthConfig;

export const googleId = Google({}).id;
export const { handlers, auth, signIn, signOut } = NextAuth(config);
