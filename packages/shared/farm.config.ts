import { defineConfig } from '@farmfe/core';
import farmJsPluginDts from '@farmfe/js-plugin-dts';

export default defineConfig({
  server: {
    port: 1236,
  },
  compilation: {
    persistentCache: false,
    input: {
      index: './src/index.ts',
    },
    output: {
      targetEnv: 'node',
      format: 'esm',
    },
    sourcemap: false,
    presetEnv: false,
  },
  plugins: [farmJsPluginDts()],
});
