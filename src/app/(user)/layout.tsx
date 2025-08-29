import { UserLogsProvider } from '@/components/hooks/use-user-logs';
import { ViewerProvider } from '@/components/hooks/use-viewer';
import { getViewer } from '@/data/user';

export default async function Layout({ children }: { children: React.ReactNode }) {
    const viewerResult = await getViewer();

    return (
        <ViewerProvider value={viewerResult}>
            <UserLogsProvider>{children}</UserLogsProvider>
        </ViewerProvider>
    );
}
