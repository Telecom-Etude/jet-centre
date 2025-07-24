import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

type Stringifiable = { toString(): string };

type ComboboxProps<T> = {
    /**
     * Message displayed when items is empty or no entry matches the search
     */
    emptyMessage: string;
    /**
     * Placeholder in the search input
     */
    placeholder: string;
    /**
     * Text of the collapsed combobox
     */
    title: string;
    /**
     * List of items to appear in the combobox's dropdown
     */
    items: readonly T[];
    /**
     * Way to display the items, if not numbers of strings
     */
    toString?: (item: T) => string;
};

type SingleComboboxProps<T> = {
    currentKey: T | null;
    selectKey: (key: T) => void;
} & ComboboxProps<T>;

export function SingleCombobox<T extends Stringifiable>({
    items,
    emptyMessage,
    currentKey,
    title,
    selectKey,
    placeholder,
    toString = (item: T) => item.toString(),
}: SingleComboboxProps<T>) {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {currentKey && items.includes(currentKey) ? toString(currentKey) : title}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandList>
                        <CommandEmpty>{emptyMessage}</CommandEmpty>
                        <CommandGroup>
                            {items.map((item, i) => (
                                <CommandItem
                                    key={i}
                                    value={toString(item)}
                                    onSelect={(newKey) => {
                                        if (!currentKey || toString(currentKey) !== newKey) {
                                            selectKey(item);
                                        }
                                        setOpen(false);
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            'mr-2 h-4 w-4',
                                            currentKey === item ? 'opacity-100' : 'opacity-0'
                                        )}
                                    />
                                    {toString(item)}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
