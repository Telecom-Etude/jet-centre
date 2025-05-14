import * as React from 'react';

import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    unwritable?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, unwritable, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    'flex h-10 w-full rounded-md border border-input bg-box-background px-2 py-1 transition-all',
                    'disabled:cursor-not-allowed disabled:opacity-80 disabled:text-input',
                    'focus-visible:outline-none focus-visible:border-foreground',
                    'placeholder:text-muted-foreground placeholder:italic',
                    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
                    className
                )}
                ref={ref}
                {...props}
                disabled={unwritable || props.disabled}
            />
        );
    }
);
Input.displayName = 'Input';

export { Input };
