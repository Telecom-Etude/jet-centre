import { Input } from '@/components/ui/input';
import { FieldValues } from 'react-hook-form';
import { FormElementWrapper, FormElementProps } from './wrapper';
import React from 'react';

interface InputFormElementProps<T extends FieldValues> extends FormElementProps<T> {
    formId?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    placeholder?: Partial<T>;
    type?: string;
    className?: string;
    disabled?: boolean;
    unwritable?: boolean;
    'ping-once'?: boolean;
}

export const InputFormElement = <T extends FieldValues>({
    formId,
    onChange,
    onBlur,
    placeholder,
    type,
    className,
    disabled = false,
    unwritable = false,
    'ping-once': pingOnce,
    ...props
}: InputFormElementProps<T>) => (
    <FormElementWrapper
        className={className}
        ping-once={pingOnce}
        disabled={disabled}
        unwritable={unwritable}
        {...props}
        son={(field) => (
            <Input
                {...field}
                type={type}
                onChange={(e) => {
                    // Il faut convertir la valeur en nombre si le type est "number"
                    // Dans le cas où `type` vaut "date", on ne fais rien car sinon le champs est visuellement vide
                    // ie. la balise <input> affiche "dd/mm/yyyy" à la place de la date rentrée
                    field.onChange(type === 'number' ? Number(e.target.value) : e.target.value);

                    if (onChange) {
                        onChange(e);
                    }
                }}
                onBlur={onBlur}
                className="px-4 h-12"
                placeholder={placeholder?.[field.name] || ''}
                form={formId}
                disabled={field.disabled}
                unwritable={unwritable}
            />
        )}
    />
);
