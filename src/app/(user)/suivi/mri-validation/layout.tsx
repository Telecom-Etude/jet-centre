import Link from 'next/link';
import { ReactNode } from 'react';

import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';
import { MRI_VALIDATION } from '@/settings/sidebars/tabs';

import { listMriToValidate } from './actions';
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
                                        href={MRI_VALIDATION.href + '/' + mri.id}
                                    >
                                        {mri.study.information.code + ' - ' + mri.title}
                                    </Link>
                                    <ValidationButton mri={mri} />
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
