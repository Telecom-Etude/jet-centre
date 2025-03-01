'use client';

import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut
} from '@/components/ui/command';
import React from 'react';

// export function Search() {
//     return (
//         <Command
//             className="absolute top-0 rounded-lg border shadow-md md:min-w-[450px]"
//             shouldFilter={false}
//         >
//             <CommandInput placeholder="Type a command or search..." />
//             <CommandList className="">
//                 <CommandEmpty>No results found.</CommandEmpty>
//                 <CommandGroup heading="Suggestions">
//                     <CommandItem>
//                         <Calendar />
//                         <span>Calendar</span>
//                     </CommandItem>
//                     <CommandItem>
//                         <Smile />
//                         <span>Search Emoji</span>
//                     </CommandItem>
//                     <CommandItem disabled>
//                         <Calculator />
//                         <span>Calculator</span>
//                     </CommandItem>
//                 </CommandGroup>
//                 <CommandSeparator />
//                 <CommandGroup heading="Settings">
//                     <CommandItem>
//                         <User />
//                         <span>Profile</span>
//                         <CommandShortcut>⌘P</CommandShortcut>
//                     </CommandItem>
//                     <CommandItem>
//                         <CreditCard />
//                         <span>Billing</span>
//                         <CommandShortcut>⌘B</CommandShortcut>
//                     </CommandItem>
//                     <CommandItem>
//                         <Settings />
//                         <span>Settings</span>
//                         <CommandShortcut>⌘S</CommandShortcut>
//                     </CommandItem>
//                 </CommandGroup>
//             </CommandList>
//         </Command>
//     );
// }

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
    console.log('filteredCommands', filteredCommands);
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
