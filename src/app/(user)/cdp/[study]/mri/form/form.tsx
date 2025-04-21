import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { DropdownSingleFormElement } from '@/components/meta-components/form/dropdownSingle';
import { InputFormElement } from '@/components/meta-components/form/input';
import { TextAreaFormElement } from '@/components/meta-components/form/textarea';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { FormProvider, FormRow, FormRule } from '@/components/ui/form';
import { LEVELS, DOMAINS, DOMAIN_NAMES, LEVEL_NAMES } from '@/db/types';

import { MriFormType } from './schema';

interface MRICreationProps {
    updateServer: () => void;
    form: UseFormReturn<MriFormType>;
}

export default function MRICreationForm({ form, updateServer }: MRICreationProps) {
    return (
        <FormProvider {...form}>
            <form>
                <TitleEditor form={form} updateServer={updateServer} />
                <TextAreaFormElement
                    label="Introduction"
                    name="introductionText"
                    onBlur={() => updateServer()}
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
                        onBlur={() => updateServer()}
                        type="number"
                        form={form}
                    />
                    <InputFormElement
                        className="w-1/3"
                        label="Rétribution haute"
                        name="wageUpperBound"
                        onBlur={() => updateServer()}
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
                    onChange={() => {
                        updateServer();
                    }}
                    displayValue={(level) => LEVELS[level].display}
                    form={form}
                />
                <FormRule />
                <TextAreaFormElement
                    label="Compétences"
                    name="requiredSkillsText"
                    form={form}
                    onBlur={() => updateServer()}
                    resizable
                />
                <TextAreaFormElement label="Échéances" name="timeLapsText" form={form} resizable />
                <TextAreaFormElement
                    label="Description"
                    name="descriptionText"
                    form={form}
                    onBlur={() => updateServer()}
                    resizable
                />
            </form>
        </FormProvider>
    );
}

function TitleEditor({ form, updateServer }: MRICreationProps) {
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
                onBlur={() => updateServer()}
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
