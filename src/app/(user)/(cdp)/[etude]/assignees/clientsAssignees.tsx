'use client';

import { useState } from 'react';

import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';
import { SortableList } from '@/components/animations/drag';

import { Assignee } from './page';
import { Interview } from './right-components/interview';
import { PDF } from './right-components/pdf';
import Client from './client';

function getCurrentTitle(right: Right, current: Assignee) {
    var currentTitle;
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

    return (
        <div className="flex space-x-main w-full h-full">
            <Box className="flex-1">
                <BoxHeader>
                    <BoxTitle>Retour des candidatures</BoxTitle>
                </BoxHeader>
                <BoxContent>
                    <SortableList
                        initialItems={assignees}
                        gap={16}
                        colors={{}}
                        className="h-full px-2"
                        getKey={(assignee) => assignee.email}
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
