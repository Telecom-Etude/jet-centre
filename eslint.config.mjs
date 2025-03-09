import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: ['next/core-web-vitals', 'next/typescript'],
        rules: {
            'react/display-name': 'off',
            'react/no-unescaped-entities': 'off',
            'import/no-anonymous-default-export': "error", 
            '@next/next/no-page-custom-font': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/ban-ts-comment': 'off',
        },
    }),
];

export default eslintConfig;
