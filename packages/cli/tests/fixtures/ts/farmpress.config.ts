import { type UserConfig, defineConfig } from '@farmpress/core';

export const tsConfig: UserConfig = {
  root: '.',
  title: 'farmpress.config.ts',
  port: 1111,
};

export default defineConfig(tsConfig);
