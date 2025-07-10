import { Textarea } from '@/components/ui/textarea';
import { CellManyComboBox, CellSingleComboBox } from './cell-combobox';
import { flexRender } from '@tanstack/react-table';
import { Domain, StudyProgressStep } from '@prisma/client';
import { useState } from 'react';
import { ClientsData } from './actions';

interface InputCellProps {
    cell_id: string;
    data: any;
    comp: any;
    context: object;
    codeToID: { [key: string]: string };
    clientsData: ClientsData;
}

enum isSingleCombobox {
    oc,
    cconf,
    qs,
}

enum isManyCombobox {
    step,
    refs,
    cdps,
    type_study,
    client_name,
    client_email,
}

enum isInput {
    next_deadline,
    date_pre_study,
    last_check,
    next_check,
    gap,
    end_rm,
    pvrf,
    av_number,
}

enum isTextarea {
    title,
    info,
}

interface ListItem {
    [key: string]: string[];
}

interface ListId {
    [key: string]: string;
}

export function InputCell({ cell_id, data, comp, context, codeToID, clientsData }: InputCellProps) {
    const { admins, clientsName, clientsEmail } = clientsData;

    const step = Object.values(StudyProgressStep);
    const type_study = Object.values(Domain);

    const listItemManyComboBox: ListItem = {
        step: step,
        refs: admins ? admins : [],
        cdps: admins ? admins : [],
        type_study: type_study,
        client_name: clientsName ? clientsName : [],
        client_email: clientsEmail ? clientsEmail : [],
    };

    const listItemSingleComboBox: ListItem = {
        oc: ["Pas d'OC", 'Non envoyée', 'Envoyée client', 'Acceptée client'],
        cconf: ['Oui', 'Non'],
        qs: ['Non envoyé', 'Non concerné', 'Envoyé', 'Sans réponse', 'Reçu'],
    };

    const listId: ListId = {
        step: 'Chercher un status',
        refs: 'Chercher un.e référent.e',
        cdps: 'Chercher des CDPs',
        type_study: 'Chercher un type',
        client_name: 'Chercher un client',
        client_email: 'Chercher un mail client',
        oc: 'Status OC',
        cconf: 'Oui/Non',
        qs: 'Status QS',
    };

    const id = cell_id.substring(2);
    if (Object.values(isManyCombobox).includes(id)) {
        return (
            <CellManyComboBox
                data={data}
                items={listItemManyComboBox[id]}
                placeholder={listId[id]}
                codeToID={codeToID}
            />
        );
    } else if (Object.values(isSingleCombobox).includes(id)) {
        return (
            <CellSingleComboBox
                data={data}
                items={listItemSingleComboBox[id]}
                placeholder={listId[id]}
                codeToID={codeToID}
            />
        );
    } else if (Object.values(isInput).includes(id)) {
        return <></>;
    } else if (Object.values(isTextarea).includes(id)) {
        return (
            // Il faut prendre en compte le codeToID ici

            <Textarea
                className="h-full -min-h-[80px] -border resize-none text-center leading-snug -rounded-md px-4"
                defaultValue={data}
                onInput={(e) => {
                    const target = e.currentTarget;
                    target.style.height = 'auto';
                    target.style.height = target.scrollHeight + 'px';
                }}
            />
        );
    } else {
        return <div className="px-6">{flexRender(comp, context)}</div>;
    }
}
