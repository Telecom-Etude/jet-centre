'use client';

import { Domain, Level, MriStatus } from '@prisma/client';
import { ChevronDown } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaQuestion } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import { getPublicMRIs, PublicMRI } from '@/data/mri';
import { getViewer } from '@/data/user';
import { cn } from '@/lib/utils';

import { Badge } from '../ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

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
            style.variant = 'secondary';
            style.className = 'bg-red-500';
            style.label = 'Difficile';
            break;
        case 'Medium':
            style.variant = 'secondary';
            style.className = 'bg-orange-500';
            style.label = 'Moyen';
            break;
        case 'Low':
            style.variant = 'secondary';
            style.className = 'bg-green-500';
            style.label = 'Facile';
            break;
        case null:
        default:
            style.variant = 'outline';
            style.className = '';
            style.label = 'Difficulté inconnue';
            break;
    }
    return (
        <Badge variant={style.variant} className={cn('select-none', style.className)}>
            {style.label}
        </Badge>
    );
}

const MRIDomainDesc: Record<Domain, string> = {
    AppDev: 'AppDev',
    Chatbot: 'Chatbot',
    ComputerGraphics: 'ComputerGraphics',
    ComputerVision: 'ComputerVision',
    Cryptography: 'Cryptography',
    Cybersecurity: 'Cybersecurity',
    d_3D: 'd_3D',
    DataScience: 'DataScience',
    EmbeddedSystems: 'EmbeddedSystems',
    Image: 'Image',
    IntelligenceArtificielle: 'IntelligenceArtificielle',
    Internet: 'Internet',
    IoT: 'IoT',
    MachineLearning: 'MachineLearning',
    MarketAnalysis: 'MarketAnalysis',
    MobileDev: 'MobileDev',
    Networks: 'Networks',
    StateOfTheArt: 'StateOfTheArt',
    Telecommunications: 'Telecommunications',
    WebDev: 'WebDev',
};

function MRIDomainLabel({ domain }: { domain: Domain | null }) {
    const style: {
        variant: 'secondary';
        className: string;
        label: string;
        tooltip: string | null;
    } = {
        variant: 'secondary',
        className: 'bg-blue-500',
        label: domain === null ? 'Domaine inconnu' : (domain as string),
        tooltip: domain === null ? 'Domaine non renseigné sur le MRI' : MRIDomainDesc[domain],
    };
    return (
        <Tooltip delayDuration={500} disableHoverableContent>
            <TooltipTrigger className="cursor-default">
                <Badge variant={style.variant} className={cn('space-x-2', style.className)}>
                    <FaQuestion />
                    <div>{style.label}</div>
                </Badge>
            </TooltipTrigger>
            {style.tooltip !== null && <TooltipContent>{style.tooltip}</TooltipContent>}
        </Tooltip>
    );
}

function MRIStatusLabel({ status }: { status: MriStatus }) {
    const style: {
        variant: 'secondary';
        className: string;
        label: string;
        tooltip: string | null;
    } = {
        variant: 'secondary',
        className: '',
        label: 'Inconnu',
        tooltip: null,
    };
    switch (status) {
        case 'InProgress': // Currently being redacted
            style.className = 'bg-gray-500';
            style.label = 'En rédaction';
            style.tooltip = 'En cours de rédaction par les CDPs';
            break;
        case 'Finished': // Currently being reviewed
            style.className = 'bg-yellow-500';
            style.label = 'Terminé';
            style.tooltip = 'En attente de validation';
            break;
        case 'Validated':
            style.className = 'bg-green-500';
            style.label = 'Validé';
            style.tooltip = "Validé, en attente d'être envoyé";
            break;
        case 'Sent': // Waiting for students
            style.className = 'bg-green-500';
            style.label = 'Envoyé';
            style.tooltip = 'Envoyé, actif';
            break;
        case 'Expired': // Selection is over
            style.className = 'bg-red-500';
            style.label = 'Expiré';
            style.tooltip = null;
            break;

        default:
            break;
    }
    return (
        <Tooltip delayDuration={500} disableHoverableContent>
            <TooltipTrigger className="cursor-default">
                <Badge variant={style.variant} className={cn('space-x-2', style.className)}>
                    <FaQuestion />
                    <div>{style.label}</div>
                </Badge>
            </TooltipTrigger>
            {style.tooltip !== null && <TooltipContent>{style.tooltip}</TooltipContent>}
        </Tooltip>
    );
}

