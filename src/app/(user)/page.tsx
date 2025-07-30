import FilesBrowser from '@/components/google/file-browser';
import MailBrowser from '@/components/google/mail-browser';

async function HomePage() {
    return (
        <div className="space-y-4">
            <div className="mb-4">Bienvenue sur le site de Telecom Etude</div>
            <FilesBrowser />
            <MailBrowser />
        </div>
    );
}

export default HomePage;
