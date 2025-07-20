import { Box, BoxContent, BoxHeader, BoxHeaderBlock, BoxTitle } from '@/components/boxes/boxes';
import { FullCompany, getCompanyFromId } from '../../list-companies/actions';
import { ErrorPage } from '@/components/error';
import Link from 'next/link';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

function Address({ company }: { company: FullCompany }) {
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

function Domains({ company }: { company: FullCompany }) {
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

function Employees({ company }: { company: FullCompany }) {
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

function Name({ company }: { company: FullCompany }) {
    const studies: string[] = company.members.flatMap((member) =>
        member.studyClients.map((study) => study.study.information.code)
    );

    return (
        <div className="flex items-center flex-col justify-center">
            <h1 className="text-3xl text-primary font-bold">{company.name}</h1>
            <HoverCard>
                <HoverCardTrigger>
                    {studies.length === 0 ? (
                        <p>Aucune étude associée</p>
                    ) : (
                        <div className="flex-wrap flex space-x-2">
                            {studies.map((study, i) => (
                                <p key={i} className="border-2 rounded-full px-2 mt-2">
                                    {study}
                                </p>
                            ))}
                        </div>
                    )}
                </HoverCardTrigger>
                <HoverCardContent>
                    Go to the settings page of the setudy to associate company and study
                </HoverCardContent>
            </HoverCard>
        </div>
    );
}

function NoCompanyFound() {
    return (
        <ErrorPage title="Aucune entreprise n'existe sous cet identifiant">
            <Link href="/suivi/list-companies">
                Cliquez ici pour sélectionner une entreprise existante
            </Link>
        </ErrorPage>
    );
}

export default async function Page({ params }: { params: Promise<{ companyId: string }> }) {
    const { companyId } = await params;
    const company = await getCompanyFromId(companyId);
    if (company === null) return NoCompanyFound();

    return (
        <div className="grid gap-main p-main grid-cols-1 lg:grid-cols-2">
            <Name company={company} />
            <Address company={company} />
            <Domains company={company} />
            <Employees company={company} />
        </div>
    );
}
