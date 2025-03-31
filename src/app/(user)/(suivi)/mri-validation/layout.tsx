import Link from 'next/link';
import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { listMri } from './[[...study]]/action';

export default async function Layout({ children }: { children: ReactNode }) {
    const mris = (await listMri()) ?? [];
    return (
        <div className="grid grid-cols-2 gap-main h-full">
            <Box>
                <BoxHeader>
                    <BoxTitle>Liste des MRI en validation</BoxTitle>
                </BoxHeader>
                <BoxContent>
                    <div className="flex flex-col">
                        {mris.map((mri, i) => (
                            <div className="p-2 w-full flex" key={i}>
                                <Link
                                    className="hover:underline w-full"
                                    href={'/mri-validation/' + mri.study.information.code}
                                >
                                    {mri.study.information.code +
                                        ' - ' +
                                        mri.study.information.title}
                                </Link>
                                <form
                                    action={async () => {
                                        'use server';
                                    }}
                                >
                                    <Button type="submit" variant="outline">
                                        Valider
                                    </Button>
                                </form>
                            </div>
                        ))}
                    </div>
                </BoxContent>
            </Box>
            {children}
        </div>
    );
}
