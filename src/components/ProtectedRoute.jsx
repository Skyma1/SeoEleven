/**
 * ProtectedRoute компонент
 * 
 * Защищает роуты админки от неавторизованных пользователей
 * Перенаправляет на страницу логина если нет токена
 */

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loading from './Loading';
import { ROUTES } from '../config/constants';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Показываем лоадер пока проверяем авторизацию
  if (loading) {
    return <Loading fullScreen message="Проверка авторизации..." />;
  }

  // Если нет пользователя, редиректим на логин
  if (!user) {
    return <Navigate to={ROUTES.ADMIN_LOGIN} replace />;
  }

  // Если пользователь авторизован, показываем контент
  return children;
};

export default ProtectedRoute;

