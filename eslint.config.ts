import { FlatCompat } from '@eslint/eslintrc';
import { globalIgnores } from 'eslint/config';

const compat: FlatCompat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

const eslintConfig = [
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
        extends: ['next/core-web-vitals', 'next/typescript'],
        rules: {
            'react/display-name': 'off',
            'react/no-unescaped-entities': 'off',
            'import/no-anonymous-default-export': 'error',
            '@next/next/no-page-custom-font': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/ban-ts-comment': 'off',
            'prefer-const': 'error',
        },
    }),
];

export default eslintConfig;
