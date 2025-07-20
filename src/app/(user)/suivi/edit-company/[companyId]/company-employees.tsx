'use client';

import { useState } from 'react';

import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { FullCompany } from '../../list-companies/actions';
import MultipleSelector from '@/components/meta-components/multiple-selector';
import { Button } from '@/components/ui/button';
import { personName } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export function EditCompanyEmployees({ company }: { company: FullCompany }) {
    const [status, setStatus] = useState(UpdateBoxStatus.Ok);
    const [employees, setEmployees] = useState<{ label: string; value: string }[]>(
        company.members.map((member) => ({
            label: personName(member.person),
            value: member.personId,
        }))
    );
    const [people, setPeople] = useState([]);

    const updateServer = () => {};
    const updatePeopleList = () => {};

    return (
        <UpdateBox title="Employés" update={updateServer} status={status}>
            <div className="flex flex-col items-center space-y-main">
                <MultipleSelector
                    value={employees}
                    onChange={(value) => {
                        setStatus(UpdateBoxStatus.UserPending);
                        setEmployees(value);
                    }}
                    defaultOptions={people}
                    emptyIndicator={
                        <p className="text-center text-lg leading-10 text-destructive">
                            Personne n'existe avec ce nom.
                        </p>
                    }
                />
                <Button variant="outline">Rafraichir la base d&apos;utilisateurs</Button>
                <Separator className="bg-primary" />
                <p>nouvelle personne</p>
            </div>
        </UpdateBox>
    );
}
