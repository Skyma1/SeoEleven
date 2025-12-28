/**
 * Конфигурация цен и коэффициентов для калькулятора услуг
 * 
 * Используется для расчета финальной стоимости на основе ответов пользователя
 */

export const PRICING_CONFIG = {
  seo: {
    basePrice: 70000,
    format: 'Подписка',
    coefficients: {
      siteType: {
        landing: 0.7,
        corporate: 1.0,
        ecommerce: 1.4,
        other: 1.0
      },
      volume: {
        small: 0.8,    // до 50 стр
        medium: 1.0,  // 50–200
        large: 1.3    // 200+
      },
      stage: {
        new: 1.2,
        existing: 1.0,
        redesign: 1.3
      }
    },
    range: 0.15 // ±15% для диапазона
  },

  geo: {
    basePrice: 120000,
    format: 'Проект',
    coefficients: {
      siteType: {
        landing: 0.8,
        corporate: 1.0,
        ecommerce: 1.4,
        other: 1.0
      },
      content: {
        small: 0.8,   // до 30 стр
        medium: 1.0,  // 30–100
        large: 1.3    // 100+
      },
      stage: {
        new: 1.1,
        existing: 1.0,
        optimization: 1.0
      }
    },
    range: 0.12 // ±12% для диапазона
  },

  advertising: {
    basePrice: 30000,
    format: 'Настройка + управление',
    fixedAdditions: {
      platform: {
        yandex: 0,
        google: 10000,
        both: 20000
      }
    },
    coefficients: {
      region: {
        local: 1.0,      // один город
        region: 1.1,    // регион
        russia: 1.2     // вся Россия
      },
      goal: {
        leads: 1.0,
        sales: 1.2,
        traffic: 0.9
      }
    },
    range: 0.15 // ±15% для диапазона
  },

  development: {
    basePrice: 150000,
    format: 'Проект',
    coefficients: {
      siteType: {
        landing: 0.5,
        corporate: 1.0,
        ecommerce: 1.8,
        platform: 2.5
      },
      stage: {
        idea: 1.0,      // есть идея, нужна разработка
        design: 0.8,    // есть дизайн, нужна вёрстка
        redesign: 0.8  // редизайн существующего
      },
      deadline: {
        urgent: 1.3,   // срочно (до 1 месяца)
        normal: 1.0,   // обычные (1–3 месяца)
        flexible: 0.95 // гибкие сроки
      }
    },
    range: 0.2 // ±20% для диапазона
  },

  support: {
    basePrice: 20000,
    format: 'Подписка',
    coefficients: {
      type: {
        technical: 1.0,      // техническая поддержка
        content: 0.9,       // обновление контента
        development: 1.3,   // доработки и новые функции
        complex: 1.5        // комплексная поддержка
      },
      volume: {
        minimal: 0.8,   // до 10 часов/мес
        standard: 1.0,  // 10–30 часов/мес
        extended: 1.5   // 30+ часов/мес
      }
    },
    range: 0.15 // ±15% для диапазона
  },

  analytics: {
    basePrice: 15000,
    format: 'Проект',
    fixedAdditions: {
      auditType: {
        seo: 0,
        technical: 10000,
        analytics: 25000,
        complex: 35000
      }
    },
    coefficients: {
      siteSize: {
        small: 1.0,    // до 50 страниц
        medium: 1.3,   // 50–200 страниц
        large: 1.7     // более 200 страниц
      }
    },
    range: 0.15 // ±15% для диапазона
  },

  other: {
    basePrice: null,
    format: 'Индивидуально',
    range: 0
  }
};

/**
 * Маппинг ответов пользователя на ключи коэффициентов
 */
export const ANSWER_MAPPING = {
  seo: {
    question_0: 'siteType',  // Тип сайта
    question_1: 'volume',    // Объём работ
    question_2: 'stage'     // Стадия проекта
  },
  geo: {
    question_0: 'siteType',  // Тип сайта
    question_1: 'content',  // Объём контента
    question_2: 'stage'     // Стадия проекта
  },
  advertising: {
    question_0: 'platform', // Платформа
    question_1: 'region',  // Регион
    question_2: 'goal'      // Основная цель
  },
  development: {
    question_0: 'siteType', // Тип сайта
    question_1: 'stage',    // Стадия проекта
    question_2: 'deadline' // Сроки
  },
  support: {
    question_0: 'type',     // Тип поддержки
    question_1: 'volume'    // Объём работ
  },
  analytics: {
    question_0: 'auditType', // Тип аудита
    question_1: 'siteSize'  // Размер сайта
  }
};

/**
 * Маппинг значений ответов на ключи в конфигурации
 */
export const VALUE_MAPPING = {
  seo: {
    siteType: {
      corporate: 'corporate',
      ecommerce: 'ecommerce',
      landing: 'landing',
      other: 'other'
    },
    volume: {
      small: 'small',
      medium: 'medium',
      large: 'large'
    },
    stage: {
      new: 'new',
      existing: 'existing',
      redesign: 'redesign'
    }
  },
  geo: {
    siteType: {
      corporate: 'corporate',
      ecommerce: 'ecommerce',
      landing: 'landing',
      other: 'other'
    },
    content: {
      small: 'small',
      medium: 'medium',
      large: 'large'
    },
    stage: {
      new: 'new',
      existing: 'existing',
      optimization: 'optimization'
    }
  },
  advertising: {
    platform: {
      yandex: 'yandex',
      google: 'google',
      both: 'both'
    },
    region: {
      local: 'local',
      region: 'region',
      russia: 'russia'
    },
    goal: {
      leads: 'leads',
      sales: 'sales',
      traffic: 'traffic'
    }
  },
  development: {
    siteType: {
      corporate: 'corporate',
      ecommerce: 'ecommerce',
      landing: 'landing',
      platform: 'platform'
    },
    stage: {
      idea: 'idea',
      design: 'design',
      redesign: 'redesign'
    },
    deadline: {
      urgent: 'urgent',
      normal: 'normal',
      flexible: 'flexible'
    }
  },
  support: {
    type: {
      technical: 'technical',
      content: 'content',
      development: 'development',
      complex: 'complex'
    },
    volume: {
      minimal: 'minimal',
      standard: 'standard',
      extended: 'extended'
    }
  },
  analytics: {
    auditType: {
      seo: 'seo',
      technical: 'technical',
      analytics: 'analytics',
      complex: 'complex'
    },
    siteSize: {
      small: 'small',
      medium: 'medium',
      large: 'large'
    }
  }
};

