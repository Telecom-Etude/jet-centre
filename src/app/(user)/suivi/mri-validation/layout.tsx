import Link from 'next/link';
import { ReactNode } from 'react';

import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';

import { listMriToValidate } from './action';
import { ValidationButton } from './validation-button';

export default async function Layout({ children }: { children: ReactNode }) {
    const mris = (await listMriToValidate()) ?? [];
    return (
        <div className="grid grid-cols-2 gap-main h-full">
            <Box>
                <BoxHeader>
                    <BoxTitle>Liste des MRI en validation</BoxTitle>
                </BoxHeader>
                <BoxContent>
                    {mris.length == 0 ? (
                        <div className="h-full flex items-center justify-center">
                            <p>Aucun MRI à valider pour le moment.</p>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            {mris.map((mri, i) => (
                                <div className="p-2 w-full flex items-center" key={i}>
                                    <Link
                                        className="hover:underline w-full h-full"
                                        href={'/mri-validation/' + mri.study.information.code}
                                    >
                                        {mri.study.information.code +
                                            ' - ' +
                                            mri.study.information.title}
                                    </Link>
                                    <ValidationButton status={mri.status} mriId={mri.id} />
                                </div>
                            ))}
                        </div>
                    )}
                </BoxContent>
            </Box>
            {children}
        </div>
    );
}
