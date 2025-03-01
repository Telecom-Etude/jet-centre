'use client';

import { Command, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import React from 'react';

type CommandProp = {
    value: string;
    label: string;
};

export function Search() {
    const commands: CommandProp[] = [
        { value: 'calendar', label: 'Calendar' },
        { value: 'search-emoji', label: 'Search Emoji' },
        { value: 'calculator', label: 'Calculator' }
    ];
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');

    const handleValueChange = (value: string) => {
        setInputValue(value);
        setOpen(!!value);
    };

    const filteredCommands = Array.isArray(commands)
        ? commands.filter((command) =>
              command.label.toLowerCase().includes(inputValue.toLowerCase())
          )
        : [];

    return (
        <Command className="rounded-lg border shadow-md">
            <CommandInput
                placeholder="Type a command or search..."
                onValueChange={handleValueChange}
            />
            {
                <CommandList>
                    {open &&
                        filteredCommands.length > 0 &&
                        filteredCommands.map((command) => (
                            <CommandItem key={command.value} value={command.value}>
                                {command.label}
                            </CommandItem>
                        ))}
                </CommandList>
            }
        </Command>
    );
}
