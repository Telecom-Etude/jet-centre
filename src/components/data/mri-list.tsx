'use client';

import { Domain, Level, MriStatus } from '@prisma/client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { FaQuestion } from 'react-icons/fa6';
import useSWR from 'swr';

import { Button } from '@/components/ui/button';
import { PublicMRI } from '@/data/mri';
import { cn } from '@/lib/utils';

import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Spinner } from '../ui/shadcn-io/spinner';

function MRIDifficultyLabel({ difficulty }: { difficulty: Level | null }) {
    const style: {
        variant: 'secondary' | 'outline';
        className: string;
        label: string;
    } = {
        variant: 'secondary',
        className: '',
        label: 'inconnu',
    };
    switch (difficulty) {
        case 'High':
            style.className = 'bg-red-500 hover:bg-red-500/80';
            style.label = 'Difficile';
            break;
        case 'Medium':
            style.className = 'bg-orange-500 hover:bg-orange-500/80';
            style.label = 'Moyen';
            break;
        case 'Low':
            style.className = 'bg-green-500 hover:bg-green-500/80';
            style.label = 'Facile';
            break;
        default:
            style.variant = 'outline';
            style.label = 'Difficulté inconnue';
            break;
    }
    return (
        <Badge variant={style.variant} className={style.className}>
            {style.label}
        </Badge>
    );
}

function MRIDomainLabel({ domain }: { domain: Domain | null }) {
    const style = {
        variant: 'secondary' as const,
        className: 'bg-blue-500 hover:bg-blue-500/80',
        label: domain === null ? 'Domaine inconnu' : (domain as string),
    };
    return (
        <Badge variant={style.variant} className={cn('space-x-2', style.className)}>
            <FaQuestion />
            <div>{style.label}</div>
        </Badge>
    );
}

function MRIStatusLabel({ status }: { status: MriStatus }) {
    const style = {
        variant: 'secondary' as const,
        className: '',
        label: 'Inconnu',
    };
    switch (status) {
        case 'InProgress':
            style.className = 'bg-gray-500 hover:bg-gray-500/80';
            style.label = 'En rédaction';
            break;
        case 'Finished':
            style.className = 'bg-yellow-500 hover:bg-yellow-500/80';
            style.label = 'Terminé';
            break;
        case 'Validated':
            style.className = 'bg-green-500 hover:bg-green-500/80';
            style.label = 'Validé';
            break;
        case 'Sent':
            style.className = 'bg-green-500 hover:bg-green-500/80';
            style.label = 'Envoyé';
            break;
        case 'Expired':
            style.className = 'bg-red-500 hover:bg-red-500/80';
            style.label = 'Expiré';
            break;
    }
    return (
        <Badge variant={style.variant} className={cn('space-x-2', style.className)}>
            <FaQuestion />
            <div>{style.label}</div>
        </Badge>
    );
}

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
