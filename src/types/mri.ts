import { Domain, Level, MriStatus, Prisma } from '@prisma/client';

import { PersonNameEmail } from '@/lib/utils';

export type PublicMRI = {
    id: string;
    studyTitle: string | null;
    mriTitle: string | null;
    mriDifficulty: Level | null;
    mriMainDomain: Domain | null;
    mriStatus: MriStatus;
    introductionText: string | null;
};

export type StudyMRIListItem = {
    id: string;
    mriTitle: string | null;
    mriStatus: MriStatus;
    // Number of people that validated the Mri. This is only for display purposes
    mriValidationCount: number;
};

export type ClassicLastActionPayload = {
    include: {
        user: {
            include: {
                person: {
                    select: {
                        firstName: true;
                        lastName: true;
                    };
                };
            };
            select: {
                id: true;
            };
            omit: {
                personId: true;
                userSettingsId: true;
            };
        };
    };
};

export type MriWithStudyAndAssignees = Prisma.MriGetPayload<{
    include: {
        study: {
            include: {
                cdps: true;
                information: true;
            };
        };
        lastEditedAction: ClassicLastActionPayload;
        validationActions: ClassicLastActionPayload;
    };
}>;

export type MriToValidate = Prisma.MriGetPayload<{
    include: {
        study: {
            include: {
                cdps: {
                    include: {
                        user: {
                            include: {
                                person: true;
                            };
                        };
                    };
                };
                information: true;
            };
        };
        lastEditedAction: ClassicLastActionPayload;
        validationActions: ClassicLastActionPayload;
    };
}>;

export enum MRIModifyFieldErrorCode {
    NoMRIOrLocked,
    Unknown,
}

export type MRIModifyFieldResult =
    | { status: 'success' }
    | { status: 'error'; error: MRIModifyFieldErrorCode };

export function mriModifyFieldErrorCodeToString(code: MRIModifyFieldErrorCode) {
    const data: Record<MRIModifyFieldErrorCode, string> = {
        [MRIModifyFieldErrorCode.NoMRIOrLocked]: 'Aucun MRI trouvé, ou MRI non modifiable',
        [MRIModifyFieldErrorCode.Unknown]: 'Erreur inconnue',
    };
    return data[code];
}

export enum MRIValidateErrorCode {
    NoMRIOrLocked,
    Unknown,
}

export type MRIValidateResult =
    | { status: 'success' }
    | { status: 'error'; error: MRIValidateErrorCode };

export function mriValidateErrorCodeToString(code: MRIValidateErrorCode) {
    const data: Record<MRIValidateErrorCode, string> = {
        [MRIValidateErrorCode.NoMRIOrLocked]: 'Aucun MRI trouvé, ou MRI non modifiable',
        [MRIValidateErrorCode.Unknown]: 'Erreur inconnue',
    };
    return data[code];
}

export enum MRISendErrorCode {
    NoMRIOrLocked,
    NotValidated,
    Unknown,
}

export type MRISendResult =
    | { status: 'success' }
    | { status: 'error'; error: MRISendErrorCode; message?: string };

export function mriSendErrorCodeToString(code: MRISendErrorCode) {
    const data: Record<MRISendErrorCode, string> = {
        [MRISendErrorCode.NoMRIOrLocked]: 'Aucun MRI trouvé, ou MRI non modifiable',
        [MRISendErrorCode.NotValidated]: "Le MRI n'est pas encore validé",
        [MRISendErrorCode.Unknown]: 'Erreur inconnue',
    };
    return data[code];
}

export enum MRIFinishErrorCode {
    Unknown,
    NoMRIOrLocked,
}

export type MRIFinishResult =
    | { status: 'success' }
    | { status: 'error'; error: MRIFinishErrorCode; message?: string };

export function mriFinishErrorCodeToString(code: MRIFinishErrorCode) {
    const data: Record<MRIFinishErrorCode, string> = {
        [MRIFinishErrorCode.Unknown]: 'Erreur inconnue',
        [MRIFinishErrorCode.NoMRIOrLocked]: 'Aucun MRI trouvé, ou MRI non modifiable',
    };
    return data[code];
}

export interface PublishableMri {
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

export enum MriPublishabilityStatus {
    Ok,
    MissingField,
    MissingCdpEmail,
    UnvalidatedMri,
}

export type PublishableMriResult =
    | { status: MriPublishabilityStatus.Ok; validatedMri: PublishableMri }
    | { status: MriPublishabilityStatus.MissingField; field: string }
    | { status: MriPublishabilityStatus.MissingCdpEmail; name: string }
    | { status: MriPublishabilityStatus.UnvalidatedMri };
