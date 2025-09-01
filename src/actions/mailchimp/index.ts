'use server';

import mailchimp from '@mailchimp/mailchimp_marketing';

import { getRecipientListId, MailchimpCampain } from './types';

mailchimp.setConfig({
    server: process.env.MAILCHIMP_SERVER_PREFIX,
    apiKey: process.env.MAILCHIMP_API_KEY,
});

export async function sendCampaign(campainInfo: MailchimpCampain): Promise<boolean> {
    try {
        const recipientsListId = getRecipientListId(campainInfo.recipients);

        const campaign = await mailchimp.campaigns.create({
            type: 'regular',
            recipients: { list_id: recipientsListId },
            settings: {
                subject_line: campainInfo.subject,
                reply_to: campainInfo.replyTo,
                from_name: campainInfo.fromName,
            },
        });

        if ('detail' in campaign) throw new Error(`Failed to create campaign: ${campaign}`);

        if (campaign.recipients.list_id !== recipientsListId)
            throw new Error(`Failed to create campaign for recipient list: ${campaign}`);

        const response = await mailchimp.campaigns.setContent(campaign.id, {
            plain_text: campainInfo.plainText,
            html: campainInfo.html ?? `<pre>${campainInfo.plainText}</pre>`,
        });

        if ('detail' in response)
            throw new Error(`Failed to attach content to campaign: ${response}`);

        await mailchimp.campaigns.send(campaign.id);

        return true;
    } catch (e: any) {
        console.error('[sendCampaign]', e.response ? e.response.body : e);
        return false;
    }
}
