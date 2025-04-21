'use client';

import { SortableList, useSortableList } from '@/components/meta-components/sortableList';

import Note from './note';

const TEST_MD = `
## Headers

# This is a Heading h1
## This is a Heading h2
### This is a Heading h3
#### This is a Heading h4
##### This is a Heading h5
###### This is a Heading h6

## Horizontal Rules

---
***
___

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
    * Item 2a
    * Item 2b
        * Item 2i

### Ordered

1. Item 1
2. Item 2
3. Item 3
    1. Item 3a
    2. Item 3b

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

`;

export default function Notes() {
    const notes = [
        {
            title: 'MRI à valider',
            markdown: TEST_MD,
            id: 'box-0',
        },
        {
            title: 'Prévisualiser le MRI',
            markdown: TEST_MD,
            id: 'box-1',
        },
        {
            title: 'Prévisualiser le MRI',
            markdown: TEST_MD,
            id: 'box-2',
        },
    ];

    const mdList = useSortableList(notes);

    return (
        <SortableList
            {...mdList}
            className="h-full"
            render={(note, dragHandleProps) => <Note {...note} dragHandleProps={dragHandleProps} />}
        />
    );
}
