'use server';

import mailchimp from '@mailchimp/mailchimp_marketing';

import { getRecipientListId, MailchimpCampain } from '@/types/mailchimp';

mailchimp.setConfig({
    server: process.env.MAILCHIMP_SERVER_PREFIX,
    apiKey: process.env.MAILCHIMP_API_KEY,
});

export enum SendCampaignErrorCode {
    CantCreateCampaign,
    CantCreateCampaignForRecipientList,
    FailedToAttachContentToCampaign,
    Unknown,
}

type SendCampaignResult = { status: 'success' } | { status: 'error'; error: SendCampaignErrorCode };

export async function sendCampaign(campainInfo: MailchimpCampain): Promise<SendCampaignResult> {
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

        if ('detail' in campaign)
            return { status: 'error', error: SendCampaignErrorCode.CantCreateCampaign };

        if (campaign.recipients.list_id !== recipientsListId)
            return {
                status: 'error',
                error: SendCampaignErrorCode.CantCreateCampaignForRecipientList,
            };

        const response = await mailchimp.campaigns.setContent(campaign.id, {
            plain_text: campainInfo.plainText,
            html: campainInfo.html ?? `<pre>${campainInfo.plainText}</pre>`,
        });

        if ('detail' in response)
            return {
                status: 'error',
                error: SendCampaignErrorCode.FailedToAttachContentToCampaign,
            };

        await mailchimp.campaigns.send(campaign.id);

        return { status: 'success' };
    } catch (e: unknown) {
        if (typeof e === 'object' && e !== null && 'response' in e) {
            const err = e as { response?: { body?: unknown } };
            console.error('[sendCampaign]', err.response ? err.response.body : e);
        } else {
            console.error('[sendCampaign]', e);
        }
        return { status: 'error', error: SendCampaignErrorCode.Unknown };
    }
}
