'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type StudyProps = {
    id: string;
    code: string;
    step: string | null;
    next_deadline: string;
    cdps: string[];
    ref: string | null;
    auditors: string[];
    senior_cdps: string[];
    title: string | null;
    type_study: string[];
    date_pre_study: string;
    last_check: string;
    next_check: string;
    info: string | null;
    gap: string;
    end_rm: string;
    pvrf: string;
    av_number: string;
    client_name: { name: string }[];
    client_email: { email: string }[];
    oc: string;
    cconf: string;
    qs: string;
};

type ButtonProps = {
    buttonName: string;
    studyCode: string;
    href: string;
};

const StudyManage = ({ buttonName, studyCode, href }: ButtonProps) => {
    const router = useRouter();

    return <Button onClick={() => router.replace(studyCode + href)}>{buttonName}</Button>;
};

export const columns: ColumnDef<StudyProps>[] = [
    {
        accessorKey: 'code',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Code
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: 'step',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: 'next_deadline',
        header: 'Prochaine deadline',
    },
    {
        accessorKey: 'ref',
        header: "Référent d'étude",
    },
    {
        accessorKey: 'senior_cdps',
        header: 'Chef de projet senior',
    },
    {
        accessorKey: 'cdps',
        header: 'Chefs de projet',
    },
    {
        accessorKey: 'auditors',
        header: 'Auditeurs',
    },
    {
        accessorKey: 'title',
        header: "Nom de l'étude",
    },
    {
        accessorKey: 'type_study',
        header: "Type d'étude",
    },
    {
        accessorKey: 'date_pre_study',
        header: 'Date de lancement de pré-étude',
    },
    {
        accessorKey: 'oc',
        header: 'OC',
    },
    {
        accessorKey: 'last_check',
        header: 'Dernier check',
    },
    {
        accessorKey: 'next_check',
        header: 'Prochain check',
    },
    {
        accessorKey: 'info',
        header: 'Informations complémentaires',
    },
    {
        accessorKey: 'signature_date',
        header: 'Date de signature',
    },
    {
        accessorKey: 'gap',
        header: 'Gap pré-étude/signature',
    },
    {
        accessorKey: 'nb_phase',
        header: 'Nombre de phases',
    },
    {
        accessorKey: 'current_phase',
        header: 'Phase en cours',
    },
    {
        accessorKey: 'current_phase_ending',
        header: 'Date de la fin de la phase en cours',
    },
    {
        accessorKey: 'end_rm',
        header: 'Fin RM',
    },
    {
        accessorKey: 'end_ce',
        header: 'Fin CE',
    },
    {
        accessorKey: 'av_number',
        header: "Nombre d'avenants",
    },
    {
        accessorKey: 'last_av_end',
        header: 'Fin dernier avenant',
    },
    {
        accessorKey: 'pvrf',
        header: 'Date de signature du PVRF',
    },
    {
        accessorKey: 'gap_signature_pvrf',
        header: 'Gap Signature/PVRF',
    },
    {
        accessorKey: 'total_duration',
        header: "Durée totale de l'étude",
    },
    {
        accessorKey: 'client_name',
        header: 'Client',
    },
    {
        accessorKey: 'client_email',
        header: 'Email client',
    },
    {
        accessorKey: 'cconf',
        header: 'CConf',
    },
    {
        accessorKey: 'qs',
        header: 'QS',
    },
    {
        accessorKey: 'status',
        header: 'Status',
    },
    {
        accessorKey: 'domain',
        header: 'Domaine',
    },
    {
        accessorKey: 'jeh_price',
        header: 'Prix JEH',
    },
    {
        accessorKey: 'jeh_number',
        header: 'Nombre JEH',
    },
    {
        accessorKey: 'jeh_price_number',
        header: 'Prix * Nombre JEH',
    },
    {
        accessorKey: 'ca_etude_ht',
        header: 'CA etude HT',
    },
    {
        accessorKey: 'percent_ca',
        header: '% du CA',
    },
    {
        accessorKey: 'client_type',
        header: 'Type de client',
    },
    {
        accessorKey: 'sector',
        header: 'Secteur',
    },
    {
        accessorKey: 'drop_reason',
        header: 'Raison si drops',
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const study = row.original;

            return (
                <div className="text-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                                <StudyManage
                                    buttonName="Paramètres"
                                    studyCode={study.code}
                                    href="/params"
                                />
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <StudyManage
                                    buttonName="Suivi de l'étude"
                                    studyCode={study.code}
                                    href="/dashboard"
                                />
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            );
        },
    },
];
