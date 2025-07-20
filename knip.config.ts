import { KnipConfig } from 'knip';

const config: KnipConfig = {
    ignore: [
        'src/lib/utils.ts',
        'src/components/ui/**',
        'src/components/meta-components/multiple-selector.tsx',
    ],
    ignoreDependencies: [
        'eslint-config-next',
        'eslint',
        'eslint-plugin-import',
        'prisma-docs-generator',
    ],
};

export default config;
