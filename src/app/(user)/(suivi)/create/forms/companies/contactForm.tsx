'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Box, BoxCollapser, BoxContent } from '@/components/boxes/boxes';
import { Button } from '@/components/ui/button';
import { FormProvider, FormRow } from '@/components/ui/form';
import { InputFormElement } from '@/components/meta-components/form/input';

import {
    contactCreationSchema,
    ContactCreationSchema,
    emptyContactCreationSchema,
    NewContact
} from './companiesSchema';

export interface ContactFormProps {
    defaultValues: ContactCreationSchema;
    onSubmit: (contact: NewContact) => void;
    onCancel: () => void;
}

export function ContactForm({ defaultValues, onSubmit: onSubmit_, onCancel }: ContactFormProps) {
    const form = useForm<ContactCreationSchema>({
        resolver: zodResolver(contactCreationSchema),
        defaultValues: defaultValues
    });

    const onSubmit = (data: ContactCreationSchema) => {
        onSubmit_({ ...data, isNew: true });
        form.reset();
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormRow>
                    <InputFormElement
                        label="Prénom du contact"
                        name="firstName"
                        className="w-1/2"
                        form={form}
                    />
                    <InputFormElement
                        label="Nom du contact"
                        name="lastName"
                        className="w-1/2"
                        form={form}
                    />
                </FormRow>
                <InputFormElement label="Email du contact" name="email" type="email" form={form} />
                <InputFormElement label="Téléphone du contact" name="tel" type="tel" form={form} />
                <InputFormElement label="Poste dans l'entreprise" name="job" form={form} />
                <InputFormElement
                    label="Description (quand le contacter)"
                    name="description"
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
                        Définir ce contact
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
}
