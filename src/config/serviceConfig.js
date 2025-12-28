/**
 * Конфигурация для каждой услуги
 * Определяет обязательные поля, доступные цели и другие параметры
 */

export const SERVICE_CONFIG = {
  // SEO услуги
  'SEO-продвижение': {
    requiresWebsite: true,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Рост заявок', 'Рост трафика', 'Аудит текущего состояния', 'Другое'],
    requiresCompany: false,
  },
  'GEO / AI SEO': {
    requiresWebsite: true,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Рост заявок', 'Рост трафика', 'Аудит текущего состояния', 'Другое'],
    requiresCompany: false,
  },
  'Комплексное SEO-продвижение': {
    requiresWebsite: true,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Рост заявок', 'Рост трафика', 'Аудит текущего состояния', 'Другое'],
    requiresCompany: false,
  },
  'Продвижение молодых сайтов': {
    requiresWebsite: true,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Рост заявок', 'Рост трафика', 'Запуск нового проекта', 'Другое'],
    requiresCompany: false,
  },
  'Базовая оптимизация и мета-теги': {
    requiresWebsite: true,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Рост заявок', 'Рост трафика', 'Аудит текущего состояния', 'Другое'],
    requiresCompany: false,
  },
  'Статейное продвижение': {
    requiresWebsite: true,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Рост заявок', 'Рост трафика', 'Другое'],
    requiresCompany: false,
  },
  'Сбор семантического ядра': {
    requiresWebsite: true,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Рост заявок', 'Рост трафика', 'Аудит текущего состояния', 'Другое'],
    requiresCompany: false,
  },
  'Ссылочное продвижение': {
    requiresWebsite: true,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Рост заявок', 'Рост трафика', 'Другое'],
    requiresCompany: false,
  },
  'Продвижение по словам': {
    requiresWebsite: true,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Рост заявок', 'Рост трафика', 'Другое'],
    requiresCompany: false,
  },
  'SEO-аудит (классический)': {
    requiresWebsite: true,
    requiresGoal: false, // Для аудита цель не обязательна
    requiresBudget: true,
    availableGoals: ['Аудит текущего состояния', 'Другое'],
    requiresCompany: false,
  },
  'SEO для маркетплейсов (WB, Ozon)': {
    requiresWebsite: false, // Для маркетплейсов сайт не нужен
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Рост заявок', 'Рост трафика', 'Другое'],
    requiresCompany: false,
  },
  
  // Реклама
  'Контекстная реклама': {
    requiresWebsite: false,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Рост заявок', 'Рост трафика', 'Другое'],
    requiresCompany: false,
  },
  'Таргетированная реклама': {
    requiresWebsite: false,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Рост заявок', 'Рост трафика', 'Другое'],
    requiresCompany: false,
  },
  'Настройка Яндекс.Директ': {
    requiresWebsite: false,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Рост заявок', 'Рост трафика', 'Другое'],
    requiresCompany: false,
  },
  
  // Разработка
  'Разработка сайта': {
    requiresWebsite: false,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Запуск нового проекта', 'Другое'],
    requiresCompany: false,
  },
  'Веб-разработка': {
    requiresWebsite: false,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Запуск нового проекта', 'Другое'],
    requiresCompany: false,
  },
  
  // Поддержка
  'Поддержка / доработка': {
    requiresWebsite: false,
    requiresGoal: false, // Для поддержки цель не обязательна
    requiresBudget: true,
    availableGoals: ['Другое'],
    requiresCompany: false,
  },
  'Поддержка и обслуживание': {
    requiresWebsite: false,
    requiresGoal: false,
    requiresBudget: true,
    availableGoals: ['Другое'],
    requiresCompany: false,
  },
  'Настройка хостинга': {
    requiresWebsite: false,
    requiresGoal: false,
    requiresBudget: true,
    availableGoals: ['Другое'],
    requiresCompany: false,
  },
  
  // Автоматизация
  'Автоматизация / боты': {
    requiresWebsite: false,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Автоматизация процессов', 'Рост заявок', 'Другое'],
    requiresCompany: false,
  },
  'Telegram-боты и Mini Apps': {
    requiresWebsite: false,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Автоматизация процессов', 'Рост заявок', 'Другое'],
    requiresCompany: false,
  },
  'Автоматизация без кода (Make, n8n)': {
    requiresWebsite: false,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Автоматизация процессов', 'Другое'],
    requiresCompany: false,
  },
  'Индивидуальные скрипты': {
    requiresWebsite: false,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Автоматизация процессов', 'Другое'],
    requiresCompany: false,
  },
  
  // Аналитика
  'Аудит / аналитика': {
    requiresWebsite: true,
    requiresGoal: false, // Для аудита цель не обязательна
    requiresBudget: true,
    availableGoals: ['Аудит текущего состояния', 'Другое'],
    requiresCompany: false,
  },
  'Аналитика и аудит': {
    requiresWebsite: true,
    requiresGoal: false,
    requiresBudget: true,
    availableGoals: ['Аудит текущего состояния', 'Другое'],
    requiresCompany: false,
  },
  'Настройка аналитики': {
    requiresWebsite: true,
    requiresGoal: false,
    requiresBudget: true,
    availableGoals: ['Аудит текущего состояния', 'Другое'],
    requiresCompany: false,
  },
  
  // Дизайн
  'Дизайн': {
    requiresWebsite: false,
    requiresGoal: false, // Для дизайна цель не обязательна
    requiresBudget: true,
    availableGoals: ['Запуск нового проекта', 'Другое'],
    requiresCompany: false,
  },
  'Дизайн логотипа': {
    requiresWebsite: false,
    requiresGoal: false, // Для дизайна логотипа цель не обязательна
    requiresBudget: true,
    availableGoals: ['Запуск нового проекта', 'Другое'],
    requiresCompany: false,
  },
};

/**
 * Получить конфигурацию для услуги
 * Если услуги нет в конфиге, возвращает дефолтные значения
 */
export const getServiceConfig = (serviceName) => {
  return SERVICE_CONFIG[serviceName] || {
    requiresWebsite: false,
    requiresGoal: true,
    requiresBudget: true,
    availableGoals: ['Рост заявок', 'Рост трафика', 'Запуск нового проекта', 'Аудит текущего состояния', 'Автоматизация процессов', 'Другое'],
    requiresCompany: false,
  };
};

