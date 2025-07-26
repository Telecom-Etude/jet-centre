'use client';

import { useForm, UseFormReturn } from 'react-hook-form';
import { mriSubscriptionSchema, MriSubscriptionType } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputFormElement } from '@/components/meta-components/form/input';
import { FormProvider } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { LoadingFullStops } from '@/components/loading';

export function MriSubscriptionForm({
    subscribePerson,
    disabled,
}: {
    disabled: boolean;
    subscribePerson: (values: MriSubscriptionType) => void;
}) {
    const form: UseFormReturn<MriSubscriptionType> = useForm<MriSubscriptionType>({
        resolver: zodResolver(mriSubscriptionSchema),
    });

    return (
        <FormProvider {...form}>
            <form className="flex flex-col" onSubmit={form.handleSubmit(subscribePerson)}>
                <InputFormElement label="Prénom" name="firstName" form={form} disabled={disabled} />
                <InputFormElement label="Nom" name="lastName" form={form} disabled={disabled} />
                <InputFormElement
                    label="Email"
                    name="email"
                    type="email"
                    form={form}
                    disabled={disabled}
                />
                <div className="flex w-full justify-center">
                    {disabled ? (
                        <LoadingFullStops />
                    ) : (
                        <Button className="px-main">S'inscrire</Button>
                    )}
                </div>
            </form>
        </FormProvider>
    );
}
