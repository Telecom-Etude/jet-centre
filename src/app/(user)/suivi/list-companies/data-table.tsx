'use client';

import {
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { columns } from './columns';
import { DataTablePagination } from './pagination';
import type { CompanyColumn, CompanyTable, CompanyName } from './types';

function DataTableEntries({
    table,
    columns,
    setSelectedCompany,
}: {
    setSelectedCompany: (id: string) => void;
    table: CompanyTable;
    columns: CompanyColumn[];
}) {
    return (
        <Table className="rounded-lg border">
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers
                            .filter((header) => header.column.columnDef.header !== 'Id')
                            .map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef.header,
                                                  header.getContext()
                                              )}
                                    </TableHead>
                                );
                            })}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                            {row
                                .getVisibleCells()
                                .filter((cell) => cell.column.columnDef.header !== 'Id')
                                .map((cell) => (
                                    <TableCell key={cell.id} className="flex p-0">
                                        <Button
                                            variant="link"
                                            onClick={() => setSelectedCompany(row.getValue('id'))}
                                            className="w-full flex justify-start h-full p-4 hover:underline"
                                        >
                                            {row.getValue('name')}
                                        </Button>
                                    </TableCell>
                                ))}
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                            Aucune entreprise trouvée.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

function DataTableSearch({ table }: { table: CompanyTable }) {
    return (
        <div className="flex items-center w-full pb-main">
            <Input
                placeholder="Rechercher..."
                value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
                onChange={(event) => table.getColumn('name')?.setFilterValue(event.target.value)}
                className="lg:max-w-[50%]"
            />
        </div>
    );
}

export function CompanyTable({
    data,
    setSelectedCompany,
}: {
    data: CompanyName[];
    setSelectedCompany: (id: string) => void;
}) {
    const [columnFilters, onColumnFiltersChange] = useState<ColumnFiltersState>([]);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange,
        getFilteredRowModel: getFilteredRowModel(),
        state: { columnFilters },
    });

    return (
        <div>
            <DataTableSearch table={table} />
            <DataTableEntries
                table={table}
                columns={columns}
                setSelectedCompany={setSelectedCompany}
            />
            <DataTablePagination table={table} />
        </div>
    );
}
