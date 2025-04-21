'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    primary?: boolean;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
    ({ className, primary = false, ...props }, ref) => (
        <CheckboxPrimitive.Root
            ref={ref}
            className={cn(
                'h-4 w-4 shrink-0 rounded-sm ring-offset-background',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                'disabled:cursor-not-allowed disabled:opacity-50',

                primary
                    ? 'peer border border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'
                    : 'border-[2.5px] border-checkbox-border data-[state=checked]:bg-checkbox-background data-[state=checked]:text-primary-foreground',

                className
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator
                className={cn(
                    primary
                        ? 'flex items-center justify-center text-current -translate-y-[1px]'
                        : 'h-full w-full bg-slate-200'
                )}
            >
                {primary && <Check className="h-4 w-4" />}
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
