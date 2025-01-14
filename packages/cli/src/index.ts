import { dev } from '@farmpress/core';
import cac from 'cac';

const cli = cac('farmpress');

cli.command('start', 'Start dev server').action((options) => {
  dev();
  console.log('sss');
});

cli.parse();
