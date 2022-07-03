import { ResolveAliasType } from '../../config';
import { ResolveOptions } from 'vite';
import { CreateResolveAlias } from './alias';
interface AIM_ResolveOptions extends ResolveOptions {
  alias?: ResolveAliasType;
}

export const CreateViteResolve = (): AIM_ResolveOptions => {
  const config: AIM_ResolveOptions = {
    alias: CreateResolveAlias(),
  };
  return config;
};
