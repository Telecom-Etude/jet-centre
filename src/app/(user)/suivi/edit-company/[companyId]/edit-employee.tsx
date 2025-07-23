import { getUpdateBoxStatusInfos, UpdateBoxStatus } from '@/components/boxes/update-box';
import { Input } from '@/components/ui/input';
import { TableCell } from '@/components/ui/table';
import { useState } from 'react';
import { Member } from './schema';
import { BoxButtonIcon } from '@/components/boxes/boxes';
import { updateJob, updatePerson } from './actions';

function EditableCell({
    initialValue,
    setStatus,
    update,
    value,
    setValue,
}: {
    initialValue: string;
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
            {JSON.stringify(employee.clientId)}
            <EditableCell
                value={firstName}
                setValue={setFirstName}
                initialValue={employee.firstName}
                setStatus={setStatus}
                update={update}
            />
            <EditableCell
                value={lastName}
                setValue={setLastName}
                initialValue={employee.lastName}
                setStatus={setStatus}
                update={update}
            />
            <EditableCell
                value={job}
                setValue={setJob}
                initialValue={employee.job}
                setStatus={setStatus}
                update={update}
            />
            <TableCell className="py-0">
                <BoxButtonIcon {...getUpdateBoxStatusInfos(status)} onClick={() => {}} />
            </TableCell>
        </>
    );
}
