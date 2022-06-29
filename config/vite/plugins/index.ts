import type { Plugin } from 'vite';

import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import { AutoImportPlugins } from './autoimport';
import { AutoRegisterComponent } from './component';
import { BuildingUseCompression } from './compress';

export const CreateVitePlugins = (isBuild: boolean): (Plugin | Plugin[])[] => {
  const vitePlugins: (Plugin | Plugin[])[] = [
    Vue(),
    VueJsx(),
    AutoImportPlugins(),
    AutoRegisterComponent(),
  ];
  /** Add plug-in configuration according to the compilation and packaging phase */
  isBuild && vitePlugins.push(BuildingUseCompression());
  return vitePlugins;
};
