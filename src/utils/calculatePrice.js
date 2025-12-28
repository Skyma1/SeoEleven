/**
 * Утилита для расчета стоимости услуг на основе ответов пользователя
 */

import { PRICING_CONFIG, ANSWER_MAPPING, VALUE_MAPPING } from '../config/pricingConfig';

/**
 * Форматирует число в читаемый формат цены
 * @param {number} price - цена
 * @returns {string} - отформатированная цена
 */
export const formatPrice = (price) => {
  if (!price || price === 0) return 'По запросу';
  
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price).replace('RUB', '₽');
};

/**
 * Рассчитывает стоимость услуги на основе ответов
 * @param {string} serviceKey - ключ услуги (seo, geo, advertising, etc.)
 * @param {Object} answers - объект с ответами пользователя
 * @returns {Object} - { base, min, max, formatted }
 */
export const calculatePrice = (serviceKey, answers) => {
  const config = PRICING_CONFIG[serviceKey];
  
  // Если услуга "Другое" или нет конфигурации
  if (!config || !config.basePrice) {
    return {
      base: null,
      min: null,
      max: null,
      formatted: {
        base: 'По запросу',
        min: null,
        max: null,
        range: null
      }
    };
  }

  const answerMapping = ANSWER_MAPPING[serviceKey];
  const valueMapping = VALUE_MAPPING[serviceKey];
  
  if (!answerMapping || !valueMapping) {
    // Если нет маппинга, возвращаем базовую цену
    const base = config.basePrice;
    const range = config.range || 0.15;
    const min = Math.round(base * (1 - range));
    const max = Math.round(base * (1 + range));
    
    return {
      base,
      min,
      max,
      formatted: {
        base: formatPrice(base),
        min: formatPrice(min),
        max: formatPrice(max),
        range: `${formatPrice(min)} – ${formatPrice(max)}`
      }
    };
  }

  // Начальная цена
  let finalPrice = config.basePrice;

  // Применяем фиксированные надбавки (если есть)
  if (config.fixedAdditions) {
    Object.keys(config.fixedAdditions).forEach((key) => {
      const answerKey = answerMapping[`question_${Object.keys(answers).filter(k => k.startsWith('question_')).length - 1}`];
      
      // Ищем ответ, который соответствует этому ключу
      for (let i = 0; i < 10; i++) {
        const questionKey = `question_${i}`;
        if (answerMapping[questionKey] === key && answers[questionKey]) {
          const mappedValue = valueMapping[key]?.[answers[questionKey]];
          if (mappedValue && config.fixedAdditions[key][mappedValue] !== undefined) {
            finalPrice += config.fixedAdditions[key][mappedValue];
          }
          break;
        }
      }
    });
  }

  // Применяем коэффициенты
  Object.keys(answerMapping).forEach((questionKey) => {
    const coefficientKey = answerMapping[questionKey];
    const answerValue = answers[questionKey];
    
    if (answerValue && config.coefficients[coefficientKey]) {
      const mappedValue = valueMapping[coefficientKey]?.[answerValue];
      
      if (mappedValue && config.coefficients[coefficientKey][mappedValue] !== undefined) {
        finalPrice *= config.coefficients[coefficientKey][mappedValue];
      }
    }
  });

  // Округляем до тысяч
  finalPrice = Math.round(finalPrice / 1000) * 1000;

  // Рассчитываем диапазон
  const range = config.range || 0.15;
  const min = Math.round(finalPrice * (1 - range));
  const max = Math.round(finalPrice * (1 + range));

  return {
    base: finalPrice,
    min,
    max,
    formatted: {
      base: formatPrice(finalPrice),
      min: formatPrice(min),
      max: formatPrice(max),
      range: `${formatPrice(min)} – ${formatPrice(max)}`
    }
  };
};

/**
 * Улучшенная версия расчета с правильной обработкой всех ответов
 * @param {string} serviceKey - ключ услуги
 * @param {Object} answers - объект с ответами
 * @returns {Object} - результат расчета
 */
export const calculatePriceAdvanced = (serviceKey, answers) => {
  const config = PRICING_CONFIG[serviceKey];
  
  if (!config || !config.basePrice) {
    return {
      base: null,
      min: null,
      max: null,
      formatted: {
        base: 'По запросу',
        min: null,
        max: null,
        range: null
      }
    };
  }

  const answerMapping = ANSWER_MAPPING[serviceKey];
  const valueMapping = VALUE_MAPPING[serviceKey];
  
  if (!answerMapping || !valueMapping) {
    const base = config.basePrice;
    const range = config.range || 0.15;
    const min = Math.round(base * (1 - range));
    const max = Math.round(base * (1 + range));
    
    return {
      base,
      min,
      max,
      formatted: {
        base: formatPrice(base),
        min: formatPrice(min),
        max: formatPrice(max),
        range: `${formatPrice(min)} – ${formatPrice(max)}`
      }
    };
  }

  let finalPrice = config.basePrice;

  // Собираем все ответы в правильном порядке (по индексу вопроса)
  const questionAnswers = Object.keys(answers)
    .filter(k => k.startsWith('question_'))
    .map(k => ({
      key: k,
      index: parseInt(k.replace('question_', '')),
      value: answers[k]
    }))
    .sort((a, b) => a.index - b.index);

  // Применяем коэффициенты и надбавки в правильном порядке
  questionAnswers.forEach(({ key, value }) => {
    const coefficientKey = answerMapping[key];
    
    if (!coefficientKey || !value) return;

    // Проверяем, это фиксированная надбавка или коэффициент
    if (config.fixedAdditions && config.fixedAdditions[coefficientKey]) {
      // Фиксированная надбавка
      // Используем маппинг, если он есть, иначе используем значение напрямую
      const mappedValue = valueMapping[coefficientKey]?.[value] ?? value;
      if (config.fixedAdditions[coefficientKey][mappedValue] !== undefined) {
        finalPrice += config.fixedAdditions[coefficientKey][mappedValue];
      }
    } else if (config.coefficients && config.coefficients[coefficientKey]) {
      // Коэффициент
      // Используем маппинг, если он есть, иначе используем значение напрямую
      const mappedValue = valueMapping[coefficientKey]?.[value] ?? value;
      if (config.coefficients[coefficientKey][mappedValue] !== undefined) {
        finalPrice *= config.coefficients[coefficientKey][mappedValue];
      }
    }
  });

  // Округляем до тысяч
  finalPrice = Math.round(finalPrice / 1000) * 1000;

  // Рассчитываем диапазон
  const range = config.range || 0.15;
  const min = Math.round(finalPrice * (1 - range));
  const max = Math.round(finalPrice * (1 + range));

  return {
    base: finalPrice,
    min,
    max,
    formatted: {
      base: formatPrice(finalPrice),
      min: formatPrice(min),
      max: formatPrice(max),
      range: `${formatPrice(min)} – ${formatPrice(max)}`
    }
  };
};

