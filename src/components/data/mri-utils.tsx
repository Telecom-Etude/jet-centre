import { Domain, Level, MriStatus } from '@prisma/client';
import { FaQuestion } from 'react-icons/fa6';

import { cn } from '@/lib/utils';

import { Badge } from '../ui/badge';

export function MRIDifficultyLabel({ difficulty }: { difficulty: Level | null }) {
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

export function MRIDomainLabel({ domain }: { domain: Domain | null }) {
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

export function MRIStatusColor(status: MriStatus): string {
    const data: Record<MriStatus, string> = {
        Expired: 'red-500',
        Finished: 'yellow-500',
        InProgress: 'gray-500',
        Sent: 'green-500',
        Validated: 'green-500',
    };
    return data[status];
}

export function MRIStatusText(status: MriStatus): string {
    const data: Record<MriStatus, string> = {
        InProgress: 'En rédaction',
        Finished: 'Terminé',
        Validated: 'Validé',
        Sent: 'Envoyé',
        Expired: 'Expiré',
    };
    return data[status];
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
