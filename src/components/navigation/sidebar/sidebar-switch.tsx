'use client';

import { ReactNode, useState } from 'react';
import React from 'react';
import { FaQuestion, FaUser } from 'react-icons/fa6';
import { IconType } from 'react-icons/lib';
import useSWR from 'swr';

import { useViewer } from '@/components/hooks/use-viewer';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { getPositionName } from '@/data/positions';
import { cn } from '@/lib/utils';
import { ROLES_SIDEBARS } from '@/settings/sidebars/sidebars';
import { RoleSideBar } from '@/settings/sidebars/types';
import { StudyWithCode } from '@/types/user';

import SidebarCdp from './sidebar-cdp';
import { SidebarList } from './sidebar-list';

interface Tab {
    id: string;
    title: string;
    icon: IconType;
    content: ReactNode;
}

const fetcherUserStudies = (url: string): Promise<StudyWithCode[]> =>
    fetch(url).then((r) => r.json());

export function SidebarSwitch({
    isOpen,
    initialStudies,
}: {
    isOpen: boolean;
    initialStudies: StudyWithCode[];
}) {
    const { data: studies, error } = useSWR(
        ['/api/user/studies/'],
        ([url]) => fetcherUserStudies(url),
        {
            revalidateOnFocus: false,
            fallbackData: initialStudies,
        }
    );

    const viewerResult = useViewer();
    const [tab, setTab] = useState(0);
    const [api, setApi] = React.useState<CarouselApi>();

    if (error) {
        return <div>Error: {error}</div>;
    }

    const tabs: Tab[] = [];
    if (studies && studies.length !== 0) {
        tabs.push({
            id: 'cdp',
            title: 'CDP',
            icon: FaUser,
            content: <SidebarCdp studies={studies} isOpen={isOpen} />,
        });
    }

    if (viewerResult.status == 'error') {
        return (
            <div>
                Trying to render the siderbar switch without a logged-in user:{' '}
                {viewerResult.message}
            </div>
        );
    }
    const viewer = viewerResult.viewer;

    const positionStr = viewer.position ? getPositionName(viewer.position).shortName : 'Non défini';

    const roleSidebar: RoleSideBar | undefined = viewer.position
        ? ROLES_SIDEBARS[viewer.position]
        : undefined;
    tabs.push({
        id: 'role',
        title: positionStr,
        icon: roleSidebar?.icon || FaQuestion,
        content: <SidebarList sidebarGroups={roleSidebar?.sidebar ?? []} />,
    });

    api?.scrollTo(tab);
    const item = tabs[tab];

    return (
        <div className="flex flex-col h-full w-full place-items-center">
            <div className={cn('flex bg-transparent space-x-2 w-full', isOpen ? 'p-2' : '')}>
                {isOpen &&
                    tabs.map((tab_it, i) => (
                        <Button
                            key={i}
                            variant={i == tab ? 'selected-navbar' : 'secondary'}
                            className={cn(i == tab ? 'font-bold' : '', 'flex-1 text-primary')}
                            onClick={() => {
                                setTab(i);
                            }}
                        >
                            <div className="flex place-items-center space-x-2">
                                <tab_it.icon />
                                <p>{tab_it.title}</p>
                            </div>
                        </Button>
                    ))}
                {!isOpen && (
                    <Button
                        key={tab}
                        className="flex-1"
                        variant="none"
                        onClick={() => {
                            setTab((tab + 1) % tabs.length);
                            api?.scrollNext();
                        }}
                    >
                        {item.icon && <item.icon />}
                    </Button>
                )}
            </div>
            <Carousel
                setApi={setApi}
                className="w-full h-full flex flex-col static"
                opts={{ loop: true, duration: 10, watchDrag: false }}
            >
                <CarouselContent className="h-full">
                    {tabs.map((tab, i) => (
                        <CarouselItem key={i} className="flex-grow py-2 animate-fade-left h-full">
                            {tab.content}
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
