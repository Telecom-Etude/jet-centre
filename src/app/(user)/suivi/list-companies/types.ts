import type { ColumnDef, Table } from '@tanstack/react-table';

export interface CompanyName {
    id: string;
    name: string;
}

export type CompanyColumn = ColumnDef<CompanyName>;

export type CompanyTable = Table<CompanyName>;
