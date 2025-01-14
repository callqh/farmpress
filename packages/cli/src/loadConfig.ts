import { defaultConfig } from '@farmpress/core';
import { loadConfig } from 'c12';

export const loadUserConfig = async (root?: string) => {
  const cwd = root || process.cwd();
  const { config } = await loadConfig({
    cwd,
    name: 'farmpress',
    defaultConfig,
  });
  return config;
};
