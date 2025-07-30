import { getMissionFiles } from '@/google/drive/files';
import { StudyParams } from '@/routes';

import { DocumentList } from './doc-list';

export default async function Page({ params }: StudyParams) {
    const { study } = await params;
    const missions = await getMissionFiles(study);
    return <DocumentList study={study} initialMissions={missions || []} />;
}
