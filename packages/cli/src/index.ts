import { cac } from "cac";
import { dev, build, server } from '@farmpress/core'

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
    build()
  })

cli.command('preview', 'previw ssg')
  .action(() => {
    server({})
  })

cli.help()

cli.parse()
