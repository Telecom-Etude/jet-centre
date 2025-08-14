import FilesBrowser from '@/components/google/file-browser';
import MailBrowser from '@/components/google/mail-browser';
import { MailSender } from '@/components/google/mail-sender';

async function HomePage() {
    return (
        <div className="space-y-4">
            <div className="mb-4">Bienvenue sur le site de Telecom Etude</div>
            <FilesBrowser />
            <MailBrowser />
            <MailSender />
        </div>
    );
}

export default HomePage;
