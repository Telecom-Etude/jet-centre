'use server';

import { drive_v3, gmail_v1, google } from 'googleapis';
import { OAuth2Client as GoogleAuthClient } from 'googleapis-common';

import { auth } from '@/actions/auth';

async function googleAuth(): Promise<GoogleAuthClient> {
    const session = await auth();

    const googleAuth = new google.auth.OAuth2({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
    });

    googleAuth.setCredentials({
        access_token: session?.user.access_token,
        refresh_token: session?.user.refresh_token,
    });

    return googleAuth;
}

export async function googleDrive(): Promise<drive_v3.Drive> {
    return google.drive({ version: 'v3', auth: await googleAuth() });
}

export async function googleMail(): Promise<gmail_v1.Gmail> {
    return google.gmail({ version: 'v1', auth: await googleAuth() });
}
