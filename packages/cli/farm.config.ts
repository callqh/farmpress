import { defineConfig } from '@farmfe/core';

export default defineConfig({
  server: {
    port: 1234,
  },
  compilation: {
    persistentCache: false,
    input: {
      index: 'src/index.ts',
    },
    output: {
      targetEnv: 'node',
    },
    sourcemap: false,
    presetEnv: false,
    external: ['@farmfe/core', '@rspress/mdx-rs'],
  },
});
