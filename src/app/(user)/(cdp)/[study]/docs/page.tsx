import { StudyParams } from '@/routes';
import { DocumentList } from './doc_list';

export default async function Page({ params }: StudyParams) {
    const { study } = await params;
    return <DocumentList study={study} />;
}
