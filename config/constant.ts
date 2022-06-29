export const BASE = '/';
/** 服务配置 */
export const SERVER_HOST = '0.0.0.0';
export const SERVER_PORT = 9999;
export const SERVER_CORS = false;
export const SERVER_OPEN = false;
export const SERVER_HMR_OVERFLAY = false;

/** 请求配置 */
export const API_PROXY = '/api';
export const API_TARGET = 'http://localhost:3000';

/** Mock 配置 */
export const MOCK_PROXY = '/api';
export const MOCK_TARGET = 'http://localhost:3000';

/** 打包配置 */
export const BUILD_TARGET = 'es2015';
export const BUILD_MINIFY = 'terser';
export const BUILD_BROTLISIZE = false;
export const BUILD_SOURCEMAP = false;
export const BUILD_CHUNKSIZEWARNINGLIMIT = 2000;
export const BUILD_TERSER_COMPRESS_KEEP_INFINITY = true;
export const BUILD_TERSER_COMPRESS_DROP_CONSOLE = true;
export const BUILD_TERSER_COMPRESS_DROP_DEBUGGER = true;

export const SOURCEMAP = true;
export const OUTDIR = 'dist';
export const MINIFY = 'terser';
export const DROP_CONSOLE = true;
export const DROP_DEBUGGER = true;

/** 压缩配置 */
export const COMPRESSION = true;
export const COMPRESSION_EXT = '.gz';
export const COMPRESSION_VERBOSE = true;
export const COMPRESSION_DISABLE = false;
export const COMPRESSION_THRESHOLD = 10240;
export const COMPRESSION_ALGORITHM = 'gzip';

/** 包依赖分析 */
export const DEPENDENCIES_ANALYSIS = false;
