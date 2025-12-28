/**
 * Middleware для проверки прав доступа
 */

import pool from '../db.js';

/**
 * Проверка прав доступа пользователя
 * @param {string} resource - Ресурс (blog, cases, requests, users, services)
 * @param {string} action - Действие (create, read, update, delete)
 */
export const checkPermission = (resource, action) => {
  return async (req, res, next) => {
    try {
      const user = req.user;
      
      if (!user) {
        return res.status(401).json({ success: false, error: 'Требуется авторизация' });
      }

      // Админы имеют все права
      if (user.role === 'admin') {
        return next();
      }

      // Получаем полную информацию о пользователе из БД
      const [users] = await pool.query('SELECT * FROM users WHERE id = ?', [user.id]);
      
      if (users.length === 0 || !users[0].active) {
        return res.status(403).json({ success: false, error: 'Пользователь не найден или деактивирован' });
      }

      const dbUser = users[0];
      
      // Проверяем права доступа
      let permissions = {};
      if (dbUser.permissions) {
        if (typeof dbUser.permissions === 'string') {
          permissions = JSON.parse(dbUser.permissions);
        } else if (Array.isArray(dbUser.permissions)) {
          permissions = dbUser.permissions;
        } else {
          permissions = dbUser.permissions;
        }
      }

      // Проверяем права для ресурса
      const resourcePermissions = permissions[resource] || [];
      
      if (!Array.isArray(resourcePermissions)) {
        return res.status(403).json({ success: false, error: 'Недостаточно прав доступа' });
      }

      // Проверяем наличие нужного действия
      if (!resourcePermissions.includes(action) && !resourcePermissions.includes('*')) {
        return res.status(403).json({ 
          success: false, 
          error: `Недостаточно прав для выполнения действия '${action}' над ресурсом '${resource}'` 
        });
      }

      next();
    } catch (error) {
      console.error('Permission check error:', error);
      res.status(500).json({ success: false, error: 'Ошибка проверки прав доступа' });
    }
  };
};

/**
 * Проверка роли пользователя
 * @param {string|string[]} roles - Роль или массив ролей
 */
export const checkRole = (roles) => {
  return (req, res, next) => {
    const user = req.user;
    
    if (!user) {
      return res.status(401).json({ success: false, error: 'Требуется авторизация' });
    }

    const allowedRoles = Array.isArray(roles) ? roles : [roles];
    
    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ 
        success: false, 
        error: `Требуется роль: ${allowedRoles.join(' или ')}` 
      });
    }

    next();
  };
};

