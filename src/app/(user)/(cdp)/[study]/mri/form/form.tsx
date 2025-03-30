import { FormProvider, FormRow, FormRule } from '@/components/ui/form';
import { DIFFICULTIES, FormType, PAYS } from './schema';
import { InputFormElement } from '@/components/meta-components/form/input';
import { DropdownSingleFormElement } from '@/components/meta-components/form/dropdownSingle';
import { TextAreaFormElement } from '@/components/meta-components/form/textarea';
import { DOMAINS } from '@/settings/vars';
import { UseFormReturn } from 'react-hook-form';

export default function MRICreationForm({ form }: { form: UseFormReturn<FormType> }) {
    return (
        <FormProvider {...form}>
            <form>
                <InputFormElement label="Titre" name="title" form={form} />
                <TextAreaFormElement label="Introduction" name="intro" form={form} resizable />
                <FormRule />
                <DropdownSingleFormElement
                    label="Domaine"
                    name="domain"
                    values={DOMAINS}
                    form={form}
                />
                <FormRow>
                    <InputFormElement
                        className="w-1/3"
                        label="Rétribution basse"
                        name="pay_under"
                        type="number"
                        form={form}
                    />
                    <InputFormElement
                        className="w-1/3"
                        label="Rétribution haute"
                        name="pay_over"
                        type="number"
                        form={form}
                    />
                    <DropdownSingleFormElement
                        className="w-1/3"
                        label="Rétribution"
                        name="pay_level"
                        values={PAYS}
                        form={form}
                    />
                </FormRow>
                <DropdownSingleFormElement
                    label="Difficulté"
                    name="difficulty"
                    values={DIFFICULTIES}
                    form={form}
                />
                <FormRule />
                <TextAreaFormElement label="Compétences" name="skills" form={form} resizable />
                <TextAreaFormElement label="Échéances" name="due_date" form={form} resizable />
                <TextAreaFormElement label="Description" name="description" form={form} resizable />
                {/* TODO: Les gens à la fin du form laaaaaaaa, faut être dynamique */}
            </form>
        </FormProvider>
    );
}
