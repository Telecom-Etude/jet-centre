import { StudyParams } from '@/routes';
import { StudyInfosParamsEditor } from './infos/form';
import { unwrap } from '@/lib/utils';
import { getStudyInfos } from './infos/action';

export default async function StudySettingsPage({ params }: StudyParams) {
    const { study } = await params;
    return (
        <div>
            <StudyInfosParamsEditor study={study} {...unwrap(await getStudyInfos(study))} />
        </div>
    );
}
