import AutoImport from 'unplugin-auto-import/vite';

export const AutoImportPlugins = () =>
  AutoImport({
    imports: ['vue', 'vue-router'],
    dts: 'src/auto-import.d.ts',
  });
