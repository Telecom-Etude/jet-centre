import Image from 'next/image';
import { ReactNode } from 'react';

import BirdLogo from '@/../public/bird.svg';

import { Button } from '@/components/ui/button';
import { LabeledSeparator } from '@/components/ui/separator';


/**
 * Layout for wrapping the button next to the bird image in the login/logout pages.
 *
 * @export
 * @param {{ title: string; button: ReactNode }} { title, button }
 *      - title: title of the page ("Connexion"/"Déconnexion")
 *      - button: the login/logout button for Google Provider
 */
export function AuthLayout({ title, button }: { title: string; button: ReactNode }) {
    return (
        <div className="flex flex-col flex-1 md:flex-none items-center space-y-10">
            <div className="text-5xl font-bold">
                <span>JET&nbsp;</span>
                <span className="text-primary">CENTRE</span>
            </div>
            <div className="text-2xl">/ʤɛt &apos;sɛntə/</div>
            <div className="md:hidden text-3xl">{title}</div>
            <div className="w-full flex-1 md:hidden"></div>
            <div className="md:p-10 md:bg-box-background md:rounded md:h-fit space-y-14 w-full md:w-auto">
                <span className="hidden md:block text-3xl">{title}</span>
                <div className="w-full">{button}</div>
                <div>
                    <div className="pb-4">
                        <LabeledSeparator content="Un&nbsp;problème&nbsp;?" />
                    </div>
                    <Button variant="outline" className="bg-box-background w-full">
                        Contacter Tom
                    </Button>
                </div>
                <div className="absolute -z-50 blur-[100px] top-[10%] w-full md:hidden">
                    <Image src={BirdLogo} className="absolute animate-float-around" alt=""></Image>
                    <Image
                        src={BirdLogo}
                        className="absolute animate-float-around-2"
                        alt=""
                    ></Image>
                </div>
            </div>
        </div>
    );
}
