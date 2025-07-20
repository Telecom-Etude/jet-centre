'use client';

import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { Domain } from '@prisma/client';

import {
    COMPANY_SIZE_DISPLAYS,
    COMPANY_SIZE_NAMES,
    COMPANY_SIZES,
    CompanySizeDisplay,
    DOMAIN_NAMES,
    DOMAINS,
} from '@/db/types';

import MultipleSelector, { Option } from '@/components/meta-components/multiple-selector';
import { updateDomains } from './actions';
import { arrayEqual } from '@/lib/utils';

import { FullCompany } from '../../list-companies/actions';
import { SingleCombobox } from '@/components/meta-components/combobox';

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
    const [size, setSize] = useState(company.companyInfos.size ?? undefined);

    const updateServer = () => {
        setStatus(UpdateBoxStatus.Loading);
        const currentDomains = optionToDomain(domains);
        updateDomains(company.companyInfosId, currentDomains).then((serverDomains) => {
            if (serverDomains === undefined) return setStatus(UpdateBoxStatus.Error);
            if (arrayEqual(serverDomains, currentDomains)) return setStatus(UpdateBoxStatus.Ok);
            return setStatus(UpdateBoxStatus.NotSynced);
        });
    };

    return (
        <UpdateBox withBackdrop={false} title="Domaines" update={updateServer} status={status}>
            <MultipleSelector
                value={domains}
                onChange={(value) => {
                    setDomains(value);
                    setStatus(UpdateBoxStatus.UserPending);
                }}
                defaultOptions={ALL_DOMAIN_OPTIONS}
                emptyIndicator={
                    <p className="text-center text-lg leading-10 text-destructive">
                        no results found.
                    </p>
                }
            />
            <div className="flex items-center space-x-main">
                <p>CA</p>
                <Input value={ca} onChange={(e) => setCa(parseInt(e.target.value))} type="number" />
            </div>
            <div className="flex items-center space-x-main">
                <p>Taille</p>
                <SingleCombobox
                    currentKey={size ? COMPANY_SIZES[size].display : null}
                    selectKey={(size_name) => {
                        updateServer();
                        setSize(COMPANY_SIZE_DISPLAYS[size_name as CompanySizeDisplay]);
                    }}
                    emptyMessage="Mauvais nom de taille"
                    placeholder="Sélectionnez une taille"
                    title="Sélectionnez une taille"
                    items={COMPANY_SIZE_NAMES.map((size) => COMPANY_SIZES[size].display)}
                />
            </div>
        </UpdateBox>
    );
}
