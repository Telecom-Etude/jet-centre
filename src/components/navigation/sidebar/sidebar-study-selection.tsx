import { Button } from '@/components/ui/button';

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

export function StudySelection({
    missions,
    selectedMission,
    setSelectedMission,
}: {
    missions: string[];
    selectedMission: number;
    setSelectedMission: (selectedMission: number) => void;
}) {
    return (
        <Pagination>
            <PaginationContent className="gap-4">
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() =>
                            setSelectedMission(
                                (selectedMission - 1 + missions.length) % missions.length
                            )
                        }
                    ></PaginationPrevious>
                </PaginationItem>
                {missions.map((m, i) => (
                    <PaginationItem key={i} className="flex items-center">
                        <Button
                            className="rounded-full aspect-square w-4 h-4 border-0 p-0"
                            variant={selectedMission === i ? 'default' : 'secondary'}
                            onClick={() => setSelectedMission(i)}
                        />
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext
                        onClick={() => setSelectedMission((selectedMission + 1) % missions.length)}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
