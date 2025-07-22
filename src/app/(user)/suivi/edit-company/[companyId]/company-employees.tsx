'use client';

import { useState } from 'react';

import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import MultipleSelector, { Option } from '@/components/meta-components/multiple-selector';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getCompanyLessPeople } from './actions';
import { NewEmployee } from './new-employee';

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

    const updateServer = () => {
        setStatus(UpdateBoxStatus.Loading);
    };

    const updatePeopleList = () => {
        const oldStatus = status;
        setStatus(UpdateBoxStatus.Loading);
        getCompanyLessPeople().then((people) => {
            if (people === undefined) return setStatus(UpdateBoxStatus.Error);
            setCompanyLessPeople(people);

            const entries = [];
            for (const person of people) {
                if (person.clientId) {
                    entries.push([person.value, person.clientId]);
                }
            }
            setPersonClientIdMap(Object.fromEntries(entries));

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
                    onBlur={() => updateServer()}
                    onChange={(people) => {
                        setMembers(people);
                        setStatus(UpdateBoxStatus.UserPending);
                        updateServer();
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
                <NewEmployee
                    addEmployee={(employee) => {}}
                    updateServer={updateServer}
                    status={status}
                    setStatus={setStatus}
                />
            </div>
        </UpdateBox>
    );
}
