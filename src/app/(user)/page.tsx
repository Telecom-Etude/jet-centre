import FilesBrowser from '@/components/gdrive/FilesBrowser';

async function HomePage() {
    return (
        <div className="space-y-4">
            <div className="mb-4">Bienvenue sur le site de Telecom Etude</div>
            <FilesBrowser />
        </div>
    );
}

export default HomePage;
