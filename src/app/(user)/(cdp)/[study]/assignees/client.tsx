'use client';

import { useState } from 'react';

import { IconType } from 'react-icons/lib';
import { MdOpenInNew } from 'react-icons/md';
import { FaFilePdf } from 'react-icons/fa';

import {
    InnerBox,
    BoxHeader,
    BoxTitle,
    BoxHeaderBlock,
    BoxContent,
    BoxCollapser,
    BoxCollapseButton,
    BoxDragHandle,
} from '@/components/boxes/boxes';
import { Button } from '@/components/ui/button';
import { DragHandle } from '@/components/meta-components/sortableList';

import { Assignee } from './page';
import { Right } from './clientsAssignees';

const eltCN = 'bg-background border-2 border-muted p-2';

export type ClientProps = {
    assignee: Assignee;
    setCurrent: (assignee: Assignee) => void;
    setRight: (right: Right) => void;
    dragHandleProps: DragHandle;
};

export default function Client({ assignee, setCurrent, setRight, dragHandleProps }: ClientProps) {
    const [collapse, setCollapse] = useState(true);

    function updateRightToInterview() {
        setCurrent(assignee);
        setRight(assignee.interview ? 'see_interview' : 'pass_interview');
    }

    function updateRightToCV() {
        setCurrent(assignee);
        setRight('cv');
    }

    function updateCurrent() {
        if (collapse) {
            setCurrent(assignee);
        }
    }

    return (
        <InnerBox className="w-full">
            <BoxHeader>
                <BoxTitle>{assignee.firstname + ' ' + assignee.lastname}</BoxTitle>
                <BoxHeaderBlock>
                    <Button
                        onClick={updateRightToInterview}
                        variant="secondary"
                        className="flex items-center space-x-2"
                    >
                        <p>Entretien</p>
                        <MdOpenInNew />
                    </Button>
                    <AssigneeButton onClick={updateRightToCV} Icon={FaFilePdf} />
                    <BoxCollapseButton
                        onClick={updateCurrent}
                        collapse={collapse}
                        setCollapse={setCollapse}
                    />
                    <BoxDragHandle {...dragHandleProps} />
                </BoxHeaderBlock>
            </BoxHeader>
            <BoxCollapser collapse={collapse}>
                <BoxContent>
                    <div className={eltCN}>Email</div>
                    <div className={eltCN}>{assignee.email}</div>
                    <div className={eltCN}>Expérience</div>
                    <div className={eltCN}>{assignee.experience}</div>
                    <div className={eltCN}>Connaissances</div>
                    <div className={eltCN}>{assignee.knowledge}</div>
                    <div className={eltCN}>Idées</div>
                    <div className={eltCN}>{assignee.ideas}</div>
                    <div className={eltCN}>Expérience JE</div>
                    <div className={eltCN}>{assignee.je_experience}</div>
                </BoxContent>
            </BoxCollapser>
        </InnerBox>
    );
}

function AssigneeButton({ onClick, Icon }: { onClick: () => void; Icon: IconType }) {
    return (
        <Button variant="ghost" className="m-0 p-2" onClick={onClick}>
            <Icon />
        </Button>
    );
}
