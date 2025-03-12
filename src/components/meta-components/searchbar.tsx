'use client';

import {
    Command,
    CommandEmpty,
    CommandGroup,
    HiddenCommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { ChangeEvent, useId, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export interface SearchBarProps<T> {
    className?: string;
    label: string;
    placeholder?: string;
    items?: T[];
    displayValue?: (item: T) => string;
    onSelect?: (item: T) => void;
}

export function SearchBar<T>({
    className,
    label,
    placeholder,
    items,
    displayValue = (item) => (item as any).toString(),
    onSelect: onSelect_,
}: SearchBarProps<T>) {
    const id = useId();

    const [value, setValue] = useState('');

    const [search, setSearch] = useState('');
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    const [inFocus, setInFocus] = useState(false);

    return (
        <div
            className="relative"
            onFocus={() => setInFocus(true)}
            onBlur={(e) => {
                // see: https://stackoverflow.com/questions/71529999/how-to-prevent-child-with-position-absolute-from-triggering-onblur-event-of#answer-71530515
                const currentTarget = e.currentTarget;

                // Give browser time to focus the next element
                requestAnimationFrame(() => {
                    // Check if the new focused element is a child of the original container
                    if (!currentTarget.contains(document.activeElement)) {
                        setInFocus(false);
                    }
                });
            }}
        >
            <div className={cn('group relative flex flex-row', className)}>
                <Label
                    className={cn(
                        'absolute left-2 top-4 bg-box-background w-fit px-1 text-lg line-h leading-4 rounded-md whitespace-nowrap pointer-events-none transition-all overflow-ellipsis overflow-hidden z-10',
                        (search ?? '').toString() !== '' && 'left-2 -top-2',
                        'group-focus-within:left-2 group-focus-within:-top-2 group-focus-within:max-w-none'
                    )}
                    htmlFor={id}
                >
                    {label}
                </Label>
                <Input
                    className="pl-4 pr-10 h-8 rounded-t-md rounded-b-md px-md group-focus-within:rounded-b-[0pt]"
                    placeholder={placeholder}
                    aria-expanded={inFocus}
                    // role="search"
                    id={id}
                    value={search}
                    onChange={handleInputChange}
                />
                <div className="flex flex-col justify-center absolute h-full right-4">
                    <FaMagnifyingGlass className="w-4 h-4 opacity-50" />
                </div>
            </div>

            <div
                onFocus={() => setInFocus(true)}
                className={cn('absolute w-[calc(100%+4px)] -left-[2px] z-50', !inFocus && 'hidden')}
            >
                <Command value={value} onValueChange={setValue} className="rounded-b-md">
                    <CommandList>
                        <HiddenCommandInput value={search} onValueChange={setSearch} />
                        <CommandGroup>
                            {items?.map((item, index) => (
                                <CommandItem
                                    key={index}
                                    onSelect={() => {
                                        setInFocus(false);
                                        setSearch('');
                                        if (onSelect_) {
                                            onSelect_(item);
                                        }
                                    }}
                                    value={displayValue(item)}
                                >
                                    {displayValue(item)}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                        <CommandEmpty onClick={() => setInFocus(false)}>
                            Aucun résultat.
                        </CommandEmpty>
                    </CommandList>
                </Command>
            </div>
        </div>
    );
}
