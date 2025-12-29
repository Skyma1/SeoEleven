const { createProxyMiddleware } = require('http-proxy-middleware');

// Получаем URL бекенда из переменной окружения или используем дефолт
const API_TARGET = process.env.REACT_APP_API_URL 
  ? process.env.REACT_APP_API_URL.replace('/api', '')
  : 'http://localhost:3002';

console.log('[PROXY] Target:', API_TARGET);

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: API_TARGET,
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      onProxyReq: (proxyReq, req, res) => {
        console.log(`[PROXY] ${req.method} ${req.url} -> ${API_TARGET}${req.url}`);
      },
      onProxyRes: (proxyRes, req, res) => {
        console.log(`[PROXY RESPONSE] ${req.url} -> ${proxyRes.statusCode}`);
      },
      onError: (err, req, res) => {
        console.error('[PROXY ERROR]', err.message);
        res.status(500).json({ error: 'Proxy error', message: err.message });
      },
    })
  );
};

