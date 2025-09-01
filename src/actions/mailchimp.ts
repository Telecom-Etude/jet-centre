'use server';

import mailchimp from '@mailchimp/mailchimp_marketing';

export async function sendCampaign(body: string): Promise<boolean> {
    try {
        mailchimp.setConfig({
            server: process.env.MAILCHIMP_SERVER_PREFIX,
            apiKey: process.env.MAILCHIMP_API_KEY,
        });
        const res = await mailchimp.ping.get();
        console.log(res);

        return true;
    } catch (e) {
        console.error(`[sendCampaign] ${e}`);
        return false;
    }
}
