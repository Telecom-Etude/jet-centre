import { getMissionFolder } from '@/drive/api';
import { StudyParams } from '@/routes';

export default async function Page({ params }: StudyParams) {
    const { study } = await params;
    const missions = await getMissionFolder(study);

    return (
        <div>
            <h1>{study}</h1>
            <p>{JSON.stringify(missions)}</p>
        </div>
    );
}
