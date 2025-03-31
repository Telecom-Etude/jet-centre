import {
    Box,
    BoxButtonLabelPlus,
    BoxButtonTrash,
    BoxCollapseButton,
    BoxCollapser,
    BoxContent,
    BoxDragHandle,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
} from '@/components/boxes/boxes';
import { FormProvider, FormRule } from '@/components/ui/form';
import { InputFormElement } from '@/components/meta-components/form/input';
import { DropdownSingleFormElement } from '@/components/meta-components/form/dropdownSingle';
import { DropdownManyFormElement } from '@/components/meta-components/form/dropdownMany';
import {
    DragHandle,
    SortableList,
    useSortableList,
} from '@/components/meta-components/sortableList';
import { ANIMATION_DURATION_MS } from '@/settings/vars';

import { Path, UseFormReturn } from 'react-hook-form';
import { useCallback, useEffect, useMemo, useState } from 'react';

import {
    Company,
    CompanyFormValue,
    emptyCompany,
    emptyContactCreationSchema,
} from './companiesSchema';
import { SimpleContactItem } from './simpleContactItem';
import { cn } from '@/lib/utils';
import { ContactForm } from './contactForm';
import { SearchBar } from '@/components/meta-components/searchbar';
import { EditableContactItem } from './editableContactItem';
import { StudyCreationSchema } from '../schema';
import { LightFormElement } from '@/components/meta-components/form/wrapper';
import { COMPANY_SIZES, DOMAIN_NAMES } from '@/db/types';

export interface CompaniesProps {
    companies: Company[];
    formStudy: UseFormReturn<StudyCreationSchema>;
    formStudyId: string;
}

export function CompaniesForm({ companies, formStudy, formStudyId }: CompaniesProps) {
    const companiesList = useSortableList<CompanyFormValue>();

    const companyNames = useMemo(() => companies.map((c) => c.name), [companies]);

    const [nextIdx, setNextIdx] = useState(0);
    function getNextIdx() {
        const idx = nextIdx;
        setNextIdx((prev) => prev + 1);
        return idx;
    }

    const select = (companyName: string) => {
        if (!companiesList.items.find((c) => c.name === companyName)) {
            const company_ = companies.find((c) => c.name === companyName);
            const company = { idx: getNextIdx(), ...company_! };
            companiesList.addItem(company);
        }
    };

    return (
        <>
            <SearchBar
                label="Rechercher une entreprise"
                placeholder="ex: Greenplast"
                items={companyNames}
                onSelect={select}
            />
            {companiesList.items.length !== 0 && (
                <SortableList
                    {...companiesList}
                    className="gap-main"
                    render={(item, dragHandleProps) => (
                        <CompanyForm
                            formStudy={formStudy}
                            formStudyId={formStudyId}
                            defaultValues={item}
                            dragHandleProps={dragHandleProps}
                            deleteCompany={() => companiesList.deleteItem(item.id)}
                        />
                    )}
                />
            )}
            <div className="flex flex-row justify-center">
                <BoxButtonLabelPlus
                    label="Définir une entreprise"
                    onClick={() =>
                        companiesList.addItem({
                            id: 'tmp-id-' + Math.random().toString(),
                            idx: getNextIdx(),
                            isNew: true,
                            ...emptyCompany,
                        })
                    }
                />
            </div>
        </>
    );
}

interface CompanyFormProps {
    formStudy: UseFormReturn<StudyCreationSchema>;
    formStudyId: string;
    defaultValues: CompanyFormValue;
    dragHandleProps: DragHandle;
    deleteCompany: () => void;
}

