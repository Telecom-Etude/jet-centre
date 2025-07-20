'use client';

import { useState } from 'react';

import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { Domain } from '@prisma/client';
import { DOMAIN_NAMES, DOMAINS } from '@/db/types';
import MultipleSelector, { Option } from '@/components/meta-components/multiple-selector';
import { updateDomains } from './actions';
import { arrayEqual } from '@/lib/utils';

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

export function CompanyDomains({
    companyInfosId,
    domains,
}: {
    companyInfosId: string;
    domains: Domain[];
}) {
    const [status, setStatus] = useState(UpdateBoxStatus.Ok);
    const [value, setValue] = useState<Option[]>(domainToOption(domains));

    const updateServer = () => {
        setStatus(UpdateBoxStatus.Loading);
        const domains = optionToDomain(value);
        updateDomains(companyInfosId, domains).then((serverDomains) => {
            if (serverDomains === undefined) return setStatus(UpdateBoxStatus.Error);
            if (arrayEqual(serverDomains, domains)) return setStatus(UpdateBoxStatus.Ok);
            return setStatus(UpdateBoxStatus.NotSynced);
        });
    };

    return (
        <UpdateBox withBackdrop={false} title="Domaines" update={updateServer} status={status}>
            <MultipleSelector
                value={value}
                onChange={(value) => {
                    setValue(value);
                    setStatus(UpdateBoxStatus.UserPending);
                }}
                defaultOptions={ALL_DOMAIN_OPTIONS}
                emptyIndicator={
                    <p className="text-center text-lg leading-10 text-destructive">
                        no results found.
                    </p>
                }
            />
        </UpdateBox>
    );
}
