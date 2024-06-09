'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/lib/utils';

const Separator = React.forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
            'shrink-0 bg-border',
            orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
            className
        )}
        {...props}
    />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

const LabeledSeparator = ({ content }: { content: string }) => {
    return (
        <div className="relative">
            <div className="w-full h-1 absolute bg-input top-[50%] rounded"></div>
            <div className="flex justify-center">
                <div className="relative px-2 bg-background">{content}</div>
            </div>
        </div>
    );
};

export { Separator, LabeledSeparator };
