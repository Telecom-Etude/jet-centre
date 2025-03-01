'use client';

// https://mdxeditor.dev/editor/docs/getting-started

import { MDXEditorMethods, MDXEditorProps } from '@mdxeditor/editor';
import dynamic from 'next/dynamic';
import { forwardRef } from 'react';

// This is the only place InitializedMDXEditor is imported directly.
const Editor = dynamic(() => import('./InitializedMDXEditor'), {
    // Make sure we turn SSR off
    ssr: false
});

export type MDXEditorPropsAndToolbar = MDXEditorProps & { displayToolbar?: boolean };

// This is what is imported by other components. Pre-initialized with plugins, and ready
// to accept other props, including a ref.
const MDXEditor = forwardRef<MDXEditorMethods, MDXEditorPropsAndToolbar>((props, ref) => (
    <Editor {...props} editorRef={ref} />
));
MDXEditor.displayName = 'ForwardRefEditor';

export default MDXEditor;
