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
                </BoxHeaderBlock>
            </BoxHeader>
            <BoxContent>Contenu de la boite</BoxContent>
        </Box>
    );
}
```

#### Example

![box-component](/docs/images/box-component.png)

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
