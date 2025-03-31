'use client';

import { useState, useRef } from 'react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
    ControllerRenderProps,
    FieldValues,
    Path,
    PathValue,
    UseFormReturn,
} from 'react-hook-form';
import { FormElementProps, FormElementWrapper } from './wrapper';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DropdownFormElementProps<V, T extends FieldValues> extends FormElementProps<T> {
    formId?: string;
    values: V[];
    onChange?: (newValue: V) => void;
    onBlur?: () => void;
    displayValue?: (value: V) => string;
    getKeyOfValue?: (value: V) => string;
    disabled?: boolean;
    unwritable?: boolean;
    'ping-once'?: boolean;
    className?: string;
}

export function DropdownSingleFormElement<V extends { toString(): string }, T extends FieldValues>({
    form,
    formId,
    label,
    name,
    values,
    onChange,
    onBlur,
    displayValue = (value: V) => value.toString(),
    getKeyOfValue = (value: V) => value.toString(),
    'ping-once': pingOnce,
    disabled = false,
    unwritable = false,
    className,
}: DropdownFormElementProps<V, T>) {
    const [inFocus, setInFocus] = useState(false);
    const [open, setOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputRef = (value: string) => {
        if (inputRef.current) inputRef.current.value = value;
        else console.error('Input ref is null in DropdownSingle');
    };

    return (
        <>
            <input ref={inputRef} name={name} type="text" className="hidden" form={formId} />
            <FormElementWrapper
                className={className}
                ping-once={pingOnce}
                form={form}
                name={name}
                label={label}
                labelStat={inFocus ? 'in-focus' : 'written'}
                disabled={disabled}
                unwritable={unwritable}
                son={(field) => (
                    <DropdownSingleElement
                        unwritable={unwritable}
                        inFocus={inFocus}
                        setInFocus={setInFocus}
                        disabled={disabled}
                        form={form}
                        field={field}
                        values={values}
                        onBlur={onBlur}
                        onChange={onChange}
                        displayValue={displayValue}
                        getKeyOfValue={getKeyOfValue}
                        open={open}
                        setOpen={setOpen}
                        handleInputRef={handleInputRef}
                    />
                )}
            />
        </>
    );
}

interface DropdownSingleElementProps<T extends FieldValues, V> {
    open: boolean;
    setOpen: (open: boolean) => void;
    disabled: boolean;
    unwritable: boolean;
    form: UseFormReturn<T>;
    inFocus: boolean;
    setInFocus: (inFocus: boolean) => void;
    field: ControllerRenderProps<T>;
    onChange?: (newValue: V) => void;
    onBlur?: () => void;
    displayValue: (value: V) => string;
    getKeyOfValue: (value: V) => string;
    handleInputRef: (value: string) => void;
    values: V[];
}

function DropdownSingleElement<T extends FieldValues, V>({
    open,
    setOpen,
    disabled,
    unwritable,
    inFocus,
    field,
    setInFocus,
    onChange,
    onBlur,
    handleInputRef,
    form,
    values,
    displayValue,
    getKeyOfValue,
}: DropdownSingleElementProps<T, V>) {
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    disabled={disabled || unwritable}
                    className={cn(
                        'flex w-full justify-between h-12 focus-visible:ring-0 focus:border-foreground text-md',
                        'disabled:cursor-not-allowed disabled:opacity-80 disabled:text-input',
                        inFocus && 'ring-0 border-foreground'
                    )}
                >
                    {displayValue(field.value)}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="p-0"
                onFocus={() => setInFocus(true)}
                onCloseAutoFocus={() => setInFocus(false)}
            >
                <DropdownCommandList
                    values={values}
                    onChange={onChange}
                    onBlur={onBlur}
                    setInputRef={handleInputRef}
                    form={form}
                    field={field}
                    setOpen={setOpen}
                    displayValue={displayValue}
                    getKeyOfValue={getKeyOfValue}
                />
            </PopoverContent>
        </Popover>
    );
}

interface DropdownCommandListProps<T extends FieldValues, V> {
    values: V[];
    onChange?: (newValue: V) => void;
    onBlur?: () => void;
    setInputRef: (value: string) => void;
    form: UseFormReturn<T>;
    field: ControllerRenderProps<T>;
    setOpen: (open: boolean) => void;
    displayValue: (value: V) => string;
    getKeyOfValue: (value: V) => string;
}

function DropdownCommandList<T extends FieldValues, V>({
    values,
    onChange,
    onBlur,
    setInputRef,
    form,
    field,
    setOpen,
    displayValue,
    getKeyOfValue,
}: DropdownCommandListProps<T, V>) {
    const handleSelect = (newKey: string) => {
        const newValue = values.find((v) => getKeyOfValue(v) === newKey)!;

        setInputRef(newKey);
        form.setValue(field.name, newValue as PathValue<T, Path<T>>);
        setOpen(false);
        if (onChange) onChange(newValue);
        if (onBlur) onBlur();
    };

    return (
        <Command onBlur={onBlur}>
            <CommandInput />
            <CommandList>
                <CommandEmpty>Entrée invalide.</CommandEmpty>
                <CommandGroup>
                    {values.map((value, i) => (
                        <CommandItem key={i} value={getKeyOfValue(value)} onSelect={handleSelect}>
                            <Check
                                className={cn(
                                    'mr-2 h-4 w-4',
                                    getKeyOfValue(field.value) === getKeyOfValue(value)
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                )}
                            />
                            {displayValue(value)}
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </Command>
    );
}
