import path from 'node:path';
import { describe } from 'node:test';
import { defaultConfig } from '@farmpress/core';
import { expect, test } from 'vitest';
import { loadUserConfig } from '../src/loadConfig';
// @ts-ignore
import { jsConfig } from './fixtures/js/farmpress.config';
import { tsConfig } from './fixtures/ts/farmpress.config';

const __fixtures = path.resolve(__dirname, 'fixtures');
describe('load user config', () => {
  test('config file is empty', async () => {
    const config = await loadUserConfig();

    expect(config).toEqual(defaultConfig);
  });

  test('load ts config file,', async () => {
    const config = await loadUserConfig(path.resolve(__fixtures, 'ts'));
    expect(config).toEqual(tsConfig);
  });

  test('load js config file', async () => {
    const config = await loadUserConfig(path.resolve(__fixtures, 'js'));
    const resultConfig = {
      ...defaultConfig,
      ...jsConfig,
    };
    expect(config).toEqual(resultConfig);
  });
});
