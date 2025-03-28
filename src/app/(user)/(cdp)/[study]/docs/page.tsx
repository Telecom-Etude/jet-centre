import { StudyParams } from '@/routes';
import { DocumentList } from './doc_list';
import { getMissionFiles } from '@/drive/files';

export default async function Page({ params }: StudyParams) {
    const { study } = await params;
    const missions = await getMissionFiles(study);
    return <DocumentList study={study} initialMissions={missions || []} />;
}
