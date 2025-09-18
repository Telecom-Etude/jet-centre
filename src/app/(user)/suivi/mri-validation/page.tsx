import { ErrorPage } from '@/components/error';
import { getMRIsToValidate } from '@/data/mri';
import { getViewer } from '@/data/user';

import MRIList from './mri-list';

export default async function MRIs() {
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

    const initialMRIs = await getMRIsToValidate(viewerResult.viewer);

    return <MRIList initialMRIs={initialMRIs} />;
}
