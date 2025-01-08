import { cac } from "cac";
import { dev } from './index.js';
const cli = cac('farmpress');
cli
    .command('dev', 'start server')
    .action((dir, options) => {
    console.log(options);
    console.log('remove ' + dir);
    dev();
});
cli.help();
cli.parse();
//# sourceMappingURL=cli.js.map