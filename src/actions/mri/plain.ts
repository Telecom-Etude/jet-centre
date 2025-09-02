import { MriToValidate } from '@/app/(user)/suivi/mri-validation/actions';
import { DOMAINS, LEVELS } from '@/db/types';
import { peopleNameEmail } from '@/lib/utils';

export function plainTextMRI(mri: MriToValidate) {
    const cdps = mri.study.cdps.map((cdp) => cdp.user.person);

    if (cdps.some((cdp) => cdp.email === null) || !mri.mainDomain || !mri.difficulty) {
        return;
    }

    const safeCdps = cdps as { firstName: string; lastName: string; email: string }[];

    const cdpEmailDisplay = peopleNameEmail(safeCdps);

    let mailTo = '';
    for (const cdp of safeCdps) {
        mailTo += cdp.email;
        mailTo += ',';
    }

    return `${mri.title}

${mri.introductionText}

----------------------------------------------

Domaine: ${DOMAINS[mri.mainDomain].display}

Rétribution estimée: ${mri.wageLowerBound}€-${mri.wageUpperBound}€

Difficultée: ${LEVELS[mri.difficulty].display}

----------------------------------------------

Compétences

${mri.requiredSkillsText}

----------------------------------------------

Échéances

${mri.timeLapsText}

----------------------------------------------

Description

${mri.descriptionText}

----------------------------------------------

Si vous souhaitez postuler, remplissez ce formulaire et envoyez nous votre CV par mail en suivant les liens ci-dessous:

-> Je réponds au formulaire: ${mri.gformUrl}

-> J'envoie mon CV: mailto:${mailTo}

N'hésitez pas à demander plus d'informations ou de détails à ${cdpEmailDisplay}.

À bientôt,
L'équipe Telecom Etude`;
}
