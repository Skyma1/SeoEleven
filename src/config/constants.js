/**
 * Константы приложения
 * 
 * Все магические строки и конфигурационные значения
 * должны быть вынесены в этот файл
 */

// =============================================
// API Configuration
// =============================================

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
export const API_TIMEOUT = 30000; // 30 seconds

// =============================================
// Routes
// =============================================

export const ROUTES = {
  HOME: '/',
  BLOG: '/blog',
  BLOG_POST: '/blog/:id',
  CASES: '/cases',
  ABOUT: '/about',
  CONTACT: '/contact',
  PRIVACY: '/privacy',
  
  // Admin routes
  ADMIN: '/admin',
  ADMIN_LOGIN: '/admin/login',
  ADMIN_BLOG: '/admin/blog',
  ADMIN_BLOG_NEW: '/admin/blog/new',
  ADMIN_BLOG_EDIT: '/admin/blog/:id/edit',
  ADMIN_CASES: '/admin/cases',
  ADMIN_CASES_NEW: '/admin/cases/new',
  ADMIN_CASES_EDIT: '/admin/cases/:id/edit',
  ADMIN_SERVICES: '/admin/services',
  ADMIN_REQUESTS: '/admin/requests',
  ADMIN_STATISTICS: '/admin',
};

// =============================================
// Form Options - Контактная форма
// =============================================

export const FORM_SERVICES = [
  'SEO-продвижение',
  'GEO / AI SEO',
  'Контекстная реклама',
  'Разработка сайта',
  'Поддержка / доработка',
  'Автоматизация / боты',
  'Аудит / аналитика',
];

export const FORM_GOALS = [
  'Рост заявок',
  'Рост трафика',
  'Запуск нового проекта',
  'Аудит текущего состояния',
  'Автоматизация процессов',
  'Другое',
];

export const FORM_BUDGETS = [
  'До 30 000 ₽',
  '30 000 – 70 000 ₽',
  '70 000 – 150 000 ₽',
  '150 000 ₽ и выше',
  'Пока не определились',
];

export const FORM_TIMELINES = [
  'Как можно быстрее',
  'В течение месяца',
  '1–3 месяца',
  'Без жёстких сроков',
];

export const SERVICES_REQUIRING_WEBSITE = [
  'SEO-продвижение',
  'GEO / AI SEO',
  'Аудит / аналитика',
];

export const CONTACT_TYPES = {
  EMAIL: 'email',
  PHONE: 'phone',
};

export const FORM_SOURCES = {
  HERO: 'hero',
  CTA: 'cta',
  HEADER: 'header',
  MOBILE_MENU: 'mobile-menu',
  MODAL: 'modal',
};

// =============================================
// Request Status
// =============================================

export const REQUEST_STATUS = {
  NEW: 'new',
  VIEWED: 'viewed',
  PROCESSED: 'processed',
  ARCHIVED: 'archived',
};

export const REQUEST_STATUS_LABELS = {
  [REQUEST_STATUS.NEW]: 'Новая',
  [REQUEST_STATUS.VIEWED]: 'Просмотрена',
  [REQUEST_STATUS.PROCESSED]: 'Обработана',
  [REQUEST_STATUS.ARCHIVED]: 'Архив',
};

// =============================================
// Blog Categories
// =============================================

export const BLOG_CATEGORIES = [
  'SEO',
  'GEO / AI SEO',
  'Автоматизация',
  'Разработка',
  'Маркетинг',
  'Аналитика',
];

// =============================================
// Case Categories
// =============================================

export const CASE_CATEGORIES = [
  'SEO',
  'GEO / AI SEO',
  'Разработка',
  'Автоматизация',
  'Реклама',
];

// =============================================
// Validation Rules
// =============================================

export const VALIDATION = {
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 100,
  COMPANY_MAX_LENGTH: 200,
  COMMENT_MAX_LENGTH: 2000,
  PHONE_MIN_LENGTH: 5,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  URL_REGEX: /^https?:\/\/.+/,
  PASSWORD_MIN_LENGTH: 6,
};

// =============================================
// LocalStorage Keys
// =============================================

export const STORAGE_KEYS = {
  ADMIN_TOKEN: 'adminToken',
  USER_PREFERENCES: 'userPreferences',
  COOKIE_CONSENT: 'cookieConsent',
};

// =============================================
// Pagination
// =============================================

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  BLOG_POSTS_PER_PAGE: 12,
  CASES_PER_PAGE: 9,
  ADMIN_ITEMS_PER_PAGE: 20,
};

// =============================================
// Date Formats
// =============================================

export const DATE_FORMATS = {
  DISPLAY: 'DD.MM.YYYY',
  DISPLAY_WITH_TIME: 'DD.MM.YYYY HH:mm',
  API: 'YYYY-MM-DD',
  API_WITH_TIME: 'YYYY-MM-DDTHH:mm:ss',
};

// =============================================
// Error Messages
// =============================================

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Проблема с подключением к серверу. Проверьте интернет-соединение.',
  UNKNOWN_ERROR: 'Произошла неизвестная ошибка. Попробуйте позже.',
  AUTH_REQUIRED: 'Требуется авторизация',
  NOT_FOUND: 'Запрашиваемый ресурс не найден',
  SERVER_ERROR: 'Ошибка сервера. Попробуйте позже.',
  VALIDATION_ERROR: 'Проверьте правильность заполнения формы',
};

// =============================================
// Success Messages
// =============================================

export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.',
  POST_CREATED: 'Пост успешно создан',
  POST_UPDATED: 'Пост успешно обновлен',
  POST_DELETED: 'Пост успешно удален',
  CASE_CREATED: 'Кейс успешно создан',
  CASE_UPDATED: 'Кейс успешно обновлен',
  CASE_DELETED: 'Кейс успешно удален',
  SERVICES_UPDATED: 'Услуги успешно обновлены',
  STATUS_UPDATED: 'Статус успешно обновлен',
};

// =============================================
// UI Constants
// =============================================

export const UI = {
  HEADER_HEIGHT: 73,
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024,
  DESKTOP_BREAKPOINT: 1280,
  TOAST_DURATION: 3000,
  MODAL_ANIMATION_DURATION: 300,
};

// =============================================
// Service Mapping (для ContactModal)
// =============================================

export const SERVICE_MAPPING = {
  'AI SEO (GEO)': 'GEO / AI SEO',
  'SEO-продвижение под AI (GEO)': 'GEO / AI SEO',
  'Комплексное SEO-продвижение': 'SEO-продвижение',
  'Контекстная реклама': 'Контекстная реклама',
  'Таргетированная реклама': 'Контекстная реклама',
  'Web development': 'Разработка сайта',
  'Веб-разработка': 'Разработка сайта',
  'Support & maintenance': 'Поддержка / доработка',
  'Telegram bots & Mini Apps': 'Автоматизация / боты',
  'No-code automation': 'Автоматизация / боты',
  'Advanced analytics & audit': 'Аудит / аналитика',
};