function CompanyForm({
    formStudy,
    formStudyId,
    dragHandleProps,
    deleteCompany: deleteCompany_,
    defaultValues,
}: CompanyFormProps) {
    // ~~~~~~~~~~~~~~~ Company ~~~~~~~~~~~~~~~ //
    const field = useCallback(
        (name: string): Path<StudyCreationSchema> =>
            `companies.companies.${defaultValues.idx}.${name}` as any,
        [defaultValues.idx]
    );

    useEffect(() => {
        formStudy.setValue(`companies.companies.${defaultValues.idx}`, defaultValues);
    }, [defaultValues, formStudy]);

    const deleteCompany = useCallback(() => {
        formStudy.setValue(`companies.companies.${defaultValues.idx}`, null);
        deleteCompany_();
    }, [deleteCompany_, defaultValues.idx, formStudy]);

    const [collapse, setCollapse] = useState(true);
    useEffect(() => {
        setCollapse(false);
    }, []);

    const isNew = useMemo(() => {
        return (defaultValues as any).isNew ?? false;
    }, [defaultValues]);

    const companyName = (formStudy.watch(field('name')) as string) ?? defaultValues.name;

    // ~~~~~~~~~~~~~~~ Contacts ~~~~~~~~~~~~~~ //
    const contactList = useSortableList(
        defaultValues.members.map((c, idx) => ({ ...c, id: idx.toString() }))
    );
    useEffect(() => {
        formStudy.setValue(
            field('members'),
            contactList.items.filter((c) => !(c.excluded ?? false))
        );
    }, [contactList.items, formStudy, field]);

    const [hideCreateNewContactButton, setHideCreateNewContactButton] = useState(false);
    const [collapseContactForm, setCollapseContactForm] = useState(true);

    return (
        <Box className="w-full">
            <BoxHeader className={cn('pr-1', collapse && 'rounded-b-[0.5rem] duration-300')}>
                <BoxTitle>
                    Informations générales sur{' '}
                    {companyName.length === 0 ? "l'entreprise" : companyName}
                </BoxTitle>
                <BoxHeaderBlock>
                    <BoxButtonTrash
                        onClick={() => {
                            if (collapse) deleteCompany();
                            else {
                                setCollapse(true);
                                setTimeout(() => deleteCompany(), ANIMATION_DURATION_MS);
                            }
                        }}
                    />
                    <BoxCollapseButton collapse={collapse} setCollapse={setCollapse} />
                    <BoxDragHandle {...dragHandleProps} />
                </BoxHeaderBlock>
            </BoxHeader>
            <BoxCollapser collapse={collapse}>
                <BoxContent>
                    <div className="flex flex-col gap-2">
                        <FormProvider {...formStudy}>
                            <InputFormElement
                                label="Nom de l'entreprise"
                                name={field('name')}
                                form={formStudy}
                                formId={formStudyId}
                                unwritable={!isNew}
                            />
                            <DropdownSingleFormElement
                                label="Taille de l'entreprise"
                                name={field('size')}
                                values={COMPANY_SIZES}
                                form={formStudy}
                                formId={formStudyId}
                                unwritable={!isNew}
                            />
                            <DropdownManyFormElement
                                label="Domaines d'activité"
                                name={field('domains')}
                                values={DOMAIN_NAMES}
                                form={formStudy}
                                formId={formStudyId}
                                unwritable={!isNew}
                            />
                            <InputFormElement
                                label="CA (en k€)"
                                name={field('ca')}
                                type="number"
                                form={formStudy}
                                formId={formStudyId}
                                unwritable={!isNew}
                            />

                            <FormRule />

                            <h4>Adresse</h4>
                            <div className="grid-cols-4 grid gap-2">
                                <InputFormElement
                                    label="N°"
                                    name={field('address.number')}
                                    className="col-span-1"
                                    form={formStudy}
                                    formId={formStudyId}
                                    unwritable={!isNew}
                                />
                                <InputFormElement
                                    label="Rue"
                                    name={field('address.street')}
                                    className="col-span-3"
                                    form={formStudy}
                                    formId={formStudyId}
                                    unwritable={!isNew}
                                />
                                <InputFormElement
                                    label="Ville"
                                    name={field('address.city')}
                                    className="col-span-4"
                                    form={formStudy}
                                    formId={formStudyId}
                                    unwritable={!isNew}
                                />
                                <InputFormElement
                                    label="Code postal"
                                    name={field('address.zip')}
                                    className="col-span-2"
                                    form={formStudy}
                                    formId={formStudyId}
                                    unwritable={!isNew}
                                />
                                <InputFormElement
                                    label="Pays"
                                    name={field('address.country')}
                                    className="col-span-2"
                                    form={formStudy}
                                    formId={formStudyId}
                                    unwritable={!isNew}
                                />
                            </div>
                        </FormProvider>

                        <FormRule primary />
                        <h4>Contacts</h4>
                        <div>
                            <SortableList
                                className="gap-3"
                                {...contactList}
                                render={(item, dragHandleProps, updateItem) => {
                                    const isNew = (item as any).isNew ?? false;
                                    return isNew ? (
                                        <EditableContactItem
                                            {...(item as any)}
                                            updateContact={updateItem}
                                            dragHandleProps={dragHandleProps}
                                            deleteContact={() => contactList.deleteItem(item.id)}
                                        />
                                    ) : (
                                        <SimpleContactItem
                                            {...(item as any)}
                                            dragHandleProps={dragHandleProps}
                                            updateContact={updateItem}
                                        />
                                    );
                                }}
                            />
                            <FormProvider {...formStudy}>
                                <LightFormElement form={formStudy} name={field('members')} />
                            </FormProvider>
                            <div className="flex flex-col">
                                <BoxCollapser collapse={collapseContactForm}>
                                    <BoxContent>
                                        <ContactForm
                                            defaultValues={emptyContactCreationSchema}
                                            onSubmit={(contact) => {
                                                setCollapseContactForm(true);

                                                setTimeout(() => {
                                                    setHideCreateNewContactButton(false);
                                                }, ANIMATION_DURATION_MS / 2);

                                                setTimeout(() => {
                                                    contactList.addItem({
                                                        id: 'tmp-id-' + Math.random().toString(),
                                                        ...contact,
                                                    });
                                                }, ANIMATION_DURATION_MS / 2);
                                            }}
                                            onCancel={() => {
                                                setCollapseContactForm(true);

                                                setTimeout(() => {
                                                    setHideCreateNewContactButton(false);
                                                }, ANIMATION_DURATION_MS / 2);
                                            }}
                                        />
                                    </BoxContent>
                                </BoxCollapser>
                                {hideCreateNewContactButton ? null : (
                                    <div>
                                        <BoxButtonLabelPlus
                                            className="mt-main mx-auto"
                                            label="Définir un contact"
                                            onClick={() => {
                                                setCollapseContactForm(false);
                                                setTimeout(() => {
                                                    setHideCreateNewContactButton(true);
                                                }, ANIMATION_DURATION_MS / 2);
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </BoxContent>
            </BoxCollapser>
        </Box>
    );
}
