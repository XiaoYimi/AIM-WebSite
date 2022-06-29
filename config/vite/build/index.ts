import { BuildOptions } from 'vite';
import {
  BUILD_TARGET,
  BUILD_MINIFY,
  BUILD_SOURCEMAP,
  BUILD_BROTLISIZE,
  BUILD_CHUNKSIZEWARNINGLIMIT,
} from '../../constant';
import { CreateViteTerserOptions } from './terser';
import { CreateViteRollupOptions } from './rollup';

export const CreateViteBuild = (): BuildOptions => {
  const viteBuild: BuildOptions = {
    target: BUILD_TARGET,
    sourcemap: BUILD_SOURCEMAP,
    minify: BUILD_MINIFY,
    terserOptions: CreateViteTerserOptions(),
    rollupOptions: CreateViteRollupOptions(),
    brotliSize: BUILD_BROTLISIZE,
    chunkSizeWarningLimit: BUILD_CHUNKSIZEWARNINGLIMIT,
  };
  return viteBuild;
};
