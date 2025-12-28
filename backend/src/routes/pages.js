import express from 'express';
import pool from '../db.js';
import { authenticateToken } from '../middleware/auth.js';
import { checkPermission } from '../middleware/permissions.js';

const router = express.Router();

// Все роуты требуют авторизации
router.use(authenticateToken);

/**
 * @openapi
 * /api/admin/pages:
 *   get:
 *     summary: Получить список всех страниц
 *     tags: [Admin, Pages]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', checkPermission('services', 'read'), async (_req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, page_path, page_name, meta_title, meta_description, updated_at, updated_by FROM page_content ORDER BY page_name'
    );
    
    res.json({ pages: rows });
  } catch (error) {
    console.error('Error fetching pages:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * @openapi
 * /api/admin/pages/:path:
 *   get:
 *     summary: Получить контент страницы
 *     tags: [Admin, Pages]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/:path(*)', checkPermission('services', 'read'), async (req, res) => {
  try {
    const pagePath = '/' + req.params.path;
    const [rows] = await pool.query(
      'SELECT * FROM page_content WHERE page_path = ?',
      [pagePath]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Страница не найдена' });
    }

    const page = rows[0];
    res.json({
      id: page.id,
      pagePath: page.page_path,
      pageName: page.page_name,
      content: page.content || '',
      metaTitle: page.meta_title || '',
      metaDescription: page.meta_description || '',
      metaKeywords: page.meta_keywords || '',
      updatedAt: page.updated_at,
      updatedBy: page.updated_by,
    });
  } catch (error) {
    console.error('Error fetching page:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * @openapi
 * /api/admin/pages/:path:
 *   put:
 *     summary: Обновить контент страницы
 *     tags: [Admin, Pages]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content: { type: string }
 *               metaTitle: { type: string }
 *               metaDescription: { type: string }
 *               metaKeywords: { type: string }
 *     responses:
 *       200:
 *         description: OK
 */
router.put('/:path(*)', checkPermission('services', 'update'), async (req, res) => {
  try {
    const pagePath = '/' + req.params.path;
    const { content, metaTitle, metaDescription, metaKeywords } = req.body;

    // Проверяем, существует ли страница
    const [existing] = await pool.query(
      'SELECT id FROM page_content WHERE page_path = ?',
      [pagePath]
    );

    if (existing.length === 0) {
      return res.status(404).json({ success: false, error: 'Страница не найдена' });
    }

    // Обновляем контент
    await pool.query(
      `UPDATE page_content 
       SET content = ?, meta_title = ?, meta_description = ?, meta_keywords = ?, updated_by = ?
       WHERE page_path = ?`,
      [content || null, metaTitle || null, metaDescription || null, metaKeywords || null, req.user.id, pagePath]
    );

    // Получаем обновленную страницу
    const [rows] = await pool.query(
      'SELECT * FROM page_content WHERE page_path = ?',
      [pagePath]
    );

    const page = rows[0];
    res.json({
      success: true,
      page: {
        id: page.id,
        pagePath: page.page_path,
        pageName: page.page_name,
        content: page.content || '',
        metaTitle: page.meta_title || '',
        metaDescription: page.meta_description || '',
        metaKeywords: page.meta_keywords || '',
        updatedAt: page.updated_at,
        updatedBy: page.updated_by,
      },
    });
  } catch (error) {
    console.error('Error updating page:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;

