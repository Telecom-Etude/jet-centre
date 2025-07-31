import { useState } from 'react';
import { MdError } from 'react-icons/md';

import { BoxButtonIcon, BoxButtonTrash } from '@/components/boxes/boxes';
import { getUpdateBoxStatusInfos, UpdateBoxStatus } from '@/components/boxes/update-box';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Input } from '@/components/ui/input';
import { TableCell } from '@/components/ui/table';

import { updateJob, updatePerson } from './actions';
import { Member } from './schema';

function EditableCell({
    setStatus,
    update,
    value,
    setValue,
}: {
    setStatus: (status: UpdateBoxStatus) => void;
    update: () => void;
    value: string;
    setValue: (newValue: string) => void;
}) {
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
                        update();
                    }}
                />
            ) : value === '' ? (
                <HoverCard>
                    <HoverCardTrigger onClick={() => setEditing(true)}>
                        <MdError className="text-destructive cursor-help" />
                    </HoverCardTrigger>
                    <HoverCardContent>Un champ vide n&apos;est pas autorisé.</HoverCardContent>
                </HoverCard>
            ) : (
                <p className="cursor-pointer py-4" onClick={() => setEditing(true)}>
                    {value}
                </p>
            )}
        </TableCell>
    );
}

export function EditEmployee({
    employee,
    removeEmployee,
}: {
    employee: Member;
    removeEmployee: () => void;
}) {
    const [status, setStatus] = useState(
        employee.job === '' ? UpdateBoxStatus.UserPending : UpdateBoxStatus.Ok
    );
    const [firstName, setFirstName] = useState(employee.firstName);
    const [lastName, setLastName] = useState(employee.lastName);
    const [job, setJob] = useState(employee.job);

    const [otherFinished, setOtherFinished] = useState(true);

    const update = () => {
        setStatus(UpdateBoxStatus.Loading);
        setOtherFinished(false);
        updatePerson(firstName, lastName, employee.personId).then((person) => {
            if (person === undefined) return setStatus(UpdateBoxStatus.Error);
            if (person.lastName !== lastName || person.firstName !== firstName)
                return setStatus(UpdateBoxStatus.NotSynced);
            if (otherFinished) setStatus(UpdateBoxStatus.Ok);
            setOtherFinished(true);
        });
        updateJob(job, employee.clientId).then((client) => {
            if (client === undefined) return setStatus(UpdateBoxStatus.Error);
            if (client.job !== job) return setStatus(UpdateBoxStatus.NotSynced);
            if (otherFinished) setStatus(UpdateBoxStatus.Ok);
            setOtherFinished(true);
        });
    };

    return (
        <>
            <EditableCell
                value={firstName}
                setValue={setFirstName}
                setStatus={setStatus}
                update={update}
            />
            <EditableCell
                value={lastName}
                setValue={setLastName}
                setStatus={setStatus}
                update={update}
            />
            <EditableCell value={job} setValue={setJob} setStatus={setStatus} update={update} />
            <TableCell className="p-0">
                <div className="flex justify-around items-center">
                    <BoxButtonIcon {...getUpdateBoxStatusInfos(status, true)} onClick={update} />
                    <BoxButtonTrash onClick={removeEmployee} />
                </div>
            </TableCell>
        </>
    );
}
