'use server';
/**
 * This file contains all the access to the Gmail API, with the send scope.
 *
 * This creates abstractions for the Gmail API in order to use Gmail accesses
 * as server functions in an way that is agnostic of how the API actually works.
 */

import { auth } from '@/actions/auth';
import { dbg } from '@/lib/utils';

import { googleMail } from '../api';

export async function sendHelloWorld(to: string): Promise<boolean> {
    const gmail = await googleMail();
    const session = await auth();
    const from = session?.user.email;

    const body = `From: ${from}
To: ${to}
Subject: Hi

Hello, world!`;
    const encodedBody = Buffer.from(body)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/g, '');

    const sentEmail = await gmail.users.messages.send({
        userId: 'me',
        requestBody: { raw: encodedBody },
    });

    dbg(sentEmail, 'sentEmail');

    return false;
}
