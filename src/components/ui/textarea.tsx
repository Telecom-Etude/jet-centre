import * as React from 'react';

import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    resizable?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, resizable = false, ...props }, ref) => {
        if (resizable) {
            props = {
                ...props,
                onInput: (e) => {
                    const target = e.target as HTMLElement;
                    target.style.height = 'inherit';
                    target.style.height = `${target.scrollHeight}px`;
                },
            };
        }

        return (
            <textarea
                className={cn(
                    'flex min-h-[80px] w-full rounded-md px-3 py-2 text-sm border border-input bg-box-background ring-offset-background overflow-y-hidden',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    'placeholder:text-muted-foreground',
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = 'Textarea';

export { Textarea };
