'use client';

import { useState } from 'react';

import { SidebarSeparator } from '@/components/ui/sidebar';
import { CDP_SIDEBAR } from '@/settings/sidebars/sidebars';
import { StudyWithCode } from '@/types/user';

import { SidebarList } from './sidebar-list';
import { StudySelection } from './sidebar-study-selection';

export default function SidebarCdp({
    studies,
    isOpen,
}: {
    studies: StudyWithCode[];
    isOpen: boolean;
}) {
    const [selectedStudyIndex, setSelectedStudyIndex] = useState(0);
    const study = studies[selectedStudyIndex];

    return (
        <div className="h-full flex flex-col justify-between">
            <SidebarList sidebarGroups={CDP_SIDEBAR} studyCode={study.information.code} />
            {isOpen ? (
                <div className="flex flex-col items-center gap-1">
                    <div className="flex flex-col items-center gap-1">
                        <div>{study.information.code}</div>
                        <SidebarSeparator className="h-1 w-[calc(100%+1rem)] rounded-full bg-secondary" />
                    </div>
                    <StudySelection
                        studies={studies}
                        selectedStudyIndex={selectedStudyIndex}
                        setSelectedStudyIndex={setSelectedStudyIndex}
                    />
                </div>
            ) : (
                <p className="-rotate-90 flex flex-col items-center gap-1 p-4">
                    {study.information.code}
                </p>
            )}
        </div>
    );
}
