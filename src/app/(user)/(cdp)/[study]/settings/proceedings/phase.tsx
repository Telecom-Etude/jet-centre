import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import { studyPhaseFormSchema, StudyPhaseFormType } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider } from '@/components/ui/form';
import { InputFormElement } from '@/components/meta-components/form/input';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface StudyPhaseEditorParams {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export function StudyPhaseEditor({ open, setOpen }: StudyPhaseEditorParams) {
    const form = useForm<StudyPhaseFormType>({
        resolver: zodResolver(studyPhaseFormSchema),
    });

    const [_, setDeliverable] = useState(false);

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
                    </form>
                </FormProvider>
                <DialogClose>Valider</DialogClose>
            </DialogContent>
        </Dialog>
    );
}
