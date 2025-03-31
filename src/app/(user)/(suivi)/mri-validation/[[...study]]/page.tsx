import prisma from '@/db';
import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';

export default async function Page() {
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
                    {mris.map((mri, i) => (
                        <p key={i}>
                            {mri.study.information.code + ' - ' + mri.study.information.title}
                        </p>
                    ))}
                </BoxContent>
            </Box>
        </>
    );
}
