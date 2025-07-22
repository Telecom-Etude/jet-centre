import { useForm, UseFormReturn } from 'react-hook-form';

import { InputFormElement } from '@/components/meta-components/form/input';

import { FormProvider } from '@/components/ui/form';

import { NewEmployeeSchemaType, newEmployeeSchema } from './schema';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { LoadingFullStops } from '@/components/loading';
import { UpdateBoxStatus } from '@/components/boxes/update-box';

export function NewEmployee({
    addEmployee,
    status,
    setStatus,
}: {
    addEmployee: (person: NewEmployeeSchemaType) => void;
    status: UpdateBoxStatus;
    setStatus: (status: UpdateBoxStatus) => void;
}) {
    const form: UseFormReturn<NewEmployeeSchemaType> = useForm<NewEmployeeSchemaType>({
        resolver: zodResolver(newEmployeeSchema),
    });

    return (
        <FormProvider {...form}>
            <form
                onSubmit={form.handleSubmit((values) => {
                    setStatus(UpdateBoxStatus.Loading);
                    addEmployee(values);
                })}
                className="flex flex-col items-center w-full"
            >
                <InputFormElement className="w-full" label="Prénom" name="firstName" form={form} />
                <InputFormElement className="w-full" label="Nom" name="lastName" form={form} />
                <InputFormElement className="w-full" label="Métier" name="job" form={form} />
                {status === UpdateBoxStatus.Loading ? (
                    <LoadingFullStops />
                ) : (
                    <Button className="px-main" type="submit">
                        Ajouter
                    </Button>
                )}
            </form>
        </FormProvider>
    );
}
