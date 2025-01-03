'use client';

import { FormProvider } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emptyStudyCreationSchema, studyCreationSchema, StudyCreationSchema } from './forms/schema';
import CompanyForm from './forms/companyForm';
import { ContactCreationForm, ContactForm } from './forms/contactForm';
import { AdminCreationForm, SettingsForm } from './forms/settingsForm';
import { Button } from '@/components/ui/button';
import { ContactFormValue, NewContact } from './forms/contactSchema';
import { useState } from 'react';
import { AdminFormValue } from './forms/settingsSchema';

export type CreateStudyProps = {
    contacts: ContactFormValue[];
    admins: AdminFormValue[];
};

export default function Inner({ contacts: contacts_, admins: admins_ }: CreateStudyProps) {
    const form = useForm<StudyCreationSchema>({
        resolver: zodResolver(studyCreationSchema),
        defaultValues: emptyStudyCreationSchema
    });

    // -------- Contact ------- //
    const [contacts, setContacts] = useState<ContactFormValue[]>(contacts_);
    const [contactsUpdated, setContactsUpdated] = useState(false);
    function addContact(contact: NewContact) {
        setContacts((prev) => [...prev, contact]);
        setTimeout(() => setContactsUpdated(true), 300);
        setTimeout(() => setContactsUpdated(false), 300 + 1000 + 50);
    }

    // --------- Admin -------- //
    const [admins, setAdmins] = useState<AdminFormValue[]>(admins_);
    const [adminsUpdated, setAdminsUpdated] = useState(false);
    function addAdmin(admin: AdminFormValue) {
        setAdmins((prev) => [...prev, admin]);
        setTimeout(() => setAdminsUpdated(true), 300);
        setTimeout(() => setAdminsUpdated(false), 300 + 1000 + 50);
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-2main">
                <div className="flex flex-col gap-main lg:col-span-4">
                    <FormProvider {...form}>
                        <CompanyForm form={form} formId="create-study" />
                        <ContactForm form={form} contacts={contacts} updated={contactsUpdated} />
                        <SettingsForm form={form} admins={admins} updated={adminsUpdated} />
                    </FormProvider>
                </div>
                <div className="flex flex-col gap-main lg:col-span-3">
                    <ContactCreationForm addContact={addContact} />
                    <AdminCreationForm addAdmin={addAdmin} />
                    <Button type="submit" form="create-study" className="w-fit ml-auto">
                        Créer une nouvelle étude
                    </Button>
                </div>
            </div>
        </>
    );
}
