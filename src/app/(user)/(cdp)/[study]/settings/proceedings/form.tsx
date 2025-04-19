'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormProvider } from '@/components/ui/form';
import {
    studyProceedingsParamsEditorFormSchema,
    StudyProceedingsParamsEditorFormType,
} from './schema';
import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { useState } from 'react';
import { STUDY_STEPS, STUDY_STEPS_NAMES } from '@/db/types';
import { dbg } from '@/lib/utils';
import { DropdownSingleFormElement } from '@/components/meta-components/form/dropdownSingle';

interface StudyInfosParamsEditorParams {
    study: string;
    serverStudyInfo: StudyProceedingsParamsEditorFormType;
    studyInfoId: string;
}

export function StudyInfosParamsEditor({ serverStudyInfo }: StudyInfosParamsEditorParams) {
    const form = useForm<StudyProceedingsParamsEditorFormType>({
        resolver: zodResolver(studyProceedingsParamsEditorFormSchema),
        defaultValues: serverStudyInfo,
    });

    const [status, setStatus] = useState(UpdateBoxStatus.Ok);

    const updateServer = () => {
        const values = form.watch();
        dbg(values, 'saving values');
        setStatus(UpdateBoxStatus.Loading);
    };

    const updateStep = () => {
        const step = form.watch().studyProcessStep;
        dbg(step, 'saving step');
        setStatus(UpdateBoxStatus.Loading);
    };

    return (
        <UpdateBox title="Paramètres de l'étude" update={updateServer} status={status}>
            <FormProvider {...form}>
                <form className="space-y-5 p-5">
                    <DropdownSingleFormElement
                        form={form}
                        label="Avancée de l'étude"
                        name="studyProcessStep"
                        onChange={updateStep}
                        values={STUDY_STEPS_NAMES}
                        displayValue={(step) => STUDY_STEPS[step].display}
                    />
                </form>
            </FormProvider>
            {JSON.stringify(form.watch())}
        </UpdateBox>
    );
}
