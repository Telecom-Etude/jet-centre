'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { FormProvider } from '@/components/ui/form';
import {
    checkEqual,
    StudyPhaseFormType,
    studyProceedingsParamsEditorFormSchema,
    StudyProceedingsParamsEditorFormType,
} from './schema';
import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { useState } from 'react';
import { STUDY_STEPS, STUDY_STEPS_NAMES } from '@/db/types';
import { dbg, reloadWindow } from '@/lib/utils';
import { DropdownSingleFormElement } from '@/components/meta-components/form/dropdownSingle';
import {
    addPhase,
    deletePhase,
    getStudyProceedings,
    ServerStudyProceedings,
    updatePhase,
    updateStudyStep,
} from './action';
import { InnerBox } from '@/components/boxes/boxes';
import { Button } from '@/components/ui/button';
import { FaPencil, FaPlus, FaTrash } from 'react-icons/fa6';
import { StudyPhaseEditor } from './phase';

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
    code: string;
}

export function StudyProceedingsParamsEditor({
    code,
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
            getStudyProceedings(code).then((serverProceeding) => {
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
        getStudyProceedings(code).then((data) => {
            if (!data) {
                setStatus(UpdateBoxStatus.Error);
            } else if (checkEqual(data.serverStudyProceeding, form.getValues())) {
                setStatus(UpdateBoxStatus.Ok);
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
        <UpdateBox title="Phases de l'étude" update={updateServer} status={status}>
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
            {JSON.stringify(form.watch())}
        </UpdateBox>
    );
}
