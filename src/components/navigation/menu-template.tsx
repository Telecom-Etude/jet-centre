import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '../ui/button';
import React from 'react';

interface LinkProps {
    href: string;
    name: string;
}

export const NavigationTemplate = ({ links }: { links: LinkProps[][] }) => (
    <NavigationMenu className="flex flex-col max-w-none items-start space-y-main">
        {links.map((section, i) => (
            <React.Fragment key={i}>
                {i ? <Separator /> : null}
                <NavigationMenuList key={i} className="flex flex-col items-start">
                    {section.map(({ href, name }, i) => (
                        <NavigationMenuItem key={i}>
                            <Button asChild variant="underline" className="text-foreground">
                                <NavigationMenuLink href={href}>{name}</NavigationMenuLink>
                            </Button>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </React.Fragment>
        ))}
    </NavigationMenu>
);
