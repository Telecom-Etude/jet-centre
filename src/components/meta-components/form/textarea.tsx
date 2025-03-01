import { FieldValues } from 'react-hook-form';
import { FormElementWrapper, FormElementProps } from './wrapper';
import { Textarea } from '@/components/ui/textarea';

interface TextAreaFormElementProps<T extends FieldValues> extends FormElementProps<T> {
    onChange?: (newValue: string) => void;
    resizable?: boolean;
    className?: string;
}

export const TextAreaFormElement = <T extends FieldValues>({
    onChange,
    resizable = false,
    className,
    ...props
}: TextAreaFormElementProps<T>) => (
    <FormElementWrapper
        className={className}
        {...props}
        son={(field) => (
            <Textarea
                resizable={resizable}
                {...field}
                onChange={(e) => {
                    field.onChange(e);
                    if (onChange) {
                        onChange(e.target.value);
                    }
                    // console.log(form.getValues()[name]);
                }}
                className="p-4"
            />
        )}
    />
);
