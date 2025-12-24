# API Documentation - Contact Form

## Endpoint

**POST** `/api/contact`

## Описание

Эндпоинт для отправки заявки через форму "Обсудить проект". Форма предназначена для B2B digital-студии и включает квалификационные вопросы для фильтрации целевых клиентов.

## Request

### Headers

```
Content-Type: application/json
```

### Body

```json
{
  "name": "string",                    // Имя клиента (обязательное, минимум 2 символа)
  "contactType": "phone" | "email",   // Тип контакта (обязательное)
  "contact": "string",                 // Телефон или email (обязательное)
  "company": "string",                 // Компания или проект (опциональное)
  "service": "string",                 // Интересующая услуга (обязательное)
  "website": "string",                 // Сайт или проект URL (обязателен для SEO/GEO/аудита)
  "goal": "string",                    // Основная цель (обязательное)
  "budget": "string",                  // Примерный бюджет (обязательное, бизнес-фильтр)
  "timeline": "string",                // Сроки (опциональное)
  "comment": "string",                 // Комментарий/описание задачи (опциональное)
  "privacyAgreed": boolean,            // Согласие на обработку данных (обязательное)
  "source": "string"                   // Источник заявки: "hero", "cta", "header", "mobile-menu", "modal"
}
```

### Варианты значений

**service** (обязательное):
- `SEO-продвижение`
- `GEO / AI SEO`
- `Контекстная реклама`
- `Разработка сайта`
- `Поддержка / доработка`
- `Автоматизация / боты`
- `Аудит / аналитика`

**goal** (обязательное):
- `Рост заявок`
- `Рост трафика`
- `Запуск нового проекта`
- `Аудит текущего состояния`
- `Автоматизация процессов`
- `Другое`

**budget** (обязательное):
- `До 30 000 ₽`
- `30 000 – 70 000 ₽`
- `70 000 – 150 000 ₽`
- `150 000 ₽ и выше`
- `Пока не определились`

**timeline** (опциональное):
- `Как можно быстрее`
- `В течение месяца`
- `1–3 месяца`
- `Без жёстких сроков`

**contactType**:
- `email` — для email адреса
- `phone` — для телефона

**Услуги, требующие обязательного указания website:**
- `SEO-продвижение`
- `GEO / AI SEO`
- `Аудит / аналитика`

### Пример запроса

```json
{
  "name": "Иван Иванов",
  "contactType": "email",
  "contact": "ivan@example.com",
  "company": "ООО Пример",
  "service": "GEO / AI SEO",
  "website": "https://example.com",
  "goal": "Рост трафика",
  "budget": "70 000 – 150 000 ₽",
  "timeline": "1–3 месяца",
  "comment": "Нужна оптимизация для AI-поиска",
  "privacyAgreed": true,
  "source": "hero"
}
```

## Response

### Success (200 OK)

```json
{
  "success": true,
  "message": "Заявка успешно отправлена"
}
```

### Validation Error (400 Bad Request)

```json
{
  "success": false,
  "errors": {
    "name": "Укажите, как к вам обращаться",
    "contact": "Укажите email",
    "service": "Выберите услугу",
    "website": "Для этой услуги требуется указать сайт",
    "goal": "Укажите основную цель",
    "budget": "Укажите примерный бюджет",
    "privacyAgreed": "Необходимо согласие на обработку данных"
  }
}
```

### Server Error (500 Internal Server Error)

```json
{
  "success": false,
  "message": "Ошибка сервера. Попробуйте позже."
}
```

## Валидация на бекенде

Рекомендуется провести дополнительную валидацию на бекенде:

1. **name**: обязательное, минимум 2 символа, максимум 100 символов
2. **contactType**: обязательное, должно быть `"phone"` или `"email"`
3. **contact**: обязательное
   - Если `contactType === "email"`: валидный email формат
   - Если `contactType === "phone"`: минимум 5 символов, валидация телефонного номера
