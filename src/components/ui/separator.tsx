'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
    primary?: boolean;
}

const Separator = React.forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root>,
    SeparatorProps
>(
    (
        { className, orientation = 'horizontal', decorative = true, primary = false, ...props },
        ref
    ) => (
        <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={cn(
                'shrink-0',
                primary ? 'bg-primary' : 'bg-border',
                orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
                className
            )}
            {...props}
        />
    )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

const LabeledSeparator = ({ content }: { content: string }) => {
    return (
        <div className="relative">
            <div className="flex justify-center items-center">
                <div className="w-full h-1 bg-input top-[50%] rounded"></div>
                <div className="relative px-2 text-disabled-foreground">{content}</div>
                <div className="w-full h-1 bg-input top-[50%] rounded"></div>
            </div>
        </div>
    );
};

export { Separator, LabeledSeparator };
