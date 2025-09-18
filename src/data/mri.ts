'use server';

import { Mri, MriStatus, Prisma } from '@prisma/client';

import { sendCampaign, SendCampaignErrorCode } from '@/actions/mailchimp';
import prisma from '@/db';
import { htmlMRI } from '@/lib/mailchimp/html-mri';
import { plainTextMRI } from '@/lib/mailchimp/plain-mri';
import { getPublishableMri } from '@/lib/mailchimp/publish-mri';
import { MailChimpList } from '@/types/mailchimp';
import {
    MRIFinishErrorCode,
    MRIFinishResult,
    MRIModifyFieldErrorCode,
    MRIModifyFieldResult,
    MriPublishabilityStatus,
    MRISendErrorCode,
    mriSendErrorCodeToString,
    MRISendResult,
    MriToValidate,
    MRIValidateErrorCode,
    MRIValidateResult,
    MriWithStudyAndAssignees,
    PublicMRI,
    StudyMRIListItem,
} from '@/types/mri';

import { isExecutiveBoard } from './positions';
import { Viewer } from './user';

export async function getPublicMRIs(viewer: Viewer): Promise<PublicMRI[]> {
    return (
        await prisma.mri.findMany({
            include: {
                study: {
                    include: {
                        information: true,
                    },
                },
            },
            where: isMriAccessibleToViewer(viewer),
        })
    ).map((mri) => {
        return {
            id: mri.id,
            studyTitle: mri.study.information.title,
            mriTitle: mri.title,
            mriDifficulty: mri.difficulty,
            mriMainDomain: mri.mainDomain,
            mriStatus: mri.status,
            introductionText: mri.introductionText,
        };
    });
}

function getStudyMRIListItemFromMri(
    mri: {
        id: Mri['id'];
        status: Mri['status'];
        title: Mri['title'];
    },
    validationActionsCount: number
): StudyMRIListItem {
    return {
        id: mri.id,
        mriStatus: mri.status,
        mriTitle: mri.title,
        mriValidationCount: validationActionsCount,
    };
}

export async function getStudyMRIsFromCode(
    viewer: Viewer,
    studyCode: string
): Promise<StudyMRIListItem[]> {
    return (
        await prisma.mri.findMany({
            where: {
                AND: [
                    {
                        study: {
                            information: {
                                code: studyCode,
                            },
                        },
                    },
                    isMriAccessibleToViewer(viewer),
                ],
            },
            select: {
                id: true,
                status: true,
                title: true,
                _count: {
                    select: {
                        validationActions: true,
                    },
                },
            },
        })
    ).map((mri) => getStudyMRIListItemFromMri(mri, mri._count.validationActions));
}

export async function getMRIFromId(
    viewer: Viewer,
    mriId: string
): Promise<MriWithStudyAndAssignees | null> {
    return await prisma.mri.findFirst({
        include: {
            study: {
                include: {
                    cdps: true,
                    information: true,
                },
            },
            lastEditedAction: {
                include: {
                    user: {
                        include: {
                            person: {
                                select: {
                                    firstName: true,
                                    lastName: true,
                                },
                            },
                        },
                    },
                },
            },
            validationActions: {
                include: {
                    user: {
                        include: {
                            person: {
                                select: {
                                    firstName: true,
                                    lastName: true,
                                },
                            },
                        },
                    },
                },
            },
        },
        where: {
            AND: [
                {
                    id: mriId,
                },
                isMriAccessibleToViewer(viewer),
            ],
        },
    });
}

