import type { UserConfig } from '@commitlint/types';

const config: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'perf', 'test'],
        ],
    },
};

export default config;
