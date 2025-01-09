import { type JsPlugin } from '@farmfe/core';
import { compile } from "@rspress/mdx-rs";
import fs from 'fs';

export function farmfePluginMdx(): JsPlugin {
  return {
    name: "farmfe-plugin-mdx",
    load: {
      filters: {
        resolvedPaths: ['\\.md$'],
      },
      executor: async ({ resolvedPath }) => {
        const result = await compile({
          // The mdx content
          value: fs.readFileSync(resolvedPath, 'utf-8'),
          filepath: resolvedPath,
          development: true,
          root: "",
        });
        console.log(resolvedPath, result);
        return {
          moduleType: 'jsx',
          content: result.code
        }
      }
    },
  };
}
