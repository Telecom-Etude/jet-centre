import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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

type ComboboxProps = {
    emptyMessage: string;
    placeholder: string;
    title: string;
    items: readonly string[];
};

type ManyComboBoxProps = {
    selectedKeys: string[];
    addRemoveKey: (v: string) => void;
} & ComboboxProps;

type SingleComboboxProps = {
    currentKey: string | null;
    selectKey: (key: string) => void;
} & ComboboxProps;

export const ManyComboBox = ({
    selectedKeys,
    addRemoveKey,
    items,
    title,
    emptyMessage,
    placeholder,
}: ManyComboBoxProps) => {
    const [open, setOpen] = useState(false);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    className="w-full justify-between"
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                >
                    {title}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="  p-0">
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandList>
                        <CommandEmpty>{emptyMessage}</CommandEmpty>
                        <CommandGroup>
                            {items.map((item, i) => (
                                <CommandItem
                                    key={i}
                                    value={item}
                                    onSelect={(val) => addRemoveKey(val)}
                                    className={
                                        selectedKeys.length == 4 && !selectedKeys.includes(item)
                                            ? 'cursor-not-allowed'
                                            : 'cursor-pointer'
                                    }
                                >
                                    <Checkbox
                                        className={cn(
                                            'mr-2 h-4 w-4',
                                            selectedKeys.includes(item)
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        )}
                                        checked={selectedKeys.includes(item)}
                                    />
                                    {item}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export const SingleCombobox = ({
    items,
    emptyMessage,
    currentKey,
    title,
    selectKey,
    placeholder,
}: SingleComboboxProps) => {
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
                    {currentKey && items.includes(currentKey) ? currentKey : title}
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
                                    value={item}
                                    onSelect={(newKey) => {
                                        if (!currentKey || currentKey !== newKey) {
                                            selectKey(newKey);
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
                                    {item}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};
