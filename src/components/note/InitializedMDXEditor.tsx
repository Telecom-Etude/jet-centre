'use client';

import type { ForwardedRef } from 'react';
import {
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    markdownShortcutPlugin,
    linkPlugin,
    linkDialogPlugin,
    MDXEditor,
    toolbarPlugin,
    Separator,
    UndoRedo,
    BoldItalicUnderlineToggles,
    ListsToggle,
    BlockTypeSelect,
    CreateLink,
    InsertThematicBreak,
    type MDXEditorMethods
} from '@mdxeditor/editor';

import '@mdxeditor/editor/style.css';
import './style.css';
import { MDXEditorPropsAndToolbar } from './mdxEditor';

// Only import this to the next file
export default function InitializedMDXEditor({
    editorRef,
    ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorPropsAndToolbar) {
    return (
        <MDXEditor
            className="je-theme"
            plugins={[
                ((props.displayToolbar ?? true) &&
                    toolbarPlugin({
                        toolbarContents: () => (
                            <>
                                <UndoRedo />
                                <Separator />
                                <BoldItalicUnderlineToggles />
                                <Separator />
                                <ListsToggle />
                                <Separator />
                                <BlockTypeSelect />
                                <Separator />
                                <CreateLink />
                                <Separator />
                                <InsertThematicBreak />
                            </>
                        )
                    })) as any, // Bricolage par ce que j'ai la flemme de faire un push dans un array
                headingsPlugin(),
                quotePlugin(),
                listsPlugin(),
                thematicBreakPlugin(),
                markdownShortcutPlugin(),
                linkPlugin(),
                linkDialogPlugin()
            ]}
            {...props}
            ref={editorRef}
        />
    );
}
