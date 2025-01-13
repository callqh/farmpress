import fs from 'node:fs';
import type { JsPlugin } from '@farmfe/core';

export function farmfePluginMdx({ isSSR }: { isSSR: boolean }): JsPlugin {
  const { compile } = require('@rspress/mdx-rs');
  return {
    name: 'farmfe-plugin-mdx',
    load: {
      filters: {
        resolvedPaths: ['.md$'],
      },
      executor: async ({ resolvedPath }) => {
        const result = await compile({
          // The mdx content
          value: fs.readFileSync(resolvedPath, 'utf-8'),
          filepath: resolvedPath,
          development: true,
          root: '',
        });
        // console.log(resolvedPath, result);
        return {
          moduleType: 'jsx',
          content: result.code,
        };
      },
    },
  };
}
