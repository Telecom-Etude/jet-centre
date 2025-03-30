import Inner from './inner';

export default async function MRI({ params }: { params: Promise<{ etude: string }> }) {
    const { etude } = await params;
    return <Inner etude={etude} />;
}
