import sirv from 'sirv';
import compression from 'compression';
import polka from 'polka';
import path from 'path';
import { cwd } from 'process';

export interface CLIServeOption {
  base?: string;
  rootDir?: string;
  port?: number;
  host?: string;
}

interface ServeOptions {
  port?: number;
  host?: string;
}

// Serve ssg site in production
export async function server(options: ServeOptions) {
  const { port: userPort, host: userHost } = options;
  const envPort = process.env.PORT;
  const envHost = process.env.HOST;
  const port = envPort || userPort || 4173;
  const host = envHost || userHost || 'localhost';
  const base = '/'?.replace(/^\//, '').replace(/\/$/, '') || '';
  const compress = compression();
  const serve = sirv(path.resolve(cwd(), 'docs_build'), {
    etag: true,
    maxAge: 31536000,
    immutable: true,
  });
  if (base) {
    polka()
      .use(base, compress, serve)
      .listen(port, host, (err: Error) => {
        if (err) {
          throw err;
        }
        console.log(
          `Preview server running at http://${host}:${port}/${base}/\n`,
        );
      });
  } else {
    polka()
      .use(compress, serve)
      .listen(port, host, (err: Error) => {
        if (err) {
          throw err;
        }
        console.log(`Preview server running at http://${host}:${port}/\n`);
      });
  }
}
