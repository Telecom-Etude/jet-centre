'use client';

import { Domain, Level, MriStatus, Prisma } from '@prisma/client';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import {
    FaCheck,
    FaEnvelope,
    FaFacebook,
    FaGlobe,
    FaInstagram,
    FaLinkedin,
    FaXTwitter,
} from 'react-icons/fa6';
import TextareaAutosize from 'react-textarea-autosize';
import { toast } from 'sonner';
import useSWR, { useSWRConfig } from 'swr';
import { useDebouncedCallback } from 'use-debounce';

import BirdLogo from '@/../public/mri/bird.png';

import { getDifficulty, getDomain, getWage, ImageElt } from '@/app/(user)/cdp/[study]/mri/figures';
import { useViewer } from '@/components/hooks/use-viewer';
import { Skeleton } from '@/components/ui/skeleton';
import {
    finishMRI,
    setMRIDescriptionText,
    setMRIDifficulty,
    setMRIDomain,
    setMRIIntroductionText,
    setMRIWage,
    setMRIRequiredSkillsText,
    setMRITimeLapsText,
    setMRITitle,
    setMRIGformUrl,
} from '@/data/mri';
import { DEFAULT_MRI_VALUES } from '@/data/mri-defaults';
import { DOMAINS, EnumInfo, LEVELS } from '@/db/types';
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
    MRIModifyFieldResult,
    MriWithStudyAndAssignees,
    StudyMRIListItem,
    mriFinishErrorCodeToString,
    mriModifyFieldErrorCodeToString,
} from '@/types/mri';

import { Button } from '../ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Spinner } from '../ui/shadcn-io/spinner';

const fetcher = (url: string, mriId: string): Promise<MriWithStudyAndAssignees> =>
    fetch(url + mriId).then((r) => r.json());

function EditableText({
    initText,
    updateText,
    placeholder,
    editable,
}: {
    initText: string;
    updateText: (text: string) => void;
    placeholder: string;
    editable: boolean;
}) {
    const [text, setText] = useState(initText);
    const [focused, setFocused] = useState(false);
    const [modified, setModified] = useState(false);

    useEffect(() => {
        setText(initText);
    }, [focused, initText]);

    const handleInput = useCallback(
        (value: string) => {
            updateText(value);
        },
        [updateText]
    );

    const debouncedHandleInput = useDebouncedCallback(handleInput, 600);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setText(value);
        setModified(true);
        debouncedHandleInput(value);
    };

    const onFocus = () => {
        setFocused(true);
        setModified(false);
    };

    const onBlur = () => {
        debouncedHandleInput.cancel();
        setFocused(false);
        if (modified) updateText(text);
    };

    return (
        <div className="flex w-full">
            {editable ? (
                <TextareaAutosize
                    value={text}
                    onChange={handleInputChange}
                    className="resize-none w-full"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    spellCheck={focused}
                />
            ) : (
                <div className="w-full">{text}</div>
            )}
        </div>
    );
}

interface ImageData {
    label: string;
    value: string;
    image: StaticImageData;
}

