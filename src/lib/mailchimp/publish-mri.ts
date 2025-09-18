import { MriStatus } from '@prisma/client';

import { MriPublishabilityStatus, MriToValidate, PublishableMriResult } from '@/types/mri';

import { personName, PersonName, PersonNameEmail, sanitiseHtml } from '../utils';

function hasEmail(person: PersonName & { email: string | null }): person is PersonNameEmail {
    return person.email !== null;
}

function unwrap<T>(value: T | null, name: string): T {
    if (value === null) throw new NullFieldError(name);
    return value;
}

class NullFieldError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export function getPublishableMri(mri: MriToValidate): PublishableMriResult {
    if (mri.status !== MriStatus.Validated)
        return { status: MriPublishabilityStatus.UnvalidatedMri };

    const cdps: PersonNameEmail[] = [];
    for (const cdp of mri.study.cdps) {
        const person = cdp.user.person;

        if (!hasEmail(person)) {
            return {
                status: MriPublishabilityStatus.MissingCdpEmail,
                name: personName(person),
            };
        }

        cdps.push(person);
    }

    try {
        return {
            validatedMri: {
                cdps,
                title: sanitiseHtml(unwrap(mri.title, 'Titre')),
                introductionText: sanitiseHtml(unwrap(mri.introductionText, 'Introduction')),
                descriptionText: sanitiseHtml(unwrap(mri.descriptionText, 'Description')),
                timeLapsText: sanitiseHtml(unwrap(mri.timeLapsText, 'Échéances')),
                requiredSkillsText: sanitiseHtml(unwrap(mri.requiredSkillsText, 'Compétences')),
                wageLowerBound: unwrap(mri.wageLowerBound, 'Rétribution minimale'),
                wageUpperBound: unwrap(mri.wageUpperBound, 'Rétribution maximale'),
                wageLevel: unwrap(mri.wageLevel, 'Niveau de rétribution'),
                difficulty: unwrap(mri.difficulty, 'Difficultée'),
                mainDomain: unwrap(mri.mainDomain, 'Domain'),
                gformUrl: unwrap(mri.gformUrl, 'Questionnaire Google'),
            },
            status: MriPublishabilityStatus.Ok,
        };
    } catch (e) {
        if (e instanceof NullFieldError) {
            return {
                status: MriPublishabilityStatus.MissingField,
                field: e.message,
            };
        }

        throw e;
    }
}

// export async function sendMRI(mri: PublishableMri) {
//     return await sendCampaign({
//         recipients: MailChimpList.MRI,
//         fromName: 'Telecom Etude',
//         replyTo: mri.cdps[0].email,
//         subject: `[Telecom Etude] ${mri.title}`,
//         html: htmlMRI(mri),
//         plainText: plainTextMRI(mri),
//     });
// }
