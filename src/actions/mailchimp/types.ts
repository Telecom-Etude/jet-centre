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
