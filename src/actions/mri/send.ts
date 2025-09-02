'use server';

import { MriToValidate } from '@/app/(user)/suivi/mri-validation/actions';

import { sendCampaign } from '../mailchimp';
import { MailChimpList } from '../mailchimp/types';
import { plainTextMRI } from './plain';
import { htmlMRI } from './html';

export async function sendMRI(mri: MriToValidate) {
    const cdpEmail = mri.study.cdps[0].user.person.email;
    if (!mri.title || !cdpEmail) return false;
    return await sendCampaign({
        recipients: MailChimpList.MRI,
        fromName: 'Telecom Etude',
        replyTo: cdpEmail,
        subject: `[Telecom Etude] ${mri.title}`,
        html: htmlMRI(),
        plainText: plainTextMRI(mri),
    });
}
