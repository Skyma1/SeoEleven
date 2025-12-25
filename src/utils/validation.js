/**
 * Утилиты для валидации форм
 * 
 * Используется для валидации контактной формы,
 * форм в админке и других инпутов
 */

import { VALIDATION, SERVICES_REQUIRING_WEBSITE } from '../config/constants';

// =============================================
// Базовые валидаторы
// =============================================

export const validators = {
  /**
   * Проверка обязательного поля
   */
  required: (value, message = 'Это поле обязательно') => {
    if (value === null || value === undefined) return message;
    if (typeof value === 'string' && !value.trim()) return message;
    if (typeof value === 'boolean' && !value) return message;
    return null;
  },

  /**
   * Проверка минимальной длины
   */
  minLength: (min, message) => (value) => {
    if (!value) return null; // Пустые значения проверяются через required
    const length = typeof value === 'string' ? value.trim().length : value.length;
    return length >= min ? null : message || `Минимум ${min} символов`;
  },

  /**
   * Проверка максимальной длины
   */
  maxLength: (max, message) => (value) => {
    if (!value) return null;
    const length = typeof value === 'string' ? value.trim().length : value.length;
    return length <= max ? null : message || `Максимум ${max} символов`;
  },

  /**
   * Валидация email
   */
  email: (value, message = 'Введите корректный email') => {
    if (!value) return null;
    return VALIDATION.EMAIL_REGEX.test(value.trim()) ? null : message;
  },

  /**
   * Валидация телефона
   */
  phone: (value, message = 'Введите корректный телефон') => {
    if (!value) return null;
    return value.trim().length >= VALIDATION.PHONE_MIN_LENGTH ? null : message;
  },

  /**
   * Валидация URL
   */
  url: (value, message = 'Введите корректный URL (начинается с http:// или https://)') => {
    if (!value) return null;
    return VALIDATION.URL_REGEX.test(value.trim()) ? null : message;
  },

  /**
   * Условная валидация (required только если выполнено условие)
   */
  conditionalRequired: (condition, message) => (value, formData) => {
    if (!condition(formData)) return null;
    return validators.required(value, message);
  },

  /**
   * Проверка, что значение входит в список допустимых
   */
  oneOf: (allowedValues, message) => (value) => {
    if (!value) return null;
    return allowedValues.includes(value) ? null : message || 'Недопустимое значение';
  },

  /**
   * Валидация пароля
   */
  password: (value, message) => {
    if (!value) return null;
    if (value.length < VALIDATION.PASSWORD_MIN_LENGTH) {
      return message || `Минимум ${VALIDATION.PASSWORD_MIN_LENGTH} символов`;
    }
    return null;
  },
};

// =============================================
// Валидация контактной формы
// =============================================

