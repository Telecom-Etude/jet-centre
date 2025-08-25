import { Domain, Level, MriStatus } from '@prisma/client';
import { cva } from 'class-variance-authority';
import { FaQuestion } from 'react-icons/fa6';

import { DOMAINS, LEVELS } from '@/db/types';
import { MRIStatusColor, MRIStatusText } from '@/lib/mri';
import { cn } from '@/lib/utils';

import { Badge } from '../ui/badge';

export function MRIDifficultyLabel({ difficulty }: { difficulty: Level | null }) {
    const badgeVariants = cva('', {
        variants: {
            variant: {
                High: 'bg-red-500 hover:bg-red-500/80',
                Medium: 'bg-orange-500 hover:bg-orange-500/80',
                Low: 'bg-green-500 hover:bg-green-500/80',
            },
        },
        defaultVariants: {
            variant: 'Low',
        },
    });

    return (
        <Badge
            variant={difficulty === null ? 'outline' : 'secondary'}
            className={badgeVariants({ variant: difficulty })}
        >
            {difficulty === null ? 'Difficulté inconnue' : LEVELS[difficulty].display}
        </Badge>
    );
}

export function MRIDomainLabel({ domain }: { domain: Domain | null }) {
    const style = {
        variant: 'secondary' as const,
        className: 'bg-blue-500 hover:bg-blue-500/80',
        label: domain === null ? 'Domaine inconnu' : DOMAINS[domain].display,
    };
    return (
        <Badge variant={style.variant} className={cn('space-x-2', style.className)}>
            <FaQuestion />
            <div>{style.label}</div>
        </Badge>
    );
}

export function MRIStatusLabel({ status }: { status: MriStatus }) {
    const color = MRIStatusColor(status);
    return (
        <Badge
            variant="secondary"
            className={cn('space-x-2', cn('bg-' + color, 'hover:bg-' + color + '/80'))}
        >
            <FaQuestion />
            <div>{MRIStatusText(status)}</div>
        </Badge>
    );
}
