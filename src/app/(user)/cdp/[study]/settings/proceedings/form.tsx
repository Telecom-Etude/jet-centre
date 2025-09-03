'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FaPencil, FaTrash } from 'react-icons/fa6';

import { InnerBox } from '@/components/boxes/boxes';
import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { AddButton } from '@/components/buttons';
import { DropdownSingleFormElement } from '@/components/meta-components/form/dropdownSingle';
import { Button } from '@/components/ui/button';
import { FormProvider } from '@/components/ui/form';
import { STUDY_STEPS, STUDY_STEPS_NAMES } from '@/db/types';
import { reloadWindow } from '@/lib/utils';

import {
    addPhase,
    deletePhase,
    getStudyProceedings,
    ServerStudyProceedings,
    updatePhase,
    updateStudyStep,
} from './actions';
import { StudyPhaseEditor } from './phase';
import {
    checkEqual,
    StudyPhaseFormType,
    studyProceedingsParamsEditorFormSchema,
    StudyProceedingsParamsEditorFormType,
} from './schema';

interface SinglePhaseInnerBoxParams {
    study: StudyPhaseFormType;
    editPhase: () => void;
}

function SinglePhaseInnerBox({ study, editPhase }: SinglePhaseInnerBoxParams) {
    return (
        <InnerBox>
            <div className="border border-input rounded-md flex items-center justify-between p-2 pl-4">
                <p>
                    {study.title} {study.jehs ? `(${study.jehs} JEH)` : ''}
                </p>
                <div>
                    <Button variant="secondary" className="rounded-r-none" onClick={editPhase}>
                        <FaPencil />
                    </Button>
                    <Button
                        variant="secondary"
                        className="rounded-l-none"
                        onClick={() => deletePhase(study.id).then(() => reloadWindow())}
                    >
                        <FaTrash />
                    </Button>
                </div>
            </div>
        </InnerBox>
    );
}

interface StudyProceedingsParamsEditorParams extends ServerStudyProceedings {
    studyCode: string;
    title: string;
}

export function StudyProceedingsParamsEditor({
    studyCode,
    serverStudyProceedingId,
    serverStudyProceeding,
    title,
}: StudyProceedingsParamsEditorParams) {
    const form = useForm<StudyProceedingsParamsEditorFormType>({
        resolver: zodResolver(studyProceedingsParamsEditorFormSchema),
        defaultValues: serverStudyProceeding,
    });

    const [status, setStatus] = useState(UpdateBoxStatus.Ok);

    const updateServer = () => {
        setStatus(UpdateBoxStatus.Loading);
    };

    const updateStep = () => {
        const newStep = form.watch().studyProcessStep;
        setStatus(UpdateBoxStatus.Loading);
        updateStudyStep(newStep, serverStudyProceedingId).then(() => {
            getStudyProceedings(studyCode).then((serverProceeding) => {
                if (
                    serverProceeding &&
                    serverProceeding.serverStudyProceeding.studyProcessStep == newStep
                ) {
                    // TODO: check everything
                    setStatus(UpdateBoxStatus.Ok);
                } else {
                    setStatus(UpdateBoxStatus.NotSynced);
                }
            });
        });
    };

    const values = form.watch();

    const checkServerValues = () => {
        setStatus(UpdateBoxStatus.Loading);
        getStudyProceedings(studyCode).then((data) => {
            if (!data) {
                setStatus(UpdateBoxStatus.Error);
            } else if (checkEqual(data.serverStudyProceeding, form.getValues())) {
                setStatus(UpdateBoxStatus.Ok);
                setNewPhaseOpen(false);
                setCurrentPhaseEditor(undefined);
            } else {
                setStatus(UpdateBoxStatus.NotSynced);
            }
            setNewPhaseOpen(false);
        });
    };

    const { append } = useFieldArray({ control: form.control, name: 'phases' });

    const [newPhaseOpen, setNewPhaseOpen] = useState(false);
    const [currentPhaseEditor, setCurrentPhaseEditor] = useState<StudyPhaseFormType | undefined>();

    return (
        <UpdateBox title={title} update={updateServer} status={status}>
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
            {values.phases.map((study, i) => (
                <SinglePhaseInnerBox
                    key={i}
                    study={study}
                    editPhase={() => setCurrentPhaseEditor(study)}
                />
            ))}
            <AddButton onClick={() => setNewPhaseOpen(true)} text="Nouvelle phase" />
            <StudyPhaseEditor
                open={newPhaseOpen}
                close={() => setNewPhaseOpen(false)}
                onSubmit={(values) => {
                    append(values);
                    addPhase(serverStudyProceedingId, values).then(() => checkServerValues());
                }}
            />
            {currentPhaseEditor && (
                // Need this otherwise the form within the dialog will load with the wrong default values
                // It will also cause loading and rendering problems.
                <StudyPhaseEditor
                    open={!!currentPhaseEditor}
                    defaultValues={currentPhaseEditor}
                    close={() => setCurrentPhaseEditor(undefined)}
                    onSubmit={(values) => updatePhase(values).then(() => checkServerValues())}
                />
            )}
        </UpdateBox>
    );
}
