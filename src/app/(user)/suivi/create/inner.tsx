'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emptyStudyCreationSchema, studyCreationSchema, StudyCreationSchema } from './forms/schema';
import { CompaniesForm } from './forms/companies/companiesForm';
import { SettingsForm } from './forms/settings/settingsForm';
import { Button } from '@/components/ui/button';
import { Company } from './forms/companies/companiesSchema';
import { useEffect } from 'react';
import { Admin } from './forms/settings/settingsSchema';
import { createNewStudy } from './actions';
import { useRouter } from 'next/navigation';

export const STUDY_FORM_ID = 'study-form-id';

export type CreateStudyProps = {
    companies: Company[];
    admins: Admin[];
};

export default function Inner({ companies, admins }: CreateStudyProps) {
    const router = useRouter();

    const formStudy = useForm<StudyCreationSchema>({
        resolver: zodResolver(studyCreationSchema),
        defaultValues: emptyStudyCreationSchema,
    });

    useEffect(() => {
        console.log('errors', formStudy.formState.errors);
    }, [formStudy.formState.errors]);

    return (
        <>
            <form
                onSubmit={formStudy.handleSubmit(async (d) => {
                    console.log('// Study submit //', d);
                    await createNewStudy(d);
                    router.push(`/${d.settings.code}/dashboard`);
                })}
                id={STUDY_FORM_ID}
            />
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-1.5main">
                <div className="flex flex-col gap-main lg:col-span-4">
                    <SettingsForm
                        formStudy={formStudy}
                        formStudyId={STUDY_FORM_ID}
                        admins={admins}
                    />
                </div>
                <div className="flex flex-col gap-main lg:col-span-3">
                    <CompaniesForm
                        companies={companies}
                        formStudy={formStudy}
                        formStudyId={STUDY_FORM_ID}
                    />
                    <Button type="submit" className="w-fit ml-auto" formId={STUDY_FORM_ID}>
                        Créer une nouvelle étude
                    </Button>
                </div>
            </div>
        </>
    );
}
