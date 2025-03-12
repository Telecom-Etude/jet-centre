import { DefaultSession } from 'next-auth';

export type ExtendedUser = DefaultSession['user'] & {
    access_token: string;
    refresh_token: string;
};

declare module 'next-auth' {
    interface Session {
        user: ExtendedUser;
    }
}
