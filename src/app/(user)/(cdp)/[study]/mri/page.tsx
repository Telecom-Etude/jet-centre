import { loadMriData } from '@/app/(user)/(cdp)/[study]/mri/form/mri';
import Inner from './inner';
import { StudyParams } from '@/routes';

export default async function MRI({ params }: StudyParams) {
    const { study } = await params;
    const mriData = await loadMriData(study);
    if (!mriData) {
        throw new Error('Failed to load MRI');
    }

    return <Inner study={study} serverMriData={mriData} />;
}
