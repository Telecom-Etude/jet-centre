import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import { studyPhaseFormSchema, StudyPhaseFormType } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider } from '@/components/ui/form';
import { InputFormElement } from '@/components/meta-components/form/input';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { TextAreaFormElement } from '@/components/meta-components/form/textarea';
import { DropdownSingleFormElement } from '@/components/meta-components/form/dropdownSingle';
import { DELIVERABLE_STEPS, DELIVERABLE_STEPS_NAMES } from '@/db/types';

interface StudyPhaseEditorParams {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export function StudyPhaseEditor({ open, setOpen }: StudyPhaseEditorParams) {
    const form = useForm<StudyPhaseFormType>({
        resolver: zodResolver(studyPhaseFormSchema),
    });

    const [deliverable, setDeliverable] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <FormProvider {...form}>
                    <form className="space-y-main">
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
                        <InputFormElement
                            form={form}
                            label="Date de fin"
                            name="endDate"
                            type="date"
                        />
                        <Checkbox onCheckedChange={(value) => setDeliverable(!!value.valueOf)}>
                            Livrable ?
                        </Checkbox>
                        {deliverable && (
                            <>
                                <TextAreaFormElement
                                    form={form}
                                    label="description"
                                    name="deliverable"
                                />
                                <DropdownSingleFormElement
                                    form={form}
                                    label="status"
                                    values={DELIVERABLE_STEPS_NAMES}
                                    displayValue={(step) => DELIVERABLE_STEPS[step].display}
                                    name="deliverable"
                                />
                            </>
                        )}
                    </form>
                </FormProvider>
                <DialogClose>Valider</DialogClose>
            </DialogContent>
        </Dialog>
    );
}
