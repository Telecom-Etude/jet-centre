'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { InputFormElement } from '@/components/meta-components/form/input';
import { Button } from '@/components/ui/button';
import { FormProvider, FormRow } from '@/components/ui/form';

import { adminCreationSchema, AdminCreationSchema, NewAdmin } from './settingsSchema';

export interface AdminFormProps {
    defaultValues: AdminCreationSchema;
    onSubmit: (admin: NewAdmin) => void;
    onCancel: () => void;
}

export function AdminForm({ defaultValues, onSubmit: onSubmit_, onCancel }: AdminFormProps) {
    const form = useForm<AdminCreationSchema>({
        resolver: zodResolver(adminCreationSchema),
        defaultValues: defaultValues,
    });

    const onSubmit = (data: AdminCreationSchema) => {
        onSubmit_({ ...data, isNew: true });
        form.reset();
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormRow>
                    <InputFormElement
                        label="Prénom de l'administrateur"
                        name="firstName"
                        className="w-1/2"
                        form={form}
                    />
                    <InputFormElement
                        label="Nom de l'administrateur"
                        name="lastName"
                        className="w-1/2"
                        form={form}
                    />
                </FormRow>
                <InputFormElement
                    label="Email de l'administrateur"
                    name="email"
                    type="email"
                    form={form}
                />
                <InputFormElement
                    label="Téléphone de l'administrateur"
                    name="tel"
                    type="tel"
                    form={form}
                />
                <div className="flex flex-row justify-end gap-2">
                    <Button
                        type="button"
                        variant="destructive"
                        onClick={() => {
                            onCancel();
                            form.reset();
                        }}
                    >
                        Annuler
                    </Button>
                    <Button type="submit" variant="secondary">
                        Définir cet·te administrateur·trice
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
}
