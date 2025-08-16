import { getStudyMRIsFromCode } from '@/data/mri';
import { getViewer } from '@/data/user';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ studyCode: string }> }
) {
    const { studyCode } = await params;
    const result = await getViewer();
    if (result.status == 'error') {
        return new Response('Unauthorized', {
            status: 401,
        });
    } else {
        return Response.json(await getStudyMRIsFromCode(result.viewer, studyCode));
    }
}
