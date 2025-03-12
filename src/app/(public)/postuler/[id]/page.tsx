import { DragAndDrop } from './cv-upload/form';

export default async function Postuler({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const missionName = 'Mission name';
    const src =
        'https://docs.google.com/forms/d/e/1FAIpQLSeFdbqAPj3xpAHyHyiSnfFXiqb2pVH29L2s6hqfhA-Tj6Zrlw/viewform?embedded=true';

    return (
        <div className="h-full flex flex-col gap-8 p-8">
            <h1 className="w-full text-center text-4xl">{missionName}</h1>
            <DragAndDrop id={id} />
            <iframe src={src} className="w-full flex justify-center h-full">
                Loading...
            </iframe>
        </div>
    );
}
