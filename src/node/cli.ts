import { cac } from "cac";
import { dev } from './index.js'
import { _build } from "./build.js";
import { serve } from "./server.js";

const cli = cac('farmpress');

cli
  .command('dev', 'start server')
  .action((dir, options) => {
    console.log(options)
    console.log('remove ' + dir)
    dev()
  })

cli.command('build', 'build ssg')
  .action(() => {
    _build()
  })

cli.command('preview', 'previw ssg')
  .action(() => {
    serve({})
  })

cli.help()

cli.parse()
