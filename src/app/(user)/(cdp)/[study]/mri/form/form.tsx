import { FormProvider, FormRow, FormRule } from '@/components/ui/form';
import { FormType } from './schema';
import { InputFormElement } from '@/components/meta-components/form/input';
import { DropdownSingleFormElement } from '@/components/meta-components/form/dropdownSingle';
import { TextAreaFormElement } from '@/components/meta-components/form/textarea';
import { UseFormReturn } from 'react-hook-form';
import { LEVELS, DOMAINS, DOMAIN_NAMES } from '@/db/types';

export default function MRICreationForm({ form }: { form: UseFormReturn<FormType> }) {
    return (
        <FormProvider {...form}>
            <form>
                <InputFormElement label="Titre" name="title" form={form} />
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
                        values={LEVELS}
                        form={form}
                    />
                </FormRow>
                <DropdownSingleFormElement
                    label="Difficulté"
                    name="difficulty"
                    values={LEVELS}
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
