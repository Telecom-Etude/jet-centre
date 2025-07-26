import { FlatCompat } from '@eslint/eslintrc';
import { globalIgnores } from 'eslint/config';

const compat: FlatCompat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

const eslintConfig = [
    {
        ignores: ['.next/**', 'node_modules/**'],
    },
    globalIgnores(['tailwind.config.ts']),
    {
        files: ['**/*.{ts,tsx}'],

        rules: {
            'no-restricted-imports': [
                'error',
                {
                    paths: [
                        {
                            name: 'radix-ui',
                            message:
                                'Please import components from @/src/components/ui instead of radix-ui.',
                        },
                    ],
                    patterns: ['@radix-ui/*'],
                },
            ],
            'import/order': [
                'error',
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
    {
        files: ['src/components/ui/**/*.{ts,tsx}'],
        rules: {
            'no-restricted-imports': 'off',
        },
    },
    ...compat.config({
        extends: [
            'plugin:react/recommended',
            'plugin:react-hooks/recommended',
            'next/core-web-vitals',
            'next/typescript',
        ],
        rules: {
            'react/display-name': 'error',
            'react/no-unescaped-entities': 'error',
            'import/no-anonymous-default-export': 'error',
            '@next/next/no-page-custom-font': 'error',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/ban-ts-comment': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            'react-hooks/exhaustive-deps': 'error',
            'prefer-const': 'error',
        },
    }),
];

export default eslintConfig;
