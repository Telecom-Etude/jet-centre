import { cva } from 'class-variance-authority';
import { ReactNode } from 'react';
import { ControllerRenderProps, FieldValues, Path, UseFormReturn } from 'react-hook-form';

import { cn } from '@/lib/utils';

import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../ui/form';

const labelVariants = cva('', {
    variants: {
        labelStat: {
            unwritten: 'text-input',
            'in-focus': 'text-foreground left-2 -top-2 py-0',
            written: 'text-input left-2 -top-2 py-0',
        },
    },
});

export type LabelStat = 'unwritten' | 'in-focus' | 'written';

export interface FormElementProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    label: string;
    name: Path<T>;
}

interface FormElementWrapperProps<T extends FieldValues> extends FormElementProps<T> {
    son: (field: ControllerRenderProps<T>) => ReactNode;
    description?: string | ReactNode;
    className?: string;
    labelStat?: LabelStat;
    disabled?: boolean;
    unwritable?: boolean;
    'ping-once'?: boolean;
}

export function FormElementWrapper<T extends FieldValues>({
    form,
    label,
    name,
    son,
    description,
    labelStat,
    disabled = false,
    unwritable = false,
    'ping-once': pingOnce,
    className,
}: FormElementWrapperProps<T>) {
    return (
        <FormField
            control={form.control}
            name={name}
            disabled={disabled}
            render={({ field }) => (
                <FormItem
                    className={cn(
                        'group relative mb-4',
                        (field.disabled || unwritable) && 'cursor-not-allowed',
                        className
                    )}
                >
                    {pingOnce && (
                        <span className="pointer-events-none animate-ping-once absolute h-full w-full rounded-md bg-primary opacity-75"></span>
                    )}

                    <FormLabel
                        className={cn(
                            'absolute left-2 top-3 bg-box-background w-fit max-w-[calc(100%-0.75rem)] px-1 py-1 text-lg line-h leading-4 rounded-md whitespace-nowrap pointer-events-none transition-all overflow-ellipsis overflow-hidden z-10',
                            (field.value ?? '').toString() !== '' &&
                                'text-input left-2 -top-2 py-0',
                            labelVariants({
                                labelStat: labelStat,
                            }),
                            'group-focus-within:text-inherit group-focus-within:left-2 group-focus-within:-top-2 group-focus-within:max-w-none group-focus-within:py-0'
                        )}
                    >
                        <div
                            className={field.disabled || unwritable ? 'text-input opacity-80' : ''}
                        >
                            {label}
                        </div>
                    </FormLabel>
                    <FormControl>{son(field)}</FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

interface LightFormElementProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    name: Path<T>;
    description?: string | ReactNode;
}

export function LightFormElement<T extends FieldValues>({
    form,
    name,
    description,
}: LightFormElementProps<T>) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={() => (
                <FormItem>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
