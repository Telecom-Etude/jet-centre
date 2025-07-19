'use client';

import {
    flexRender,
    getCoreRowModel,
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

function TableActions({ table }: { table: CompanyTable }) {
    return (
        <div className="flex items-center justify-end space-x-2 py-4">
            <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
            >
                Previous
            </Button>
            <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
            >
                Next
            </Button>
        </div>
    );
}

interface DataTableProps {
    columns: CompanyColumn[];
    data: CompanyName[];
}

export function CompanyTable({ columns, data }: DataTableProps) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <>
            <TableEntries table={table} columns={columns} />
            <TableActions table={table} />
        </>
    );
}
