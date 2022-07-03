import { UserConfig, ConfigEnv } from 'vite';
import { CreateVitePlugins } from './config/vite/plugins/index';
import { CreateViteServer } from './config/vite/server/index';
import { CreateViteBuild } from './config/vite/build/index';
import { CreateViteResolve } from './config/vite/resolve/index';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  return {
    server: CreateViteServer(),
    plugins: CreateVitePlugins(isBuild),
    build: CreateViteBuild(isBuild),
    resolve: CreateViteResolve(),
  };
};
