'use client';

import { useState } from 'react';

import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { getPossibleMembers, createMember, removeClient } from './actions';
import { Member, NewEmployeeSchemaType, PossibleMember } from './schema';

import { Table, TableBody, TableRow } from '@/components/ui/table';
import { EditEmployee } from './edit-employee';

import { SingleCombobox } from '@/components/meta-components/combobox';
import { CreateEmployee } from './create-employee';

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

    const createEmployee = (person: NewEmployeeSchemaType) => {
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
        const member = members.find((member) => member.clientId === clientId);
        if (member === undefined) return setStatus(UpdateBoxStatus.NotSynced);
        setMembers((members) => members.filter((member) => member.clientId !== clientId));
        setPossibleMembers((current) => [
            ...current,
            { ...member, id: member.personId, client: { id: member.clientId } },
        ]);
        removeClient(clientId).then((ok) => {
            if (ok) return setStatus(UpdateBoxStatus.Ok);
            setStatus(UpdateBoxStatus.Error);
        });
    };

    const addEmployee = (personId: string) => {
        setStatus(UpdateBoxStatus.Loading);
        setPossibleMembers((members) => members.filter((member) => member.id !== personId));
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
                <Separator className="bg-primary" />
                <SingleCombobox
                    currentKey={null}
                    selectKey={addEmployee}
                    emptyMessage="Non trouvé. Rafraichissez la base des utilisateurs"
                    placeholder="placeholder"
                    title="title"
                    items={possibleMembers}
                />
                <Button variant="outline" onClick={updatePossibleEmployees}>
                    Rafraîchir la base de personnes
                </Button>
                <Separator className="bg-primary" />
                <CreateEmployee
                    createEmployee={createEmployee}
                    status={status}
                    setStatus={setStatus}
                />
            </div>
        </UpdateBox>
    );
}
