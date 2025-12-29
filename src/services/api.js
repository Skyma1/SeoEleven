/**
 * Централизованный API сервис для работы с бекендом
 * 
 * Все API запросы должны идти через этот сервис
 * для централизованной обработки ошибок, логирования и конфигурации
 */

import { STORAGE_KEYS } from '../config/constants';

// Используем относительный путь для проксирования через фронтенд
// ВАЖНО: После изменения REACT_APP_API_URL нужно перезапустить dev сервер!
const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

// Отладка (можно удалить после проверки)
if (process.env.NODE_ENV === 'development') {
  console.log('[API] REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
  console.log('[API] Using API_BASE_URL:', API_BASE_URL);
}

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  /**
   * Базовый метод для выполнения запросов
   */
  async request(endpoint, options = {}) {
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, config);
      
      // Проверяем, что ответ действительно JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error(`API Error [${endpoint}]: Expected JSON but got ${contentType}`, text.substring(0, 200));
        throw new Error(`Server returned non-JSON response: ${contentType}`);
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Request failed');
      }

      return { data, error: null };
    } catch (error) {
      console.error(`API Error [${endpoint}]:`, error);
      return { data: null, error: error.message };
    }
  }

  // =============================================
  // PUBLIC API - Блог
  // =============================================

  /**
   * Получить все посты блога
   * @param {Object} params - query параметры (search, category, featured)
   */
  async getBlogPosts(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/blog${query ? `?${query}` : ''}`);
  }

  /**
   * Получить один пост по ID
   * @param {number} id - ID поста
   */
  async getBlogPost(id) {
    return this.request(`/blog/${id}`);
  }

  // =============================================
  // PUBLIC API - Кейсы
  // =============================================

  /**
   * Получить все кейсы
   * @param {Object} params - query параметры
   */
  async getCases(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/cases${query ? `?${query}` : ''}`);
  }

  /**
   * Получить один кейс по ID
   * @param {number} id - ID кейса
   */
  async getCase(id) {
    return this.request(`/cases/${id}`);
  }

  // =============================================
  // PUBLIC API - Контактная форма
  // =============================================

  /**
   * Отправить контактную форму
   * @param {Object} formData - данные формы
   */
  async submitContactForm(formData) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // =============================================
  // ADMIN API - Базовый метод с аутентификацией
  // =============================================

  /**
   * Запрос к админ API с токеном авторизации
   */
  async adminRequest(endpoint, options = {}) {
    // Используем тот же ключ, что и в AuthContext
    const token = localStorage.getItem(STORAGE_KEYS.ADMIN_TOKEN);
    
    if (!token) {
      return { 
        data: null, 
        error: 'Требуется авторизация. Токен не найден.' 
      };
    }

    return this.request(`/admin${endpoint}`, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  // =============================================
  // ADMIN API - Аутентификация
  // =============================================

  /**
   * Вход в админ-панель
   * @param {Object} credentials - { email, password }
   */
  async adminLogin(credentials) {
    return this.request('/admin/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  /**
   * Выход из админ-панели
   */
  async adminLogout() {
    return this.adminRequest('/logout', { method: 'POST' });
  }

  // =============================================
  // ADMIN API - Блог
  // =============================================

  /**
   * Получить все посты (админка)
   */
  async adminGetBlogPosts(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.adminRequest(`/blog${query ? `?${query}` : ''}`);
  }

  /**
   * Получить пост по ID (админка)
   */
  async adminGetBlogPost(id) {
    return this.adminRequest(`/blog/${id}`);
  }

  /**
   * Создать новый пост
   */
  async adminCreateBlogPost(postData) {
    return this.adminRequest('/blog', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  }

  /**
   * Обновить пост
   */
  async adminUpdateBlogPost(id, postData) {
    return this.adminRequest(`/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify(postData),
    });
  }

  /**
   * Удалить пост
   */
  async adminDeleteBlogPost(id) {
    return this.adminRequest(`/blog/${id}`, {
      method: 'DELETE',
    });
  }

  // =============================================
  // ADMIN API - Кейсы
  // =============================================

  /**
   * Получить все кейсы (админка)
   */
  async adminGetCases(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.adminRequest(`/cases${query ? `?${query}` : ''}`);
  }

  /**
   * Получить кейс по ID (админка)
   */
  async adminGetCase(id) {
    return this.adminRequest(`/cases/${id}`);
  }

  /**
   * Создать новый кейс
   */
  async adminCreateCase(caseData) {
    return this.adminRequest('/cases', {
      method: 'POST',
      body: JSON.stringify(caseData),
    });
  }

  /**
   * Обновить кейс
   */
  async adminUpdateCase(id, caseData) {
    return this.adminRequest(`/cases/${id}`, {
      method: 'PUT',
      body: JSON.stringify(caseData),
    });
  }

  /**
   * Удалить кейс
   */
  async adminDeleteCase(id) {
    return this.adminRequest(`/cases/${id}`, {
      method: 'DELETE',
    });
  }

  // =============================================
  // ADMIN API - Заявки
  // =============================================

  /**
   * Получить все заявки
   */
  async adminGetRequests(params = {}) {
    const query = new URLSearchParams(params).toString();
    return this.adminRequest(`/requests${query ? `?${query}` : ''}`);
  }

  /**
   * Получить заявку по ID
   */
  async adminGetRequest(id) {
    return this.adminRequest(`/requests/${id}`);
  }

  /**
   * Обновить статус заявки
   */
  async adminUpdateRequestStatus(id, status) {
    return this.adminRequest(`/requests/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  /**
   * Экспорт заявок
   */
  async adminExportRequests(params = {}) {
    const query = new URLSearchParams(params).toString();
    const token = localStorage.getItem(STORAGE_KEYS.ADMIN_TOKEN);
    
    try {
      const response = await fetch(
        `${this.baseURL}/admin/requests/export${query ? `?${query}` : ''}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Export failed');
      }

      const blob = await response.blob();
      return { data: blob, error: null };
    } catch (error) {
      return { data: null, error: error.message };
    }
  }

  // =============================================
  // ADMIN API - Услуги
  // =============================================

  /**
   * Получить все услуги
   */
  async adminGetServices() {
    return this.adminRequest('/services');
  }

  /**
   * Обновить услуги (массовое обновление)
   */
  async adminUpdateServices(servicesData) {
    return this.adminRequest('/services', {
      method: 'PUT',
      body: JSON.stringify({ services: servicesData }),
    });
  }

  // =============================================
  // ADMIN API - Статистика
  // =============================================

  /**
   * Получить статистику за период
   * @param {string} dateFrom - дата начала (ISO 8601 или YYYY-MM-DD)
   * @param {string} dateTo - дата конца (ISO 8601 или YYYY-MM-DD)
   * @param {string} groupBy - группировка: 'days' или 'months'
   */
  async adminGetStatistics(dateFrom, dateTo, groupBy = 'days') {
    return this.adminRequest(
      `/statistics?dateFrom=${dateFrom}&dateTo=${dateTo}&groupBy=${groupBy}`
    );
  }

  // =============================================
  // ADMIN API - Яндекс.Метрика
  // =============================================

  /**
   * Подключить Яндекс.Метрику
   * @param {Object} credentials - { token, counterId }
   */
  async adminConnectMetrica(credentials) {
    return this.adminRequest('/metrica/connect', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  /**
   * Получить статистику из Яндекс.Метрики
   * @param {string} dateFrom - дата начала
   * @param {string} dateTo - дата конца
   */
  async adminGetMetricaStats(dateFrom, dateTo) {
    return this.adminRequest(
      `/metrica/stats?dateFrom=${dateFrom}&dateTo=${dateTo}`
    );
  }

  /**
   * Проверить статус подключения Яндекс.Метрики
   */
  async adminGetMetricaStatus() {
    return this.adminRequest('/metrica/status');
  }

  /**
   * Отключить Яндекс.Метрику
   */
  async adminDisconnectMetrica() {
    return this.adminRequest('/metrica/disconnect', {
      method: 'DELETE',
    });
  }

  // =============================================
  // ADMIN API - Пользователи
  // =============================================

  /**
   * Получить список пользователей
   */
  async adminGetUsers() {
    return this.adminRequest('/users');
  }

  /**
   * Получить пользователя по ID
   */
  async adminGetUser(id) {
    return this.adminRequest(`/users/${id}`);
  }

  /**
   * Создать пользователя
   */
  async adminCreateUser(userData) {
    return this.adminRequest('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  /**
   * Обновить пользователя
   */
  async adminUpdateUser(id, userData) {
    return this.adminRequest(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  /**
   * Удалить пользователя
   */
  async adminDeleteUser(id) {
    return this.adminRequest(`/users/${id}`, {
      method: 'DELETE',
    });
  }

  // =============================================
  // ADMIN API - Страницы
  // =============================================

  /**
   * Получить список всех страниц
   */
  async adminGetPages() {
    return this.adminRequest('/pages');
  }

  /**
   * Получить контент страницы
   */
  async adminGetPage(path) {
    const encodedPath = encodeURIComponent(path.replace(/^\//, ''));
    return this.adminRequest(`/pages/${encodedPath}`);
  }

  /**
   * Обновить контент страницы
   */
  async adminUpdatePage(path, pageData) {
    const encodedPath = encodeURIComponent(path.replace(/^\//, ''));
    return this.adminRequest(`/pages/${encodedPath}`, {
      method: 'PUT',
      body: JSON.stringify(pageData),
    });
  }
}

export default new ApiService();

