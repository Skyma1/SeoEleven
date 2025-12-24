/**
 * Данные кейсов
 * 
 * TODO: В будущем данные будут загружаться из API или админки
 * Структура данных должна соответствовать этой схеме для упрощения миграции
 * 
 * API endpoint: GET /api/cases
 * Expected response format:
 * {
 *   "cases": [
 *     {
 *       "id": number,
 *       "title": string,
 *       "client": string,
 *       "description": string,
 *       "category": string,
 *       "period": string,
 *       "results": Array<{ label: string, value: string }>,
 *       "tags": string[],
 *       "featured": boolean,
 *       "image": string (optional),
 *       "url": string (optional),
 *       "createdAt": string (optional),
 *       "updatedAt": string (optional)
 *     }
 *   ]
 * }
 */

export const casesData = [
  {
    id: 1,
    title: 'Рост органического трафика на 250% за 6 месяцев',
    client: 'Интернет-магазин электроники',
    description: 'Комплексное SEO-продвижение с фокусом на техническую оптимизацию и контент-стратегию. Работа с молодым сайтом в конкурентной нише.',
    category: 'SEO',
    period: '6 месяцев',
    results: [
      { label: 'Рост органического трафика', value: '+250%' },
      { label: 'Увеличение конверсий', value: '+180%' },
      { label: 'Количество ключевых слов в ТОП-10', value: '450+' }
    ],
    tags: ['SEO', 'Техническая оптимизация', 'Контент-стратегия'],
    featured: true
  },
  {
    id: 2,
    title: 'Запуск GEO-продвижения для локального бизнеса',
    client: 'Сеть стоматологических клиник',
    description: 'Настройка AI SEO (GEO) для повышения видимости в поисковых системах с поддержкой AI. Фокус на локальных запросах и оптимизации карточек в Яндекс и Google.',
    category: 'GEO / AI SEO',
    period: '3 месяца',
    results: [
      { label: 'Рост видимости в GEO', value: '+320%' },
      { label: 'Увеличение заявок', value: '+150%' },
      { label: 'Конверсия из карт', value: '+85%' }
    ],
    tags: ['GEO', 'AI SEO', 'Локальная оптимизация'],
    featured: true
  },
  {
    id: 3,
    title: 'Разработка и оптимизация корпоративного сайта',
    client: 'B2B-компания',
    description: 'Полная разработка нового сайта с интеграцией CRM и настройкой аналитики. Фокус на конверсиях и удобстве использования.',
    category: 'Разработка',
    period: '4 месяца',
    results: [
      { label: 'Увеличение конверсий', value: '+120%' },
      { label: 'Улучшение скорости загрузки', value: '2.1 сек' },
      { label: 'Рост лидов', value: '+95%' }
    ],
    tags: ['Разработка', 'UX/UI', 'Интеграции'],
    featured: false
  },
  {
    id: 4,
    title: 'Автоматизация бизнес-процессов',
    client: 'Сервисная компания',
    description: 'Внедрение no-code автоматизации для обработки заявок, интеграция с CRM и настройка уведомлений. Сокращение времени на рутинные задачи.',
    category: 'Автоматизация',
    period: '2 месяца',
    results: [
      { label: 'Экономия времени', value: '15+ часов/неделю' },
      { label: 'Скорость обработки заявок', value: 'в 3 раза быстрее' },
      { label: 'Снижение ошибок', value: '-90%' }
    ],
    tags: ['Автоматизация', 'No-code', 'Интеграции'],
    featured: false
  }
];

/**
 * Функция для загрузки кейсов из API (для будущего использования)
 * 
 * @returns {Promise<Array>} Массив кейсов
 */
export const fetchCases = async () => {
  try {
    const response = await fetch('/api/cases');
    if (!response.ok) {
      throw new Error('Failed to fetch cases');
    }
    const data = await response.json();
    return data.cases || data;
  } catch (error) {
    console.error('Error fetching cases:', error);
    // В случае ошибки возвращаем локальные данные
    return casesData;
  }
};

