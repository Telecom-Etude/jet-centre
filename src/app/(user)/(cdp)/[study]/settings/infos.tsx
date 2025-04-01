'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { studyInfoParamsEditorFormSchema, StudyInfoParamsEditorFormType } from './schema';
import { InputFormElement } from '@/components/meta-components/form/input';
import { CheckboxFormElement } from '@/components/meta-components/form/checkbox';
import { UpdateBox } from '@/components/boxes/update-box';

interface StudyInfoParamsEditorParams {
    study: string;
    serverStudyInfo: StudyInfoParamsEditorFormType;
    studyInfoId: string;
}

export function StudyInfoParamsEditor({ serverStudyInfo }: StudyInfoParamsEditorParams) {
    const form = useForm<StudyInfoParamsEditorFormType>({
        resolver: zodResolver(studyInfoParamsEditorFormSchema),
        defaultValues: serverStudyInfo,
    });

    const updateServer = (values: StudyInfoParamsEditorFormType) => {
        console.log(values);
    };

    return (
        <UpdateBox>
            <Form {...form}>
                <form className="space-y-5 p-5">
                    <InputFormElement form={form} label="Titre" name="title" />
                    <InputFormElement
                        form={form}
                        label="Frais de dossier (%)"
                        name="applicationFee"
                        type="number"
                    />
                    <CheckboxFormElement form={form} label="CC" name="cc" />
                </form>
            </Form>
        </UpdateBox>
    );
}
