export enum MailChimpList {
    MRI,
}

export function getRecipientListId(recipients: MailChimpList): string {
    switch (recipients) {
        case MailChimpList.MRI:
            return process.env.MAILCHIMP_MRI_LIST_ID;
        default:
            throw new Error(`Invalid mailchimp list: ${recipients}`);
    }
}

export interface MailchimpCampain {
    subject: string;
    recipients: MailChimpList;
    fromName: string;
    replyTo: string;
    plainText?: string;
    html?: string;
}
