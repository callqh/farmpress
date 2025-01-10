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
export declare function serve(options: ServeOptions): Promise<void>;
export {};
