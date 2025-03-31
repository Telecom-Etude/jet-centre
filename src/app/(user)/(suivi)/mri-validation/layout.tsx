import prisma from '@/db';
import Link from 'next/link';
import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';
import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
    const mris = await prisma.mRI.findMany({
        include: {
            study: {
                include: {
                    information: true,
                },
            },
        },
    });

    return (
        <>
            <Box>
                <BoxHeader>
                    <BoxTitle>MRI à valider</BoxTitle>
                </BoxHeader>
                <BoxContent>
                    <div className="flex flex-col">
                        {mris.map((mri, i) => (
                            <Link
                                className="p-2 hover:underline"
                                href={'/mri-validation/' + mri.study.information.code}
                                key={i}
                            >
                                {mri.study.information.code + ' - ' + mri.study.information.title}
                            </Link>
                        ))}
                    </div>
                </BoxContent>
            </Box>
            {children}
        </>
    );
}