export const validateContactForm = (formData) => {
  const errors = {};

  // Имя
  const nameError = 
    validators.required(formData.name, 'Укажите, как к вам обращаться') ||
    validators.minLength(VALIDATION.NAME_MIN_LENGTH)(formData.name) ||
    validators.maxLength(VALIDATION.NAME_MAX_LENGTH)(formData.name);
  if (nameError) errors.name = nameError;

  // Контакт (email или телефон)
  const contactLabel = formData.contactType === 'phone' ? 'телефон' : 'email';
  const contactError = validators.required(
    formData.contact, 
    `Укажите ${contactLabel}`
  );
  if (contactError) {
    errors.contact = contactError;
  } else {
    const specificError = formData.contactType === 'email'
      ? validators.email(formData.contact)
      : validators.phone(formData.contact);
    if (specificError) errors.contact = specificError;
  }

  // Компания (опциональная)
  if (formData.company) {
    const companyError = validators.maxLength(VALIDATION.COMPANY_MAX_LENGTH)(formData.company);
    if (companyError) errors.company = companyError;
  }

  // Услуга
  const serviceError = validators.required(formData.service, 'Выберите услугу');
  if (serviceError) errors.service = serviceError;

  // Сайт (обязателен для некоторых услуг)
  if (SERVICES_REQUIRING_WEBSITE.includes(formData.service)) {
    const websiteError = 
      validators.required(formData.website, 'Для этой услуги требуется указать сайт') ||
      validators.url(formData.website);
    if (websiteError) errors.website = websiteError;
  } else if (formData.website) {
    // Если сайт указан для других услуг, проверяем формат
    const websiteError = validators.url(formData.website);
    if (websiteError) errors.website = websiteError;
  }

  // Цель
  const goalError = validators.required(formData.goal, 'Укажите основную цель');
  if (goalError) errors.goal = goalError;

  // Бюджет
  const budgetError = validators.required(formData.budget, 'Укажите примерный бюджет');
  if (budgetError) errors.budget = budgetError;

  // Комментарий (опциональный)
  if (formData.comment) {
    const commentError = validators.maxLength(VALIDATION.COMMENT_MAX_LENGTH)(formData.comment);
    if (commentError) errors.comment = commentError;
  }

  // Согласие с политикой конфиденциальности
  const privacyError = validators.required(
    formData.privacyAgreed, 
    'Необходимо согласие на обработку данных'
  );
  if (privacyError) errors.privacyAgreed = privacyError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// =============================================
// Валидация логина админа
// =============================================

export const validateAdminLogin = (formData) => {
  const errors = {};

  const emailError = 
    validators.required(formData.email, 'Введите email') ||
    validators.email(formData.email);
  if (emailError) errors.email = emailError;

  const passwordError = validators.required(formData.password, 'Введите пароль');
  if (passwordError) errors.password = passwordError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// =============================================
// Валидация поста блога
// =============================================

export const validateBlogPost = (postData) => {
  const errors = {};

  const titleError = 
    validators.required(postData.title, 'Введите заголовок') ||
    validators.minLength(5, 'Минимум 5 символов')(postData.title) ||
    validators.maxLength(200, 'Максимум 200 символов')(postData.title);
  if (titleError) errors.title = titleError;

  const excerptError = 
    validators.required(postData.excerpt, 'Введите краткое описание') ||
    validators.minLength(20, 'Минимум 20 символов')(postData.excerpt) ||
    validators.maxLength(500, 'Максимум 500 символов')(postData.excerpt);
  if (excerptError) errors.excerpt = excerptError;

  const contentError = 
    validators.required(postData.content, 'Введите содержание') ||
    validators.minLength(50, 'Минимум 50 символов')(postData.content);
  if (contentError) errors.content = contentError;

  const authorError = validators.required(postData.author, 'Введите автора');
  if (authorError) errors.author = authorError;

  const dateError = validators.required(postData.date, 'Выберите дату');
  if (dateError) errors.date = dateError;

  const categoryError = validators.required(postData.category, 'Выберите категорию');
  if (categoryError) errors.category = categoryError;

  // Tags - опциональные, но если есть, должны быть массивом
  if (postData.tags && !Array.isArray(postData.tags)) {
    errors.tags = 'Теги должны быть массивом';
  }

  // Image URL - опциональная, но если есть, должна быть валидным URL
  if (postData.image) {
    const imageError = validators.url(postData.image, 'Введите корректный URL изображения');
    if (imageError) errors.image = imageError;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// =============================================
// Валидация кейса
// =============================================

export const validateCase = (caseData) => {
  const errors = {};

  const titleError = 
    validators.required(caseData.title, 'Введите название') ||
    validators.minLength(10, 'Минимум 10 символов')(caseData.title) ||
    validators.maxLength(200, 'Максимум 200 символов')(caseData.title);
  if (titleError) errors.title = titleError;

  const clientError = validators.required(caseData.client, 'Введите название клиента');
  if (clientError) errors.client = clientError;

  const descriptionError = 
    validators.required(caseData.description, 'Введите описание') ||
    validators.minLength(50, 'Минимум 50 символов')(caseData.description) ||
    validators.maxLength(1000, 'Максимум 1000 символов')(caseData.description);
  if (descriptionError) errors.description = descriptionError;

  const categoryError = validators.required(caseData.category, 'Выберите категорию');
  if (categoryError) errors.category = categoryError;

  const periodError = validators.required(caseData.period, 'Укажите период работы');
  if (periodError) errors.period = periodError;

  // Results должны быть массивом с минимум 1 элементом
  if (!caseData.results || !Array.isArray(caseData.results) || caseData.results.length === 0) {
    errors.results = 'Добавьте хотя бы один результат';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// =============================================
// Универсальная валидация формы
// =============================================

/**
 * Универсальная функция валидации
 * @param {Object} formData - данные формы
 * @param {Object} rules - правила валидации для каждого поля
 * @returns {Object} - { isValid, errors }
 */
export const validateForm = (formData, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const fieldRules = Array.isArray(rules[field]) ? rules[field] : [rules[field]];
    
    for (const rule of fieldRules) {
      const error = typeof rule === 'function' 
        ? rule(formData[field], formData) 
        : null;
      
      if (error) {
        errors[field] = error;
        break; // Останавливаемся на первой ошибке для поля
      }
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

