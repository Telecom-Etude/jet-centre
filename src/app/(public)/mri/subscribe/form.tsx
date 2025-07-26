'use client';

import { useForm, UseFormReturn } from 'react-hook-form';
import { mriSubscriptionSchema, MriSubscriptionType } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputFormElement } from '@/components/meta-components/form/input';
import { FormProvider } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { LoadingFullStops } from '@/components/loading';

enum Status {
    None,
    Loading,
    Exists,
    Failed,
    Done,
}

function disabled(status: Status): boolean {
    return status !== Status.None && status !== Status.Failed;
}

function Form({
    subscribePerson,
    status,
}: {
    status: Status;
    subscribePerson: (values: MriSubscriptionType) => void;
}) {
    const form: UseFormReturn<MriSubscriptionType> = useForm<MriSubscriptionType>({
        resolver: zodResolver(mriSubscriptionSchema),
    });

    return (
        <FormProvider {...form}>
            <form className="flex flex-col" onSubmit={form.handleSubmit(subscribePerson)}>
                <InputFormElement
                    label="Prénom"
                    name="firstName"
                    form={form}
                    disabled={disabled(status)}
                />
                <InputFormElement
                    label="Nom"
                    name="lastName"
                    form={form}
                    disabled={disabled(status)}
                />
                <InputFormElement
                    label="Email"
                    name="email"
                    type="email"
                    form={form}
                    disabled={disabled(status)}
                />
                <div className="flex w-full justify-center">
                    {disabled(status) ? (
                        <LoadingFullStops />
                    ) : (
                        <Button className="px-main">S'inscrire</Button>
                    )}
                </div>
            </form>
        </FormProvider>
    );
}

export function MriSubscriptionForm() {
    const [status, setStatus] = useState(Status.None);

    const subscribePerson = (values: MriSubscriptionType) => {
        setStatus(Status.Loading);
    };

    return <Form subscribePerson={subscribePerson} status={status} />;
}
