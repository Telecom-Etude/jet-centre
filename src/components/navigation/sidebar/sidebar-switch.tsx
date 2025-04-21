'use client';

import { ReactNode, useState } from 'react';
import React from 'react';
import { FaQuestion, FaUser } from 'react-icons/fa6';
import { IconType } from 'react-icons/lib';

import { Button } from '@/components/ui/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { ROLES_SIDEBARS } from '@/settings/sidebars/sidebars';
import { RoleSideBar } from '@/settings/sidebars/types';

import SidebarCdp from './sidebar-cdp';
import { SidebarList } from './sidebar-list';


interface Tab {
    id: string;
    title: string;
    icon: IconType;
    content: ReactNode;
}

export function SidebarSwitch({
    isOpen,
    missions,
    position,
}: {
    isOpen: boolean;
    missions?: string[];
    position?: string;
}) {
    const tabs: Tab[] = [];
    if (missions && missions.length !== 0) {
        tabs.push({
            id: 'cdp',
            title: 'CDP',
            icon: FaUser,
            content: <SidebarCdp missions={missions} />,
        });
    }

    const positionStr = (position ?? 'Non défini') as keyof typeof ROLES_SIDEBARS;
    const roleSidebar: RoleSideBar | undefined = ROLES_SIDEBARS[positionStr];
    tabs.push({
        id: 'role',
        title: positionStr,
        icon: roleSidebar?.icon || FaQuestion,
        content: <SidebarList sidebar_groups={roleSidebar?.sidebar ?? []} />,
    });

    const [tab, setTab] = useState(0);
    const [api, setApi] = React.useState<CarouselApi>();
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
