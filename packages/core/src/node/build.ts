import path from 'node:path';
import { cwd } from 'node:process';
import { build as farmBuild, logger } from '@farmfe/core';
import fs from 'fs-extra';
import { farmfePluginMdx } from '../mdx/plugin';

export const build = async () => {
  console.log('build is starting');
  const routers = await import(
    path.resolve(cwd(), './dist/runtime/index.js')
  ).then((res) => res.routers);
  try {
    // 构建server端代码
    await farmBuild({
      root: cwd(),
      compilation: {
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.md', '.mdx'],
        },
        input: {
          index: path.resolve(__dirname, '../runtime/ssrEntry.js'),
        },
        output: {
          path: path.resolve(cwd(), './docs_build/ssr'),
          targetEnv: 'node',
        },
      },
      plugins: ['@farmfe/plugin-react', farmfePluginMdx({ isSSR: true })],
    });
    // 构建client端代码
    await farmBuild({
      root: cwd(),
      compilation: {
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.md', '.mdx'],
        },
        input: {
          index: path.resolve(cwd(), './index.html'),
        },
        output: {
          path: path.resolve(cwd(), './docs_build/client'),
        },
      },
      plugins: ['@farmfe/plugin-react', farmfePluginMdx({ isSSR: true })],
    });

    const render = await import(
      path.resolve(cwd(), './docs_build/ssr/index.js')
    ).then((res) => res.default);
    const html_template = fs.readFileSync(
      path.resolve(cwd(), './index.html'),
      'utf-8',
    );
    console.log(routers, '===');
    // ssg打包流程 通过router构建html文件
    for (const item of routers) {
      console.log(item);
      const html = await render(item.path); // 确保渲染完成
      console.log(html, '==');
      const htmlContent = html_template.replace(
        '<!--<?- DOC_CONTENT ?>-->',
        html,
      );

      // 确保目录存在
      await fs.ensureDir(path.resolve(cwd(), './docs_build', `./${item.path}`));
      await fs.writeFile(
        path.resolve(cwd(), './docs_build', `./${item.path}`, 'index.html'),
        htmlContent,
      );
    }
  } catch (error) {
    logger.error(`error during build:\n ${error.stack}`);
    process.exit(1);
  }
};
