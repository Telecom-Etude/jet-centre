import type { UserConfig } from '@commitlint/types';

const config: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-max-line-length': [0],
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'chore', 'docs', 'style', 'ref', 'perf', 'test'],
        ],
    },
};

export default config;
