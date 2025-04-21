import { ControllerRenderProps, FieldValues } from 'react-hook-form';

import { Textarea } from '@/components/ui/textarea';

import { FormElementWrapper, FormElementProps } from './wrapper';

interface TextAreaFormElementProps<T extends FieldValues> extends FormElementProps<T> {
    onChange?: (newValue: string) => void;
    onBlur?: () => void;
    resizable?: boolean;
    className?: string;
}

export const TextAreaFormElement = <T extends FieldValues>({
    onChange,
    resizable = false,
    onBlur,
    className,
    ...props
}: TextAreaFormElementProps<T>) => (
    <FormElementWrapper
        className={className}
        {...props}
        son={(field: ControllerRenderProps<T>) => (
            <Textarea
                resizable={resizable}
                {...field}
                onBlur={onBlur}
                onChange={(e) => {
                    field.onChange(e);
                    if (onChange) {
                        onChange(e.target.value);
                    }
                }}
                className="p-4"
            />
        )}
    />
);
