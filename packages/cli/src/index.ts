import { build, dev, server } from '@farmpress/core';
import { cac } from 'cac';

const cli = cac('farmpress');

cli.command('dev', 'start server').action((dir, options) => {
  dev();
});

cli.command('build', 'build ssg').action(() => {
  build();
});

cli.command('preview', 'previw ssg').action(() => {
  server({});
});

cli.help();

cli.parse();
