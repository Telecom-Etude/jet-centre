# Components

## Shadcn components

See the list [here](https://ui.shadcn.com/docs/components/).

## Local components

### Box

#### Description

To create the boxes of the template.

#### Usage

```jsx
'use client';

import {
    Box,
    BoxButtonPlus,
    BoxButtonReload,
    BoxButtonTemplate,
    BoxButtonTrash,
    BoxContent,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
} from '@/components/boxes/boxes';

export default function Page() {
    return (
        <Box className="w-full">
            <BoxHeader>
                <BoxTitle>Documents de l&apos;étude</BoxTitle>
                <BoxHeaderBlock>
                    <BoxButtonTrash onClick={() => {}} />
                    <BoxButtonReload onClick={() => {}} />
                    <BoxButtonTemplate onClick={() => {}} />
                    <BoxButtonPlus onClick={() => {}} />
                    <BoxButtonEdit onClick={() => {}} />
                </BoxHeaderBlock>
            </BoxHeader>
            <BoxContent>Contenu de la boite</BoxContent>
        </Box>
    );
}
```

Second example with collapsible content:

```jsx
'use client';

import { useState } from 'react';

import {
    Box,
    BoxButtonPlus,
    BoxButtonReload,
    BoxButtonTemplate,
    BoxButtonTrash,
    BoxCollapseButton,
    BoxCollapser,
    BoxContent,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
} from '@/components/boxes/boxes';

export default function Page() {
    const [collapse, setCollapse] = useState(true);

    return (
        <div className="p-2">
            <Box className="w-full">
                <BoxHeader>
                    <BoxTitle>Documents de l&apos;étude</BoxTitle>
                    <BoxHeaderBlock>
                        <BoxButtonTrash onClick={() => {}} />
                        <BoxButtonReload onClick={() => {}} />
                        <BoxButtonTemplate onClick={() => {}} />
                        <BoxButtonPlus onClick={() => {}} />
                        <BoxCollapseButton
                            onClick={() => {}}
                            collapse={collapse}
                            setCollapse={setCollapse}
                        />
                    </BoxHeaderBlock>
                </BoxHeader>
                <BoxContent>
                    <BoxCollapser collapse={collapse}>
                        <BoxContent>
                            <div>Email</div>
                            <div>Expérience</div>
                            <div>Connaissances</div>
                            <div>Idées</div>
                            <div>Expérience JE</div>
                        </BoxContent>
                    </BoxCollapser>
                </BoxContent>
            </Box>
        </div>
    );
}
```

#### Example

![box-component](/docs/images/box-component.png)

With collapsible content:

![box-collapse](/docs/images/box-collapse.png)

### Form elements

#### Description

To create lists that can be reordered

#### Usage

```jsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Level } from '@prisma/client';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { DropdownSingleFormElement } from '@/components/meta-components/form/dropdownSingle';
import { InputFormElement } from '@/components/meta-components/form/input';
import { TextAreaFormElement } from '@/components/meta-components/form/textarea';
import { FormProvider, FormRow, FormRule } from '@/components/ui/form';
import { LEVEL_NAMES, LEVELS } from '@/db/types';

const formSchema = z.object({
    difficulty: z.nativeEnum(Level),
    retributionLevel: z.nativeEnum(Level),
    retributionValue: z.number(),
    skills: z.string().min(10, { message: 'Mettez au moins 10 characters pour ce champ.' }),
});

export default function Page() {
    const form =
        useForm <
        z.infer <
        typeof formSchema >>
            {
                resolver: zodResolver(formSchema),
                defaultValues: {
                    skills: 'Nous recherchons un intervenant ayant des compétences dans le domain...',
                    retributionLevel: Level.Low,
                    difficulty: Level.Low,
                },
            };

    const updateServer = () => {};

    return (
        <FormProvider {...form}>
            <form className="p-8">
                <FormRow>
                    <InputFormElement
                        className="w-1/2"
                        label="Rétribution"
                        name="retributionValue"
                        onBlur={() => updateServer()}
                        type="number"
                        form={form}
                    />
                    <DropdownSingleFormElement
                        className="w-1/2"
                        label="Rétribution"
                        name="retributionLevel"
                        values={LEVEL_NAMES}
                        onChange={() => updateServer()}
                        displayValue={(level) => LEVELS[level].display}
                        form={form}
                    />
                </FormRow>
                <DropdownSingleFormElement
                    label="Difficulté"
                    name="difficulty"
                    values={LEVEL_NAMES}
                    onChange={() => {
                        updateServer();
                    }}
                    displayValue={(level) => LEVELS[level].display}
                    form={form}
                />
                <FormRule />
                <TextAreaFormElement
                    label="Compétences"
                    name="skills"
                    form={form}
                    onBlur={() => updateServer()}
                    resizable
                />
            </form>
        </FormProvider>
    );
}
```

#### Example

![form-component](/docs/images/form-component.png)

### Update Box

### Description

To create boxes that follow the saving status. It puts a button on the top-right-hand-side corner that displays the status (cf. `UpdateBoxStatus`) and enabled the user to click on it to request a new synchronisation if the last failed.

#### Usage

```jsx
'use client';

import { useState } from 'react';

import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';
import { Button } from '@/components/ui/button';

import { getData, updateData } from './action'; // getData and updateData are typically to async server actions that store and load the data from the data base.

export default function Page() {
    const [status, setStatus] = useState(UpdateBoxStatus.Ok);
    const [value, setValue] = useState(0);

    const updateServer = () => {
        setStatus(UpdateBoxStatus.Loading);
        updateData(value).then(() => {
            getData().then((serverData) => {
                if (serverData === value) {
                    setStatus(UpdateBoxStatus.Ok);
                } else {
                    setStatus(UpdateBoxStatus.NotSynced);
                }
            });
        });
    };

    return (
        <div className="p-8">
            <UpdateBox title="Counter" update={updateServer} status={status}>
                <div className="flex items-center gap-4">
                    <p>{value}</p>
                    <Button
                        variant="ghost"
                        onClick={() => {
                            setValue((v) => v + 1);
                            updateServer();
                        }}
                    >
                        Increment
                    </Button>
                </div>
            </UpdateBox>
        </div>
    );
}
```

#### Examples

![update-box-fail](/docs/images/update-box-fail.png)

![update-box-synching](/docs/images/update-box-synching.png)

![update-box-success](/docs/images/update-box-success.png)

### Sortable

#### Description

Sort element by dragging them!

#### Usage

```jsx
'use client';

import {
    Box,
    BoxButtonLabelPlus,
    BoxContent,
    BoxDragHandle,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
    InnerBox,
} from '@/components/boxes/boxes';
import { SortableList, useSortableList } from '@/components/meta-components/sortableList';

const PEOPLE = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charles' },
    { id: 4, name: 'Donald' },
];

export default function Page() {
    const people = useSortableList(PEOPLE);

    return (
        <div className="p-8">
            <Box>
                <BoxHeader>
                    <BoxTitle>Retour des candidatures</BoxTitle>
                </BoxHeader>
                <BoxContent>
                    <SortableList
                        {...people}
                        className="h-full px-2"
                        render={(person, dragHandleProps) => (
                            <InnerBox className="w-full">
                                <BoxHeader>
                                    <BoxTitle>{person.name}</BoxTitle>
                                    <BoxHeaderBlock>
                                        <BoxButtonLabelPlus
                                            onClick={() => {}}
                                            className="flex items-center space-x-2"
                                        />
                                        <BoxDragHandle {...dragHandleProps} />
                                    </BoxHeaderBlock>
                                </BoxHeader>
                            </InnerBox>
                        )}
                    />
                </BoxContent>
            </Box>
        </div>
    );
}
```

#### Example

![sortable](/docs/images/sortable.png)

### Task list

#### Description

Component to check/uncheck elements on a list of tasks.

#### Usage

```jsx
import { Box, BoxContent, BoxHeader, BoxTitle } from '@/components/boxes/boxes';
import { Task, TaskBulletList } from '@/components/meta-components/task-bullet-list';

export default function Page() {
    return (
        <div className="p-8">
            <Box>
                <BoxHeader>
                    <BoxTitle>Checklist du CDP</BoxTitle>
                </BoxHeader>
                <BoxContent>
                    <TaskBulletList initialList={getTasks()} />
                </BoxContent>
            </Box>
        </div>
    );
}

function getTasks(): Task[] {
    return [
        {
            id: '1',
            name: 'Buy groceries',
            date: new Date('2025-01-20'),
            checked: false,
        },
        {
            id: '2',
            name: 'Complete Rust tutorial',
            date: new Date('2025-01-21'),
            checked: true,
        },
        {
            id: '3',
            name: 'Fix bugs in C compiler',
            date: new Date('2025-01-22'),
            checked: false,
        },
        {
            id: '4',
            name: 'Prepare internship application',
            date: new Date('2025-01-23'),
            checked: false,
        },
        {
            id: '5',
            name: 'Read about asynchronous programming',
            date: new Date('2025-01-24'),
            checked: true,
        },
        {
            id: '6',
            name: 'Design database schema for chat service',
            date: new Date('2025-01-25'),
            checked: false,
        },
        {
            id: '7',
            name: 'Optimize CRM-ERP performance',
            date: new Date('2025-01-26'),
            checked: false,
        },
        {
            id: '8',
            name: 'Plan regional congress presentation',
            date: new Date('2025-01-27'),
            checked: true,
        },
        {
            id: '9',
            name: 'Test multithreading in embedded systems',
            date: new Date('2025-01-28'),
            checked: false,
        },
        {
            id: '10',
            name: 'Learn about algebraic curves',
            date: new Date('2025-01-29'),
            checked: false,
        },
    ];
}
```

#### Example

![task-list](/docs/images/task-list.png)

### Search bar

#### Description

Find and select an element from a list of elements.

#### Usage

```jsx
'use client';

import { SearchBar } from '@/components/meta-components/searchbar';

const LANGUAGES = [
    'C',
    'C++',
    'Rust',
    'Zig',
    'Go',
    'Swift',
    'V',
    'Objective-C',
    'D',
    'Odin',
    'Hare',
    'Nim',
    'Crystal',
];

export default function Page() {
    return (
        <div className="p-8">
            <SearchBar
                label="Programming language..."
                placeholder="Rust"
                items={LANGUAGES}
                onSelect={() => {}}
            />
        </div>
    );
}
```

#### Example

![search](/docs/images/search.png)

### Loading

#### Description

Prevent users from submitting multiple times a form a sending too many requests by replacing the button by some loading full stops!

#### Usage

```jsx
'use client';

import { useState } from 'react';

import { LoadingFullStops } from '@/components/loading';
import { Button } from '@/components/ui/button';

export default function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const slowFunction = () => {};

    return (
        <div className="p-8">
            {isLoading ? (
                <LoadingFullStops />
            ) : (
                <Button
                    onClick={() => {
                        a;
                        setIsLoading(true);
                        slowFunction();
                    }}
                >
                    Submit
                </Button>
            )}
        </div>
    );
}
```

#### Example

![loading-full-stops](/docs/images/loading-full-stops.png)
