import { loadStudyMris } from '@/app/(user)/cdp/[study]/mri/form/mri';
import { StudyParams } from '@/routes';

import Inner from './inner';

export default async function MRI({ params }: StudyParams) {
    const { study: studyCode } = await params;

    const studyMris = await loadStudyMris(studyCode);

    if (!studyMris) {
        throw new Error('Failed to load MRI');
    }

    return <Inner studyCode={studyCode} loadedMriData={studyMris} />;
}
