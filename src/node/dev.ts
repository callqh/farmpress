import { start, logger, build } from "@farmfe/core";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { cwd } from "process";
import { farmfePluginMdx } from "../mdx/plugin.js";
// 模拟 __filename
const __filename = fileURLToPath(import.meta.url);
// 模拟 __dirname
const __dirname = dirname(__filename);


export const dev = async () => {
  // 开发环境下当做spa应用去启动
  // isSSR 始终为false
  try {
    await start({
      compilation: {
        input: {
          index: path.resolve(cwd(), "./index.html")
        },
      },
      server: {
        port: 6532,
      },
      plugins: [
        '@farmfe/plugin-react',
        farmfePluginMdx()
      ],
      publicDir: path.resolve(__dirname, "./public"),
    });
  } catch (error) {
    logger.error(`Failed to start server:\n ${error}`);
  }
}


export const _build = async () => {
  try {
    await build({
      compilation: {
      }
    });
  } catch (error) {
    logger.error(`error during build:\n ${error.stack}`);
    process.exit(1);
  }
}
