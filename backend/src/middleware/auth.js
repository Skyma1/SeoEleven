import jwt from 'jsonwebtoken';
import config from '../config.js';

/**
 * Проверка JWT токена
 */
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, error: 'Требуется авторизация' });
  }

  try {
    // Проверяем и декодируем JWT токен
    const decoded = jwt.verify(token, config.jwtSecret);
    
    // Добавляем информацию о пользователе в запрос
    req.user = decoded;
    
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, error: 'Токен истек' });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(403).json({ success: false, error: 'Неверный токен' });
    }
    return res.status(403).json({ success: false, error: 'Ошибка проверки токена' });
  }
};

