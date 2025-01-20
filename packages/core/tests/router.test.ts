import path from 'node:path';
import { describe, test } from 'vitest';
import { generateRouter } from '../src/node/router';

describe('router', () => {
  const root = path.resolve(__dirname, 'fixtures/docs');
  test('generate router files', async () => {
    const files = generateRouter(root);
  });
});
