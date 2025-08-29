import { ErrorPage } from '@/components/error';
import { getStudyMRIsFromCode } from '@/data/mri';
import { getViewer } from '@/data/user';
import { StudyParams } from '@/routes';

import MRIEditor from './mri-editor';

export default async function MRIs({ params }: StudyParams) {
    const viewerResult = await getViewer();

    if (viewerResult.status === 'error') {
        return (
            <ErrorPage title="Error loading viewer">
                <p>{viewerResult.message}</p>
                <p>Veuillez rafraîchir la page pour réessayer.</p>
                <p>Merci de signaler ce bug au pôle info, en faisant en Ticket SOS.</p>
            </ErrorPage>
        );
    }

    const { study: studyCode } = await params;

    const initialMRIs = await getStudyMRIsFromCode(viewerResult.viewer, studyCode);

    return <MRIEditor studyCode={studyCode} initialMRIs={initialMRIs} />;
}
