import Image from 'next/image';
import {
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaXTwitter,
    FaEnvelope,
    FaGlobe,
} from 'react-icons/fa6';

import Link from 'next/link';
import { getDifficulty, getDomain, getPay, ImageElt } from './figures';
import { FormType } from './form/schema';

import { NBSP } from '@/lib/utils';
import BirdLogo from '@/../public/mri/bird.png';
import { ServerMriData } from '@/actions/study';
import { Button } from '@/components/ui/button';

export function RenderMRI({
    mri,
    admins,
    study,
}: {
    study: string;
    mri: FormType;
    admins: ServerMriData['admins'];
}) {
    const h4cn = 'text-2xl font-bold my-1 text-mri-headers';

    return (
        <div className="@container bg-white text-black">
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
                        {mri.title || NBSP}
                    </h3>
                </div>
            </div>
            <div className="bg-mri-body-bg flex flex-row justify-center">
                <div className="flex flex-col justify-center max-w-[600px] px-6 @sm:px-0">
                    <p className="py-6">{mri.intro}</p>
                    <div className="flex flex-col @sm:flex-row">
                        <ImageElt {...getDomain(mri.domain)} />
                        <ImageElt {...getPay(mri.pay_under, mri.pay_over, mri.pay_level)} />
                        <ImageElt {...getDifficulty(mri.difficulty)} />
                    </div>
                    <hr className="my-6 border-mri-separator" />
                    <section className="mb-5">
                        <h4 className={h4cn}>Compétences</h4>
                        <p>{mri.skills}</p>
                    </section>
                    <section className="mb-5">
                        <h4 className={h4cn}>Échéances</h4>
                        <p>{mri.due_date}</p>
                    </section>
                    <section className="mb-5">
                        <h4 className={h4cn}>Description</h4>
                        <p>{mri.description}</p>
                    </section>
                    <hr className="my-6 border-mri-separator" />
                    <div className="flex flex-col items-center">
                        <Button asChild className="w-fit mb-6 bg-je-red font-semibold">
                            <Link
                                href={`${process.env.WEBSITE_URL}/postuler/${study}`}
                                className="p-4 rounded"
                            >
                                Je postule !
                            </Link>
                        </Button>

                        <p>N&apos;hésitez pas à nous contacter pour plus d'information:</p>
                        <div className="flex">
                            {admins.map((admin, i) => (
                                <Link
                                    href={'mailto' + admin.email}
                                    className="text-sm p-2 flex underline flex-col items-center"
                                    key={i}
                                >
                                    <p>{admin.firstName + ' ' + admin.lastName}</p>
                                    <p>{admin.email}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <p>À bientôt,</p>
                    <p>L&apos;équipe Telecom Etude !</p>
                    <div className="flex flex-row gap-4 justify-center">
                        <Link
                            href="https://www.linkedin.com/company/telecom-etude"
                            className="h-4 w-4"
                        >
                            <FaLinkedin />
                        </Link>
                        <Link href="https://www.facebook.com/TelecomEtude" className="h-4 w-4">
                            <FaFacebook />
                        </Link>
                        <Link href="https://www.instagram.com/telecometude" className="h-4 w-4">
                            <FaInstagram />
                        </Link>
                        <Link href="https://x.com/TelecomEtude" className="h-4 w-4">
                            <FaXTwitter />
                        </Link>
                        <Link href="https://telecom-etude.fr" className="h-4 w-4">
                            <FaGlobe />
                        </Link>
                        <Link href="mailto:contact@telecom-etude.fr" className="h-4 w-4">
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
