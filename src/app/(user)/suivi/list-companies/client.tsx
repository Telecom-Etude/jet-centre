'use client';

import { useState } from 'react';
import {
    Box,
    BoxButtonEdit,
    BoxContent,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
} from '@/components/boxes/boxes';
import { CompanyName } from './types';
import { CompanyTable } from './data-table';
import { useRouter } from 'next/navigation';

export function ListCompanies({ data }: { data: CompanyName[] }) {
    const [selectedClient, setSelectedClient] = useState<string>();
    const router = useRouter();
    return (
        <>
            <CompanyTable data={data} setSelectedClient={setSelectedClient} />
            <Box className="w-full">
                <BoxHeader>
                    <BoxTitle>Informations sur l&apos;entreprise</BoxTitle>
                    <BoxHeaderBlock>
                        {selectedClient !== undefined && (
                            <BoxButtonEdit
                                onClick={() => router.push('edit-company/' + selectedClient)}
                                hoverContent="Edit company"
                            />
                        )}
                    </BoxHeaderBlock>
                </BoxHeader>
                <BoxContent>Informations...</BoxContent>
            </Box>
        </>
    );
}
