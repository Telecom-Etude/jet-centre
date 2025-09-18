import { getUserStudies, getViewer } from '@/data/user';

export async function GET() {
    const result = await getViewer();
    if (result.status == 'error') {
        return new Response('Unauthorized', {
            status: 401,
        });
    } else {
        return Response.json(await getUserStudies(result.viewer));
    }
}
