import { MriToValidate } from '@/app/(user)/suivi/mri-validation/actions';
import { PersonName, PersonNameEmail, sanitiseHtml } from '@/lib/utils';
import { Domain, Level, MriStatus } from '@prisma/client';

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
}

enum MriValidationStatus {
    Ok,
    MissingField,
    MissingCdpEmail,
    UnvalidatedMri,
}

type Result =
    | { status: MriValidationStatus.Ok; validatedMri: ValidMri }
    | { status: MriValidationStatus.MissingField; field: string }
    | { status: MriValidationStatus.MissingCdpEmail | MriValidationStatus.UnvalidatedMri };

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
            };
        }

        cdps.push(person);
    }

    try {
        return {
            validatedMri: {
                cdps,
                title: sanitiseHtml(unwrap(mri.title, 'title')),
                introductionText: sanitiseHtml(unwrap(mri.introductionText, 'introductionText')),
                descriptionText: sanitiseHtml(unwrap(mri.descriptionText, 'descriptionText')),
                timeLapsText: sanitiseHtml(unwrap(mri.timeLapsText, 'timeLapsText')),
                requiredSkillsText: sanitiseHtml(
                    unwrap(mri.requiredSkillsText, 'requiredSkillsText')
                ),
                wageLowerBound: unwrap(mri.wageLowerBound, 'wageLowerBound'),
                wageUpperBound: unwrap(mri.wageUpperBound, 'wageUpperBound'),
                wageLevel: unwrap(mri.wageLevel, 'wageLevel'),
                difficulty: unwrap(mri.difficulty, 'difficulty'),
                mainDomain: unwrap(mri.mainDomain, 'mainDomain'),
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
