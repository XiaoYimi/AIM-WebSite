import { UserConfig, ConfigEnv } from 'vite';
import { CreateVitePlugins } from './config/vite/plugins/index';
import { CreateViteServer } from './config/vite/server/index';
import { CreateViteBuild } from './config/vite/build/index';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  return {
    server: CreateViteServer(),
    plugins: CreateVitePlugins(isBuild),
    build: CreateViteBuild(),
  };
};