async function getMriToValidateById(viewer: Viewer, mriId: string): Promise<MriToValidate | null> {
    return await prisma.mri.findFirst({
        include: {
            study: {
                include: {
                    cdps: {
                        include: {
                            user: {
                                include: {
                                    person: true,
                                },
                            },
                        },
                    },
                    information: true,
                },
            },
            lastEditedAction: {
                include: {
                    user: {
                        include: {
                            person: {
                                select: {
                                    firstName: true,
                                    lastName: true,
                                },
                            },
                        },
                    },
                },
            },
            validationActions: {
                include: {
                    user: {
                        include: {
                            person: {
                                select: {
                                    firstName: true,
                                    lastName: true,
                                },
                            },
                        },
                    },
                },
            },
        },
        where: {
            AND: [
                {
                    id: mriId,
                },
                isMriAccessibleToViewer(viewer),
            ],
        },
    });
}

async function createEmptyMRI(viewer: Viewer, studyCode: string): Promise<Mri> {
    const infos = await prisma.studyInfos.findFirst({
        where: {
            AND: [{ code: studyCode }, isMriAccessibleToViewer(viewer)],
        },
        include: {
            study: {
                include: {
                    mris: true,
                    cdps: {
                        include: {
                            user: {
                                include: { person: true },
                            },
                        },
                    },
                },
            },
        },
    });
    if (!infos) {
        throw new Error('Failed to fetch mission in database.');
    }
    const study = infos.study;
    if (!study) {
        throw new Error('studyInfo exists without study.');
    }

    return await prisma.mri.create({
        data: {
            study: {
                connect: {
                    id: study.id,
                },
            },
            lastEditedAction: {
                create: {
                    userId: viewer.id,
                },
            },
        },
    });
}

const isMriAccessibleToViewer = (viewer: Viewer) => ({
    OR: [
        {
            // If the study is not confidential
            study: {
                information: {
                    confidential: false,
                },
            },
        },
        {
            // If the user is a member of the executive board
            study: {
                information: {
                    confidential: isExecutiveBoard(viewer),
                },
            },
        },
        {
            // If the user is a CDP on the study
            study: {
                cdps: {
                    some: {
                        userId: viewer.id,
                    },
                },
            },
        },
    ],
});

const isMriEditable = (viewer: Viewer, mriId: string): Prisma.MriWhereInput => ({
    AND: [{ id: mriId, status: 'InProgress' }, isMriAccessibleToViewer(viewer)],
});

const registerViewerActionOnMRIs = async (viewer: Viewer, ids: string[]) => {
    const now = new Date();

    await prisma.action.updateMany({
        where: {
            editedMri: {
                some: {
                    id: {
                        in: ids,
                    },
                },
            },
        },
        data: {
            userId: viewer.id,
            date: now,
        },
    });
};

export async function setMRITitle(
    viewer: Viewer,
    mriId: string,
    title: string
): Promise<MRIModifyFieldResult> {
    const ids = (
        await prisma.mri.updateManyAndReturn({
            where: isMriEditable(viewer, mriId),
            data: {
                title,
            },
            select: {
                id: true,
            },
        })
    ).map((el) => el.id);

    registerViewerActionOnMRIs(viewer, ids);

    if (ids.length > 0) {
        return { status: 'success' };
    } else {
        return { status: 'error', error: MRIModifyFieldErrorCode.NoMRIOrLocked };
    }
}

export async function setMRIIntroductionText(
    viewer: Viewer,
    mriId: string,
    introductionText: string
): Promise<MRIModifyFieldResult> {
    const ids = (
        await prisma.mri.updateManyAndReturn({
            where: isMriEditable(viewer, mriId),
            data: {
                introductionText: introductionText,
            },
            select: {
                id: true,
            },
        })
    ).map((el) => el.id);

    registerViewerActionOnMRIs(viewer, ids);

    if (ids.length > 0) {
        return { status: 'success' };
    } else {
        return { status: 'error', error: MRIModifyFieldErrorCode.NoMRIOrLocked };
    }
}

