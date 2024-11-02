import { Button } from '../ui/button';
import { NavigationTemplate } from './menu-template';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

export const MissionNavbar = ({
    missionNb,
    missions,
    setMissionNb,
}: {
    missionNb: number;
    missions: string[];
    setMissionNb: (missionNb: number) => void;
}) => {
    const mission = missions[missionNb];

    const links = [
        [
            {
                href: '/' + mission + '/dashboard',
                name: 'Tableau de bord',
            },
            {
                href: '/' + mission + '/params',
                name: "Paramètres de l'étude",
            },
        ],
        [
            {
                href: '/' + mission + '/notes',
                name: 'Notes clients & étude',
            },
            {
                href: '/' + mission + '/mri',
                name: 'Écriture MRI',
            },
            {
                href: '/' + mission + '/assignees',
                name: "Sélection d'intervenants",
            },
            {
                href: '/' + mission + '/docs',
                name: 'Documents',
            },
        ],
        [
            {
                href: '/' + mission + '/suivi',
                name: "Suivi de l'étude",
            },
            {
                href: '/' + mission + '/finalisation',
                name: "Finalisation de l'étude",
            },
        ],
        [
            {
                href: '/' + mission + '/treso',
                name: 'Espace trésorerie',
            },
        ],
    ];

    return (
        <div className="h-full flex flex-col justify-between">
            <div className="flex-grow">
                <NavigationTemplate links={links} />
            </div>
            <div className="flex flex-col items-center gap-1">
                <div className="flex flex-col items-center gap-1">
                    {mission}
                    <div className="h-1 w-[calc(100%+1rem)] rounded-full bg-secondary"></div>
                </div>
                {/* Large separator */}
                <Pagination>
                    <PaginationContent className="gap-4">
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() =>
                                    setMissionNb(
                                        (missionNb - 1 + missions.length) % missions.length
                                    )
                                }
                            ></PaginationPrevious>
                        </PaginationItem>
                        {missions.map((m, i) => (
                            <PaginationItem key={i} className="flex items-center">
                                <Button
                                    className="rounded-full aspect-square w-4 h-4 border-0 p-0"
                                    variant={missionNb === i ? 'default' : 'secondary'}
                                    onClick={() => setMissionNb(i)}
                                />
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                onClick={() => setMissionNb((missionNb + 1) % missions.length)}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};
