'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import useSWR from 'swr';

import { Button } from '@/components/ui/button';
import { PublicMRI } from '@/types/mri';

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Spinner } from '../ui/shadcn-io/spinner';

import { MRIDifficultyLabel, MRIDomainLabel, MRIStatusLabel } from './mri-utils';

function MRICardPreview({ mri }: { mri: PublicMRI }) {
    const title = mri.mriTitle ?? 'No title';

    return (
        <div className="space-y-6 p-4 bg-card rounded overflow-hidden">
            <header className="flex flex-col space-y-1">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="flex flex-row space-x-2">
                    <MRIDifficultyLabel difficulty={mri.mriDifficulty} />
                    <MRIDomainLabel domain={mri.mriMainDomain} />
                    <MRIStatusLabel status={mri.mriStatus} />
                </div>
            </header>
            <div className="max-h-[4rem] overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-card to-transparent" />
                <div>{mri.introductionText}</div>
            </div>
        </div>
    );
}

function MRICardFull({ mri }: { mri: PublicMRI }) {
    return (
        <div className="space-y-6">
            <div className="flex flex-row space-x-2">
                <MRIDifficultyLabel difficulty={mri.mriDifficulty} />
                <MRIDomainLabel domain={mri.mriMainDomain} />
                <MRIStatusLabel status={mri.mriStatus} />
            </div>
            <div>{mri.introductionText}</div>
        </div>
    );
}

function ZoomableMRICard({ mri }: { mri: PublicMRI }) {
    const [open, setOpen] = useState(false);
    const title = mri.mriTitle ?? 'No title';

    return (
        <AnimatePresence>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <motion.button
                        type="button"
                        layoutId={`mri-card-${mri.id}`}
                        className="w-full text-left"
                    >
                        <MRICardPreview mri={mri} />
                    </motion.button>
                </DialogTrigger>
                {open &&
                    createPortal(
                        <DialogContent className="max-w-5xl p-0 bg-transparent border-0 flex items-center justify-center">
                            <motion.div
                                layoutId={`mri-card-${mri.id}`}
                                className="bg-card p-6 rounded-lg shadow-lg max-w-4xl w-full"
                            >
                                <DialogTitle className="text-3xl font-bold">{title}</DialogTitle>
                                <MRICardFull mri={mri} />
                            </motion.div>
                        </DialogContent>,
                        document.body
                    )}
            </Dialog>
        </AnimatePresence>
    );
}

const fetcher = (url: string): Promise<PublicMRI[]> => fetch(url).then((r) => r.json());

export function MRIList({ initialMRIs }: { initialMRIs: PublicMRI[] }) {
    const { data, error, isLoading, isValidating, mutate } = useSWR('/api/mri/list', fetcher, {
        revalidateOnFocus: false,
        fallbackData: initialMRIs,
    });

    const refresh = () => {
        mutate();
    };

    return (
        <div className="flex flex-col space-y-4">
            <div>
                <Button
                    variant="default"
                    onClick={refresh}
                    disabled={isValidating}
                    className="space-x-2"
                >
                    <div>Refresh list</div>
                    {isValidating && <Spinner variant="ring" />}
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {data && data.map((mri) => <ZoomableMRICard key={mri.id} mri={mri} />)}
                {isLoading && (!data || data.length == 0) && <div>Pending...</div>}
                {error && <div>Error: {error}</div>}
            </div>
        </div>
    );
}
