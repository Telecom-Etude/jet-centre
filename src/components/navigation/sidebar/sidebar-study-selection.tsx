import { Button } from '@/components/ui/button';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { StudyWithCode } from '@/types/user';

export function StudySelection({
    studies,
    selectedStudyIndex,
    setSelectedStudyIndex,
}: {
    studies: StudyWithCode[];
    selectedStudyIndex: number;
    setSelectedStudyIndex: (selectedStudyIndex: number) => void;
}) {
    return (
        <Pagination>
            <PaginationContent className="gap-4">
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() =>
                            setSelectedStudyIndex(
                                (selectedStudyIndex - 1 + studies.length) % studies.length
                            )
                        }
                    ></PaginationPrevious>
                </PaginationItem>
                {studies.map((m, i) => (
                    <PaginationItem key={i} className="flex items-center">
                        <Button
                            className="rounded-full aspect-square w-4 h-4 border-0 p-0"
                            variant={selectedStudyIndex === i ? 'default' : 'secondary'}
                            onClick={() => setSelectedStudyIndex(i)}
                        />
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext
                        onClick={() =>
                            setSelectedStudyIndex((selectedStudyIndex + 1) % studies.length)
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
