import { MRIList } from '@/components/data/mri-list';
import { getPublicMRIs } from '@/data/mri';
import { getViewer } from '@/data/user';

export default async function Page() {
    const viewerResult = await getViewer();

    if (viewerResult.status === 'error') {
        return <div>Error loading viewer: {viewerResult.message}</div>;
    }

    const initialMRIs = await getPublicMRIs(viewerResult.viewer);

    return (
        <div>
            <MRIList initialMRIs={initialMRIs} />
        </div>
    );
}
