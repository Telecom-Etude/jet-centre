/**
 * This file contains all the access to the Gmail API, with the readonly scope.
 *
 * This creates abstractions for the Gmail API in order to use Gmail accesses
 * as server functions in an way that is agnostic of how the API actually works.
 */

import { gmail_v1 } from 'googleapis';

import { googleMail } from '../api';

export async function listEmails(): Promise<gmail_v1.Schema$Message[] | undefined> {
    const gmail = await googleMail();

    const inbox = await gmail.users.messages.list({ userId: 'me' });
    const message_list: gmail_v1.Schema$ListMessagesResponse = inbox.data;
    const emails = message_list.messages?.map(
        async ({ id }) =>
            (await gmail.users.messages.get({ userId: 'me', id: id ?? undefined })).data
    );

    if (emails === undefined) return;

    return await Promise.all(emails);
}
