import express from 'express';
import pool from '../db.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Все роуты требуют авторизации
router.use(authenticateToken);

// =============================================
// ADMIN - Блог
// =============================================

/**
 * @openapi
 * /api/admin/blog:
 *   get:
 *     summary: Получить все посты (админка)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/blog', async (_req, res) => {
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
      tags: Array.isArray(row.tags) ? row.tags : [],
      image: row.image,
      readTime: row.read_time,
      featured: !!row.featured,
      createdAt: row.created_at,
    }));
    res.json({ posts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * @openapi
 * /api/admin/blog/{id}:
 *   get:
 *     summary: Получить пост по ID
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/blog/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM blog_posts WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Пост не найден' });
    }
    const row = rows[0];
    res.json({
      id: row.id,
      title: row.title,
      excerpt: row.excerpt,
      content: row.content,
      author: row.author,
      date: row.date,
      category: row.category,
      tags: Array.isArray(row.tags) ? row.tags : [],
      image: row.image,
      readTime: row.read_time,
      featured: !!row.featured,
      createdAt: row.created_at,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * @openapi
 * /api/admin/blog:
 *   post:
 *     summary: Создать пост
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, excerpt, content, author, date, category]
 *             properties:
 *               title: { type: string }
 *               excerpt: { type: string }
 *               content: { type: string }
 *               author: { type: string }
 *               date: { type: string }
 *               category: { type: string }
 *               tags: { type: array, items: { type: string } }
 *               image: { type: string }
 *               readTime: { type: integer }
 *               featured: { type: boolean }
 *     responses:
 *       201:
 *         description: Создан
 */
