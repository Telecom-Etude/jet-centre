/**
 * This file contains all the access to the Gmail API, with the send scope.
 *
 * This creates abstractions for the Gmail API in order to use Gmail accesses
 * as server functions in an way that is agnostic of how the API actually works.
 */

'use server';

import { auth } from '@/actions/auth';
import { dbg } from '@/lib/utils';

import { googleMail } from '../api';

function base64UrlEncode(value: string): string {
    return Buffer.from(value)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/g, '');
}

export interface EmailBuilder {
    from?: string;
    to: string;
    subject: string;
    cc?: string[];
    bcc?: string[];
    replyTo?: string;
    text?: string;
    html?: string;
}

function rfc2822FromEmailBuilder(emailBuilder: EmailBuilder): string {
    let rfc2822Message = '';

    rfc2822Message += `From: ${emailBuilder.from}\r\n`;
    rfc2822Message += `To: ${emailBuilder.to}\r\n`;
    rfc2822Message += `Subject: ${emailBuilder.subject}\r\n`;

    if (emailBuilder.cc && emailBuilder.cc.length >= 1)
        rfc2822Message += `Cc: ${emailBuilder.cc.join(', ')}\r\n`;
    if (emailBuilder.bcc && emailBuilder.bcc.length >= 1)
        rfc2822Message += `Bcc: ${emailBuilder.bcc.join(', ')}\r\n`;

    if (emailBuilder.replyTo) rfc2822Message += `Reply-To: ${emailBuilder.replyTo}\r\n`;

    rfc2822Message += `Date: ${new Date().toUTCString()}\r\n`;
    rfc2822Message += `MIME-Version: 1.0\r\n`;

    const boundary = '--------------------';

    rfc2822Message += `Content-Type: multipart/alternative; boundary="${boundary}"\r\n\r\n`;

    if (emailBuilder.text) {
        rfc2822Message += `--${boundary}\r\n`;
        rfc2822Message += `Content-Type: text/plain; charset=UTF-8\r\n\r\n`;
        rfc2822Message += `${emailBuilder.text}\r\n\r\n`;
    }

    if (emailBuilder.html) {
        rfc2822Message += `--${boundary}\r\n`;
        rfc2822Message += `Content-Type: text/html; charset=UTF-8\r\n\r\n`;
        rfc2822Message += `${emailBuilder.html}\r\n\r\n`;
    }

    rfc2822Message += `--${boundary}--`;

    return dbg(rfc2822Message, 'msg');
}

export async function sendEmail(emailBuilder: EmailBuilder): Promise<boolean> {
    try {
        console.log('sending');
        const gmail = await googleMail();
        const session = await auth();

        if (!emailBuilder.from) emailBuilder.from = session?.user.email ?? undefined;

        const raw = base64UrlEncode(rfc2822FromEmailBuilder(emailBuilder));

        await gmail.users.messages.send({
            userId: 'me',
            requestBody: { raw },
        });

        return true;
    } catch (e) {
        console.error(`[sendEmail] ${e}`);

        return false;
    }
}
