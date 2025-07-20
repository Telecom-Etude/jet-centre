import { Box, BoxContent, BoxHeader, BoxHeaderBlock, BoxTitle } from '@/components/boxes/boxes';

async function Address() {
    return (
        <Box className="w-full">
            <BoxHeader>
                <BoxTitle>Adresse</BoxTitle>
                <BoxHeaderBlock></BoxHeaderBlock>
            </BoxHeader>
            <BoxContent>content</BoxContent>
        </Box>
    );
}

async function Domains() {
    return (
        <Box className="w-full">
            <BoxHeader>
                <BoxTitle>Domaines</BoxTitle>
                <BoxHeaderBlock></BoxHeaderBlock>
            </BoxHeader>
            <BoxContent>content</BoxContent>
        </Box>
    );
}

async function Employees() {
    return (
        <Box className="w-full">
            <BoxHeader>
                <BoxTitle>Employés</BoxTitle>
                <BoxHeaderBlock></BoxHeaderBlock>
            </BoxHeader>
            <BoxContent>content</BoxContent>
        </Box>
    );
}

export default async function Page({ params }: { params: Promise<{ companyId: string }> }) {
    const { companyId } = await params;
    return (
        <div className="grid gap-main p-main grid-cols-1 lg:grid-cols-2">
            <div>{companyId}</div>
            <Address />
            <Domains />
            <Employees />
        </div>
    );
}
