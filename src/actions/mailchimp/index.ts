'use server';

import { dbg } from '@/lib/utils';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { getRecipientListId, MailChimpList } from './types';

mailchimp.setConfig({
    server: process.env.MAILCHIMP_SERVER_PREFIX,
    apiKey: process.env.MAILCHIMP_API_KEY,
});

export async function sendCampaign(body: string, recipients: MailChimpList): Promise<boolean> {
    try {
        const recipientsListId = getRecipientListId(recipients);

        const campaign = await mailchimp.campaigns.create({
            type: 'regular',
            recipients: { list_id: recipientsListId },
        });

        if ('detail' in campaign) throw new Error(`Failed to create campaign: ${campaign}`);

        if (campaign.recipients.list_id !== recipientsListId)
            throw new Error(`Failed to create campaign: ${campaign}`);

        await mailchimp.campaigns.setContent(campaign.id, {
            plain_text: body,
        });
        return true;
    } catch (e) {
        console.error(`[sendCampaign] ${e}`);
        return false;
    }
}
