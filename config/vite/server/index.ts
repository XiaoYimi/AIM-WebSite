import { ServerOptions } from 'vite';
import {
  SERVER_HOST,
  SERVER_PORT,
  SERVER_CORS,
  SERVER_OPEN,
  SERVER_HMR_OVERFLAY,
} from '../../constant';
import proxy from './proxy';

export const CreateViteServer = (): ServerOptions => {
  const viteServer: ServerOptions = {
    hmr: { overlay: SERVER_HMR_OVERFLAY },
    host: SERVER_HOST,
    port: SERVER_PORT,
    cors: SERVER_CORS,
    open: SERVER_OPEN,
    proxy,
  };
  return viteServer;
};