export async function setMRIRequiredSkillsText(
    viewer: Viewer,
    mriId: string,
    requiredSkillsText: string
): Promise<MRIModifyFieldResult> {
    const ids = (
        await prisma.mri.updateManyAndReturn({
            where: isMriEditable(viewer, mriId),
            data: {
                requiredSkillsText,
            },
            select: {
                id: true,
            },
        })
    ).map((el) => el.id);

    registerViewerActionOnMRIs(viewer, ids);

    if (ids.length > 0) {
        return { status: 'success' };
    } else {
        return { status: 'error', error: MRIModifyFieldErrorCode.NoMRIOrLocked };
    }
}

export async function setMRITimeLapsText(
    viewer: Viewer,
    mriId: string,
    timeLapsText: string
): Promise<MRIModifyFieldResult> {
    const ids = (
        await prisma.mri.updateManyAndReturn({
            where: isMriEditable(viewer, mriId),
            data: {
                timeLapsText,
            },
            select: {
                id: true,
            },
        })
    ).map((el) => el.id);

    registerViewerActionOnMRIs(viewer, ids);

    if (ids.length > 0) {
        return { status: 'success' };
    } else {
        return { status: 'error', error: MRIModifyFieldErrorCode.NoMRIOrLocked };
    }
}

export async function setMRIDescriptionText(
    viewer: Viewer,
    mriId: string,
    descriptionText: string
): Promise<MRIModifyFieldResult> {
    const ids = (
        await prisma.mri.updateManyAndReturn({
            where: isMriEditable(viewer, mriId),
            data: {
                descriptionText,
            },
            select: {
                id: true,
            },
        })
    ).map((el) => el.id);

    registerViewerActionOnMRIs(viewer, ids);

    if (ids.length > 0) {
        return { status: 'success' };
    } else {
        return { status: 'error', error: MRIModifyFieldErrorCode.NoMRIOrLocked };
    }
}

export async function createEmptyStudyMRI(
    viewer: Viewer,
    studyCode: string
): Promise<StudyMRIListItem> {
    return getStudyMRIListItemFromMri(await createEmptyMRI(viewer, studyCode), 0);
}

export async function getMRIsToValidate(viewer: Viewer): Promise<StudyMRIListItem[]> {
    return (
        await prisma.mri.findMany({
            where: {
                AND: [
                    {
                        status: {
                            in: ['InProgress', 'Finished', 'InProgress'],
                        },
                    },
                    isMriAccessibleToViewer(viewer),
                ],
            },
            select: {
                id: true,
                status: true,
                title: true,
                _count: {
                    select: {
                        validationActions: true,
                    },
                },
            },
            orderBy: [
                {
                    status: 'desc',
                },
                {
                    validationActions: {
                        _count: 'desc',
                    },
                },
            ],
        })
    ).map((mri) => getStudyMRIListItemFromMri(mri, mri._count.validationActions));
}

export async function validateMRI(viewer: Viewer, mriId: string): Promise<MRIValidateResult> {
    try {
        const validated = await prisma.mri.findUnique({
            where: {
                id: mriId,
            },
            include: {
                validationActions: true,
            },
        });

        if (!validated) {
            return { status: 'error', error: MRIValidateErrorCode.NoMRIOrLocked };
        }

        const alreadyValidated = validated.validationActions.some(
            (action) => action.userId == viewer.id
        );

        if (alreadyValidated) {
            return { status: 'success' };
        }

        const newStatus =
            validated.validationActions.length > 0 ? MriStatus.Validated : validated.status;

        const now = new Date();

        await prisma.mri.update({
            where: {
                id: mriId,
            },
            data: {
                validationActions: {
                    create: {
                        date: now,
                        user: {
                            connect: {
                                id: viewer.id,
                            },
                        },
                    },
                },
                status: newStatus,
            },
        });
        return { status: 'success' };
    } catch {
        return { status: 'error', error: MRIValidateErrorCode.Unknown };
    }
}

