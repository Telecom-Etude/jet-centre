import { UseFormReturn } from 'react-hook-form';

import { DropdownSingleFormElement } from '@/components/meta-components/form/dropdownSingle';
import { InputFormElement } from '@/components/meta-components/form/input';
import { TextAreaFormElement } from '@/components/meta-components/form/textarea';
import { FormProvider, FormRow, FormRule } from '@/components/ui/form';
import { LEVELS, DOMAINS, DOMAIN_NAMES, LEVEL_NAMES } from '@/db/types';

import { MriFormType } from './schema';

interface MRICreationProps {
    updateServer: () => void;
    form: UseFormReturn<MriFormType>;
    setNotSaved: () => void;
}

export default function MRICreationForm({ setNotSaved, form, updateServer }: MRICreationProps) {
    return (
        <FormProvider {...form}>
            <form>
                <InputFormElement
                    label="Titre"
                    name="title"
                    form={form}
                    onChange={() => {
                        setNotSaved();
                    }}
                    onBlur={() => updateServer()}
                />
                <TextAreaFormElement
                    label="Introduction"
                    name="introductionText"
                    onBlur={() => updateServer()}
                    onChange={setNotSaved}
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
                        onChange={setNotSaved}
                        type="number"
                        form={form}
                    />
                    <InputFormElement
                        className="w-1/3"
                        label="Rétribution haute"
                        name="wageUpperBound"
                        onBlur={() => updateServer()}
                        onChange={setNotSaved}
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
                    onChange={setNotSaved}
                    resizable
                />
                <TextAreaFormElement
                    onChange={setNotSaved}
                    onBlur={() => updateServer()}
                    label="Échéances"
                    name="timeLapsText"
                    form={form}
                    resizable
                />
                <TextAreaFormElement
                    label="Description"
                    name="descriptionText"
                    form={form}
                    onBlur={() => updateServer()}
                    onChange={setNotSaved}
                    resizable
                />
            </form>
        </FormProvider>
    );
}
