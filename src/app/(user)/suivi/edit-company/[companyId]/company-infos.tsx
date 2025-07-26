'use client';

import { CompanySize, Domain } from '@prisma/client';
import { useEffect, useState } from 'react';

import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { SingleCombobox } from '@/components/meta-components/combobox';
import MultipleSelector, { Option } from '@/components/meta-components/multiple-selector';
import { Input } from '@/components/ui/input';
import { COMPANY_SIZE_NAMES, COMPANY_SIZES, DOMAIN_NAMES, DOMAINS } from '@/db/types';
import { arrayEqual } from '@/lib/utils';

import { FullCompany } from '../../list-companies/actions';

import { updateCompanyInfos } from './actions';

function domainToOption(domains: Domain[]): Option[] {
    return domains.map((domain) => ({
        label: DOMAINS[domain].display,
        value: domain,
    }));
}

function optionToDomain(domains: Option[]): Domain[] {
    return domains.map((domain) => domain.value as Domain);
}

const ALL_DOMAIN_OPTIONS = DOMAIN_NAMES.map((domain) => ({
    label: DOMAINS[domain].display,
    value: domain,
}));

export function EditCompanyInfos({ company }: { company: FullCompany }) {
    const [status, setStatus] = useState(UpdateBoxStatus.Ok);
    const [domains, setDomains] = useState<Option[]>(domainToOption(company.companyInfos.domains));
    const [ca, setCa] = useState(company.companyInfos.ca ?? undefined);
    const [size, setSize] = useState<CompanySize | undefined>(
        company.companyInfos.size ?? undefined
    );

    const updateServer = () => {
        setStatus(UpdateBoxStatus.Loading);
        const currentDomains = optionToDomain(domains);
        updateCompanyInfos({
            id: company.companyInfos.id,
            domains: currentDomains,
            ca: ca ?? null,
            size: size ?? null,
        }).then((serverData) => {
            if (serverData === undefined) return setStatus(UpdateBoxStatus.Error);
            if (
                arrayEqual(serverData.domains, currentDomains) &&
                (!ca || serverData.ca === ca) &&
                (!size || serverData.size === size)
            )
                return setStatus(UpdateBoxStatus.Ok);
            return setStatus(UpdateBoxStatus.NotSynced);
        });
    };

    useEffect(updateServer, [domains, size, ca, company.companyInfos.id]);

    return (
        <UpdateBox withBackdrop={false} title="Informations" update={updateServer} status={status}>
            <MultipleSelector
                value={domains}
                onChange={(value) => {
                    setStatus(UpdateBoxStatus.UserPending);
                    setDomains(value);
                }}
                defaultOptions={ALL_DOMAIN_OPTIONS}
                emptyIndicator={<p className="text-center leading-10">Mauvais nom de domaine</p>}
            />
            <div className="flex items-center space-x-main">
                <p className="w-fit">CA (k€)</p>
                <Input
                    className="flex-grow w-fit"
                    value={ca}
                    onChange={(e) => {
                        setStatus(UpdateBoxStatus.UserPending);
                        setCa(e.target.value.length === 0 ? undefined : parseInt(e.target.value));
                    }}
                    onBlur={() => updateServer()}
                    type="number"
                />
            </div>
            <div className="flex items-center space-x-main">
                <p>Taille</p>
                <SingleCombobox<CompanySize>
                    currentKey={size ?? null}
                    selectKey={(company_size) => {
                        setStatus(UpdateBoxStatus.UserPending);
                        setSize(company_size);
                    }}
                    emptyMessage="Mauvais nom de taille"
                    placeholder="Sélectionnez une taille"
                    title="Sélectionnez une taille"
                    toString={(company_size) => COMPANY_SIZES[company_size].display}
                    items={COMPANY_SIZE_NAMES}
                />
            </div>
        </UpdateBox>
    );
}
