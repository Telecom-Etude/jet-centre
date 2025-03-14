'use server';

import { drive_v3, google } from 'googleapis';
import { auth } from '@/actions/auth';

export async function googleDrive(): Promise<drive_v3.Drive> {
    const session = await auth();
    const googleAuth = new google.auth.OAuth2({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
    });
    googleAuth.setCredentials({
        access_token: session?.user.access_token,
        refresh_token: session?.user.refresh_token,
    });
    return google.drive({ version: 'v3', auth: googleAuth });
}
