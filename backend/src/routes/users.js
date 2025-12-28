import express from 'express';
import pool from '../db.js';
import { authenticateToken } from '../middleware/auth.js';
import { checkPermission, checkRole } from '../middleware/permissions.js';
import bcrypt from 'bcrypt';

const router = express.Router();

// Все роуты требуют авторизации
router.use(authenticateToken);

/**
 * @openapi
 * /api/admin/users:
 *   get:
 *     summary: Получить список пользователей
 *     tags: [Admin, Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', checkPermission('users', 'read'), async (_req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, email, name, role, permissions, active, created_at, updated_at, created_by FROM users ORDER BY created_at DESC'
    );
    
    const users = rows.map((row) => {
      let permissions = {};
      if (row.permissions) {
        if (typeof row.permissions === 'string') {
          permissions = JSON.parse(row.permissions);
        } else {
          permissions = row.permissions;
        }
      }
      
      return {
        id: row.id,
        email: row.email,
        name: row.name,
        role: row.role,
        permissions,
        active: !!row.active,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
        createdBy: row.created_by,
      };
    });
    
    res.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * @openapi
 * /api/admin/users/{id}:
 *   get:
 *     summary: Получить пользователя по ID
 *     tags: [Admin, Users]
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
router.get('/:id', checkPermission('users', 'read'), async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, email, name, role, permissions, active, created_at, updated_at, created_by FROM users WHERE id = ?',
      [req.params.id]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Пользователь не найден' });
    }

    const row = rows[0];
    let permissions = {};
    if (row.permissions) {
      if (typeof row.permissions === 'string') {
        permissions = JSON.parse(row.permissions);
      } else {
        permissions = row.permissions;
      }
    }

    res.json({
      id: row.id,
      email: row.email,
      name: row.name,
      role: row.role,
      permissions,
      active: !!row.active,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      createdBy: row.created_by,
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * @openapi
 * /api/admin/users:
 *   post:
 *     summary: Создать пользователя
 *     tags: [Admin, Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password, name, role]
 *             properties:
 *               email: { type: string }
 *               password: { type: string }
 *               name: { type: string }
 *               role: { type: string, enum: [admin, editor, viewer] }
 *               permissions: { type: object }
 *               active: { type: boolean }
 *     responses:
 *       200:
 *         description: OK
 */
router.post('/', checkPermission('users', 'create'), async (req, res) => {
  try {
    const { email, password, name, role, permissions, active } = req.body;

    if (!email || !password || !name || !role) {
      return res.status(400).json({ success: false, error: 'Email, пароль, имя и роль обязательны' });
    }

    // Проверяем, существует ли пользователь
    const [existing] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(400).json({ success: false, error: 'Пользователь с таким email уже существует' });
    }

    // Хешируем пароль
    const passwordHash = await bcrypt.hash(password, 10);

    // Формируем permissions
    const permissionsJson = permissions ? JSON.stringify(permissions) : JSON.stringify({});

    // Создаем пользователя
    const [result] = await pool.query(
      'INSERT INTO users (email, password_hash, name, role, permissions, active, created_by) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [email, passwordHash, name, role, permissionsJson, active !== undefined ? active : true, req.user.id]
    );

    res.json({
      success: true,
      user: {
        id: result.insertId,
        email,
        name,
        role,
        permissions,
        active: active !== undefined ? active : true,
      },
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * @openapi
 * /api/admin/users/{id}:
 *   put:
 *     summary: Обновить пользователя
 *     tags: [Admin, Users]
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
 *               email: { type: string }
 *               password: { type: string }
 *               name: { type: string }
 *               role: { type: string, enum: [admin, editor, viewer] }
 *               permissions: { type: object }
 *               active: { type: boolean }
 *     responses:
 *       200:
 *         description: OK
 */
router.put('/:id', checkPermission('users', 'update'), async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password, name, role, permissions, active } = req.body;

    // Проверяем, существует ли пользователь
    const [existing] = await pool.query('SELECT id FROM users WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({ success: false, error: 'Пользователь не найден' });
    }

    // Формируем обновления
    const updates = [];
    const values = [];

    if (email !== undefined) {
      // Проверяем уникальность email
      const [emailCheck] = await pool.query('SELECT id FROM users WHERE email = ? AND id != ?', [email, id]);
      if (emailCheck.length > 0) {
        return res.status(400).json({ success: false, error: 'Пользователь с таким email уже существует' });
      }
      updates.push('email = ?');
      values.push(email);
    }

    if (password !== undefined && password !== '') {
      const passwordHash = await bcrypt.hash(password, 10);
      updates.push('password_hash = ?');
      values.push(passwordHash);
    }

    if (name !== undefined) {
      updates.push('name = ?');
      values.push(name);
    }

    if (role !== undefined) {
      updates.push('role = ?');
      values.push(role);
    }

    if (permissions !== undefined) {
      updates.push('permissions = ?');
      values.push(JSON.stringify(permissions));
    }

    if (active !== undefined) {
      updates.push('active = ?');
      values.push(active);
    }

    if (updates.length === 0) {
      return res.status(400).json({ success: false, error: 'Нет данных для обновления' });
    }

    values.push(id);

    await pool.query(
      `UPDATE users SET ${updates.join(', ')} WHERE id = ?`,
      values
    );

    // Получаем обновленного пользователя
    const [rows] = await pool.query(
      'SELECT id, email, name, role, permissions, active, created_at, updated_at, created_by FROM users WHERE id = ?',
      [id]
    );

    const row = rows[0];
    let permissionsData = {};
    if (row.permissions) {
      if (typeof row.permissions === 'string') {
        permissionsData = JSON.parse(row.permissions);
      } else {
        permissionsData = row.permissions;
      }
    }

    res.json({
      success: true,
      user: {
        id: row.id,
        email: row.email,
        name: row.name,
        role: row.role,
        permissions: permissionsData,
        active: !!row.active,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
        createdBy: row.created_by,
      },
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * @openapi
 * /api/admin/users/{id}:
 *   delete:
 *     summary: Удалить пользователя
 *     tags: [Admin, Users]
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
router.delete('/:id', checkPermission('users', 'delete'), async (req, res) => {
  try {
    const { id } = req.params;

    // Нельзя удалить самого себя
    if (parseInt(id) === req.user.id) {
      return res.status(400).json({ success: false, error: 'Нельзя удалить самого себя' });
    }

    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, error: 'Пользователь не найден' });
    }

    res.json({ success: true, message: 'Пользователь удален' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;

