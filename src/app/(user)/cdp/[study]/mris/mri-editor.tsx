'use client';

import { MriStatus } from '@prisma/client';
import { RotateCw } from 'lucide-react';
import { useState } from 'react';
import { FaCircle, FaPlus } from 'react-icons/fa6';
import useSWR from 'swr';

import { MRIRenderEditor } from '@/components/data/mri-render-editor';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/shadcn-io/spinner';
import { createEmptyStudyMRI } from '@/data/mri';
import { DEFAULT_MRI_VALUES } from '@/data/mri-defaults';
import { getViewer } from '@/data/user';
import { MRIStatusColor, MRIStatusText } from '@/lib/mri';
import { cn } from '@/lib/utils';
import { StudyMRIListItem } from '@/types/mri';

function MRIListItemStatus({ status }: { status: MriStatus }) {
    const color = MRIStatusColor(status);

    return (
        <div className={cn('text-' + color, 'flex gap-2 place-items-center')}>
            {MRIStatusText(status)}
            <FaCircle className={cn('fill-' + color, 'size-2')} />
        </div>
    );
}

function MRIListItem({
    mri,
    selected,
    select,
}: {
    mri: StudyMRIListItem;
    selected: boolean;
    select: () => void;
}) {
    return (
        <Button
            variant={selected ? 'secondary' : 'ghost'}
            onClick={select}
            className="w-full flex justify-between"
        >
            <div className="text-left w-[60%] overflow-hidden bg-clip-text text-transparent bg-gradient-to-r from-foreground from-80% to-transparent">
                {mri.mriTitle}
            </div>
            <MRIListItemStatus status={mri.mriStatus} />
        </Button>
    );
}

const fetcherMrisStudy = (url: string, studyCode: string): Promise<StudyMRIListItem[]> =>
    fetch(url + studyCode).then((r) => r.json());

export default function MRIEditor({
    initialMRIs,
    studyCode,
}: {
    initialMRIs: StudyMRIListItem[];
    studyCode: string;
}) {
    const { data, error, isLoading, isValidating, mutate } = useSWR(
        ['/api/mri/study/', studyCode],
        ([url, studyCode]) => fetcherMrisStudy(url, studyCode),
        {
            revalidateOnFocus: false,
            fallbackData: initialMRIs,
        }
    );

    const refresh = () => {
        mutate();
    };

    const createMRI = async () => {
        const optimisticId: string = crypto.randomUUID();

        mutate(
            async (currentMRIs: StudyMRIListItem[] = []) => [
                ...currentMRIs,
                {
                    id: optimisticId,
                    mriTitle: DEFAULT_MRI_VALUES.title,
                    mriStatus: 'InProgress',
                } as StudyMRIListItem,
            ],
            { revalidate: false }
        );

        const backupMriId = selectedMri;

        setSelectedMri(optimisticId);

        try {
            const viewerResult = await getViewer();
            if (viewerResult.status == 'error') {
                throw Error(viewerResult.message);
            }
            const newMri = await createEmptyStudyMRI(viewerResult.viewer, studyCode);

            mutate(
                (current: StudyMRIListItem[] = []) =>
                    current.map((mri) => (mri.id === optimisticId ? newMri : mri)),
                { revalidate: false }
            );
            setSelectedMri(newMri.id);
        } catch (err) {
            console.error(`Failed to mutate MRI list: ${err}`);
            // Rollback
            mutate(
                (current: StudyMRIListItem[] = []) =>
                    current.filter((mri) => mri.id !== optimisticId),
                {
                    revalidate: false,
                }
            );
            setSelectedMri(backupMriId);
        }
    };

    const [selectedMri, setSelectedMri] = useState<string | null>(null);

    return (
        <div className="flex space-x-2 h-full">
            <div className="flex flex-col gap-2 h-full min-w-[15%]">
                <div className="flex items-center justify-between gap-2">
                    <div>MRIs de l&apos;étude</div>
                    <Button
                        variant="ghost"
                        onClick={refresh}
                        disabled={isValidating}
                        className="p-0 rounded h-fit"
                    >
                        {isValidating && <Spinner variant="circle" />}
                        {!isValidating && <RotateCw className="stroke-foreground/80" />}
                    </Button>
                </div>
                <Separator orientation="horizontal" className="w-auto h-[2px]" />
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        {data &&
                            data.map((mri) => (
                                <MRIListItem
                                    key={mri.id}
                                    mri={mri}
                                    selected={selectedMri == mri.id}
                                    select={() => setSelectedMri(mri.id)}
                                />
                            ))}
                    </div>
                    <Separator orientation="horizontal" className="w-auto" />
                    <Button variant="link" className="justify-start gap-2" onClick={createMRI}>
                        <div>Créer un MRI</div>
                        <FaPlus />
                    </Button>
                    {isLoading && (!data || data.length == 0) && <div>Pending...</div>}
                    {error && <div>Error: {error}</div>}
                </div>
            </div>

            <Separator orientation="vertical" className="h-auto w-[2px]" />

            <div className="w-full flex flex-col h-full">
                {selectedMri !== null && <MRIRenderEditor mriId={selectedMri} />}
                {selectedMri === null && <div>Sélectionnez un MRI</div>}
            </div>
        </div>
    );
}
