import { Checkbox } from '@/components/ui/checkbox';

import { ControllerRenderProps, FieldValues, Path, UseFormReturn } from 'react-hook-form';
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../ui/form';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CheckboxFormElementProps<T extends FieldValues> extends FormElementProps<T> {
    formId?: string;
    onChange?: (newValue: string) => void;
    type?: string;
    className?: string;
}

export const CheckboxFormElement = <T extends FieldValues>({
    formId,
    onChange,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type,
    className,
    ...props
}: CheckboxFormElementProps<T>) => (
    <CheckboxFormElementWrapper
        className={className}
        {...props}
        son={(field) => (
            <Checkbox
                {...field}
                onChange={(e) => {
                    console.log(e.target);
                    field.onChange(e);
                    if (onChange) {
                        // onChange(e.target.value);
                    }
                }}
                form={formId}
            />
        )}
    />
);

interface FormElementProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    label: string;
    name: Path<T>;
}

interface FormElementWrapperProps<T extends FieldValues> extends FormElementProps<T> {
    son: (field: ControllerRenderProps<T>) => ReactNode;
    description?: string | ReactNode;
    className?: string;
}

const CheckboxFormElementWrapper = <T extends FieldValues>({
    form,
    label,
    name,
    son,
    description,
    className,
}: FormElementWrapperProps<T>) => (
    <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
            <FormItem className={cn('mb-4 -mt-1', className)}>
                <div className="flex flex-row justify-start items-center h-6">
                    <FormControl>{son(field)}</FormControl>
                    <FormLabel className="pl-4 text-lg line-h leading-4 rounded-md whitespace-nowrap">
                        {label}
                    </FormLabel>
                </div>
                {description && <FormDescription>{description}</FormDescription>}
                <FormMessage />
            </FormItem>
        )}
    />
);
