import MRIEditor from '@/components/data/mri-editor';
import { getStudyMRIsFromCode } from '@/data/mri';
import { getViewer } from '@/data/user';
import { StudyParams } from '@/routes';

export default async function MRIs({ params }: StudyParams) {
    const viewerResult = await getViewer();

    if (viewerResult.status === 'error') {
        return <div>Error loading viewer: {viewerResult.message}</div>;
    }

    const { study: studyCode } = await params;

    const initialMRIs = await getStudyMRIsFromCode(viewerResult.viewer, studyCode);

    return <MRIEditor studyCode={studyCode} initialMRIs={initialMRIs} />;
}
