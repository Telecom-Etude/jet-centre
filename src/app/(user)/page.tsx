import FilesBrowser from '@/components/google/file-browser';
import MailBrowser from '@/components/google/mail-browser';
import { MailSender } from '@/components/google/mail-sender';
import { LogoBird } from '@/components/logo/logo';

export default async function HomePage() {
    return (
        <div className="flex w-full h-full place-items-center justify-center">
            <div className="p-main flex flex-col items-center gap-main">
                <div className="flex flex-col items-center gap-2">
                    <LogoBird />
                    <h1 className="text-3xl">
                        Bienvenue sur Jet Centre, l&apos;ERP de Telecom Etude !
                    </h1>
                </div>
                <p>
                    Si vous voyez cette page, c&apos;est que vous êtes bien login ! Vous pouvez
                    vérifier votre rôle en haut de la sidebar.
                </p>
                <p>
                    Si vous ne voyez pas de sidebar, c&apos;est que votre rôle a été mal défini.
                    Dans ce cas n&apos;hésitez pas à contacter le pôle info.
                </p>
            </div>
        </div>
    );
}

// TODO: Fonctions non utilisées ici
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function dummy() {
    <div>
        <FilesBrowser />
        <MailBrowser />
        <MailSender />
    </div>;
}
