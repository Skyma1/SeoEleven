/**
 * Context для аутентификации администратора
 * 
 * Управляет состоянием авторизации,
 * хранит токен и предоставляет методы login/logout
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api';
import { STORAGE_KEYS, ROUTES } from '../config/constants';

const AuthContext = createContext();

/**
 * Хук для использования AuthContext
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

/**
 * Provider для аутентификации
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  /**
   * Проверить токен при загрузке приложения
   */
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem(STORAGE_KEYS.ADMIN_TOKEN);
      
      if (token) {
        // Проверяем токен на бекенде (опционально)
        // Пока просто устанавливаем токен, валидация произойдет при первом запросе
        try {
          // Можно добавить эндпоинт для проверки токена
          // const { data } = await apiService.checkToken();
          // if (data && data.valid) {
          //   setUser({ token, ...data.user });
          // } else {
          //   localStorage.removeItem(STORAGE_KEYS.ADMIN_TOKEN);
          // }
          setUser({ token });
        } catch (err) {
          // Если токен невалиден, удаляем его
          localStorage.removeItem(STORAGE_KEYS.ADMIN_TOKEN);
          setUser(null);
        }
      }
      
      setLoading(false);
    };

    checkAuth();
  }, []);

  /**
   * Войти в систему
   */
  const login = useCallback(async (credentials) => {
    try {
      setLoading(true);

      // DEVELOPMENT MODE: Работа без бекенда
      const isDevelopment = process.env.NODE_ENV === 'development';
      const noBackend = !process.env.REACT_APP_API_URL || process.env.REACT_APP_API_URL.includes('localhost:3001');

      if (isDevelopment && noBackend) {
        // Режим разработки БЕЗ бекенда - имитация логина
        console.warn('🔧 DEV MODE: Работа без бекенда. Любой email/пароль сработает.');
        
        // Простая валидация
        if (!credentials.email || !credentials.password) {
          return { success: false, error: 'Введите email и пароль' };
        }

        // Имитация успешного логина
        const fakeToken = 'dev-token-' + Date.now();
        const fakeUser = {
          id: 1,
          email: credentials.email,
          name: 'Dev Admin'
        };

        // Сохраняем токен
        localStorage.setItem(STORAGE_KEYS.ADMIN_TOKEN, fakeToken);
        setUser({ token: fakeToken, ...fakeUser });

        // Переходим в админку
        navigate(ROUTES.ADMIN);

        return { success: true };
      }

      // PRODUCTION MODE: Реальный API запрос
      const { data, error } = await apiService.adminLogin(credentials);

      if (error) {
        return { success: false, error };
      }

      // Сохраняем токен
      localStorage.setItem(STORAGE_KEYS.ADMIN_TOKEN, data.token);
      setUser({ token: data.token, ...data.user });

      // Переходим в админку
      navigate(ROUTES.ADMIN);

      return { success: true };
    } catch (err) {
      console.error('Login error:', err);
      return { success: false, error: err.message || 'Ошибка авторизации' };
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  /**
   * Выйти из системы
   */
  const logout = useCallback(async () => {
    try {
      // Опционально: можно отправить запрос на бекенд для инвалидации токена
      // await apiService.adminLogout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      // Удаляем токен из localStorage
      localStorage.removeItem(STORAGE_KEYS.ADMIN_TOKEN);
      setUser(null);
      
      // Переходим на страницу логина
      navigate(ROUTES.ADMIN_LOGIN);
    }
  }, [navigate]);

  /**
   * Проверить, авторизован ли пользователь
   */
  const isAuthenticated = useCallback(() => {
    return !!user && !!user.token;
  }, [user]);

  /**
   * Получить токен
   */
  const getToken = useCallback(() => {
    return user?.token || null;
  }, [user]);

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated,
    getToken,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

