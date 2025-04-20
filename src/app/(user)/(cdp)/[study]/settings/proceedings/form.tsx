'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormProvider } from '@/components/ui/form';
import {
    checkEqual,
    studyProceedingsParamsEditorFormSchema,
    StudyProceedingsParamsEditorFormType,
} from './schema';
import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { useState } from 'react';
import { STUDY_STEPS, STUDY_STEPS_NAMES } from '@/db/types';
import { dbg } from '@/lib/utils';
import { DropdownSingleFormElement } from '@/components/meta-components/form/dropdownSingle';
import { addPhase, getStudyProceedings, ServerStudyProceedings, updateStudyStep } from './action';
import { InnerBox } from '@/components/boxes/boxes';
import { Button } from '@/components/ui/button';
import { FaPlus } from 'react-icons/fa6';
import { StudyPhaseEditor } from './phase';

interface StudyProceedingsParamsEditorParams extends ServerStudyProceedings {
    study: string;
}

export function StudyProceedingsParamsEditor({
    study,
    serverStudyProceedingId,
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
        const newStep = form.watch().studyProcessStep;
        dbg(newStep, 'saving step');
        setStatus(UpdateBoxStatus.Loading);
        updateStudyStep(newStep, serverStudyProceedingId).then(() => {
            getStudyProceedings(study).then((serverProceeding) => {
                if (
                    serverProceeding &&
                    serverProceeding.serverStudyProceeding.studyProcessStep == newStep
                ) {
                    setStatus(UpdateBoxStatus.Ok);
                } else {
                    setStatus(UpdateBoxStatus.NotSynced);
                }
            });
        });
    };

    const values = form.watch();

    const [newPhaseOpen, setNewPhaseOpen] = useState(false);
    const [currentPhaseEditor, setCurrentPhaseEditor] = useState();

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
                    {values.phases.map((study, i) => (
                        <InnerBox key={i}>{study.title}</InnerBox>
                    ))}
                </form>
            </FormProvider>
            <Button
                variant="outline"
                className="m-auto flex items-center gap-main"
                onClick={() => setNewPhaseOpen(true)}
            >
                <p>Nouvelle phase</p>
                <FaPlus />
            </Button>
            <StudyPhaseEditor
                open={newPhaseOpen}
                close={() => setNewPhaseOpen(false)}
                onSubmit={(values) =>
                    addPhase(serverStudyProceedingId, values).then(() => {
                        getStudyProceedings(serverStudyProceedingId).then((data) => {
                            if (!data) {
                                setStatus(UpdateBoxStatus.Error);
                            } else if (checkEqual(data.serverStudyProceeding, form.getValues())) {
                                setStatus(UpdateBoxStatus.Ok);
                            } else {
                                setStatus(UpdateBoxStatus.NotSynced);
                            }
                            setNewPhaseOpen(false);
                        });
                    })
                }
            />
            <StudyPhaseEditor
                open={!!currentPhaseEditor}
                close={() => setCurrentPhaseEditor(undefined)}
                onSubmit={(values) => dbg(values, 'form values')}
            />
            {JSON.stringify(form.watch())}
        </UpdateBox>
    );
}
