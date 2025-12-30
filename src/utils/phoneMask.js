/**
 * Утилита для форматирования номера телефона
 * Поддерживает российские номера в формате +7 (___) ___-__-__
 */

/**
 * Применяет маску к номеру телефона
 * @param {string} value - введенное значение
 * @returns {string} - отформатированный номер
 */
export const applyPhoneMask = (value) => {
  // Удаляем все нецифровые символы, кроме +
  let digits = value.replace(/[^\d+]/g, '');
  
  // Если начинается не с +7, добавляем +7
  if (!digits.startsWith('+')) {
    if (digits.startsWith('7') || digits.startsWith('8')) {
      digits = '+7' + digits.substring(1);
    } else if (digits.length > 0) {
      digits = '+7' + digits;
    } else {
      return '';
    }
  } else if (digits.startsWith('+') && !digits.startsWith('+7')) {
    // Если начинается с +, но не с +7, заменяем на +7
    digits = '+7' + digits.substring(1).replace(/\D/g, '');
  }
  
  // Ограничиваем до 12 символов (+7 и 10 цифр)
  digits = digits.substring(0, 12);
  
  // Если только +7, возвращаем как есть
  if (digits.length <= 2) {
    return digits;
  }
  
  // Форматируем: +7 (___) ___-__-__
  const code = digits.substring(2, 5);
  const part1 = digits.substring(5, 8);
  const part2 = digits.substring(8, 10);
  const part3 = digits.substring(10, 12);
  
  let formatted = '+7';
  
  if (code) {
    formatted += ` (${code}`;
    if (part1) {
      formatted += `) ${part1}`;
      if (part2) {
        formatted += `-${part2}`;
        if (part3) {
          formatted += `-${part3}`;
        }
      }
    } else {
      formatted += ')';
    }
  }
  
  return formatted;
};

/**
 * Очищает номер телефона от форматирования
 * @param {string} value - отформатированный номер
 * @returns {string} - чистый номер (только цифры и +)
 */
export const cleanPhoneNumber = (value) => {
  return value.replace(/[^\d+]/g, '');
};

/**
 * Валидирует номер телефона
 * @param {string} value - номер телефона
 * @returns {boolean} - валидный ли номер
 */
export const isValidPhoneNumber = (value) => {
  const cleaned = cleanPhoneNumber(value);
  // Должен начинаться с +7 и содержать 10 цифр после +7
  return /^\+7\d{10}$/.test(cleaned);
};



