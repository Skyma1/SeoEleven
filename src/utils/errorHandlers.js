/**
 * Утилиты для обработки ошибок
 * 
 * Централизованная обработка ошибок API,
 * форматирование сообщений об ошибках
 */

import { ERROR_MESSAGES } from '../config/constants';

// =============================================
// Получение сообщения об ошибке
// =============================================

/**
 * Извлечь текст ошибки из различных форматов
 * @param {*} error - ошибка (строка, объект Error, или объект с полем error/message)
 * @returns {string} - текст ошибки
 */
export const getErrorMessage = (error) => {
  if (!error) return ERROR_MESSAGES.UNKNOWN_ERROR;
  
  if (typeof error === 'string') return error;
  
  if (error.message) return error.message;
  
  if (error.error) {
    return typeof error.error === 'string' 
      ? error.error 
      : getErrorMessage(error.error);
  }
  
  return ERROR_MESSAGES.UNKNOWN_ERROR;
};

// =============================================
// Проверка типов ошибок
// =============================================

/**
 * Проверить, является ли ошибка сетевой (нет подключения)
 * @param {*} error - ошибка
 * @returns {boolean}
 */
export const isNetworkError = (error) => {
  const message = getErrorMessage(error).toLowerCase();
  return (
    message.includes('failed to fetch') ||
    message.includes('network request failed') ||
    message.includes('network error') ||
    message.includes('networkerror') ||
    error?.name === 'NetworkError'
  );
};

/**
 * Проверить, является ли ошибка ошибкой аутентификации
 * @param {*} error - ошибка
 * @returns {boolean}
 */
export const isAuthError = (error) => {
  const message = getErrorMessage(error).toLowerCase();
  return (
    message.includes('unauthorized') ||
    message.includes('unauthenticated') ||
    message.includes('требуется авторизация') ||
    message.includes('auth') ||
    error?.status === 401
  );
};

/**
 * Проверить, является ли ошибка ошибкой валидации
 * @param {*} error - ошибка
 * @returns {boolean}
 */
export const isValidationError = (error) => {
  return (
    error?.status === 400 ||
    error?.errors !== undefined ||
    getErrorMessage(error).includes('validation')
  );
};

/**
 * Проверить, является ли ошибка ошибкой "не найдено"
 * @param {*} error - ошибка
 * @returns {boolean}
 */
export const isNotFoundError = (error) => {
  return (
    error?.status === 404 ||
    getErrorMessage(error).includes('not found') ||
    getErrorMessage(error).includes('не найден')
  );
};

/**
 * Проверить, является ли ошибка серверной
 * @param {*} error - ошибка
 * @returns {boolean}
 */
export const isServerError = (error) => {
  return (
    error?.status >= 500 ||
    getErrorMessage(error).includes('server error') ||
    getErrorMessage(error).includes('internal error')
  );
};

// =============================================
// Обработка ошибок API
// =============================================

/**
 * Обработать ошибку API и вернуть понятное сообщение пользователю
 * @param {*} error - ошибка
 * @param {string} fallbackMessage - сообщение по умолчанию
 * @returns {string} - сообщение об ошибке для пользователя
 */
export const handleApiError = (error, fallbackMessage = ERROR_MESSAGES.UNKNOWN_ERROR) => {
  console.error('API Error:', error);
  
  // Сетевая ошибка
  if (isNetworkError(error)) {
    return ERROR_MESSAGES.NETWORK_ERROR;
  }
  
  // Ошибка аутентификации
  if (isAuthError(error)) {
    return ERROR_MESSAGES.AUTH_REQUIRED;
  }
  
  // Не найдено
  if (isNotFoundError(error)) {
    return ERROR_MESSAGES.NOT_FOUND;
  }
  
  // Серверная ошибка
  if (isServerError(error)) {
    return ERROR_MESSAGES.SERVER_ERROR;
  }
  
  // Ошибка валидации - возвращаем исходное сообщение
  if (isValidationError(error)) {
    return getErrorMessage(error);
  }
  
  // Любая другая ошибка
  const message = getErrorMessage(error);
  return message || fallbackMessage;
};

