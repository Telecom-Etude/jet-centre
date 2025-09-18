'use client';

import { Prisma } from '@prisma/client';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
    FaCheck,
    FaEnvelope,
    FaFacebook,
    FaGlobe,
    FaInstagram,
    FaLinkedin,
    FaXTwitter,
} from 'react-icons/fa6';
import { toast } from 'sonner';
import useSWR, { useSWRConfig } from 'swr';

import BirdLogo from '@/../public/mri/bird.png';

import { getDifficulty, getDomain, getPay, ImageElt } from '@/app/(user)/cdp/[study]/mri/figures';
import { Box, BoxContent, BoxHeader } from '@/components/boxes/boxes';
import { useViewer } from '@/components/hooks/use-viewer';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/shadcn-io/spinner';
import { Skeleton } from '@/components/ui/skeleton';
import { sendMRI, validateMRI } from '@/data/mri';
import { cn } from '@/lib/utils';
import {
    CONTACT_EMAIL,
    FACEBOOK_URL,
    INSTAGRAM_URL,
    LINKEDIN_URL,
    SHOWCASE_WEBSITE_URL,
    TWITTER_URL,
} from '@/settings/links';
import {
    ClassicLastActionPayload,
    MRISendErrorCode,
    mriValidateErrorCodeToString,
    MRIValidateResult,
    MriWithStudyAndAssignees,
    StudyMRIListItem,
} from '@/types/mri';

const fetcher = (url: string, mriId: string): Promise<MriWithStudyAndAssignees> =>
    fetch(url + mriId).then((r) => r.json());

function TimeAgo({ date }: { date: Date }) {
    const [, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 30000); // 30s

        return () => clearInterval(interval);
    }, []);

    return <>{formatDistanceToNow(date, { addSuffix: true, locale: fr })}</>;
}

enum MriIssueSeverity {
    Low,
    High,
}

type MriIssue = {
    message: string;
    severity: MriIssueSeverity;
};

