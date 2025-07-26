import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';

import { UpdateBoxStatus } from '@/components/boxes/update-box';
import { LoadingFullStops } from '@/components/loading';
import { InputFormElement } from '@/components/meta-components/form/input';
import { Button } from '@/components/ui/button';
import { FormProvider } from '@/components/ui/form';

import { NewEmployeeSchemaType, newEmployeeSchema } from './schema';



export function CreateEmployee({
    createEmployee,
    status,
    setStatus,
}: {
    createEmployee: (person: NewEmployeeSchemaType) => void;
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
                    createEmployee(values);
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
