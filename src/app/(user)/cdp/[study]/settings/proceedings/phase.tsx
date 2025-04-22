import { zodResolver } from '@hookform/resolvers/zod';
import { DeliverableStatus } from '@prisma/client';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { DropdownSingleFormElement } from '@/components/meta-components/form/dropdownSingle';
import { InputFormElement } from '@/components/meta-components/form/input';
import { TextAreaFormElement } from '@/components/meta-components/form/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { FormProvider } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { DELIVERABLE_STEPS, DELIVERABLE_STEPS_NAMES } from '@/db/types';

import { studyPhaseFormSchema, StudyPhaseFormType } from './schema';

interface StudyPhaseEditorParams {
    open: boolean;
    close: () => void;
    defaultValues?: StudyPhaseFormType;
    onSubmit: (values: StudyPhaseFormType) => void;
}

export function StudyPhaseEditor({ open, close, defaultValues, onSubmit }: StudyPhaseEditorParams) {
    let defaultValuesWithState = defaultValues;
    if (!defaultValuesWithState) {
        defaultValuesWithState = {
            id: '',
            deliverable: { status: DeliverableStatus.NotStarted, description: '' },
            jehs: 0,
            title: '',
            unitPrice: 450,
        };
    } else if (!defaultValuesWithState.deliverable) {
        defaultValuesWithState.deliverable = {
            status: DeliverableStatus.NotStarted,
            description: '',
        };
    }
    const form = useForm<StudyPhaseFormType>({
        resolver: zodResolver(studyPhaseFormSchema),
        defaultValues: defaultValuesWithState,
    });

    const [deliverable, setDeliverable] = useState(false);

    return (
        <Dialog open={open} onOpenChange={() => close()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center">Paramètres de phase</DialogTitle>
                </DialogHeader>
                <DialogFooter>
                    <FormProvider {...form}>
                        <form className="gap-y-main w-full flex flex-col">
                            <InputFormElement form={form} label="Titre" name="title" />
                            <InputFormElement
                                form={form}
                                label="Nombre de JEHs"
                                name="jehs"
                                type="number"
                            />
                            <InputFormElement
                                form={form}
                                label="Prix à l'unité"
                                name="unitPrice"
                                type="number"
                            />
                            <InputFormElement
                                form={form}
                                label="Date de début"
                                name="startDate"
                                type="date"
                            />
                            <InputFormElement //TODO: auto compute end date
                                form={form}
                                label="Date de fin"
                                name="endDate"
                                type="date"
                            />
                            <div className="w-full flex items-center gap-main">
                                <Label>Livrable ?</Label>
                                <Checkbox onCheckedChange={() => setDeliverable(!deliverable)} />
                            </div>
                            {deliverable && (
                                <>
                                    <TextAreaFormElement
                                        form={form}
                                        label="Description du livrable"
                                        name="deliverable.description"
                                    />
                                    <DropdownSingleFormElement
                                        form={form}
                                        label="Status du livrable"
                                        name="deliverable.status"
                                        values={DELIVERABLE_STEPS_NAMES}
                                        displayValue={(step) => DELIVERABLE_STEPS[step].display}
                                    />
                                </>
                            )}
                            <Button
                                onClick={(e) => {
                                    e.preventDefault();
                                    onSubmit(form.watch()); //TODO: handle deliverable toggle
                                }}
                            >
                                Valider
                            </Button>
                        </form>
                    </FormProvider>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