export function MRIValidator({ mriId }: { mriId: string }) {
    const {
        data: mri,
        isLoading,
        isValidating,
        mutate,
    } = useSWR(['/api/mri/', mriId], ([url, mriId]) => fetcher(url, mriId), {
        revalidateOnFocus: false,
        dedupingInterval: 60 * 1000, // 1 minute
    });

    const { mutate: globalMutate } = useSWRConfig();

    const [sendError, setSendError] = useState('');

    const viewerResult = useViewer();

    if (!isLoading && !isValidating && mri === undefined) {
        return <div>Impossible d&apos;accéder au MRI</div>;
    }

    if (viewerResult.status !== 'success') {
        return <div>Utilisateur invalide.</div>;
    }

    const viewer = viewerResult.viewer;

    const titleLoading = isLoading || mri === undefined || mri === null;
    const introductionLoading = isLoading || mri === undefined || mri === null;
    const requiredSkillsLoading = isLoading || mri === undefined || mri === null;
    const timeLapsTextLoading = isLoading || mri === undefined || mri === null;
    const descriptionTextLoading = isLoading || mri === undefined || mri === null;

    const populateIssue = (prop: string | null, message: string, severity: MriIssueSeverity) =>
        prop == null || prop == '' ? [{ message, severity }] : [];

    const detectedIssues: MriIssue[] =
        mri !== undefined
            ? [
                  ...populateIssue(mri.title, 'Absence de titre', MriIssueSeverity.High),
                  ...populateIssue(
                      mri.descriptionText,
                      'Absence de description',
                      MriIssueSeverity.Low
                  ),
                  ...populateIssue(
                      mri.requiredSkillsText,
                      'Absence de compétences recherchées',
                      MriIssueSeverity.Low
                  ),
              ]
            : [];

    const h4cn = 'text-2xl font-bold my-1 text-mri-headers';

    const refresh = () => {
        mutate((x) => x, {
            revalidate: true,
        });
    };

    const handleMRIValidateResult = (res: MRIValidateResult): string => {
        if (res.status == 'error') {
            const msg = mriValidateErrorCodeToString(res.error);
            toast.error(msg);
            return msg;
        }
        return '';
    };

    const validateMRICallback = () => {
        if (!mri?.id) return;

        const now = new Date();
        const updatedAction: Prisma.ActionGetPayload<ClassicLastActionPayload> = {
            ...mri.lastEditedAction,
            date: now,
            user: {
                id: viewer.id,
                person: {
                    firstName: viewer.firstName,
                    lastName: viewer.lastName,
                },
            },
        };

        const newActions = [...mri.validationActions, updatedAction];

        // Update locally immediately
        // It is REALLY important to not revalidate here
        mutate(
            async () => {
                const error = handleMRIValidateResult(await validateMRI(viewer, mriId));
                // Here I don't think returning the updated data via the server action makes sense...
                // The best option would be to use a web socket anyways :)
                if (error) {
                    return Promise.reject();
                }
                return {
                    ...mri,
                    validationActions: newActions,
                };
            },
            {
                optimisticData: {
                    ...mri,
                    validationActions: newActions,
                },
                rollbackOnError: true,
                throwOnError: false,
                revalidate: false,
            }
        );

        globalMutate(
            ['/api/mri/list-validate'],
            (currentMris?: StudyMRIListItem[]) => {
                if (!currentMris) return [];
                return currentMris.map((mriItem) =>
                    mriItem.id === mri.id
                        ? { ...mriItem, mriValidationCount: mriItem.mriValidationCount + 1 }
                        : mriItem
                );
            },
            { revalidate: true }
        );
    };

    const sendMRICallback = async () => {
        if (!mri?.id) return;

        const sendResult = await sendMRI(viewer, mriId);
        if (sendResult.status == 'error') {
            switch (sendResult.error) {
                case MRISendErrorCode.NoMRIOrLocked:
                    setSendError('Impossible de modifier le MRI');
                    break;
                case MRISendErrorCode.NotValidated:
                    setSendError("Le MRI n'a pas été validé et ne peut donc pas être envoyé");
                    break;
                case MRISendErrorCode.Unknown:
                    setSendError("Erreur lors de l'envoi: " + sendResult.message);
                    break;
            }
        }
    };

    const isUserValidated =
        mri && mri.validationActions.some((action) => action.user.id == viewer.id);

    return (
        <div className="flex flex-col h-full relative">
            <div className="flex justify-between text-sm p-0.5">
                {mri ? (
                    <div className="italic">
                        Dernière édition par {mri?.lastEditedAction.user.person.firstName}{' '}
                        {mri?.lastEditedAction.user.person.lastName}{' '}
                        <TimeAgo date={new Date(mri.lastEditedAction.date)} />
                    </div>
                ) : (
                    <div>Chargement...</div>
                )}
                <Button
                    variant="ghost"
                    className={cn(
                        isValidating
                            ? 'text-yellow-500 hover:text-yellow-500'
                            : 'text-green-500 hover:text-green-500',
                        'transition-none p-0.5 px-2 m-0 h-full'
                    )}
                    onClick={refresh}
                >
                    <div className="flex place-items-center gap-2">
                        {isValidating ? 'Mise à jour' : 'À jour'}
                        <div className="size-4">
                            {isValidating ? (
                                <Spinner variant="circle" className="size-4" />
                            ) : (
                                <FaCheck className="size-4" />
                            )}
                        </div>
                    </div>
                </Button>
            </div>
            <div className="@container w-full h-full bg-white text-black flex flex-col place-items-center overflow-scroll">
                <div className="max-w-[600px]">
                    <div className="bg-mri-header-bg flex flex-row w-full">
                        <div className="flex flex-col w-full px-6 @sm:px-0">
                            <Image
                                src={BirdLogo}
                                alt="Bird logo"
                                width={130}
                                height={130}
                                className="self-center"
                            />
                            <h3 className="text-3xl font-bold text-mri-title my-6 w-full">
                                {!titleLoading ? (
                                    <div className="w-full">{mri.title}</div>
                                ) : (
                                    <Skeleton className="h-[2.25rem] w-[160px]" />
                                )}
                            </h3>
                        </div>
                    </div>
                    <div className="bg-mri-body-bg flex flex-row justify-center">
                        <div className="flex flex-col justify-center px-6 @sm:px-0">
                            <div className="py-6">
                                {!introductionLoading ? (
                                    <div className="w-full">{mri.introductionText}</div>
                                ) : (
                                    <div className="flex flex-col gap-1">
                                        <Skeleton className="h-[1.25rem] w-[160px]" />
                                        <Skeleton className="h-[1.25rem] w-[260px]" />
                                        <Skeleton className="h-[1.25rem] w-[200px]" />
                                    </div>
                                )}

                                {}
                            </div>
                            <div className="flex flex-col @sm:flex-row">
                                {mri?.mainDomain !== null && mri?.mainDomain !== undefined ? (
                                    <ImageElt {...getDomain(mri?.mainDomain)} />
                                ) : (
                                    <Skeleton />
                                )}
                                <ImageElt
                                    {...getPay(
                                        mri?.wageLowerBound ?? 0,
                                        mri?.wageUpperBound ?? 0,
                                        mri?.wageLevel ?? 'Medium'
                                    )}
                                />
                                <ImageElt {...getDifficulty(mri?.difficulty ?? 'Medium')} />
                            </div>
                            <hr className="my-6 border-mri-separator" />
                            <section className="mb-5">
                                <h4 className={h4cn}>Compétences</h4>
                                {!requiredSkillsLoading ? (
                                    <div className="w-full">{mri.requiredSkillsText}</div>
                                ) : (
                                    <div className="flex flex-col gap-1">
                                        <Skeleton className="h-[1.25rem] w-[160px]" />
                                        <Skeleton className="h-[1.25rem] w-[260px]" />
                                        <Skeleton className="h-[1.25rem] w-[200px]" />
                                    </div>
                                )}
                            </section>
                            <section className="mb-5">
                                <h4 className={h4cn}>Échéances</h4>
                                {!timeLapsTextLoading ? (
                                    <div className="w-full">{mri.timeLapsText}</div>
                                ) : (
                                    <div className="flex flex-col gap-1">
                                        <Skeleton className="h-[1.25rem] w-[160px]" />
                                        <Skeleton className="h-[1.25rem] w-[260px]" />
                                        <Skeleton className="h-[1.25rem] w-[200px]" />
                                    </div>
                                )}
                            </section>
                            <section className="mb-5">
                                <h4 className={h4cn}>Description</h4>
                                {!descriptionTextLoading ? (
                                    <div className="w-full">{mri.descriptionText}</div>
                                ) : (
                                    <div className="flex flex-col gap-1">
                                        <Skeleton className="h-[1.25rem] w-[160px]" />
                                        <Skeleton className="h-[1.25rem] w-[260px]" />
                                        <Skeleton className="h-[1.25rem] w-[200px]" />
                                    </div>
                                )}
                            </section>
                            <hr className="my-6 border-mri-separator" />
                            <div className="flex flex-col items-center">
                                <Button asChild className="w-fit mb-6 bg-je-red font-semibold">
                                    <Link href="#" className="p-4 rounded">
                                        Je postule !
                                    </Link>
                                </Button>

                                <p>
                                    N&apos;hésitez pas à nous contacter pour plus
                                    d&apos;information:
                                </p>
                            </div>

                            <p>À bientôt,</p>
                            <p>L&apos;équipe Telecom Etude !</p>
                            <div className="flex flex-row gap-4 justify-center">
                                <Link href={LINKEDIN_URL} className="h-4 w-4">
                                    <FaLinkedin />
                                </Link>
                                <Link href={FACEBOOK_URL} className="h-4 w-4">
                                    <FaFacebook />
                                </Link>
                                <Link href={INSTAGRAM_URL} className="h-4 w-4">
                                    <FaInstagram />
                                </Link>
                                <Link href={TWITTER_URL} className="h-4 w-4">
                                    <FaXTwitter />
                                </Link>
                                <Link href={SHOWCASE_WEBSITE_URL} className="h-4 w-4">
                                    <FaGlobe />
                                </Link>
                                <Link href={'mailto:' + CONTACT_EMAIL} className="h-4 w-4">
                                    <FaEnvelope />
                                </Link>
                            </div>
                            <p className="mb-16"></p>
                        </div>
                    </div>
                    <hr className="my-6 border-mri-separator" />

                    <p className="text-center">
                        This email was send to{' '}
                        <Link href="mailto:exemple@telecom-etude.fr" className="text-mri-emphasis">
                            exemple@telecom-etude.fr
                        </Link>
                    </p>

                    <div className="flex flex-col justify-center items-center gap-4 my-4 @sm:flex-row @sm:my-0">
                        <Link href="" className="text-mri-emphasis italic">
                            why did I get this?
                        </Link>
                        <Link href="" className="text-mri-emphasis">
                            unsubscribe from this list
                        </Link>
                        <Link href="" className="text-mri-emphasis">
                            update subscription preferences
                        </Link>
                    </div>

                    <p className="text-center">
                        Telecom Etude · 19 place Marguerite Perey · Palaiseau 91120 · France
                    </p>

                    <p className="mb-8"></p>
                </div>
            </div>
            {detectedIssues.length > 0 && (
                <div className="absolute left-4 bottom-4 max-w-[25%]">
                    <Box>
                        <BoxHeader className="font-bold">Problèmes détectés</BoxHeader>
                        <BoxContent>
                            {detectedIssues.map((issue) => (
                                <div
                                    key={issue.message}
                                    className={cn(
                                        issue.severity == MriIssueSeverity.High
                                            ? 'text-red-500'
                                            : 'text-orange-500'
                                    )}
                                >
                                    {issue.message}
                                </div>
                            ))}
                        </BoxContent>
                    </Box>
                </div>
            )}
            <div className="absolute right-4 bottom-4">
                {mri?.validationActions.length && mri?.validationActions.length >= 1 ? (
                    <Button
                        variant="highlight"
                        disabled={isValidating || sendError != ''}
                        onClick={sendMRICallback}
                    >
                        {isValidating && <Spinner variant="circle" className="size-4" />}
                        Envoyer le MRI
                    </Button>
                ) : (
                    <Button
                        variant="accept"
                        disabled={isUserValidated || !mri}
                        onClick={validateMRICallback}
                    >
                        {isUserValidated ? 'Validé' : 'Valider'} (
                        {isValidating ? (
                            <Spinner variant="circle" className="size-4" />
                        ) : (
                            (mri ? mri.validationActions.length : 0) + '/2'
                        )}
                        )
                    </Button>
                )}
            </div>
        </div>
    );
}
