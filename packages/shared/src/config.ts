import path from 'node:path';
import { cwd } from 'node:process';

export type UserConfig = {
  /**
   * 网站标题
   */
  title?: string;
  /**
   * 文档根目录
   * @default path.resolve(cwd(), 'docs')
   */
  root?: string;
  /**
   * 开发服务器启动端口
   * @default 1234
   */
  port?: number;
};

export const defaultConfig: UserConfig = {
  title: 'farmpress',
  root: path.resolve(cwd(), 'docs'),
  port: 1234,
};

export const defineConfig = (config: UserConfig): UserConfig => config;
