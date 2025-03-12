'use client';

import { useState } from 'react';

import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';
import { SortableList, useSortableList } from '@/components/meta-components/sortableList';

import { Assignee } from './page';
import { Interview } from './right-components/interview';
import { PDF } from './right-components/pdf';
import Client from './client';

function getCurrentTitle(right: Right, current: Assignee) {
    let currentTitle;
    switch (right) {
        case 'pass_interview':
            currentTitle = "Effectuer l'entretien";
            break;
        case 'see_interview':
            currentTitle = "Réponse à l'entretien";
            break;
        default:
            currentTitle = 'CV';
            break;
    }
    currentTitle += ` - ${current?.firstname} ${current?.lastname}`;
    return currentTitle;
}

export type Right = 'cv' | 'pass_interview' | 'see_interview';

export default function ClientsAssignees({ assignees }: { assignees: [Assignee, ...Assignee[]] }) {
    const [right, setRight] = useState<Right>('cv');
    const [current, setCurrent] = useState<Assignee>(assignees[0]);

    const clientList = useSortableList(assignees.map((a) => ({ id: a.email, ...a })));

    return (
        <div className="flex space-x-main w-full h-full">
            <Box className="flex-1">
                <BoxHeader>
                    <BoxTitle>Retour des candidatures</BoxTitle>
                </BoxHeader>
                <BoxContent>
                    <SortableList
                        {...clientList}
                        className="h-full px-2"
                        render={(assignee, dragHandleProps) => (
                            <Client
                                assignee={assignee}
                                dragHandleProps={dragHandleProps}
                                setCurrent={setCurrent}
                                setRight={setRight}
                            />
                        )}
                    />
                </BoxContent>
            </Box>
            <Box className="flex-1">
                <BoxHeader>
                    <BoxTitle>{getCurrentTitle(right, current)}</BoxTitle>
                </BoxHeader>
                <BoxContent height="limited">
                    {right === 'cv' && <PDF />}
                    {right === 'pass_interview' && <Interview editable />}
                    {right === 'see_interview' && <Interview />}
                </BoxContent>
            </Box>
        </div>
    );
}
