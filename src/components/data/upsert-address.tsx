'use client';

import { Input } from '@/components/ui/input';
import { Address } from '@prisma/client';
import { useState } from 'react';

import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';

function UpdateAddressElement({
    name,
    value,
    setValue,
    updateServer,
}: {
    name: string;
    value: string;
    setValue: (value: string) => void;
    updateServer: () => void;
}) {
    return (
        <div className="flex items-center space-x-main">
            <p className="w-fit">{name}</p>
            <Input
                value={value}
                className="w-fit flex-grow"
                type="text"
                onChange={(e) => setValue(e.target.value)}
                onBlur={updateServer}
            />
        </div>
    );
}

export function UpsertAddress({ address }: { address: Address | null }) {
    const [status, setStatus] = useState(UpdateBoxStatus.Ok);

    const updateServer = () => {};

    const [id, setId] = useState(address?.id);
    const [streetNumber, setStreetNumber] = useState(address?.streetNumber ?? '');
    const [streetName, setStreetName] = useState(address?.streetName ?? '');
    const [zipCode, setZipCode] = useState(address?.zipCode ?? '');
    const [city, setCity] = useState(address?.city ?? '');
    const [country, setCountry] = useState(address?.country ?? '');
    return (
        <div className="p-8">
            <UpdateBox title="Counter" update={updateServer} status={status}>
                <div className="space-y-main">
                    <UpdateAddressElement
                        name="N° rue"
                        value={streetNumber}
                        setValue={setStreetNumber}
                        updateServer={updateServer}
                    />
                    <UpdateAddressElement
                        name="Nom de rue"
                        value={streetName}
                        setValue={setStreetName}
                        updateServer={updateServer}
                    />
                    <UpdateAddressElement
                        name="Code postal"
                        value={zipCode}
                        setValue={setZipCode}
                        updateServer={updateServer}
                    />
                    <UpdateAddressElement
                        name="Ville"
                        value={city}
                        setValue={setCity}
                        updateServer={updateServer}
                    />
                    <UpdateAddressElement
                        name="Pays"
                        value={country}
                        setValue={setCountry}
                        updateServer={updateServer}
                    />
                </div>
            </UpdateBox>
        </div>
    );
}
