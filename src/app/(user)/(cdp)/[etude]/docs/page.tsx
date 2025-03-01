'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { loader } from '@monaco-editor/react';

// Dynamically import MonacoEditor without SSR
const MonacoEditor = dynamic(() => import('@monaco-editor/react').then((mod) => mod.default), {
    ssr: false,
});

const Editor = () => {
    useEffect(() => {
        // Ensure this code runs only on the client side
        if (typeof window !== 'undefined') {
            loader.init().then((monaco) => {
                // Register LaTeX as a new language
                monaco.languages.register({ id: 'latex' });

                // Define LaTeX language configuration
                monaco.languages.setMonarchTokensProvider('latex', {
                    tokenizer: {
                        root: [
                            [/%.*$/, 'comment'],
                            [/\\[a-zA-Z]+/, 'keyword'],
                            [/\$[^$]*\$/, 'string'],
                            [/\$\$[^$]*\$\$/, 'string'],
                            [/\{[^}]*\}/, 'delimiter.curly'],
                        ],
                    },
                });

                monaco.languages.setLanguageConfiguration('latex', {
                    comments: {
                        lineComment: '%',
                    },
                    brackets: [['{', '}']],
                });
            });
        }
    }, []);

    return (
        <div className="w-full h-full">
            <MonacoEditor
                height="100%"
                width="100%"
                language="latex"
                defaultValue="% some comment"
                theme="vs-dark"
            />
        </div>
    );
};

export default Editor;
