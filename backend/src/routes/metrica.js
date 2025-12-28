import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import pool from '../db.js';

const router = express.Router();

router.use(authenticateToken);

/**
 * @openapi
 * /api/admin/metrica/connect:
 *   post:
 *     summary: Подключить Яндекс.Метрику
 *     tags: [Admin, Metrica]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [token, counterId]
 *             properties:
 *               token: { type: string, description: 'OAuth токен Яндекс.Метрики' }
 *               counterId: { type: string, description: 'ID счётчика' }
 *     responses:
 *       200:
 *         description: Подключено
 */
router.post('/connect', async (req, res) => {
  try {
    const { token, counterId } = req.body;

    if (!token || !counterId) {
      return res.status(400).json({ success: false, error: 'Токен и ID счётчика обязательны' });
    }

    // Проверяем, есть ли уже настройки
    const [existing] = await pool.query('SELECT * FROM metrica_settings LIMIT 1');
    
    if (existing.length > 0) {
      // Обновляем существующие
      await pool.query(
        'UPDATE metrica_settings SET token = ?, counter_id = ? WHERE id = ?',
        [token, counterId, existing[0].id]
      );
    } else {
      // Создаём новые
      await pool.query(
        'INSERT INTO metrica_settings (token, counter_id) VALUES (?, ?)',
        [token, counterId]
      );
    }

    // TODO: Проверить токен через API Яндекс.Метрики

    res.json({ success: true, message: 'Яндекс.Метрика подключена' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * @openapi
 * /api/admin/metrica/stats:
 *   get:
 *     summary: Получить статистику из Яндекс.Метрики
 *     tags: [Admin, Metrica]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: dateFrom
 *         schema:
 *           type: string
 *         description: Дата начала (YYYY-MM-DD)
 *       - in: query
 *         name: dateTo
 *         schema:
 *           type: string
 *         description: Дата конца (YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/stats', async (req, res) => {
  try {
    const { dateFrom, dateTo } = req.query;

    // TODO: Получить токен из БД
    // TODO: Вызвать API Яндекс.Метрики
    // https://api-metrika.yandex.net/stat/v1/data

    // Заглушка
    res.json({
      success: true,
      data: {
        sessions: 0,
        users: 0,
        pageviews: 0,
        bounceRate: 0,
        avgSessionDuration: 0,
        trafficSources: [],
        topPages: [],
        countries: [],
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * @openapi
 * /api/admin/metrica/status:
 *   get:
 *     summary: Проверить статус подключения
 *     tags: [Admin, Metrica]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/status', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM metrica_settings LIMIT 1');
    
    if (rows.length === 0) {
      return res.json({
        success: true,
        connected: false,
        counterId: null,
      });
    }

    res.json({
      success: true,
      connected: true,
      counterId: rows[0].counter_id,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.delete('/disconnect', async (req, res) => {
  try {
    await pool.query('DELETE FROM metrica_settings');
    res.json({ success: true, message: 'Яндекс.Метрика отключена' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;

