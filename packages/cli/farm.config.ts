import { defineConfig } from '@farmfe/core';

export default defineConfig({
  root: process.cwd(),
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
  },
});
