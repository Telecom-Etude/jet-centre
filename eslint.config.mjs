import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-import';

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

const eslintConfig = [
    {
        plugins: {
            import: importPlugin,
        },
        rules: {
            'import/order': [
                'warn',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    pathGroups: [
                        {
                            pattern: '@/**',
                            group: 'internal',
                            position: 'after',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['builtin'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
        },
    },

    ...compat.config({
        extends: ['next/core-web-vitals', 'next/typescript'],
        rules: {
            'react/display-name': 'off',
            'react/no-unescaped-entities': 'off',
            'import/no-anonymous-default-export': 'error',
            '@next/next/no-page-custom-font': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/ban-ts-comment': 'off',
        },
    }),
];

export default eslintConfig;
