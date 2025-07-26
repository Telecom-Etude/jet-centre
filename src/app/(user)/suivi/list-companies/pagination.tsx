import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { IconType } from 'react-icons/lib';

import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { CompanyTable } from './types';

function NbPerPageSelector({ table }: { table: CompanyTable }) {
    return (
        <div className="flex items-center space-x-2">
            <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                    table.setPageSize(Number(value));
                }}
            >
                <SelectTrigger className="h-8 w-[70px]">
                    <SelectValue placeholder={table.getState().pagination.pageSize} />
                </SelectTrigger>
                <SelectContent side="top">
                    {[10, 20, 25, 30, 40, 50].map((pageSize) => (
                        <SelectItem key={pageSize} value={`${pageSize}`}>
                            {pageSize}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <p className="text-sm font-medium">entreprises par page</p>
        </div>
    );
}

function NavigatorButton({
    onSmallScreens,
    onClick,
    disabled,
    srText,
    Icon,
}: {
    onSmallScreens: boolean;
    disabled: boolean;
    onClick: () => void;
    srText: string;
    Icon: IconType;
}) {
    return (
        <Button
            variant="outline"
            size="icon"
            className={'size-8 ' + (onSmallScreens || ' hidden lg:flex')}
            onClick={onClick}
            disabled={disabled}
        >
            <span className="sr-only">{srText}</span>
            <Icon />
        </Button>
    );
}

function PageNavigator({ table }: { table: CompanyTable }) {
    return (
        <div className="flex items-center space-x-2">
            <NavigatorButton
                onSmallScreens={false}
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
                srText="Première page"
                Icon={ChevronsLeft}
            />
            <NavigatorButton
                onSmallScreens={true}
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                srText="Page précédente"
                Icon={ChevronLeft}
            />
            <NavigatorButton
                onSmallScreens={true}
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                srText="Page suivante"
                Icon={ChevronRight}
            />
            <NavigatorButton
                onSmallScreens={false}
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
                srText="Dernière page"
                Icon={ChevronsRight}
            />
        </div>
    );
}

export function DataTablePagination({ table }: { table: CompanyTable }) {
    return (
        <div className="pt-main text-sm flex items-center justify-between">
            <NbPerPageSelector table={table} />
            <p>
                Page {table.getState().pagination.pageIndex + 1} sur {table.getPageCount()}
            </p>
            <PageNavigator table={table} />
        </div>
    );
}
