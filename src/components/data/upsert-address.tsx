'use client';

import { Input } from '@/components/ui/input';
import { Address } from '@prisma/client';
import { useState } from 'react';

import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { upsertAddress } from './upsert-addres';
import { DangerousError } from '../dangerous-alert';

function UpdateAddressElement({
    name,
    value,
    setValue,
    updateServer,
    setStatus,
}: {
    name: string;
    value: string | undefined;
    setValue: (value: string) => void;
    updateServer: () => void;
    setStatus: (status: UpdateBoxStatus) => void;
}) {
    return (
        <div className="flex items-center space-x-main">
            <p className="w-fit">{name}</p>
            <Input
                value={value ?? ''}
                className="w-fit flex-grow"
                type="text"
                onChange={(e) => {
                    setStatus(UpdateBoxStatus.UserPending);
                    setValue(e.target.value);
                }}
                onBlur={updateServer}
            />
        </div>
    );
}

export function UpsertAddress({
    address,
    personId,
    companyId,
}: {
    address: Address | null;
    personId?: string;
    companyId?: string;
}) {
    const [status, setStatus] = useState(UpdateBoxStatus.Ok);
    const [mixedIds, setMixedIds] = useState<[string, string]>();
    const [mixedErrorOpen, setMixedErrorOpen] = useState(false);

    const updateServer = () => {
        setStatus(UpdateBoxStatus.Loading);
        if (!streetName || !streetNumber || !city || !zipCode || !country)
            return setStatus(UpdateBoxStatus.UserPending);
        upsertAddress({
            id,
            streetName,
            streetNumber,
            zipCode,
            city,
            country,
            personId: address?.personId ?? personId ?? null,
            companyId: address?.companyId ?? companyId ?? null,
        }).then((serverAddress) => {
            if (serverAddress === undefined) return setStatus(UpdateBoxStatus.Error);
            if (id !== undefined && serverAddress.id != id) {
                setMixedIds([id, serverAddress.id]);
                return setMixedErrorOpen(true);
            }
            if (
                serverAddress.streetNumber !== streetNumber ||
                serverAddress.streetName !== streetName ||
                serverAddress.zipCode !== zipCode ||
                serverAddress.city !== city ||
                serverAddress.country !== country
            ) {
                return setStatus(UpdateBoxStatus.NotSynced);
            }
            if (id === undefined) setId(serverAddress.id);
            return setStatus(UpdateBoxStatus.Ok);
        });
    };

    const [id, setId] = useState(address?.id);
    const [streetNumber, setStreetNumber] = useState(address?.streetNumber);
    const [streetName, setStreetName] = useState(address?.streetName);
    const [zipCode, setZipCode] = useState(address?.zipCode);
    const [city, setCity] = useState(address?.city);
    const [country, setCountry] = useState(address?.country);

    return (
        <div>
            <DangerousError
                title="Cette modification a potentiellement écrasé une valeur en mémoire."
                open={mixedErrorOpen}
                onOpenChange={setMixedErrorOpen}
            >
                <p>
                    {mixedIds
                        ? `Informations pour le pôle info: ${mixedIds[0]} et ${mixedIds[1]}.`
                        : 'Un gros problème est survenu.'}
                </p>
            </DangerousError>
            <UpdateBox title="Adresse" update={updateServer} status={status}>
                <p className="italic">
                    Remplissez tous les champs pour que la sauvegarde s'effectue.
                </p>
                <div className="space-y-main">
                    <UpdateAddressElement
                        name="N° rue"
                        value={streetNumber}
                        setValue={setStreetNumber}
                        updateServer={updateServer}
                        setStatus={setStatus}
                    />
                    <UpdateAddressElement
                        name="Nom de rue"
                        value={streetName}
                        setValue={setStreetName}
                        updateServer={updateServer}
                        setStatus={setStatus}
                    />
                    <UpdateAddressElement
                        name="Code postal"
                        value={zipCode}
                        setValue={setZipCode}
                        updateServer={updateServer}
                        setStatus={setStatus}
                    />
                    <UpdateAddressElement
                        name="Ville"
                        value={city}
                        setValue={setCity}
                        updateServer={updateServer}
                        setStatus={setStatus}
                    />
                    <UpdateAddressElement
                        name="Pays"
                        value={country}
                        setValue={setCountry}
                        updateServer={updateServer}
                        setStatus={setStatus}
                    />
                </div>
            </UpdateBox>
        </div>
    );
}
