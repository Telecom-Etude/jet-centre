import { ReactNode, Suspense } from 'react';

import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';
import { ErrorPage } from '@/components/error';
import { LoadingPage } from '@/components/loading';
import { StudyParams } from '@/routes';

import { getStudyClients } from './clients/actions';
import { StudyClientsParamsEditor } from './clients/clients';
import { getStudyInfos } from './infos/actions';
import { StudyInfosParamsEditor } from './infos/form';
import { getStudyProceedings } from './proceedings/actions';
import { StudyProceedingsParamsEditor } from './proceedings/form';

export default async function StudySettingsPage({ params }: StudyParams) {
    const { study } = await params;
    return (
        <div className="flex flex-col gap-main">
            <SuspenseBox
                title="Informations génériques"
                studyCode={study}
                fetcher={getStudyInfos}
                Editor={StudyInfosParamsEditor}
            />
            <SuspenseBox
                title="Détail des phases"
                studyCode={study}
                fetcher={getStudyProceedings}
                Editor={StudyProceedingsParamsEditor}
            />
            <SuspenseBox
                title="Clients concernés"
                studyCode={study}
                fetcher={getStudyClients}
                Editor={StudyClientsParamsEditor}
            />
        </div>
    );
}

interface SuspenseBoxProps<ServerFormData> {
    title: string;
    studyCode: string;
    fetcher: (studyCode: string) => Promise<ServerFormData>;
    Editor: React.ComponentType<ServerFormData & { title: string; studyCode: string }>;
}

function SuspenseBox<ServerFormData>({
    title,
    studyCode,
    fetcher,
    Editor,
}: SuspenseBoxProps<ServerFormData>) {
    return (
        <Suspense fallback={<LoadingFallback title={title} />}>
            <BoxLoader title={title} studyCode={studyCode} fetcher={fetcher} Editor={Editor} />
        </Suspense>
    );
}

async function BoxLoader<ServerFormData>({
    title,
    studyCode,
    fetcher,
    Editor,
}: SuspenseBoxProps<ServerFormData>) {
    const data = await fetcher(studyCode);
    return data ? (
        <Editor title={title} studyCode={studyCode} {...data} />
    ) : (
        <ErrorBoxComponent title={title} />
    );
}

interface Title {
    title: string;
}

function FakeBox({ children, title }: Title & { children: ReactNode }) {
    return (
        <Box className="w-full">
            <BoxHeader>
                <BoxTitle>{title}</BoxTitle>
            </BoxHeader>
            <BoxContent>{children}</BoxContent>
        </Box>
    );
}

function LoadingFallback({ title }: Title) {
    return (
        <FakeBox title={title}>
            <LoadingPage />
        </FakeBox>
    );
}

export function ErrorBoxComponent({ title }: Title) {
    return (
        <FakeBox title={title}>
            <div className="p-6">
                <ErrorPage title="Erreur lors du chargement de l'étude">
                    <p>Merci de rafraîchir la page ou de faire un ticket SOS.</p>
                </ErrorPage>
            </div>
        </FakeBox>
    );
}
