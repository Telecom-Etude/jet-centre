import { Separator } from '@/components/ui/separator';
import { personName, stringifyAddress } from '@/lib/utils';
import { Client, Person } from '@prisma/client';
import { ReactNode } from 'react';
import { FullCompany } from './actions';
import { COMPANY_SIZES, DOMAINS } from '@/db/types';

function DisplayMember({ member }: { member: Client & { person: Person } }) {
    return (
        <div>
            <p>{personName(member.person)}</p>
            <CompanyInfo title="Email" text={member.person.email || 'Non renseignée'} />
            <CompanyInfo title="Téléphone" text={member.person.number || 'Non renseignée'} />
        </div>
    );
}

function CompanyInfo({
    title,
    children,
    text,
}: {
    title: string;
    children?: ReactNode;
    text?: string;
}) {
    return (
        <div className="flex space-x-main items-center">
            <h4 className="font-bold">{title}</h4>
            <p>{text}</p>
            {children}
        </div>
    );
}

export function DisplayCompany({ company }: { company: FullCompany }) {
    const studies: string[] = company.members.flatMap((member) =>
        member.studyClients.map((study) => study.study.information.code)
    );

    return (
        <div className="space-y-main">
            <h3 className="w-full font-xl text-xl text-primary font-medium">{company.name}</h3>
            <CompanyInfo title="Études">
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
            </CompanyInfo>
            <CompanyInfo
                title="Adresse"
                text={
                    company.address
                        ? stringifyAddress(company.address)
                        : 'Aucune adresse renseignée'
                }
            />
            <CompanyInfo title="Domaines">
                {company.companyInfos.domains.length === 0 ? (
                    <p>Aucun domain associé</p>
                ) : (
                    <div className="flex-wrap flex space-x-2">
                        {company.companyInfos.domains.map((domain, i) => (
                            <p key={i} className="border-2 rounded-full px-2 mt-2">
                                {DOMAINS[domain].display}
                            </p>
                        ))}
                    </div>
                )}
            </CompanyInfo>
            {company.companyInfos.ca && (
                <CompanyInfo title="CA" text={company.companyInfos.ca + '€'} />
            )}
            {company.companyInfos.size && (
                <CompanyInfo
                    title="Taille"
                    text={COMPANY_SIZES[company.companyInfos.size].display}
                />
            )}
            <Separator className="bg-primary" />
            <h4 className="font-bold">Employés</h4>
            {company.members.map((member, i) => (
                <DisplayMember key={i} member={member} />
            ))}
        </div>
    );
}
