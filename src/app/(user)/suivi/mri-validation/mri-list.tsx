'use client';

import { MriStatus } from '@prisma/client';
import { RotateCw } from 'lucide-react';
import { useState } from 'react';
import { FaCircle } from 'react-icons/fa6';
import useSWR from 'swr';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/shadcn-io/spinner';
import { MRIStatusColor, MRIStatusText, MRIValidationCountColor } from '@/lib/mri';
import { cn } from '@/lib/utils';
import { StudyMRIListItem } from '@/types/mri';

import { MRIValidator } from './mri-validator';

function MRIListItemStatusValidate({
    status,
    validationCount,
}: {
    status: MriStatus;
    validationCount: number;
}) {
    const statusColor = MRIStatusColor(status);
    const validationColor = MRIValidationCountColor(validationCount);

    return (
        <div className="flex gap-2 place-items-center">
            <div className={cn('text-' + statusColor)}>{MRIStatusText(status)}</div>
            <FaCircle className="fill-gray-500 size-2" />
            <div
                className={cn(
                    'font-mono',
                    status == MriStatus.Finished && 'text-' + validationColor
                )}
            >
                {validationCount}/2
            </div>
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
    const noTitle = mri.mriTitle === null || mri.mriTitle.trim() == '';
    return (
        <Button
            variant={selected ? 'secondary' : 'ghost'}
            onClick={select}
            className="w-full flex justify-between"
        >
            <div
                className={cn(
                    noTitle && 'italic',
                    'text-left w-[60%] overflow-hidden bg-clip-text text-transparent bg-gradient-to-r from-foreground from-80% to-transparent'
                )}
            >
                {!noTitle ? mri.mriTitle : 'Mri sans titre'}
            </div>
            <MRIListItemStatusValidate
                status={mri.mriStatus}
                validationCount={mri.mriValidationCount}
            />
        </Button>
    );
}

const fetcherMRIsToValidate = (url: string): Promise<StudyMRIListItem[]> =>
    fetch(url).then((r) => r.json());

export default function MRIList({ initialMRIs }: { initialMRIs: StudyMRIListItem[] }) {
    const { data, error, isLoading, isValidating, mutate } = useSWR(
        ['/api/mri/list-validate'],
        ([url]) => fetcherMRIsToValidate(url),
        {
            revalidateOnFocus: false,
            fallbackData: initialMRIs,
        }
    );

    const refresh = () => {
        mutate();
    };

    const [selectedMri, setSelectedMri] = useState<string | null>(null);

    return (
        <div className="flex space-x-2 h-full">
            <div className="flex flex-col gap-2 flex-1 min-w-[15%]">
                <div className="flex items-center justify-between gap-2">
                    <div>MRIs à valider</div>
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
                <div className="flex flex-col gap-2 overflow-scroll">
                    <div className="flex flex-col flex-1 gap-1">
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
                    {/* <Separator orientation="horizontal" className="w-auto" /> */}
                    {isLoading && (!data || data.length == 0) && <div>Pending...</div>}
                    {error && <div>Error: {error}</div>}
                </div>
            </div>

            <Separator orientation="vertical" className="h-auto w-[2px]" />

            <div className="w-full flex flex-col h-full">
                {selectedMri !== null && <MRIValidator mriId={selectedMri} />}
                {selectedMri === null && <div>Sélectionnez un MRI</div>}
            </div>
        </div>
    );
}
