import { FormProvider, FormRow, FormRule } from '@/components/ui/form';
import { FormType } from './schema';
import { InputFormElement } from '@/components/meta-components/form/input';
import { DropdownSingleFormElement } from '@/components/meta-components/form/dropdownSingle';
import { TextAreaFormElement } from '@/components/meta-components/form/textarea';
import { UseFormReturn } from 'react-hook-form';
import { LEVELS, DOMAINS, DOMAIN_NAMES, LEVEL_NAMES } from '@/db/types';
import { useState } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface MRICreationProps {
    updateServer: () => void;
    form: UseFormReturn<FormType>;
}

export default function MRICreationForm({ form, updateServer }: MRICreationProps) {
    return (
        <FormProvider {...form}>
            <form>
                <TitleEditor form={form} />
                <TextAreaFormElement
                    label="Introduction"
                    name="introductionText"
                    form={form}
                    resizable
                />
                <FormRule />
                <DropdownSingleFormElement
                    label="Domaine"
                    name="mainDomain"
                    values={DOMAIN_NAMES}
                    onChange={() => updateServer()}
                    displayValue={(domain) => DOMAINS[domain].display}
                    form={form}
                />
                <FormRow>
                    <InputFormElement
                        className="w-1/3"
                        label="Rétribution basse"
                        name="wageLowerBound"
                        type="number"
                        form={form}
                    />
                    <InputFormElement
                        className="w-1/3"
                        label="Rétribution haute"
                        name="wageUpperBound"
                        type="number"
                        form={form}
                    />
                    <DropdownSingleFormElement
                        className="w-1/3"
                        label="Rétribution"
                        name="wageLevel"
                        values={LEVEL_NAMES}
                        onChange={() => updateServer()}
                        displayValue={(level) => LEVELS[level].display}
                        form={form}
                    />
                </FormRow>
                <DropdownSingleFormElement
                    label="Difficulté"
                    name="difficulty"
                    values={LEVEL_NAMES}
                    onChange={() => updateServer()}
                    displayValue={(level) => LEVELS[level].display}
                    form={form}
                />
                <FormRule />
                <TextAreaFormElement
                    label="Compétences"
                    name="requiredSkillsText"
                    form={form}
                    resizable
                />
                <TextAreaFormElement label="Échéances" name="timeLapsText" form={form} resizable />
                <TextAreaFormElement
                    label="Description"
                    name="descriptionText"
                    form={form}
                    resizable
                />
            </form>
        </FormProvider>
    );
}

function TitleEditor({ form }: { form: UseFormReturn<FormType> }) {
    const [titleWarning, setTitleWarning] = useState(false);
    const [displayed, setDisplayed] = useState(false);

    return (
        <>
            <InputFormElement
                label="Titre"
                name="title"
                form={form}
                onChange={() => {
                    if (!displayed) {
                        setTitleWarning(true);
                        setDisplayed(true);
                    }
                }}
            />
            <Dialog open={titleWarning} onOpenChange={setTitleWarning}>
                <DialogContent>
                    <DialogHeader className="gap-y-6">
                        <DialogTitle>Synchronisation</DialogTitle>
                        <DialogDescription>
                            Le titre sera synchronisé avec l'ensemble de l'étude. Ce sera notamment
                            le même sur l'ensemble des documents.
                        </DialogDescription>
                        <DialogClose asChild>
                            <Button variant="outline">Ok</Button>
                        </DialogClose>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}
