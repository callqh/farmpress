import path from 'node:path';
import { cwd } from 'node:process';
import fs from 'fs-extra';
import { globby } from 'globby';

export const generateRouter = async (root: string) => {
  const extens = ['md', 'mdx'];
  const pattern = `**/*.+(${extens.join('|')})`;

  // 获取所有符合条件的文件
  const files = await globby(pattern, {
    cwd: root,
    absolute: true,
    ignore: ['**/node_modules/**', '**/dist/**'],
  });

  // 生成路由信息
  const routerInfo = files?.map((item) => {
    const routerPath = path.relative(root, item);

    return {
      path: routerPath,
      absolutePath: item,
    };
  });

  console.log('Router Info:', routerInfo);

  // 生成路由文件内容
  const routers = `
    import { lazyWithPreload } from "react-lazy-with-preload";
    export const routers = [${routerInfo
      .map(
        (router) =>
          `{ path: '${router.path}', element: lazyWithPreload(() => import('${router.absolutePath}'))}`,
      )
      .join(',')}];
  `;

  // 确保目标目录存在
  const targetDir = path.resolve(cwd(), 'node_modules/.farmpress');
  await fs.ensureDir(targetDir);

  // 写入文件
  const filePath = path.resolve(targetDir, 'routers');
  await fs.writeFile(filePath, routers);

  console.log('Router file generated:', filePath);
  console.log(routers);

  return { routerInfo, routers };
};
