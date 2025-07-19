'use client';

import {
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { CompanyColumn, CompanyTable, CompanyName } from './types';
import { DataTablePagination } from './pagination';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

function TableEntries({ table, columns }: { table: CompanyTable; columns: CompanyColumn[] }) {
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
                                        <Link
                                            href={`edit-client/${row.getValue('id')}`}
                                            className="w-full h-full p-4 hover:underline"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </Link>
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

interface DataTableProps {
    columns: CompanyColumn[];
    data: CompanyName[];
}

export function CompanyTable({ columns, data }: DataTableProps) {
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
        <>
            <div className="flex items-center w-full pb-main">
                <Input
                    placeholder="Rechercher..."
                    value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
                    onChange={(event) =>
                        table.getColumn('name')?.setFilterValue(event.target.value)
                    }
                    className="lg:max-w-[50%]"
                />
            </div>
            <TableEntries table={table} columns={columns} />
            <DataTablePagination table={table} />
        </>
    );
}
