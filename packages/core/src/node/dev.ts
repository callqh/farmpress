import { logger, start } from '@farmfe/core';
import { farmfePluginMdx } from '../mdx/plugin';
import { INDEX_HTML, PUBLIC_DIR } from './constans';

export const dev = async () => {
  try {
    await start({
      publicDir: PUBLIC_DIR,
      compilation: {
        input: {
          index: INDEX_HTML,
        },
      },
      server: {
        port: 6532,
      },
      plugins: ['@farmfe/plugin-react', farmfePluginMdx({ isSSR: false })],
    });
  } catch (error) {
    logger.error(`Failed to start server:\n ${error}`);
  }
};