export async function sendMRI(viewer: Viewer, mriId: string): Promise<MRISendResult> {
    try {
        const validated = await prisma.mri.findUnique({
            where: {
                id: mriId,
            },
            include: {
                _count: {
                    select: {
                        validationActions: true,
                    },
                },
            },
        });

        if (!validated) {
            return { status: 'error', error: MRISendErrorCode.NoMRIOrLocked };
        }

        if (validated.status != MriStatus.Validated && validated._count.validationActions > 0) {
            return { status: 'error', error: MRISendErrorCode.NotValidated };
        }

        const mri = await getMriToValidateById(viewer, mriId);
        if (mri === null) return { status: 'error', error: MRISendErrorCode.Unknown };

        const mriParsingResult = getPublishableMri(mri);
        switch (mriParsingResult.status) {
            case MriPublishabilityStatus.Ok: {
                const result = await sendMRI(viewer, mri.id);
                if (result.status == 'error') {
                    return {
                        status: 'error',
                        error: MRISendErrorCode.Unknown,
                        message: mriSendErrorCodeToString(result.error),
                    };
                }

                break;
            }

            case MriPublishabilityStatus.MissingField: {
                return {
                    status: 'error',
                    error: MRISendErrorCode.Unknown,
                    message: `Le champ '${mriParsingResult.field}' est manquant sur ce MRI`,
                };
            }

            case MriPublishabilityStatus.UnvalidatedMri: {
                return {
                    status: 'error',
                    error: MRISendErrorCode.Unknown,
                    message: `Ce MRI n'a pas encore été validé.`,
                };
            }

            case MriPublishabilityStatus.MissingCdpEmail: {
                return {
                    status: 'error',
                    error: MRISendErrorCode.Unknown,
                    message: `${mriParsingResult.name} ne s'est jamais connecté à l'outil donc des informations sont manquantes...`,
                };
            }
        }

        const publishableMri = mriParsingResult.validatedMri;

        const sendResult = await sendCampaign({
            recipients: MailChimpList.MRI,
            fromName: 'Telecom Etude',
            replyTo: publishableMri.cdps[0].email,
            subject: `[Telecom Etude] ${publishableMri.title}`,
            html: htmlMRI(publishableMri),
            plainText: plainTextMRI(publishableMri),
        });

        if (sendResult.status == 'error') {
            switch (sendResult.error) {
                case SendCampaignErrorCode.CantCreateCampaign:
                    return {
                        status: 'error',
                        error: MRISendErrorCode.Unknown,
                        message: 'Impossible de créer la campagne',
                    };
                case SendCampaignErrorCode.CantCreateCampaignForRecipientList:
                    return {
                        status: 'error',
                        error: MRISendErrorCode.Unknown,
                        message:
                            'Impossible de créer la campagne à cause de la liste des destinataires',
                    };
                case SendCampaignErrorCode.FailedToAttachContentToCampaign:
                    return {
                        status: 'error',
                        error: MRISendErrorCode.Unknown,
                        message: 'Impossible de rattacher le contenu à la campagne',
                    };
                case SendCampaignErrorCode.Unknown:
                    return {
                        status: 'error',
                        error: MRISendErrorCode.Unknown,
                        message: 'Erreur inconnue',
                    };
            }
        }

        await prisma.mri.update({
            where: {
                id: mriId,
            },
            data: {
                status: MriStatus.Sent,
            },
        });
        return { status: 'success' };
    } catch {
        return { status: 'error', error: MRISendErrorCode.Unknown };
    }
}

export async function finishMRI(viewer: Viewer, mriId: string): Promise<MRIFinishResult> {
    try {
        const ids = (
            await prisma.mri.updateManyAndReturn({
                where: isMriEditable(viewer, mriId),
                data: {
                    status: 'Finished',
                },
                select: {
                    id: true,
                },
            })
        ).map((el) => el.id);

        registerViewerActionOnMRIs(viewer, ids);

        if (ids.length > 0) {
            return { status: 'success' };
        } else {
            return { status: 'error', error: MRIFinishErrorCode.NoMRIOrLocked };
        }
    } catch {
        return { status: 'error', error: MRIFinishErrorCode.Unknown };
    }
}
