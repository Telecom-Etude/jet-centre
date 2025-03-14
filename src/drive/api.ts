'use server';

import { Session } from 'next-auth';
import { drive_v3, google } from 'googleapis';

export function googleDrive(session: Session | null): drive_v3.Drive {
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
