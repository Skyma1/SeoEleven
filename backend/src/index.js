import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import jwt from 'jsonwebtoken';
import config from './config.js';
import pool, { pingDb } from './db.js';
import adminRoutes from './routes/admin.js';
import metricaRoutes from './routes/metrica.js';

const app = express();

// Разрешаем запросы с localhost:3001 и localhost:3000
app.use(cors({ 
  origin: ['http://localhost:3001', 'http://localhost:3000'],
  credentials: true,
}));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('tiny'));

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'SeoEleven API',
      version: '0.1.0',
      description: 'API для фронтенда SeoEleven с админ-панелью и интеграцией Яндекс.Метрики',
    },
    servers: [{ url: 'http://localhost:3002/api' }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/index.js', './src/routes/*.js'],
});

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/api/health', async (_req, res) => {
  try {
    await pingDb();
    res.json({ status: 'ok', db: 'up' });
  } catch (error) {
    res.status(500).json({ status: 'error', db: 'down', message: error.message });
  }
});

/**
 * @openapi
 * /api/blog:
 *   get:
 *     summary: Список постов блога
 *     tags: [Blog]
 *     responses:
 *       200:
 *         description: OK
 */
app.get('/api/blog', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM blog_posts ORDER BY date DESC, id DESC');
    const posts = rows.map((row) => ({
      id: row.id,
      title: row.title || '',
      excerpt: row.excerpt || '',
      content: row.content || '',
      author: row.author || '',
      date: row.date ? (row.date instanceof Date ? row.date.toISOString().split('T')[0] : String(row.date).split('T')[0]) : null,
      category: row.category || '',
      tags: Array.isArray(row.tags) ? row.tags : [],
      image: row.image || null,
      readTime: row.read_time || 0,
      featured: !!row.featured,
    }));
    res.json({ posts });
  } catch (error) {
    console.error('Error in /api/blog:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * @openapi
 * /api/cases:
 *   get:
 *     summary: Список кейсов
 *     tags: [Cases]
 *     responses:
 *       200:
 *         description: OK
 */
app.get('/api/cases', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM cases ORDER BY id DESC');
    const cases = rows.map((row) => ({
      id: row.id,
      title: row.title || '',
      client: row.client || '',
      description: row.description || '',
      category: row.category || '',
      period: row.period || '',
      results: Array.isArray(row.results) ? row.results : [],
      tags: Array.isArray(row.tags) ? row.tags : [],
      featured: !!row.featured,
    }));
    res.json({ cases });
  } catch (error) {
    console.error('Error in /api/cases:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * @openapi
 * /api/contact:
 *   post:
 *     summary: Отправка контактной формы
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, contactType, contact, goal, budget, privacyAgreed]
 *             properties:
 *               name: { type: string }
 *               contactType: { type: string, enum: [email, phone] }
 *               contact: { type: string }
 *               company: { type: string }
 *               service: { type: string }
 *               website: { type: string }
 *               goal: { type: string }
 *               budget: { type: string }
 *               timeline: { type: string }
 *               comment: { type: string }
 *               privacyAgreed: { type: boolean }
 *               source: { type: string }
 *     responses:
 *       200:
 *         description: Успех
 */
app.post('/api/contact', async (req, res) => {
  const {
    name,
    contactType,
    contact,
    company,
    service,
    website,
    goal,
    budget,
    timeline,
    comment,
    privacyAgreed,
    source,
  } = req.body || {};

  if (!name || !contactType || !contact) {
    return res.status(400).json({ success: false, error: 'name, contactType и contact обязательны' });
  }

  try {
    await pool.query(
      `INSERT INTO contacts
      (name, contact_type, contact, company, service, website, goal, budget, timeline, comment, privacy_agreed, source)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        contactType,
        contact,
        company || null,
        service || null,
        website || null,
        goal || null,
        budget || null,
        timeline || null,
        comment || null,
        privacyAgreed ?? true,
        source || 'frontend',
      ],
    );
    res.json({ success: true, message: 'Заявка получена' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * @openapi
 * /api/admin/login:
 *   post:
 *     summary: Логин администратора (stub)
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email: { type: string }
 *               password: { type: string }
 *     responses:
 *       200:
 *         description: Успех
 *       401:
 *         description: Неверные данные
 */
app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body || {};
  if (email === config.admin.email && password === config.admin.password) {
    // Генерируем JWT токен
    const token = jwt.sign(
      { 
        id: 1, 
        email: config.admin.email,
        type: 'admin'
      },
      config.jwtSecret,
      { expiresIn: '7d' } // Токен действителен 7 дней
    );
    
    return res.json({
      success: true,
      token,
      user: { id: 1, email, name: 'Admin' },
    });
  }
  return res.status(401).json({ success: false, error: 'Неверные данные' });
});

// Подключение роутов админки
app.use('/api/admin', adminRoutes);
// Роуты метрики должны быть подключены к админским роутам
app.use('/api/admin/metrica', metricaRoutes);

app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error('Global error handler:', err);
  console.error('Error message:', err.message);
  console.error('Error stack:', err.stack);
  console.error('Request path:', req.path);
  res.status(500).json({ success: false, error: err.message || 'Internal server error' });
});

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on http://0.0.0.0:${config.port}`);
  // eslint-disable-next-line no-console
  console.log(`Swagger UI: http://localhost:${config.port}/api/docs`);
});

