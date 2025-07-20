'use client';

import { useState } from 'react';

import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { Domain } from '@prisma/client';
import { DOMAINS } from '@/db/types';

export function CompanyDomains({
    companyInfosId,
    domains,
}: {
    companyInfosId: string;
    domains: Domain[];
}) {
    const [status, setStatus] = useState(UpdateBoxStatus.Ok);
    const [value, setValue] = useState(0);

    const updateServer = () => {};

    return (
        <div className="p-8">
            <UpdateBox title="Counter" update={updateServer} status={status}>
                {domains.length === 0 ? (
                    <p>Aucun domain associé</p>
                ) : (
                    <div className="flex-wrap flex space-x-2">
                        {domains.map((domain, i) => (
                            <p key={i} className="border-2 rounded-full px-2 mt-2">
                                {DOMAINS[domain].display}
                            </p>
                        ))}
                    </div>
                )}
            </UpdateBox>
        </div>
    );
}
