import Link from 'next/link';
import { NavbarHeader } from './navbar-header';
import { UserDropdownMenu } from './user-dropdown-menu';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MissionNavbar } from './navbar-mission';

const NavBar = () => {
    const [missionNb, setMissionNb] = useState(0);
    const missions = ['223072', '223073', '223074'];
    const position = 'Respo Info';

    const tabs = [
        {
            label: 'CDP',
            value: 'cdp',
            content: (
                <MissionNavbar
                    missions={missions}
                    missionNb={missionNb}
                    setMissionNb={setMissionNb}
                />
            ),
        },
        {
            label: position,
            value: 'position',
            content: <div>Todo.</div>,
        },
    ];

    return (
        <div className="h-screen flex flex-col gap-6 p-4">
            <NavbarHeader />
            <div className="flex-grow flex flex-col gap-2">
                <Tabs defaultValue="cdp" className="w-full h-full flex flex-col">
                    <TabsList className="flex bg-transparent">
                        {tabs.map((tab) => (
                            <TabsTrigger
                                className="mx-2 flex-1 rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-primary"
                                value={tab.value}
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {tabs.map((tab) => (
                        <TabsContent value={tab.value} className="flex-grow py-2">
                            {tab.content}
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
            <UserDropdownMenu username="Nicolas Glady" />
        </div>
    );
};

export default NavBar;
