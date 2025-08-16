'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import {
    FaEnvelope,
    FaFacebook,
    FaGlobe,
    FaInstagram,
    FaLinkedin,
    FaXTwitter,
} from 'react-icons/fa6';
import useSWR, { useSWRConfig } from 'swr';

import BirdLogo from '@/../public/mri/bird.png';

import { getDifficulty, getDomain, getPay, ImageElt } from '@/app/(user)/cdp/[study]/mri/figures';
import { Skeleton } from '@/components/ui/skeleton';
import { MriWithStudyAndAssignees, setMRITitle, StudyMRIListItem } from '@/data/mri';
import { getViewer } from '@/data/user';
import { useDebounceCallback } from '@/hooks/use-debounce-callback';
import {
    CONTACT_EMAIL,
    FACEBOOK_URL,
    INSTAGRAM_URL,
    LINKEDIN_URL,
    SHOWCASE_WEBSITE_URL,
    TWITTER_URL,
} from '@/settings/links';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

const fetcher = (url: string, mriId: string): Promise<MriWithStudyAndAssignees> =>
    fetch(url + mriId).then((r) => r.json());

export default function EditableText({
    initText,
    updateText,
}: {
    initText: string;
    updateText: (text: string) => void;
}) {
    const [text, setText] = useState(initText);

    const handleInput = useCallback(
        (value: string) => {
            console.log('callback called', value);
            updateText(value);
        },
        [updateText]
    );

    const debouncedHandleInput = useDebounceCallback(handleInput, 1000);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setText(value);
        debouncedHandleInput(value);
    };

    return (
        <div className="w-full max-w-sm">
            {/* {isEditing ? ( */}
            <Input
                value={text}
                onChange={handleInputChange}
                style={{
                    fontSize: 'inherit',
                }}
                className="font-inherit border-none bg-inherit focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            {/* ) : (
                <span
                    className="text-xl font-semibold cursor-text hover:opacity-80"
                    onClick={() => setIsEditing(true)}
                >
                    {value}
                </span>
            )} */}
        </div>
    );
}

export function MRIRenderEditor({ mriId }: { mriId: string }) {
    const {
        data: mri,
        isLoading,
        isValidating,
        mutate,
    } = useSWR(['/api/mri/', mriId], ([url, mriId]) => fetcher(url, mriId), {
        revalidateOnFocus: false,
    });

    const { mutate: globalMutate } = useSWRConfig();

    if (!isLoading && !isValidating && mri === undefined) {
        return <div>Impossible d&apos;accéder au MRI</div>;
    }

    const titleLoading = isLoading || mri === undefined || mri.title === null;

    const h4cn = 'text-2xl font-bold my-1 text-mri-headers';

    const updateTitle = async (text: string) => {
        if (mri === undefined || mri.id === undefined) return;
        const viewerResult = await getViewer();
        if (viewerResult.status == 'error') {
            return;
        }
        mutate((data) => {
            if (data === undefined) return;
            return { ...data, title: text };
        });

        setMRITitle(viewerResult.viewer, mri.id, text);
        globalMutate(
            ['/api/mri/study/', mri.study.information.code],
            (currentMris?: StudyMRIListItem[]) => {
                if (!currentMris) return currentMris;
                return currentMris.map((mriItem) =>
                    mriItem.id === mri.id ? { ...mriItem, mriTitle: text } : mriItem
                );
            },
            { revalidate: false }
        );

        /*
        {
            optimisticData: (mris: StudyMRIListItem[]) =>
                mris.map((mriItem: StudyMRIListItem) =>
                    mriItem.id == mri.id ? { ...mriItem, mriTitle: text } : mriItem
                ),
        }
        */
    };

    return (
        <div className="@container w-full h-full bg-white text-black">
            <div className="bg-mri-header-bg flex flex-row justify-center">
                <div className="flex flex-col justify-center items-center max-w-[600px] px-6 @sm:px-0">
                    <Image
                        src={BirdLogo}
                        alt="Bird logo"
                        width={130}
                        height={130}
                        className="center"
                    />
                    <h3 className="text-center text-3xl font-bold text-mri-title my-6">
                        {!titleLoading ? (
                            <EditableText initText={mri.title ?? ''} updateText={updateTitle} />
                        ) : (
                            // <div>{mri.title}</div>
                            <Skeleton className="h-[2.25rem] w-[160px]" />
                        )}
                    </h3>
                </div>
            </div>
            <div className="bg-mri-body-bg flex flex-row justify-center">
                <div className="flex flex-col justify-center max-w-[600px] px-6 @sm:px-0">
                    <p className="py-6">{mri?.introductionText}</p>
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
                        <p>{mri?.requiredSkillsText}</p>
                    </section>
                    <section className="mb-5">
                        <h4 className={h4cn}>Échéances</h4>
                        <p>{mri?.timeLapsText}</p>
                    </section>
                    <section className="mb-5">
                        <h4 className={h4cn}>Description</h4>
                        <p>{mri?.descriptionText}</p>
                    </section>
                    <hr className="my-6 border-mri-separator" />
                    <div className="flex flex-col items-center">
                        <Button asChild className="w-fit mb-6 bg-je-red font-semibold">
                            <Link href="#" className="p-4 rounded">
                                Je postule !
                            </Link>
                        </Button>

                        <p>N&apos;hésitez pas à nous contacter pour plus d&apos;information:</p>
                        <div className="flex">
                            {/* {admins.map((admin, i) => (
                                <Link
                                    href={'mailto' + admin.email}
                                    className="text-sm p-2 flex underline flex-col items-center"
                                    key={i}
                                >
                                    <p>{admin.firstName + ' ' + admin.lastName}</p>
                                    <p>{admin.email}</p>
                                </Link>
                            ))} */}
                        </div>
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
    );
}
