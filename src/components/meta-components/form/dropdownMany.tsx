'use client';

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
import { FieldValues, Path, PathValue } from 'react-hook-form';
import { FormElementProps, FormElementWrapper } from './wrapper';
import { ChevronsUpDown } from 'lucide-react';
import { FaX } from 'react-icons/fa6';
import { cn, getProperty } from '@/lib/utils';
import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface DropdownFormElementProps<V, T extends FieldValues> extends FormElementProps<T> {
    formId?: string;
    values: V[];
    onChange?: (newValue: V, added: boolean) => void;
    displayValue?: (value: V) => React.ReactNode;
    getKeyOfValue?: (value: V) => string;
    disabled?: boolean;
    unwritable?: boolean;
    'ping-once'?: boolean;
    className?: string;
}

export function DropdownManyFormElement<V, T extends FieldValues>({
    form,
    formId,
    label,
    name,
    values,
    displayValue = (value: V) => value as string,
    getKeyOfValue = (value: V) => value as string,
    onChange,
    disabled = false,
    unwritable = false,
    'ping-once': pingOnce,
    className,
}: DropdownFormElementProps<V, T>) {
    const [inFocus, setInFocus] = useState(false);
    const [selected, setSelected] = useState<V[]>([]);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const inputContainerRef = useRef<HTMLDivElement>(null);

    const updateHeight = () => {
        if (buttonRef.current) {
            const target = buttonRef.current;
            target.style.height = 'inherit';
            target.style.height = `${target.scrollHeight}px`;
        }
    };

    const value = form.watch(name);
    useEffect(updateHeight, [value]);

    function onRemove(value: V) {
        const newSelected = selected.filter((v) => getKeyOfValue(v) !== getKeyOfValue(value));

        setSelected(newSelected);

        form.setValue(name, newSelected as PathValue<T, Path<T>>);
    }

    function setInputContainerRef(values: V[]) {
        if (inputContainerRef.current) {
            inputContainerRef.current.innerHTML = values
                .map(
                    (value, idx) =>
                        `<input type="text" name="${name}.${idx}" value="${getKeyOfValue(
                            value
                        )}" form="${formId}"/>`
                )
                .join('');
        } else {
            console.error('inputContainerRef in DropdownMany is null');
        }
    }

    return (
        <>
            <div ref={inputContainerRef} className="hidden"></div>
            <FormElementWrapper
                className={className}
                ping-once={pingOnce}
                form={form}
                name={name}
                label={label}
                labelStat={inFocus ? 'in-focus' : undefined}
                disabled={disabled}
                unwritable={unwritable}
                son={() => (
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                className={cn(
                                    'flex w-full justify-between min-h-12 hover:has-[.prevent-hover:hover]:bg-box-background',
                                    'ring-0 outline-none focus-within:border-foreground',
                                    'disabled:text-input disabled:opacity-80',
                                    inFocus && 'ring-0 border-foreground'
                                )}
                                ref={buttonRef}
                                disabled={disabled || unwritable}
                            >
                                <PillList
                                    values={getProperty(form.getValues(), name)}
                                    displayValue={displayValue}
                                    getKeyOfValue={getKeyOfValue}
                                    onRemove={onRemove}
                                />
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent
                            className="p-0"
                            onFocus={() => setInFocus(true)}
                            onCloseAutoFocus={() => setInFocus(false)}
                        >
                            <Command>
                                <CommandInput />
                                <CommandList>
                                    <CommandEmpty>Entrée invalide.</CommandEmpty>
                                    <CommandGroup>
                                        {values.map((value) => (
                                            <CommandItem
                                                key={getKeyOfValue(value)}
                                                value={getKeyOfValue(value)}
                                                onSelect={(newKey) => {
                                                    const newValue = values.find(
                                                        (v) => getKeyOfValue(v) === newKey
                                                    )!;

                                                    const included = selected.includes(newValue);

                                                    if (onChange) {
                                                        onChange(newValue, !included);
                                                    }

                                                    const newSelected = included
                                                        ? selected.filter((v) => v !== newValue)
                                                        : [...selected, newValue];

                                                    setSelected(newSelected);
                                                    setInputContainerRef(newSelected);
                                                    form.setValue(
                                                        name,
                                                        newSelected as PathValue<T, Path<T>>
                                                    );
                                                    // console.log(
                                                    //     name,
                                                    //     newValue,
                                                    //     newSelected,
                                                    //     form.getValues()
                                                    // );
                                                }}
                                            >
                                                <Checkbox
                                                    className={cn(
                                                        'mr-2 h-4 w-4',
                                                        selected.includes(value)
                                                            ? 'opacity-100'
                                                            : 'opacity-0'
                                                    )}
                                                    checked={selected.includes(value)}
                                                    primary
                                                />
                                                {displayValue(value)}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                )}
            />
        </>
    );
}

interface PillListProps<V> {
    values: V[];
    displayValue: (value: V) => React.ReactNode;
    getKeyOfValue: (value: V) => string;
    onRemove: (value: V) => void;
}
function PillList<V>({ values, displayValue, getKeyOfValue, onRemove }: PillListProps<V>) {
    return (
        <div className="flex flex-wrap items-center gap-1 h-full">
            {values &&
                values.map((value) => (
                    <Pill
                        key={getKeyOfValue(value)}
                        value={displayValue(value)}
                        onRemove={(e) => {
                            e.preventDefault();
                            onRemove(value);
                        }}
                    />
                ))}
        </div>
    );
}

function Pill({ value, onRemove }: { value: React.ReactNode; onRemove: (e: MouseEvent) => void }) {
    return (
        <div className="flex justify-between items-center bg-background rounded-full border h-7">
            <span className="mx-2 py-1">{value}</span>
            <FaX
                className="prevent-hover h-7 w-7 py-1.5 pl-1 pr-2 rounded-r-full cursor-pointer text-input border-l border-t border-b hover:text-foreground"
                onClick={onRemove}
            />
        </div>
    );
}
