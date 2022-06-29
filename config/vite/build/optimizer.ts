import { ManualChunksOption } from 'rollup';
type VendorLibs = {
  match: string[];
  output: string;
};
type CreateRollupManualChunksFunc = ManualChunksOption | string | null | void;

const optimizerLibs: VendorLibs[] = [
  { match: ['element-plus'], output: 'element-plus' },
  { match: ['echarts'], output: 'echarts' },
];

/** TS Ignore */
export const CreateRollupManualChunks = (
  id: string
): CreateRollupManualChunksFunc => {
  if (/[\\/]node_modules[\\/]/.test(id)) {
    const matchItem = optimizerLibs.find(item => {
      const reg = new RegExp(
        `[\\/]node_modules[\\/]_?(${item.match.join('|')})(.*)`,
        'ig'
      );
      return reg.test(id);
    });
    return matchItem ? matchItem.output : null;
  }
};
