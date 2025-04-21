'use client';

import { useState } from 'react';

import {
    Box,
    BoxHeader,
    BoxHeaderBlock,
    BoxTitle,
    BoxCollapseButton,
    BoxDragHandle,
    BoxCollapser,
    BoxContent,
} from '@/components/boxes/boxes';
import { DragHandle } from '@/components/meta-components/sortableList';
import MDXEditor from '@/components/note/mdxEditor';

export default function Notes({
    title,
    markdown,
    dragHandleProps,
}: {
    title: string;
    markdown: string;
    dragHandleProps: DragHandle;
}) {
    const [collapse, setCollapse] = useState(true);

    return (
        <Box className="w-full">
            <BoxHeader>
                <BoxTitle>{title}</BoxTitle>
                <BoxHeaderBlock>
                    <BoxCollapseButton
                        collapse={collapse}
                        setCollapse={setCollapse}
                        onClick={() => console.log('98798778456456456')}
                    />
                    <BoxDragHandle {...dragHandleProps} />
                </BoxHeaderBlock>
            </BoxHeader>
            <BoxCollapser collapse={collapse}>
                <BoxContent>
                    <MDXEditor markdown={markdown} displayToolbar={true} />
                </BoxContent>
            </BoxCollapser>
        </Box>
    );
}
