import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import config from './config.js';
import pool, { pingDb } from './db.js';

const app = express();

app.use(cors({ origin: config.corsOrigin }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('tiny'));

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'SeoEleven API',
      version: '0.1.0',
      description: 'Минимальный API для фронтенда SeoEleven',
    },
    servers: [{ url: 'http://localhost:3001/api' }],
  },
  apis: ['./src/index.js'],
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
      title: row.title,
      excerpt: row.excerpt,
      content: row.content,
      author: row.author,
      date: row.date,
      category: row.category,
      tags: row.tags ? JSON.parse(row.tags) : [],
      image: row.image,
      readTime: row.read_time,
      featured: !!row.featured,
    }));
    res.json({ posts });
  } catch (error) {
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
      title: row.title,
      client: row.client,
      description: row.description,
      category: row.category,
      period: row.period,
      results: row.results ? JSON.parse(row.results) : [],
      tags: row.tags ? JSON.parse(row.tags) : [],
      featured: !!row.featured,
    }));
    res.json({ cases });
  } catch (error) {
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
    return res.json({
      success: true,
      token: 'dev-jwt-token',
      user: { id: 1, email, name: 'Admin' },
    });
  }
  return res.status(401).json({ success: false, error: 'Неверные данные' });
});

app.use((err, _req, res, _next) => {
  // eslint-disable-next-line no-console
  console.error(err);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on http://0.0.0.0:${config.port}`);
  // eslint-disable-next-line no-console
  console.log(`Swagger UI: http://localhost:${config.port}/api/docs`);
});