4. **company**: опциональное, максимум 200 символов
5. **service**: обязательное, должно быть одним из допустимых значений
6. **website**: 
   - Обязательное для услуг: `SEO-продвижение`, `GEO / AI SEO`, `Аудит / аналитика`
   - Опциональное для остальных
   - Если указано, должен быть валидный URL (начинается с `http://` или `https://`)
7. **goal**: обязательное, должно быть одним из допустимых значений
8. **budget**: обязательное, должно быть одним из допустимых значений (критично для бизнес-фильтрации)
9. **timeline**: опциональное, должно быть одним из допустимых значений (если указано)
10. **comment**: опциональное, максимум 2000 символов
11. **privacyAgreed**: обязательное, должно быть `true`
12. **source**: опциональное, для аналитики

## Environment Variables

Фронтенд использует переменную окружения для URL API:

```
REACT_APP_API_URL=http://localhost:3001/api
```

По умолчанию, если переменная не задана, используется: `http://localhost:3001/api`

## Рекомендации для бекенда

1. **Логирование**: логировать все заявки для аналитики (особенно важно отслеживать `source` и `budget`)
2. **Rate limiting**: ограничить количество запросов с одного IP (рекомендуется 5 запросов в час)
3. **Email уведомления**: отправлять уведомление на email компании при получении заявки с полной информацией
4. **Хранение**: сохранять заявки в базе данных для дальнейшей обработки и аналитики
5. **CORS**: настроить CORS для домена фронтенда
6. **Sanitization**: очищать входные данные от потенциально опасного содержимого (особенно `comment` и `website`)
7. **Бизнес-логика**: 
   - Использовать поле `budget` для приоритизации заявок
   - Автоматически классифицировать заявки по `service` и `goal`
   - Проверять `website` на доступность (для SEO/GEO/аудит услуг)

## Пример интеграции (Node.js + Express)

```javascript
const SERVICES_REQUIRING_WEBSITE = [
  'SEO-продвижение',
  'GEO / AI SEO',
  'Аудит / аналитика'
];

app.post('/api/contact', async (req, res) => {
  try {
    const { name, contactType, contact, company, service, website, goal, budget, timeline, comment, privacyAgreed, source } = req.body;
    
    // Валидация
    const errors = {};
    
    if (!name || name.trim().length < 2) {
      errors.name = 'Укажите, как к вам обращаться';
    }
    
    if (!contactType || !['phone', 'email'].includes(contactType)) {
      errors.contactType = 'Укажите тип контакта';
    }
    
    if (!contact || contact.trim().length === 0) {
      errors.contact = `Укажите ${contactType === 'phone' ? 'телефон' : 'email'}`;
    } else if (contactType === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
      errors.contact = 'Введите корректный email';
    } else if (contactType === 'phone' && contact.trim().length < 5) {
      errors.contact = 'Введите корректный телефон';
    }
    
    if (!service) {
      errors.service = 'Выберите услугу';
    }
    
    if (SERVICES_REQUIRING_WEBSITE.includes(service)) {
      if (!website || !/^https?:\/\/.+/.test(website.trim())) {
        errors.website = 'Для этой услуги требуется указать сайт';
      }
    }
    
    if (!goal) {
      errors.goal = 'Укажите основную цель';
    }
    
    if (!budget) {
      errors.budget = 'Укажите примерный бюджет';
    }
    
    if (!privacyAgreed) {
      errors.privacyAgreed = 'Необходимо согласие на обработку данных';
    }
    
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors });
    }
    
    // Сохранение в базу данных
    // await saveContactForm({ name, contactType, contact, company, service, website, goal, budget, timeline, comment, privacyAgreed, source });
    
    // Отправка email уведомления
    // await sendEmailNotification({ name, contactType, contact, company, service, website, goal, budget, timeline, comment, source });
    
    res.json({ success: true, message: 'Заявка успешно отправлена' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ success: false, message: 'Ошибка сервера' });
  }
});
```