router.post('/blog', async (req, res) => {
  try {
    const {
      title, excerpt, content, author, date, category,
      tags = [], image, readTime = 0, featured = false,
    } = req.body;

    if (!title || !excerpt || !content || !author || !date || !category) {
      return res.status(400).json({ success: false, error: 'Не все обязательные поля заполнены' });
    }

    const [result] = await pool.query(
      `INSERT INTO blog_posts 
      (title, excerpt, content, author, date, category, tags, image, read_time, featured)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title, excerpt, content, author, date, category,
        JSON.stringify(tags), image || null, readTime, featured ? 1 : 0,
      ],
    );

    res.status(201).json({ success: true, id: result.insertId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * @openapi
 * /api/admin/blog/{id}:
 *   put:
 *     summary: Обновить пост
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title: { type: string }
 *               excerpt: { type: string }
 *               content: { type: string }
 *               author: { type: string }
 *               date: { type: string }
 *               category: { type: string }
 *               tags: { type: array, items: { type: string } }
 *               image: { type: string }
 *               readTime: { type: integer }
 *               featured: { type: boolean }
 *     responses:
 *       200:
 *         description: OK
 */
router.put('/blog/:id', async (req, res) => {
  try {
    const {
      title, excerpt, content, author, date, category,
      tags, image, readTime, featured,
    } = req.body;

    const updates = [];
    const values = [];

    if (title !== undefined) { updates.push('title = ?'); values.push(title); }
    if (excerpt !== undefined) { updates.push('excerpt = ?'); values.push(excerpt); }
    if (content !== undefined) { updates.push('content = ?'); values.push(content); }
    if (author !== undefined) { updates.push('author = ?'); values.push(author); }
    if (date !== undefined) { updates.push('date = ?'); values.push(date); }
    if (category !== undefined) { updates.push('category = ?'); values.push(category); }
    if (tags !== undefined) { updates.push('tags = ?'); values.push(JSON.stringify(tags)); }
    if (image !== undefined) { updates.push('image = ?'); values.push(image || null); }
    if (readTime !== undefined) { updates.push('read_time = ?'); values.push(readTime); }
    if (featured !== undefined) { updates.push('featured = ?'); values.push(featured ? 1 : 0); }

    if (updates.length === 0) {
      return res.status(400).json({ success: false, error: 'Нет полей для обновления' });
    }

    values.push(req.params.id);

    await pool.query(
      `UPDATE blog_posts SET ${updates.join(', ')} WHERE id = ?`,
      values,
    );

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * @openapi
 * /api/admin/blog/{id}:
 *   delete:
 *     summary: Удалить пост
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 */
router.delete('/blog/:id', async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM blog_posts WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, error: 'Пост не найден' });
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// =============================================
// ADMIN - Кейсы
// =============================================

router.get('/cases', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM cases ORDER BY id DESC');
    const cases = rows.map((row) => ({
      id: row.id,
      title: row.title,
      client: row.client,
      description: row.description,
      category: row.category,
      period: row.period,
      results: Array.isArray(row.results) ? row.results : [],
      tags: Array.isArray(row.tags) ? row.tags : [],
      featured: !!row.featured,
      createdAt: row.created_at,
    }));
    res.json({ cases });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/cases/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM cases WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Кейс не найден' });
    }
    const row = rows[0];
    res.json({
      id: row.id,
      title: row.title,
      client: row.client,
      description: row.description,
      category: row.category,
      period: row.period,
      results: Array.isArray(row.results) ? row.results : [],
      tags: Array.isArray(row.tags) ? row.tags : [],
      featured: !!row.featured,
      createdAt: row.created_at,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/cases', async (req, res) => {
  try {
    const {
      title, client, description, category, period,
      results = [], tags = [], featured = false,
    } = req.body;

    if (!title || !client || !description || !category || !period) {
      return res.status(400).json({ success: false, error: 'Не все обязательные поля заполнены' });
    }

    const [result] = await pool.query(
      `INSERT INTO cases 
      (title, client, description, category, period, results, tags, featured)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title, client, description, category, period,
        JSON.stringify(results), JSON.stringify(tags), featured ? 1 : 0,
      ],
    );

    res.status(201).json({ success: true, id: result.insertId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/cases/:id', async (req, res) => {
  try {
    const {
      title, client, description, category, period,
      results, tags, featured,
    } = req.body;

    const updates = [];
    const values = [];

    if (title !== undefined) { updates.push('title = ?'); values.push(title); }
    if (client !== undefined) { updates.push('client = ?'); values.push(client); }
    if (description !== undefined) { updates.push('description = ?'); values.push(description); }
    if (category !== undefined) { updates.push('category = ?'); values.push(category); }
    if (period !== undefined) { updates.push('period = ?'); values.push(period); }
    if (results !== undefined) { updates.push('results = ?'); values.push(JSON.stringify(results)); }
    if (tags !== undefined) { updates.push('tags = ?'); values.push(JSON.stringify(tags)); }
    if (featured !== undefined) { updates.push('featured = ?'); values.push(featured ? 1 : 0); }

    if (updates.length === 0) {
      return res.status(400).json({ success: false, error: 'Нет полей для обновления' });
    }

    values.push(req.params.id);

    await pool.query(
      `UPDATE cases SET ${updates.join(', ')} WHERE id = ?`,
      values,
    );

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/cases/:id', async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM cases WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, error: 'Кейс не найден' });
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// =============================================
// ADMIN - Заявки
// =============================================

router.get('/requests', async (req, res) => {
  try {
    const { status, search } = req.query;
    let query = 'SELECT * FROM contacts WHERE 1=1';
    const params = [];

    if (status && status !== 'all') {
      query += ' AND status = ?';
      params.push(status);
    }

    if (search) {
      query += ' AND (name LIKE ? OR company LIKE ? OR service LIKE ?)';
      const searchParam = `%${search}%`;
      params.push(searchParam, searchParam, searchParam);
    }

    query += ' ORDER BY created_at DESC';

    const [rows] = await pool.query(query, params);
    const requests = rows.map((row) => ({
      id: row.id,
      name: row.name,
      contactType: row.contact_type,
      contact: row.contact,
      company: row.company,
      service: row.service,
      website: row.website,
      goal: row.goal,
      budget: row.budget,
      timeline: row.timeline,
      comment: row.comment,
      source: row.source,
      status: row.status || 'new',
      createdAt: row.created_at,
    }));
    res.json({ requests });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/requests/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM contacts WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Заявка не найдена' });
    }
    const row = rows[0];
    res.json({
      id: row.id,
      name: row.name,
      contactType: row.contact_type,
      contact: row.contact,
      company: row.company,
      service: row.service,
      website: row.website,
      goal: row.goal,
      budget: row.budget,
      timeline: row.timeline,
      comment: row.comment,
      source: row.source,
      status: row.status || 'new',
      createdAt: row.created_at,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put('/requests/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['new', 'viewed', 'processed', 'archived'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, error: 'Неверный статус' });
    }

    // Добавляем колонку status если её нет
    try {
      await pool.query('ALTER TABLE contacts ADD COLUMN status VARCHAR(20) DEFAULT "new"');
    } catch (e) {
      // Колонка уже существует
    }

    const [result] = await pool.query(
      'UPDATE contacts SET status = ? WHERE id = ?',
      [status, req.params.id],
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, error: 'Заявка не найдена' });
    }

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// =============================================
// ADMIN - Статистика
// =============================================

router.get('/statistics', async (req, res) => {
  try {
    const { dateFrom, dateTo } = req.query;
    
    // Статистика заявок
    const [requestsStats] = await pool.query(
      `SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) as new,
        SUM(CASE WHEN status = 'processed' THEN 1 ELSE 0 END) as processed
      FROM contacts
      WHERE created_at >= ? AND created_at <= ?`,
      [dateFrom || '1970-01-01', dateTo || '2099-12-31'],
    );

    res.json({
      requests: requestsStats[0] || { total: 0, new: 0, processed: 0 },
      // TODO: Добавить статистику из Яндекс.Метрики
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;

