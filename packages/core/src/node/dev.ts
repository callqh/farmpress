import { logger, start } from '@farmfe/core';
import virutalPlugin from '@farmfe/plugin-virtual';
import type { UserConfig } from '@farmpress/shared';
import { farmfePluginMdx } from '../mdx/plugin';
import { INDEX_HTML, PUBLIC_DIR } from './constans';
import { generateRouter } from './router';

export const dev = async (config: UserConfig) => {
  const { port, root } = config;
  const { routers } = await generateRouter(root);
  try {
    await start({
      publicDir: PUBLIC_DIR,
      compilation: {
        input: {
          index: INDEX_HTML,
        },
      },
      server: {
        port,
      },
      plugins: [
        virutalPlugin({
          'virutal-router': routers,
        }),
        '@farmfe/plugin-react',
        farmfePluginMdx({ isSSR: false }),
      ],
    });
  } catch (error) {
    logger.error(`Failed to start server:\n ${error}`);
  }
};
