import { KnipConfig } from 'knip';

const config: KnipConfig = {
    ignore: [
        'src/lib/dev-utils.ts',
        'src/components/ui/**',
        'src/components/meta-components/multiple-selector.tsx',
        '.github/**',
    ],
    ignoreDependencies: ['eslint-config-next', 'eslint-plugin-import', 'prisma-docs-generator'],
};

export default config;
