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
import { ServerStudyProceedings } from './action';

interface StudyProceedingsParamsEditorParams extends ServerStudyProceedings {
    study: string;
}

export function StudyProceedingsParamsEditor({
    serverStudyProceeding,
}: StudyProceedingsParamsEditorParams) {
    const form = useForm<StudyProceedingsParamsEditorFormType>({
        resolver: zodResolver(studyProceedingsParamsEditorFormSchema),
        defaultValues: serverStudyProceeding,
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
                <form className="space-y-main">
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
