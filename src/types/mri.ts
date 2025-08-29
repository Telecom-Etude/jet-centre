import { Domain, Level, MriStatus, Prisma } from '@prisma/client';

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
