'use client';

import { useState } from 'react';

import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import MultipleSelector, { Option } from '@/components/meta-components/multiple-selector';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getCompanyLessPeople } from './actions';

export function EditCompanyEmployees({
    companyId,
    members: initialMembers,
    personClientIdMap: initialPersonClientIdMap,
    companyLessPeople: initialCompanyLessPeople,
}: {
    companyId: string;
    members: Option[];
    personClientIdMap: { [key: string]: string };
    companyLessPeople: Option[];
}) {
    const [personClientIdMap, setPersonClientIdMap] = useState(initialPersonClientIdMap);
    const [companyLessPeople, setCompanyLessPeople] = useState(initialCompanyLessPeople);
    const [members, setMembers] = useState(initialMembers);

    const [status, setStatus] = useState(UpdateBoxStatus.Ok);

    const updateServer = () => {};

    const updatePeopleList = () => {
        const oldStatus = status;
        setStatus(UpdateBoxStatus.Loading);
        getCompanyLessPeople().then((people) => {
            if (people === undefined) return setStatus(UpdateBoxStatus.Error);
            setCompanyLessPeople(people);
            setStatus(oldStatus);
        });
    };

    return (
        <UpdateBox title="Employés" update={updateServer} status={status}>
            <p className="italic">
                Les personnes non sélectionnables appartiennent déjà à une entreprise.
            </p>
            <div className="flex flex-col items-center space-y-main">
                <MultipleSelector
                    value={members}
                    onChange={(people) => {
                        setStatus(UpdateBoxStatus.UserPending);
                        setMembers(people);
                    }}
                    defaultOptions={companyLessPeople}
                    emptyIndicator={
                        <p className="py-2 text-center text-destructive">
                            Personne n'existe avec ce nom.
                        </p>
                    }
                />
                <Button variant="outline" onClick={updatePeopleList}>
                    Rafraîchir la base de personnes
                </Button>
                <Separator className="bg-primary" />
                <p>nouvelle personne</p>
            </div>
        </UpdateBox>
    );
}
