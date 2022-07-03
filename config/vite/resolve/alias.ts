import { ResolveAliasType } from '../../config';
import { resolve } from 'path';

const GetFolerPath = (dir: string): string => resolve(process.cwd(), '.', dir);

export const CreateResolveAlias = (): ResolveAliasType => {
  const alias: ResolveAliasType = [
    {
      find: /^~/,
      replacement: resolve(__dirname, ''),
    },
    {
      find: /.\/@\//,
      replacement: GetFolerPath('src') + '/',
    },
  ];

  return alias;
};
