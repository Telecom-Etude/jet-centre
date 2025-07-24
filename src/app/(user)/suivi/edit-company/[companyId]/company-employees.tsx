'use client';

import { useState } from 'react';

import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { getPossibleMembers, createMember, removeClient } from './actions';
import { NewEmployee } from './new-employee';
import { Member, NewEmployeeSchemaType, PossibleMember } from './schema';

import { Table, TableBody, TableRow } from '@/components/ui/table';
import { EditEmployee } from './edit-employee';

export function EditCompanyEmployees({
    companyId,
    members: initialMembers,
    possibleMembers: initialPossibleMembers,
}: {
    companyId: string;
    members: Member[];
    possibleMembers: PossibleMember[];
}) {
    const [possibleMembers, setPossibleMembers] = useState(initialPossibleMembers);
    const [members, setMembers] = useState(initialMembers);

    const [status, setStatus] = useState(UpdateBoxStatus.Ok);

    const checkServer = () => {
        setStatus(UpdateBoxStatus.Loading);
    };

    const updatePossibleEmployees = () => {
        const oldStatus = status;
        setStatus(UpdateBoxStatus.Loading);
        getPossibleMembers().then((people) => {
            if (people === undefined) return setStatus(UpdateBoxStatus.Error);
            setPossibleMembers(people);
            setStatus(oldStatus);
        });
    };

    const addEmployee = (person: NewEmployeeSchemaType) => {
        createMember(person.firstName, person.lastName, person.job, companyId).then((data) => {
            if (data === undefined) return setStatus(UpdateBoxStatus.Error);
            const {
                client: { job, id: clientId },
                person: { firstName, lastName, id: personId },
            } = data;
            if (firstName !== person.firstName || lastName !== person.lastName || job != person.job)
                return setStatus(UpdateBoxStatus.NotSynced);
            setMembers((current) => [
                ...current,
                {
                    firstName: person.firstName,
                    lastName: person.lastName,
                    job: person.job,
                    personId,
                    clientId,
                },
            ]);
            checkServer();
        });
    };

    const removeEmployee = (clientId: string) => {
        setStatus(UpdateBoxStatus.Loading);
        setMembers((members) => members.filter((member) => member.clientId !== clientId));
        removeClient(clientId).then((ok) => {
            if (ok) return setStatus(UpdateBoxStatus.Ok);
            setStatus(UpdateBoxStatus.Error);
        });
    };

    return (
        <UpdateBox title="Employés" update={() => {}} status={status}>
            <div className="flex flex-col items-center space-y-main">
                <Table className="table-fixed w-full">
                    <TableBody>
                        {members.map((member, i) => (
                            <TableRow key={i}>
                                <EditEmployee
                                    employee={member}
                                    removeEmployee={() => removeEmployee(member.clientId)}
                                />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button variant="outline" onClick={updatePossibleEmployees}>
                    Rafraîchir la base de personnes
                </Button>
                <Separator className="bg-primary" />
                <NewEmployee addEmployee={addEmployee} status={status} setStatus={setStatus} />
            </div>
        </UpdateBox>
    );
}
