import { MriStatus } from '@prisma/client';

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

export function MRIValidationCountColor(validationCount: number): string {
    return ['red-500', 'orange-500', 'green-500'][Math.min(Math.max(validationCount, 0), 2)];
}
