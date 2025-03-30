import { loadMriData } from '@/actions/study';
import Inner from './inner';

export default async function MRI({ params }: { params: Promise<{ study: string }> }) {
    const { study } = await params;
    const mriData = await loadMriData(study);

    return <Inner study={study} serverMriData={mriData} />;
}
