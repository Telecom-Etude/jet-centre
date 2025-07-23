import { UpdateBoxStatus } from '@/components/boxes/update-box';
import { Input } from '@/components/ui/input';
import { TableCell } from '@/components/ui/table';
import { useState } from 'react';
import { Member } from './schema';
import db from '@/db';

function EditableCell({
    initialValue,
    setStatus,
    update,
}: {
    initialValue: string;
    setStatus: (status: UpdateBoxStatus) => void;
    update: (newValue: string) => void;
}) {
    const [value, setValue] = useState(initialValue);
    const [editing, setEditing] = useState(false);

    return (
        <TableCell className="py-0">
            {editing ? (
                <Input
                    type="text"
                    autoFocus
                    value={value}
                    onChange={(e) => {
                        setStatus(UpdateBoxStatus.UserPending);
                        setValue(e.target.value);
                    }}
                    onBlur={() => {
                        setEditing(false);
                        update(value);
                    }}
                />
            ) : (
                <p className="py-4" onClick={() => setEditing(true)}>
                    {value}
                </p>
            )}
        </TableCell>
    );
}

export function EditEmployee({ employee }: { employee: Member }) {
    const [status, setStatus] = useState(UpdateBoxStatus.Ok);

    const updateFirstName = (firstName: string) => {
        setStatus(UpdateBoxStatus.Loading);
        db.person
            .update({ where: { id: employee.personId }, data: { firstName } })
            .then((person) => {
                if (person === undefined) return setStatus(UpdateBoxStatus.Error);
                if (person.firstName !== firstName) return setStatus(UpdateBoxStatus.NotSynced);
                if (status !== UpdateBoxStatus.UserPending) setStatus(UpdateBoxStatus.Ok);
            });
    };

    const updateLastName = (lastName: string) => {
        setStatus(UpdateBoxStatus.Loading);
        db.person
            .update({ where: { id: employee.personId }, data: { lastName } })
            .then((person) => {
                if (person === undefined) return setStatus(UpdateBoxStatus.Error);
                if (person.lastName !== lastName) return setStatus(UpdateBoxStatus.NotSynced);
                if (status !== UpdateBoxStatus.UserPending) setStatus(UpdateBoxStatus.Ok);
            });
    };

    const updateJob = (job: string) => {
        setStatus(UpdateBoxStatus.Loading);
        db.client.update({ where: { id: employee.clientId }, data: { job } }).then((client) => {
            if (client === undefined) return setStatus(UpdateBoxStatus.Error);
            if (client.job !== job) return setStatus(UpdateBoxStatus.NotSynced);
            if (status !== UpdateBoxStatus.UserPending) setStatus(UpdateBoxStatus.Ok);
        });
    };

    return (
        <>
            <EditableCell
                initialValue={employee.firstName}
                setStatus={setStatus}
                update={updateFirstName}
            />
            <EditableCell
                initialValue={employee.lastName}
                setStatus={setStatus}
                update={updateLastName}
            />
            <EditableCell initialValue={employee.job} setStatus={setStatus} update={updateJob} />
        </>
    );
}
