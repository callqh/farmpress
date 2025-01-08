import { start, logger } from "@farmfe/core";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { cwd } from "process";

// 模拟 __filename
const __filename = fileURLToPath(import.meta.url);

// 模拟 __dirname
const __dirname = dirname(__filename);


export const dev = async () => {
  try {
    await start({
      compilation: {
        output: {
        },
        input: {
          index: path.resolve(cwd(), "./index.html")
        }
      },
      server: {
        port: 6532,
      },
      plugins: [
        // '@farmfe/plugin-react',
      ],
      publicDir: path.resolve(__dirname, "./public"),
    });
  } catch (error) {
    logger.error(`Failed to start server:\n ${error}`);
    process.exit(1);
  }

}
