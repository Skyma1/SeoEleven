const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      onProxyReq: (proxyReq, req, res) => {
        console.log(`[PROXY] ${req.method} ${req.url} -> http://localhost:3002${req.url}`);
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