// =============================================
// Обработка ошибок форм
// =============================================

/**
 * Преобразовать ошибки валидации из API в формат для форм
 * @param {Object} apiErrors - ошибки от API (может быть строкой или объектом)
 * @returns {Object} - объект с ошибками для каждого поля
 */
export const parseFormErrors = (apiErrors) => {
  if (!apiErrors) return {};
  
  // Если пришла строка, создаем общую ошибку
  if (typeof apiErrors === 'string') {
    return { _general: apiErrors };
  }
  
  // Если пришел объект с полем errors (формат из API_DOCUMENTATION)
  if (apiErrors.errors && typeof apiErrors.errors === 'object') {
    return apiErrors.errors;
  }
  
  // Если пришел объект напрямую
  if (typeof apiErrors === 'object') {
    return apiErrors;
  }
  
  return {};
};

/**
 * Объединить ошибки валидации с клиента и сервера
 * @param {Object} clientErrors - ошибки с клиентской валидации
 * @param {Object} serverErrors - ошибки с сервера
 * @returns {Object} - объединенные ошибки (приоритет у серверных)
 */
export const mergeFormErrors = (clientErrors = {}, serverErrors = {}) => {
  return {
    ...clientErrors,
    ...parseFormErrors(serverErrors),
  };
};

// =============================================
// Логирование ошибок
// =============================================

/**
 * Залогировать ошибку в консоль (в development) и отправить в Sentry (в production)
 * @param {*} error - ошибка
 * @param {Object} context - дополнительный контекст
 */
export const logError = (error, context = {}) => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  if (isDevelopment) {
    console.group('🔴 Error');
    console.error('Error:', error);
    console.log('Context:', context);
    console.trace();
    console.groupEnd();
  } else {
    // В production отправляем в Sentry или другой сервис
    // if (window.Sentry) {
    //   window.Sentry.captureException(error, { extra: context });
    // }
    console.error('Error:', getErrorMessage(error));
  }
};

// =============================================
// Retry логика для запросов
// =============================================

/**
 * Выполнить асинхронную функцию с повторными попытками
 * @param {Function} fn - асинхронная функция
 * @param {number} maxRetries - максимальное количество попыток
 * @param {number} delay - задержка между попытками (мс)
 * @returns {Promise} - результат выполнения функции
 */
export const retryAsync = async (fn, maxRetries = 3, delay = 1000) => {
  let lastError;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      
      // Не повторяем для ошибок валидации и аутентификации
      if (isValidationError(error) || isAuthError(error)) {
        throw error;
      }
      
      // Если это последняя попытка, выбрасываем ошибку
      if (i === maxRetries - 1) {
        throw error;
      }
      
      // Ждем перед следующей попыткой
      await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
    }
  }
  
  throw lastError;
};

// =============================================
// Обработчики ошибок для React Error Boundary
// =============================================

/**
 * Обработать ошибку рендеринга React компонента
 * @param {Error} error - ошибка
 * @param {Object} errorInfo - информация об ошибке от React
 */
export const handleReactError = (error, errorInfo) => {
  logError(error, {
    type: 'React Error',
    componentStack: errorInfo.componentStack,
  });
};

// =============================================
// Утилиты для отображения ошибок
// =============================================

/**
 * Получить цвет для типа ошибки (для UI)
 * @param {*} error - ошибка
 * @returns {string} - цвет ('error', 'warning', 'info')
 */
export const getErrorSeverity = (error) => {
  if (isNetworkError(error)) return 'warning';
  if (isValidationError(error)) return 'info';
  if (isServerError(error)) return 'error';
  return 'error';
};

/**
 * Проверить, нужно ли показывать детали ошибки пользователю
 * @param {*} error - ошибка
 * @returns {boolean}
 */
export const shouldShowErrorDetails = (error) => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // В development показываем все детали
  if (isDevelopment) return true;
  
  // В production показываем детали только для ошибок валидации
  return isValidationError(error);
};

