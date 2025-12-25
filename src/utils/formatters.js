/**
 * Утилиты для форматирования данных
 * 
 * Форматирование дат, чисел, валюты и других данных
 * для отображения пользователю
 */

// =============================================
// Форматирование дат
// =============================================

/**
 * Форматировать дату в читаемый вид
 * @param {string|Date} dateString - дата для форматирования
 * @param {Object} options - опции форматирования
 * @returns {string} - отформатированная дата
 */
export const formatDate = (dateString, options = {}) => {
  if (!dateString) return '';

  const defaultOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    ...options,
  };
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // Если дата невалидна, вернуть как есть
    return date.toLocaleString('ru-RU', defaultOptions);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

/**
 * Форматировать дату и время
 * @param {string|Date} dateString - дата для форматирования
 * @returns {string} - дата и время в формате "ДД.ММ.ГГГГ ЧЧ:ММ"
 */
export const formatDateTime = (dateString) => {
  return formatDate(dateString, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Форматировать дату для API (YYYY-MM-DD)
 * @param {string|Date} dateString - дата для форматирования
 * @returns {string} - дата в формате YYYY-MM-DD
 */
export const formatDateForAPI = (dateString) => {
  if (!dateString) return '';

  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  } catch (error) {
    console.error('Error formatting date for API:', error);
    return '';
  }
};

/**
 * Получить относительное время (например, "2 часа назад")
 * @param {string|Date} dateString - дата
 * @returns {string} - относительное время
 */
export const formatRelativeTime = (dateString) => {
  if (!dateString) return '';

  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);

    if (diffSec < 60) return 'только что';
    if (diffMin < 60) return `${diffMin} мин. назад`;
    if (diffHour < 24) return `${diffHour} ч. назад`;
    if (diffDay < 7) return `${diffDay} дн. назад`;
    
    return formatDate(dateString);
  } catch (error) {
    return formatDate(dateString);
  }
};

// =============================================
// Форматирование чисел
// =============================================

/**
 * Форматировать число с разделителями тысяч
 * @param {number} number - число для форматирования
 * @returns {string} - отформатированное число
 */
export const formatNumber = (number) => {
  if (number === null || number === undefined) return '0';
  return new Intl.NumberFormat('ru-RU').format(number);
};

/**
 * Форматировать число в процентах
 * @param {number} number - число (0-100 или 0-1)
 * @param {number} decimals - количество знаков после запятой
 * @param {boolean} isDecimal - число в формате 0-1 (true) или 0-100 (false)
 * @returns {string} - число с знаком процента
 */
export const formatPercent = (number, decimals = 0, isDecimal = false) => {
  if (number === null || number === undefined) return '0%';
  const value = isDecimal ? number * 100 : number;
  return `${value.toFixed(decimals)}%`;
};

/**
 * Форматировать большие числа с сокращениями (K, M, B)
 * @param {number} number - число
 * @returns {string} - сокращенное число
 */
export const formatCompactNumber = (number) => {
  if (number === null || number === undefined) return '0';
  if (number < 1000) return number.toString();
  
  const units = ['', 'K', 'M', 'B', 'T'];
  const order = Math.floor(Math.log10(Math.abs(number)) / 3);
  const unitName = units[order];
  const num = number / Math.pow(10, order * 3);
  
  return `${num.toFixed(1)}${unitName}`;
};

// =============================================
// Форматирование валюты
// =============================================

/**
 * Форматировать сумму в рубли
 * @param {number} amount - сумма
 * @param {boolean} withDecimals - показывать копейки
 * @returns {string} - отформатированная сумма
 */
export const formatCurrency = (amount, withDecimals = false) => {
  if (amount === null || amount === undefined) return '0 ₽';
  
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: withDecimals ? 2 : 0,
    maximumFractionDigits: withDecimals ? 2 : 0,
  }).format(amount);
};

/**
 * Форматировать цену (с "от" если priceFrom = true)
 * @param {number} price - цена
 * @param {boolean} priceFrom - добавить "от"
 * @returns {string} - отформатированная цена
 */
