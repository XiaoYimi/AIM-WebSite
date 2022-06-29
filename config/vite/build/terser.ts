import { Terser } from 'vite';
import {
  BUILD_TERSER_COMPRESS_DROP_CONSOLE,
  BUILD_TERSER_COMPRESS_DROP_DEBUGGER,
  BUILD_TERSER_COMPRESS_KEEP_INFINITY,
} from '../../constant';

export const CreateViteTerserOptions = (): Terser.MinifyOptions => {
  const viteTerser: Terser.MinifyOptions = {
    compress: {
      keep_infinity: BUILD_TERSER_COMPRESS_KEEP_INFINITY,
      drop_console: BUILD_TERSER_COMPRESS_DROP_CONSOLE,
      drop_debugger: BUILD_TERSER_COMPRESS_DROP_DEBUGGER,
    },
  };
  return viteTerser;
};