function MRICard({ mri }: { mri: PublicMRI }) {
    const root = useRef<HTMLDivElement | null>(null);
    const parent = useRef<HTMLDivElement | null>(null);
    const impostor = useRef<HTMLDivElement | null>(null);
    const background = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);

    const title = mri.mriTitle ?? 'No title';

    const toggle = () => {
        if (open) shrink();
        else enlarge();
    };

    useEffect(() => {
        if (!background.current) return;
        document.body.appendChild(background.current);
    }, [background]);

    const enlarge = () => {
        if (!parent.current) return;
        if (!root.current) return;
        if (!impostor.current) return;
        if (!background.current) return;
        const rect = root.current.getBoundingClientRect();
        impostor.current.style.width = rect.width + 'px';
        impostor.current.style.height = rect.height + 'px';
        document.body.appendChild(root.current);
        root.current.style.left = rect.left + 'px';
        root.current.style.top = rect.top + 'px';
        root.current.style.width = rect.width + 'px';
        root.current.style.height = rect.height + 'px';
        setTimeout(() => {
            if (!root.current) return;
            root.current.style.left = '50%';
            root.current.style.top = '50%';
            root.current.style.translate = '-50% -50%';
            root.current.style.width = '';
            root.current.style.height = '';
        });
        setOpen(true);
    };

    const shrink = () => {
        if (!parent.current) return;
        if (!root.current) return;
        if (!impostor.current) return;
        const rects = root.current.getBoundingClientRect();
        impostor.current.style.width = rects.width + 'px';
        impostor.current.style.height = rects.height + 'px';
        root.current.style.translate = '0 0';
        parent.current.appendChild(root.current);
        setOpen(false);
    };

    return (
        <div ref={parent} className="!mt-0">
            <div
                ref={background}
                className={cn(
                    'w-full h-full top-0 left-0 pointer-events-none absolute bg-black/0 transition-all duration-400 z-[1000]',
                    open && 'pointer-events-auto bg-black/80'
                )}
                onClick={() => shrink()}
            ></div>
            <div ref={impostor} className={cn(!open && 'block', 'hidden')}></div>
            <div
                className={cn(
                    open && 'absolute z-[1002] w-1/3 !h-fit',
                    'transition-all duration-500 bg-card p-4 rounded space-y-6 h-full group'
                )}
                ref={root}
            >
                <div className="flex flex-col space-y-1">
                    <div className="text-3xl font-bold">{title}</div>
                    <div className="flex flex-row space-x-2">
                        <MRIDifficultyLabel difficulty={mri.mriDifficulty} />
                        <MRIDomainLabel domain={mri.mriMainDomain} />
                        <MRIStatusLabel status={mri.mriStatus} />
                    </div>
                </div>
                <div
                    className="max-h-[4rem] overflow-hidden relative cursor-pointer"
                    onClick={() => toggle()}
                >
                    <div
                        className={cn(
                            'absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-card to-transparent',
                            open && 'hidden text-balance'
                        )}
                    />
                    {!open && (
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4">
                            <ChevronDown className="size-6 group-hover:animate-bounce -translate-y-1/4 border-white" />
                        </div>
                    )}
                    <div>{mri.introductionText}</div>
                </div>
            </div>
        </div>
    );
}

type MRIListStatus =
    | { kind: 'pending' }
    | { kind: 'error'; message: string }
    | { kind: 'display'; MRIs: PublicMRI[] };

export function MRIList({ initialMRIs }: { initialMRIs: PublicMRI[] }) {
    const [status, setStatus] = useState<MRIListStatus>({
        kind: 'display',
        MRIs: initialMRIs,
    });

    const refresh = useCallback(async () => {
        setStatus({ kind: 'pending' });

        const result = await getViewer();
        if (result.status === 'error') {
            setStatus({ kind: 'error', message: result.message });
        } else {
            const mris = await getPublicMRIs(result.viewer);
            setStatus({ kind: 'display', MRIs: mris });
        }
    }, []);

    return (
        <div className="flex flex-col space-y-4">
            <div>
                <Button variant="default" onClick={refresh}>
                    Refresh list
                </Button>
            </div>

            <div className="grid grid-cols-4 space-y-2 gap-2">
                {status.kind === 'display' &&
                    status.MRIs.map((mri) => <MRICard key={mri.id} mri={mri} />)}
                {status.kind === 'pending' && <div>Pending...</div>}
                {status.kind === 'error' && <div>Error: {status.message}</div>}
            </div>
        </div>
    );
}