export const formatPrice = (price, priceFrom = false) => {
  const formattedPrice = formatCurrency(price);
  return priceFrom ? `от ${formattedPrice}` : formattedPrice;
};

// =============================================
// Форматирование текста
// =============================================

/**
 * Обрезать текст до определенной длины
 * @param {string} text - текст
 * @param {number} maxLength - максимальная длина
 * @param {string} suffix - окончание (по умолчанию "...")
 * @returns {string} - обрезанный текст
 */
export const truncateText = (text, maxLength = 100, suffix = '...') => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength).trim()}${suffix}`;
};

/**
 * Обрезать текст по словам (не обрывая слова)
 * @param {string} text - текст
 * @param {number} maxLength - максимальная длина
 * @returns {string} - обрезанный текст
 */
export const truncateWords = (text, maxLength = 100) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  
  const truncated = text.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  if (lastSpaceIndex > 0) {
    return `${truncated.substring(0, lastSpaceIndex)}...`;
  }
  
  return `${truncated}...`;
};

/**
 * Капитализировать первую букву
 * @param {string} text - текст
 * @returns {string} - текст с заглавной буквы
 */
export const capitalize = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

/**
 * Капитализировать каждое слово
 * @param {string} text - текст
 * @returns {string} - текст с заглавными буквами в начале каждого слова
 */
export const capitalizeWords = (text) => {
  if (!text) return '';
  return text.split(' ').map(word => capitalize(word)).join(' ');
};

/**
 * Удалить HTML теги из текста
 * @param {string} html - HTML строка
 * @returns {string} - чистый текст
 */
export const stripHtml = (html) => {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
};

/**
 * Создать slug из текста (для URL)
 * @param {string} text - текст
 * @returns {string} - slug
 */
export const createSlug = (text) => {
  if (!text) return '';
  
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\wа-яё\s-]/g, '') // Удалить специальные символы
    .replace(/\s+/g, '-') // Заменить пробелы на дефисы
    .replace(/-+/g, '-') // Убрать повторяющиеся дефисы
    .replace(/^-|-$/g, ''); // Убрать дефисы в начале и конце
};

// =============================================
// Форматирование контактов
// =============================================

/**
 * Форматировать номер телефона
 * @param {string} phone - номер телефона
 * @returns {string} - отформатированный номер
 */
export const formatPhone = (phone) => {
  if (!phone) return '';
  
  // Убираем все кроме цифр
  const cleaned = phone.replace(/\D/g, '');
  
  // Форматируем для российских номеров
  if (cleaned.length === 11 && cleaned[0] === '7') {
    return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`;
  }
  
  return phone;
};

/**
 * Форматировать email (обрезать длинные)
 * @param {string} email - email
 * @param {number} maxLength - максимальная длина
 * @returns {string} - отформатированный email
 */
export const formatEmail = (email, maxLength = 30) => {
  if (!email) return '';
  if (email.length <= maxLength) return email;
  
  const [localPart, domain] = email.split('@');
  if (!domain) return truncateText(email, maxLength);
  
  const availableLength = maxLength - domain.length - 4; // -4 для "...@"
  if (availableLength <= 0) return truncateText(email, maxLength);
  
  return `${localPart.substring(0, availableLength)}...@${domain}`;
};

// =============================================
// Форматирование для файлов
// =============================================

/**
 * Форматировать размер файла
 * @param {number} bytes - размер в байтах
 * @param {number} decimals - количество знаков после запятой
 * @returns {string} - отформатированный размер
 */
export const formatFileSize = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

// =============================================
// Форматирование для отображения
// =============================================

/**
 * Форматировать массив в строку с разделителями
 * @param {Array} array - массив
 * @param {string} separator - разделитель
 * @returns {string} - строка
 */
export const formatArrayToString = (array, separator = ', ') => {
  if (!array || !Array.isArray(array)) return '';
  return array.join(separator);
};

/**
 * Форматировать boolean в текст (Да/Нет)
 * @param {boolean} value - значение
 * @returns {string} - "Да" или "Нет"
 */
export const formatBoolean = (value) => {
  return value ? 'Да' : 'Нет';
};

