import { BuildOptions } from 'vite';
import {
  BUILD_TARGET,
  BUILD_MINIFY,
  BUILD_SOURCEMAP,
  BUILD_BROTLISIZE,
  BUILD_DEV_OUTPUT,
  BUILD_PROD_OUTPUT,
  BUILD_CHUNKSIZEWARNINGLIMIT,
} from '../../constant';
import { CreateViteTerserOptions } from './terser';
import { CreateViteRollupOptions } from './rollup';

export const CreateViteBuild = (isBuild: boolean): BuildOptions => {
  const viteBuild: BuildOptions = {
    target: BUILD_TARGET,
    sourcemap: BUILD_SOURCEMAP,
    minify: BUILD_MINIFY,
    outDir: isBuild ? BUILD_PROD_OUTPUT : BUILD_DEV_OUTPUT,
    terserOptions: CreateViteTerserOptions(),
    rollupOptions: CreateViteRollupOptions(),
    brotliSize: BUILD_BROTLISIZE,
    chunkSizeWarningLimit: BUILD_CHUNKSIZEWARNINGLIMIT,
  };
  return viteBuild;
};
