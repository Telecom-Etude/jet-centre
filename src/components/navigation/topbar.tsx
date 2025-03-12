import { FaBug } from 'react-icons/fa';
import { Button } from '../ui/button';
import Link from 'next/link';

import { SidebarTrigger } from '../ui/sidebar';
import { SearchBar } from '../meta-components/searchbar';
import { MAILTO_DSI } from '@/lib/links';

export const TopBar = () => {
    return (
        <div className="flex w-full items-center">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1"></div>
            <div className="">
                <SearchBar label="" />
            </div>
            <div className="flex-1"></div>
            <Button variant="underline" className=" items-center space-x-2 flex p-0">
                <FaBug />
                <Button variant="underline" asChild className="font-semi p-0">
                    <Link href={MAILTO_DSI}>Ticket SOS</Link>
                </Button>
            </Button>
        </div>
    );
};
