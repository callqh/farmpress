import { dev } from '@farmpress/core';
import cac from 'cac';
import { loadUserConfig } from './loadConfig';

const cli = cac('farmpress');

cli.command('start', 'Start dev server').action(async () => {
  const config = await loadUserConfig();
  dev(config);
  console.log('sss');
});

cli.parse();
