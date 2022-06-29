import { ProxyOptions } from 'vite';
import { API_PROXY, API_TARGET, MOCK_PROXY, MOCK_TARGET } from '../../constant';

type ProxyTargetList = Record<string, ProxyOptions>;

const proxyObj: ProxyTargetList = {
  /** dev */
  [API_PROXY]: {
    target: API_TARGET,
    changeOrigin: true,
    rewrite: path => path.replace(new RegExp(`^${API_PROXY}`), ''),
  },
  /** mock */
  [MOCK_PROXY]: {
    target: MOCK_TARGET,
    changeOrigin: true,
    rewrite: path => path.replace(new RegExp(`^${MOCK_PROXY}`), '/api'),
  },
};

export default proxyObj;
