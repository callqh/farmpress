"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = serve;
const sirv_1 = __importDefault(require("sirv"));
const compression_1 = __importDefault(require("compression"));
const polka_1 = __importDefault(require("polka"));
const path_1 = __importDefault(require("path"));
const process_1 = require("process");
// Serve ssg site in production
async function serve(options) {
    const { port: userPort, host: userHost } = options;
    const envPort = process.env.PORT;
    const envHost = process.env.HOST;
    const port = envPort || userPort || 4173;
    const host = envHost || userHost || 'localhost';
    const base = '/'?.replace(/^\//, '').replace(/\/$/, '') || '';
    const compress = (0, compression_1.default)();
    const serve = (0, sirv_1.default)(path_1.default.resolve((0, process_1.cwd)(), 'docs_build'), {
        etag: true,
        maxAge: 31536000,
        immutable: true,
    });
    if (base) {
        (0, polka_1.default)()
            .use(base, compress, serve)
            .listen(port, host, (err) => {
            if (err) {
                throw err;
            }
            console.log(`Preview server running at http://${host}:${port}/${base}/\n`);
        });
    }
    else {
        (0, polka_1.default)()
            .use(compress, serve)
            .listen(port, host, (err) => {
            if (err) {
                throw err;
            }
            console.log(`Preview server running at http://${host}:${port}/\n`);
        });
    }
}
//# sourceMappingURL=server.js.map