import { defineConfig } from '@farmfe/core';

export default defineConfig({
  compilation: {
    input: {
      index: 'src/index.ts',
      // runtime: './src/runtime.ts',
    },
    output: {
      // targetEnv: 'node',
    },
  },
  // plugins: ['@farmfe/plugin-react'],
});
