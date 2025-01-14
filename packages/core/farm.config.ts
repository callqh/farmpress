import path from 'node:path';
import { defineConfig } from '@farmfe/core';
import farmJsPluginDts from '@farmfe/js-plugin-dts';

export default defineConfig({
  server: {
    port: 1235,
  },
  compilation: {
    input: {
      index: './src/index.ts',
    },
    output: {
      targetEnv: 'node',
    },
    sourcemap: false,
    presetEnv: false,
    persistentCache: false,
    external: ['@farmfe/core', '@rspress/mdx-rs'],
    define: {
      CORE_ROOT: JSON.stringify(path.resolve(__dirname)),
    },
  },
  plugins: [farmJsPluginDts({ include: ['src/**/*'] })],
});
