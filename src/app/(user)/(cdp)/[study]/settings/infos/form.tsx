'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormProvider } from '@/components/ui/form';
import { studyInfosParamsEditorFormSchema, StudyInfosParamsEditorFormType } from './schema';
import { InputFormElement } from '@/components/meta-components/form/input';
import { CheckboxFormElement } from '@/components/meta-components/form/checkbox';
import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { useState } from 'react';
import { updateStudyInfos } from './action';

interface StudyInfosParamsEditorParams {
    study: string;
    serverStudyInfo: StudyInfosParamsEditorFormType;
    studyInfoId: string;
}

export function StudyInfosParamsEditor({
    serverStudyInfo,
    studyInfoId,
}: StudyInfosParamsEditorParams) {
    const form = useForm<StudyInfosParamsEditorFormType>({
        resolver: zodResolver(studyInfosParamsEditorFormSchema),
        defaultValues: serverStudyInfo,
    });

    const [status, setStatus] = useState(UpdateBoxStatus.Ok);

    const updateServer = () => {
        setStatus(UpdateBoxStatus.Loading);
        updateStudyInfos(studyInfoId, form.watch()).then(() => {});
    };

    return (
        <UpdateBox title="Paramètres de l'étude" update={updateServer} status={status}>
            <FormProvider {...form}>
                <form className="space-y-5 p-5">
                    <InputFormElement form={form} label="Titre" name="title" />
                    <InputFormElement
                        form={form}
                        label="Frais de dossier (%)"
                        name="applicationFee"
                        type="number"
                    />
                    <CheckboxFormElement form={form} label="CC" name="cc" />
                </form>
            </FormProvider>
        </UpdateBox>
    );
}
