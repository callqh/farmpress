import path from 'node:path';
import { cwd } from 'node:process';

export const INDEX_HTML = path.resolve(CORE_ROOT, 'index.html');
export const PUBLIC_DIR = path.resolve(cwd(), 'public');

export const CLIENT_ENTRY = path.resolve(
  CORE_ROOT,
  'src',
  'runtime',
  'clientEntry.tsx',
);
export const SSR_ENTRY = path.resolve(
  CORE_ROOT,
  'src',
  'runtime',
  'ssrEntry.tsx',
);