function EditableImage<T extends string | number | symbol>({
    initValue,
    possibleValues,
    updateValue,
    getValue,
}: {
    initValue: T;
    possibleValues: Record<T, EnumInfo>;
    updateValue: (value: T) => Promise<void>;
    getValue: (value: T) => ImageData;
}) {
    const [value, setValue] = useState<T>(initValue);

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={'outline'}
                    className="flex-1 bg-transparent hover:bg-transparent min-w-0 h-full"
                >
                    <ImageElt {...getValue(value)} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="overflow-y-scroll max-h-60">
                {(Object.keys(possibleValues) as T[]).map((k, i) => (
                    <DropdownMenuItem
                        key={i}
                        onClick={() => updateValue(k).then(() => setValue(k))}
                    >
                        {possibleValues[k].display}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

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

export function MRIRenderEditor({ mriId }: { mriId: string }) {
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
    const wageLoading = isLoading || mri === undefined || mri === null;
    const requiredSkillsLoading = isLoading || mri === undefined || mri === null;
    const timeLapsTextLoading = isLoading || mri === undefined || mri === null;
    const descriptionTextLoading = isLoading || mri === undefined || mri === null;

    const editable = mri?.status == 'InProgress';

    const h4cn = 'text-2xl font-bold my-1 text-mri-headers';

    const refresh = () => {
        mutate((x) => x, {
            revalidate: true,
        });
    };

    const handleMRIModifyFieldResult = (res: MRIModifyFieldResult): string => {
        if (res.status == 'error') {
            const msg = mriModifyFieldErrorCodeToString(res.error);
            toast.error(msg);
            return msg;
        }
        return '';
    };

    const updateElement = async (
        updatedElement: object,
        updateMri: () => Promise<MRIModifyFieldResult>
    ) => {
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

        // Update locally immediately
        // It is REALLY important to not revalidate here
        mutate(
            async () => {
                const error = handleMRIModifyFieldResult(await updateMri());
                // Here I don't think returning the updated data via the server action makes sense...
                // The best option would be to use a web socket anyways :)
                if (error) {
                    globalMutate(['/api/mri/study/', mri.study.information.code]);
                    return Promise.reject();
                }
                return {
                    ...mri,
                    ...updatedElement,
                    lastEditedAction: updatedAction,
                };
            },
            {
                optimisticData: {
                    ...mri,
                    ...updatedElement,
                    lastEditedAction: updatedAction,
                },
                rollbackOnError: true,
                throwOnError: false,
                revalidate: false,
            }
        );
    };

    const updateTitle = async (text: string) => {
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

        // Update locally immediately
        // It is REALLY important to not revalidate here
        mutate(
            async () => {
                const error = handleMRIModifyFieldResult(await setMRITitle(viewer, mriId, text));
                // Here I don't think returning the updated data via the server action makes sense...
                // The best option would be to use a web socket anyways :)
                if (error) {
                    globalMutate(['/api/mri/study/', mri.study.information.code]);
                    return Promise.reject();
                }
                return {
                    ...mri,
                    title: text,
                    lastEditedAction: updatedAction,
                };
            },
            {
                optimisticData: {
                    ...mri,
                    title: text,
                    lastEditedAction: updatedAction,
                },
                rollbackOnError: true,
                throwOnError: false,
                revalidate: false,
            }
        );

        // The optimistic update here doesn't account for any error that might happen server-side
        // If we wanted to account for them it would be better to use a custom server action that
        // updated the title AND returns the modified list, as the second argument to globalMutate

        globalMutate(
            ['/api/mri/study/', mri.study.information.code],
            (currentMris?: StudyMRIListItem[]) => {
                if (!currentMris) return [];
                return currentMris.map((mriItem) =>
                    mriItem.id === mri.id ? { ...mriItem, mriTitle: text } : mriItem
                );
            },
            { revalidate: false }
        );
    };

    const updateIntroduction = (text: string) =>
        updateElement(
            {
                introductionText: text,
            },
            () => setMRIIntroductionText(viewer, mriId, text)
        );

    const updateRequiredSkillsText = (text: string) =>
        updateElement(
            {
                requiredSkillsText: text,
            },
            () => setMRIRequiredSkillsText(viewer, mriId, text)
        );

    const updateTimeLapsText = (text: string) =>
        updateElement(
            {
                timeLapsText: text,
            },
            () => setMRITimeLapsText(viewer, mriId, text)
        );

    const updatedescriptionText = (text: string) =>
        updateElement(
            {
                descriptionText: text,
            },
            () => setMRIDescriptionText(viewer, mriId, text)
        );

    const updateDifficulty = async (difficulty: Level) => {
        updateElement(
            {
                difficulty: difficulty,
            },
            () => setMRIDifficulty(viewer, mriId, difficulty)
        );
    };

    const updateDomain = async (domain: Domain) => {
        updateElement(
            {
                mainDomain: domain,
            },
            () => setMRIDomain(viewer, mriId, domain)
        );
    };

    const updateWage = async ({
        wageLowerBound = mri?.wageLowerBound ?? 0,
        wageUpperBound = mri?.wageUpperBound ?? 0,
        wageLevel = mri?.wageLevel ?? Level.Medium,
    }: {
        wageLowerBound?: number;
        wageUpperBound?: number;
        wageLevel?: Level;
    }) => {
        if (Number.isNaN(wageLowerBound) || wageLowerBound < 0) return;
        if (Number.isNaN(wageUpperBound) || wageUpperBound < 0) return;
        updateElement(
            {
                wageLowerBound: wageLowerBound,
                wageUpperBound: wageUpperBound,
                wageLevel: wageLevel,
            },
            () => setMRIWage(viewer, mriId, wageLowerBound, wageUpperBound, wageLevel)
        );
    };

    const updateGformUrl = async (url: string) => {
        updateElement(
            {
                gformUrl: url,
            },
            () => setMRIGformUrl(viewer, mriId, url)
        );
    };

    const requestMriValidationCallback = async () => {
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

        // Update locally immediately
        // It is REALLY important to not revalidate here
        mutate(
            async () => {
                const finishResult = await finishMRI(viewer, mriId);
                // Here I don't think returning the updated data via the server action makes sense...
                // The best option would be to use a web socket anyways :)
                if (finishResult.status == 'error') {
                    globalMutate(['/api/mri/study/', mri.study.information.code]);
                    toast.error(mriFinishErrorCodeToString(finishResult.error));
                    return Promise.reject();
                }
                return {
                    ...mri,
                    status: 'Finished',
                    lastEditedAction: updatedAction,
                };
            },
            {
                optimisticData: {
                    ...mri,
                    status: 'Finished',
                    lastEditedAction: updatedAction,
                },
                rollbackOnError: true,
                throwOnError: false,
                revalidate: false,
            }
        );

        // The optimistic update here doesn't account for any error that might happen server-side
        // If we wanted to account for them it would be better to use a custom server action that
        // updated the title AND returns the modified list, as the second argument to globalMutate

        globalMutate(
            ['/api/mri/study/', mri.study.information.code],
            (currentMris?: StudyMRIListItem[]) => {
                if (!currentMris) return [];
                return currentMris.map((mriItem) =>
                    mriItem.id === mri.id ? { ...mriItem, mriStatus: MriStatus.Finished } : mriItem
                );
            },
            { revalidate: false }
        );
    };

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
                                    <EditableText
                                        initText={mri.title ?? ''}
                                        updateText={updateTitle}
                                        placeholder={DEFAULT_MRI_VALUES.title}
                                        editable={editable}
                                    />
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
                                    <EditableText
                                        initText={mri?.introductionText ?? ''}
                                        updateText={updateIntroduction}
                                        placeholder={DEFAULT_MRI_VALUES.introductionText}
                                        editable={editable}
                                    />
                                ) : (
                                    <div className="flex flex-col gap-1">
                                        <Skeleton className="h-[1.25rem] w-[160px]" />
                                        <Skeleton className="h-[1.25rem] w-[260px]" />
                                        <Skeleton className="h-[1.25rem] w-[200px]" />
                                    </div>
                                )}

                                {}
                            </div>
                            <div className="flex flex-col @sm:flex-row items-stretch">
                                <EditableImage<Domain>
                                    initValue={
                                        mri?.mainDomain ??
                                        mri?.study.information.domains[0] ??
                                        DEFAULT_MRI_VALUES.mainDomain
                                    }
                                    possibleValues={DOMAINS}
                                    updateValue={updateDomain}
                                    getValue={getDomain}
                                />
                                <EditableImage<Level>
                                    initValue={mri?.wageLevel ?? Level.Medium}
                                    possibleValues={LEVELS}
                                    updateValue={(l) => updateWage({ wageLevel: l })}
                                    getValue={(l) =>
                                        getWage(
                                            mri?.wageLowerBound ?? 0,
                                            mri?.wageUpperBound ?? 0,
                                            l
                                        )
                                    }
                                />
                                <EditableImage<Level>
                                    initValue={mri?.difficulty ?? Level.Medium}
                                    possibleValues={LEVELS}
                                    updateValue={updateDifficulty}
                                    getValue={getDifficulty}
                                />
                            </div>
                            <div className="flex flex-row mt-6 gap-2 outline-1 outline-dashed items-center px-4 py-1">
                                <h1 className="w-full">Rétribution basse: </h1>
                                {!wageLoading ? (
                                    <EditableText
                                        initText={(mri?.wageLowerBound ?? 0).toString()}
                                        updateText={(w) =>
                                            updateWage({ wageLowerBound: parseInt(w) })
                                        }
                                        placeholder={'0'}
                                        editable={editable}
                                    />
                                ) : (
                                    <div className="w-full">
                                        <Skeleton className="h-[1.5rem] w-[100px]" />
                                    </div>
                                )}
                                <h1 className="w-full">Rétribution haute: </h1>
                                {!wageLoading ? (
                                    <EditableText
                                        initText={(mri?.wageUpperBound ?? 0).toString()}
                                        updateText={(w) =>
                                            updateWage({ wageUpperBound: parseInt(w) })
                                        }
                                        placeholder={'0'}
                                        editable={editable}
                                    />
                                ) : (
                                    <div className="w-full">
                                        <Skeleton className="h-[1.5rem] w-[100px]" />
                                    </div>
                                )}
                            </div>
                            <hr className="my-6 border-mri-separator" />
                            <section className="mb-5">
                                <h4 className={h4cn}>Compétences</h4>
                                {!requiredSkillsLoading ? (
                                    <EditableText
                                        initText={mri?.requiredSkillsText ?? ''}
                                        updateText={updateRequiredSkillsText}
                                        placeholder={DEFAULT_MRI_VALUES.requiredSkillsText}
                                        editable={editable}
                                    />
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
                                    <EditableText
                                        initText={mri?.timeLapsText ?? ''}
                                        updateText={updateTimeLapsText}
                                        placeholder={DEFAULT_MRI_VALUES.timeLapsText}
                                        editable={editable}
                                    />
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
                                    <EditableText
                                        initText={mri?.descriptionText ?? ''}
                                        updateText={updatedescriptionText}
                                        placeholder={DEFAULT_MRI_VALUES.descriptionText}
                                        editable={editable}
                                    />
                                ) : (
                                    <div className="flex flex-col gap-1">
                                        <Skeleton className="h-[1.25rem] w-[160px]" />
                                        <Skeleton className="h-[1.25rem] w-[260px]" />
                                        <Skeleton className="h-[1.25rem] w-[200px]" />
                                    </div>
                                )}
                            </section>
                            <section className="mb-5">
                                <h4 className={h4cn}>Lien du google form</h4>
                                <div className="outline-1 outline-dashed items-center px-4 py-1">
                                    {!wageLoading ? (
                                        <EditableText
                                            initText={mri?.gformUrl ?? ''}
                                            updateText={updateGformUrl}
                                            placeholder={'https://docs.google.com/forms/d/e/...'}
                                            editable={editable}
                                        />
                                    ) : (
                                        <div className="w-full">
                                            <Skeleton className="h-[1.5rem] w-full" />
                                        </div>
                                    )}
                                </div>
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
                        This email was sent to{' '}
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

            <div className="absolute right-4 bottom-4">
                {mri && (
                    <Button
                        variant="highlight"
                        disabled={isValidating || mri.status != 'InProgress'}
                        className="gap-2"
                        onClick={requestMriValidationCallback}
                    >
                        {isValidating && <Spinner variant="circle" className="size-4" />}
                        {mri.status == 'InProgress'
                            ? 'Envoyer le MRI en validation'
                            : 'MRI en attente de validation'}
                    </Button>
                )}
            </div>
        </div>
    );
}
