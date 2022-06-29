import type { RollupOptions, OutputOptions } from 'rollup';
import { CreateRollupManualChunks } from './optimizer';

export const CreateViteRollupOptions = (): RollupOptions => {
  const viteRollupOptions: RollupOptions = {
    output: {
      manualChunks: CreateRollupManualChunks,
    } as OutputOptions,
  };
  return viteRollupOptions;
};
