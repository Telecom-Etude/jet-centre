'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { CheckboxFormElement } from '@/components/meta-components/form/checkbox';
import { DropdownManyFormElement } from '@/components/meta-components/form/dropdownMany';
import { InputFormElement } from '@/components/meta-components/form/input';
import { FormProvider } from '@/components/ui/form';
import { DOMAIN_NAMES, DOMAINS } from '@/db/types';

import { ServerStudyInfos, updateStudyInfos } from './actions';
import {
    checkEqual,
    studyInfosParamsEditorFormSchema,
    StudyInfosParamsEditorFormType,
} from './schema';

interface StudyInfosParamsEditorParams extends ServerStudyInfos {
    studyCode: string;
    title: string;
}

export function StudyInfosParamsEditor({
    serverStudyInfo,
    studyInfoId,
    title,
}: StudyInfosParamsEditorParams) {
    const form = useForm<StudyInfosParamsEditorFormType>({
        resolver: zodResolver(studyInfosParamsEditorFormSchema),
        defaultValues: serverStudyInfo,
    });

    const [status, setStatus] = useState(UpdateBoxStatus.Ok);

    const updateServer = () => {
        const mri = form.watch();
        setStatus(UpdateBoxStatus.Loading);
        updateStudyInfos(studyInfoId, mri).then((data) => {
            if (data && checkEqual(data, mri)) {
                setStatus(UpdateBoxStatus.Ok);
            } else {
                setStatus(UpdateBoxStatus.NotSynced);
            }
        });
    };

    return (
        <UpdateBox title={title} update={updateServer} status={status}>
            <FormProvider {...form}>
                <form className="space-y-main">
                    <InputFormElement
                        form={form}
                        label="Titre"
                        name="title"
                        onBlur={updateServer}
                    />
                    <InputFormElement
                        form={form}
                        label="Frais de dossier (%)"
                        name="applicationFee"
                        type="number"
                        onBlur={updateServer}
                    />
                    <CheckboxFormElement form={form} label="CC" name="cc" onChange={updateServer} />
                    <DropdownManyFormElement
                        form={form}
                        label="Domaines"
                        name="domains"
                        onChange={updateServer}
                        values={DOMAIN_NAMES}
                        displayValue={(domain) => DOMAINS[domain].display}
                    />
                </form>
            </FormProvider>
        </UpdateBox>
    );
}
