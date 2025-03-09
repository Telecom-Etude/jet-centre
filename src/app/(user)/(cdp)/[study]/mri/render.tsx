import Image from 'next/image';
import {
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaXTwitter,
    FaLink,
    FaEnvelope,
} from 'react-icons/fa6';

import { getDifficulty, getDomain, getPay, ImageElt } from './figures';
import { FormType } from './form/schema';

import { NBSP } from '@/lib/utils';
import BirdLogo from '@/../public/mri/bird.png';

export function RenderMRI({ mri }: { mri: FormType }) {
    const h4cn = 'text-2xl font-bold my-1 text-mri-headers';

    return (
        <div className="@container text-mri-p font-mri bg-mri-body-bg">
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

                    <p>
                        Si vous souhaitez postuler,{' '}
                        <span className="font-semibold">remplissez ce formulaire</span> et
                        <span className="font-semibold">envoyez nous votre CV par mail</span> en
                        cliquant sur les boutons ci-dessous.
                    </p>

                    <div className="flex flex-col justify-center items-center gap-4 my-8">
                        <button className="p-4 bg-mri-button-bg text-mri-button-fg rounded-md font-bold">
                            Je réponds au formulaire
                        </button>

                        <button className="p-4 bg-mri-button-bg text-mri-button-fg rounded-md font-bold">
                            J&apos;envoie mon CV
                        </button>
                    </div>

                    <p>
                        N&apos;hésitez pas à demander plus d&apos;informations ou de détails à
                        Lauren (
                        <a
                            href="mailto:lauren.calvosa@telecom-etude.fr"
                            className="text-mri-a hover:underline"
                        >
                            lauren.calvosa@telecom-etude.fr
                        </a>
                        ), et Sarah (
                        <a
                            href="mailto:sarah.dossantos@telecom-etude.fr"
                            className="text-mri-a hover:underline"
                        >
                            sarah.dossantos@telecom-etude.fr
                        </a>
                        ).
                    </p>

                    <p>
                        <br />
                        À bientôt,
                        <br />
                        L&apos;équipe Telecom Etude !
                        <br />
                        <br />
                    </p>

                    <div className="flex flex-row gap-4 justify-center">
                        <a
                            href="https://www.linkedin.com/company/telecom-etude"
                            className="h-4 w-4"
                        >
                            <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/TelecomEtude" className="h-4 w-4">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/telecometude" className="h-4 w-4">
                            <FaInstagram />
                        </a>
                        <a href="https://x.com/TelecomEtude" className="h-4 w-4">
                            <FaXTwitter />
                        </a>
                        <a href="https://telecom-etude.fr" className="h-4 w-4">
                            <FaLink />
                        </a>
                        <a href="mailto:contact@telecom-etude.fr" className="h-4 w-4">
                            <FaEnvelope />
                        </a>
                    </div>

                    <p className="mb-16"></p>
                </div>
            </div>
            <hr className="my-6 border-mri-separator" />

            <p className="text-center">
                This email was send to{' '}
                <a href="mailto:exemple@telecom-etude.fr" className="text-mri-emphasis">
                    exemple@telecom-etude.fr
                </a>
            </p>

            <div className="flex flex-col justify-center items-center gap-4 my-4 @sm:flex-row @sm:my-0">
                <a href="" className="text-mri-emphasis italic">
                    why did I get this?
                </a>
                <a href="" className="text-mri-emphasis">
                    unsubscribe from this list
                </a>
                <a href="" className="text-mri-emphasis">
                    update subscription preferences
                </a>
            </div>

            <p className="text-center">
                Telecom Etude · 19 place Marguerite Perey · Palaiseau 91120 · France
            </p>

            <p className="mb-8"></p>
        </div>
    );
}
