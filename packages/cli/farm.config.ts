import { defineConfig } from '@farmfe/core';

export default defineConfig({
  root: process.cwd(),
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
