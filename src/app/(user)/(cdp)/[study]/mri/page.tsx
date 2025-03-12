import { Metadata } from 'next';
import Inner from './inner';

export const metadata = {
    title: 'Écriture MRI',
} satisfies Metadata;

export default async function MRI({ params }: { params: Promise<{ etude: string }> }) {
    const { etude } = await params;
    return <Inner etude={etude} />;
}
