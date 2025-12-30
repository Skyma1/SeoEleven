const { createProxyMiddleware } = require('http-proxy-middleware');

// Получаем URL бекенда из переменной окружения или используем дефолт
let API_TARGET = process.env.REACT_APP_API_URL || 'http://localhost:3002';

// Убираем /api из конца если есть, и убираем trailing slash
if (API_TARGET.endsWith('/api')) {
  API_TARGET = API_TARGET.replace('/api', '');
} else if (API_TARGET.endsWith('/api/')) {
  API_TARGET = API_TARGET.replace('/api/', '');
}
API_TARGET = API_TARGET.replace(/\/$/, ''); // Убираем trailing slash

// Если указан только порт или IP без протокола, добавляем http://
if (!API_TARGET.startsWith('http://') && !API_TARGET.startsWith('https://')) {
  API_TARGET = `http://${API_TARGET}`;
}

console.log('[PROXY] Target:', API_TARGET);
console.log('[PROXY] All /api requests will be forwarded to:', API_TARGET);

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: API_TARGET,
      changeOrigin: true,
      secure: false,
      logLevel: process.env.NODE_ENV === 'development' ? 'warn' : 'error',
      onProxyReq: (proxyReq, req, res) => {
        // Логируем только в development и только для важных запросов
        if (process.env.NODE_ENV === 'development' && !req.url.includes('/blog') && !req.url.includes('/cases')) {
          console.log(`[PROXY] ${req.method} ${req.url} -> ${API_TARGET}${req.url}`);
        }
      },
      onProxyRes: (proxyRes, req, res) => {
        // Логируем только ошибки
        if (proxyRes.statusCode >= 400) {
          console.warn(`[PROXY] ${req.url} -> ${proxyRes.statusCode}`);
        }
      },
      onError: (err, req, res) => {
        // Логируем ошибки прокси только один раз при первом запросе
        if (!req._proxyErrorLogged) {
          console.warn(`[PROXY] Backend server at ${API_TARGET} is not available. Using fallback data.`);
          req._proxyErrorLogged = true;
        }
        // Отправляем JSON ответ с ошибкой
        if (!res.headersSent) {
          res.status(500).json({ 
            error: 'Proxy error', 
            message: 'Backend server is not available',
            fallback: true
          });
        }
      },
    })
  );
};

