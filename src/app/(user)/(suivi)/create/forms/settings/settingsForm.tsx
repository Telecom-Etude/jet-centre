'use client';

import { FieldValues, useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
    Box,
    BoxButtonPlus,
    BoxCollapser,
    BoxContent,
    BoxHeader,
    BoxTitle
} from '@/components/boxes/boxes';
import { Button } from '@/components/ui/button';
import { FormProvider, FormRow, FormRule } from '@/components/ui/form';
import { InputFormElement } from '@/components/meta-components/form/input';
import { DropdownSingleFormElement } from '@/components/meta-components/form/dropdownSingle';

import {
    Admin,
    AdminCreationSchema,
    adminCreationSchema,
    AdminFormValue,
    emptyAdminCreationSchema,
    NewAdmin
} from './settingsSchema';
import { DropdownManyFormElement } from '@/components/meta-components/form/dropdownMany';
import { CheckboxFormElement } from '@/components/meta-components/form/checkbox';
import { StudyCreationSchema } from '../schema';
import { SortableList, useSortableList } from '@/components/meta-components/sortableList';
import { useEffect, useState } from 'react';
import { AdminForm } from './adminForm';
import { ANIMATION_DURATION_MS } from '@/settings/vars';
import { SimpleAdminItem } from './simpleAdminItem';
import { EditableAdminItem } from './editableAdminItem';
import { SearchBar } from '@/components/meta-components/searchbar';

export interface SettingsFormProps {
    formStudy: UseFormReturn<StudyCreationSchema>;
    formStudyId: string;
    admins: Admin[];
}

export function SettingsForm({ formStudy, formStudyId, admins }: SettingsFormProps) {
    // ~~~~~~~~~~~~~~~ Admins ~~~~~~~~~~~~~~ //
    const adminList = useSortableList<AdminFormValue>([]);
    useEffect(() => {
        formStudy.setValue('settings.cdps', adminList.items);
    }, [adminList.items, formStudy]);

    const [hideCreateNewAdminButton, setHideCreateNewAdminButton] = useState(false);
    const [collapseAdminForm, setCollapseAdminForm] = useState(true);

    // ~~~~~~~~~~~~~~ SearchBar ~~~~~~~~~~~~~~ //

    const select = (admin: Admin) => {
        if (!adminList.items.find((a) => a.id === admin.id)) {
            adminList.addItem(admin);
        }
    };

    return (
        <Box className="w-full">
            <BoxHeader>
                <BoxTitle>Paramètres de l&apos;étude</BoxTitle>
            </BoxHeader>
            <BoxContent>
                <div className="flex flex-col gap-2">
                    <FormProvider {...formStudy}>
                        <InputFormElement
                            label="Nom de l'étude"
                            name="settings.name"
                            form={formStudy}
                            formId={formStudyId}
                        />
                        <InputFormElement
                            label="Durée estimée (en JEH)"
                            name="settings.duration"
                            type="number"
                            form={formStudy}
                            formId={formStudyId}
                        />
                        <InputFormElement
                            label="Deadline pre-étude"
                            name="settings.deadline"
                            type="date"
                            form={formStudy}
                            formId={formStudyId}
                        />
                        <CheckboxFormElement
                            label="CC ?"
                            name="settings.cc"
                            type="checkbox"
                            form={formStudy}
                            formId={formStudyId}
                        />
                    </FormProvider>
                    <FormRule primary />
                    <div className="flex flex-col gap-4">
                        <h4>Chef·fe de projet</h4>

                        <SearchBar
                            label="Rechercher un·e admin"
                            placeholder="ex: Myriam Lebatteux"
                            items={admins}
                            displayValue={(admin) => admin.firstName + ' ' + admin.lastName}
                            onSelect={select}
                        />

                        <div>
                            <SortableList
                                className="gap-3"
                                {...adminList}
                                render={(item, dragHandleProps, updateItem) => {
                                    const isNew = (item as any).isNew ?? false;
                                    return isNew ? (
                                        <EditableAdminItem
                                            {...(item as any)}
                                            updateAdmin={updateItem}
                                            dragHandleProps={dragHandleProps}
                                            deleteAdmin={() => adminList.deleteItem(item.id)}
                                        />
                                    ) : (
                                        <SimpleAdminItem
                                            {...(item as any)}
                                            dragHandleProps={dragHandleProps}
                                            removeAdmin={() => adminList.deleteItem(item.id)}
                                        />
                                    );
                                }}
                            />
                            <div className="flex flex-col">
                                <BoxCollapser collapse={collapseAdminForm}>
                                    <BoxContent>
                                        <AdminForm
                                            defaultValues={{
                                                id: 'tmp-id-' + Math.random().toString(),
                                                ...emptyAdminCreationSchema
                                            }}
                                            onSubmit={(admin) => {
                                                setCollapseAdminForm(true);

                                                setTimeout(() => {
                                                    setHideCreateNewAdminButton(false);
                                                }, ANIMATION_DURATION_MS / 2);

                                                setTimeout(() => {
                                                    adminList.addItem(admin);
                                                }, ANIMATION_DURATION_MS / 2);
                                            }}
                                            onCancel={() => {
                                                setCollapseAdminForm(true);

                                                setTimeout(() => {
                                                    setHideCreateNewAdminButton(false);
                                                }, ANIMATION_DURATION_MS / 2);
                                            }}
                                        />
                                    </BoxContent>
                                </BoxCollapser>
                                {hideCreateNewAdminButton ? null : (
                                    <div>
                                        <BoxButtonPlus
                                            className="mt-main mx-auto"
                                            label="Définir un·e admin"
                                            onClick={() => {
                                                setCollapseAdminForm(false);
                                                setTimeout(() => {
                                                    setHideCreateNewAdminButton(true);
                                                }, ANIMATION_DURATION_MS / 2);
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </BoxContent>
        </Box>
    );
}
