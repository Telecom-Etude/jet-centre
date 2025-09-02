'use server';

import { sendCampaign } from '../mailchimp';
import { MailChimpList } from '../mailchimp/types';

import { htmlMRI } from './html';
import { plainTextMRI } from './plain';
import { ValidMri } from './types';

export async function sendMRI(mri: ValidMri) {
    return await sendCampaign({
        recipients: MailChimpList.MRI,
        fromName: 'Telecom Etude',
        replyTo: mri.cdps[0].email,
        subject: `[Telecom Etude] ${mri.title}`,
        html: htmlMRI(),
        plainText: plainTextMRI(mri),
    });
}
