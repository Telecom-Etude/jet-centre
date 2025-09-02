import { Domain, Level, MriStatus } from '@prisma/client';

import { MriToValidate } from '@/app/(user)/suivi/mri-validation/actions';
import { personName, PersonName, PersonNameEmail, sanitiseHtml } from '@/lib/utils';

export interface ValidMri {
    cdps: PersonNameEmail[];
    title: string;
    wageLowerBound: number;
    wageUpperBound: number;
    wageLevel: Level;
    difficulty: Level;
    mainDomain: Domain;
    introductionText: string;
    descriptionText: string;
    timeLapsText: string;
    requiredSkillsText: string;
    gformUrl: string;
}

export enum MriValidationStatus {
    Ok,
    MissingField,
    MissingCdpEmail,
    UnvalidatedMri,
}

type Result =
    | { status: MriValidationStatus.Ok; validatedMri: ValidMri }
    | { status: MriValidationStatus.MissingField; field: string }
    | { status: MriValidationStatus.MissingCdpEmail; name: string }
    | { status: MriValidationStatus.UnvalidatedMri };

function hasEmail(person: PersonName & { email: string | null }): person is PersonNameEmail {
    return person.email !== null;
}

class NullFieldError extends Error {
    constructor(message: string) {
        super(message);
    }
}

function unwrap<T>(value: T | null, name: string): T {
    if (value === null) throw new NullFieldError(name);
    return value;
}

export function validateMri(mri: MriToValidate): Result {
    if (mri.status !== MriStatus.Validated) return { status: MriValidationStatus.UnvalidatedMri };

    const cdps: PersonNameEmail[] = [];
    for (const cdp of mri.study.cdps) {
        const person = cdp.user.person;

        if (!hasEmail(person)) {
            return {
                status: MriValidationStatus.MissingCdpEmail,
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
            status: MriValidationStatus.Ok,
        };
    } catch (e) {
        if (e instanceof NullFieldError) {
            return {
                status: MriValidationStatus.MissingField,
                field: e.message,
            };
        }

        throw e;
    }
}
