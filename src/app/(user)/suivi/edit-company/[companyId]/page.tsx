import { FullCompany, getCompanyFromId } from '../../list-companies/actions';
import { ErrorPage } from '@/components/error';
import Link from 'next/link';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { UpsertAddress } from '@/components/data/upsert-address';
import { EditCompanyInfos } from '././company-infos';
import { EditCompanyEmployees } from './company-employees';
import { personName } from '@/lib/utils';
import { getCompanyLessPeople } from './actions';

function Name({ company }: { company: FullCompany }) {
    const studies: string[] = company.members.flatMap((member) =>
        member.studyClients.map((study) => study.study.information.code)
    );

    return (
        <div className="flex h-full items-center flex-col justify-center">
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
    const members = company.members.map((member) => ({
        label: personName(member.person),
        value: member.personId,
    }));
    const personClientIdMap = Object.fromEntries(
        company.members.map((client) => [client.personId, client.id])
    );
    const companyLessPeople = await getCompanyLessPeople();
    if (companyLessPeople === undefined) throw new Error();

    return (
        <div className="grid gap-main p-main grid-cols-1 lg:grid-cols-2">
            <div className="h-full">
                <Name company={company} />
            </div>
            <div className="h-full">
                <EditCompanyInfos company={company} />
            </div>
            <div className="h-full">
                <UpsertAddress address={company.address} companyId={companyId} />
            </div>
            <div className="h-full">
                <EditCompanyEmployees
                    companyId={companyId}
                    members={members}
                    companyLessPeople={companyLessPeople}
                    personClientIdMap={personClientIdMap}
                />
            </div>
        </div>
    );
}
