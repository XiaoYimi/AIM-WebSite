import type { Plugin } from 'vite';
import ViteCompression from 'vite-plugin-compression';

import {
  COMPRESSION,
  COMPRESSION_EXT,
  COMPRESSION_VERBOSE,
  COMPRESSION_DISABLE,
  COMPRESSION_THRESHOLD,
  COMPRESSION_ALGORITHM,
} from '../../constant';

export function BuildingUseCompression(): Plugin | Plugin[] {
  return COMPRESSION
    ? ViteCompression({
        ext: COMPRESSION_EXT,
        verbose: COMPRESSION_VERBOSE,
        disable: COMPRESSION_DISABLE,
        threshold: COMPRESSION_THRESHOLD,
        algorithm: COMPRESSION_ALGORITHM,
      })
    : [];
}
