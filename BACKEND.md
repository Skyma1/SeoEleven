# 🔌 Интеграция с бекендом

Полная инструкция для бекенд-разработчика по интеграции с фронтендом.

---

## 🚀 Быстрый старт (5 минут)

### 1. Запуск фронтенда

```bash
npm install
npm start
```

Фронтенд запустится на `http://localhost:3000`

### 2. Минимальный бекенд (Node.js/Express)

Создайте файл `server.js`:

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Контактная форма (ВАЖНО!)
app.post('/api/contact', (req, res) => {
  console.log('Заявка:', req.body);
  // TODO: сохранить в БД, отправить email
  res.json({ success: true, message: 'Заявка получена' });
});

// Блог
app.get('/api/blog', (req, res) => {
  res.json({ posts: [] }); // TODO: из БД
});

// Кейсы
app.get('/api/cases', (req, res) => {
  res.json({ cases: [] }); // TODO: из БД
});

// Админ логин
app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;
  // TODO: проверить в БД
  if (email === 'admin@test.com' && password === 'password') {
    res.json({
      success: true,
      token: 'jwt-token-here',
      user: { id: 1, email, name: 'Admin' }
    });
  } else {
    res.status(401).json({ success: false, error: 'Неверные данные' });
  }
});

app.listen(3001, () => console.log('API на http://localhost:3001'));
```

Запустите:

```bash
npm install express cors
node server.js
```

### 3. Подключение

Создайте `.env` в корне фронтенда:

```bash
REACT_APP_API_URL=http://localhost:3001/api
```

Перезапустите фронтенд: `npm start`

---

## 📡 API Endpoints

### Публичные API

#### POST /api/contact - Контактная форма

**Request:**
```json
{
  "name": "Иван Иванов",
  "contactType": "email",
  "contact": "ivan@example.com",
  "company": "ООО Пример",
  "service": "SEO-продвижение",
  "website": "https://example.com",
  "goal": "Рост трафика",
  "budget": "70 000 – 150 000 ₽",
  "timeline": "1–3 месяца",
  "comment": "Комментарий",
  "privacyAgreed": true,
  "source": "modal"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Заявка успешно отправлена"
}
```

**Валидация:**
- `name` - обязательно, 2-100 символов
- `contactType` - "email" или "phone"
- `contact` - обязательно (email или телефон)
- `service` - обязательно, один из списка
- `website` - обязательно для SEO/GEO/Аудит услуг
- `goal` - обязательно
- `budget` - обязательно
- `privacyAgreed` - обязательно true

**Список услуг:**
- SEO-продвижение
- GEO / AI SEO
- Контекстная реклама
- Разработка сайта
- Поддержка / доработка
- Автоматизация / боты
- Аудит / аналитика

#### GET /api/blog - Список постов

**Response:**
```json
{
  "posts": [
    {
      "id": 1,
      "title": "Заголовок",
      "excerpt": "Описание",
      "content": "<p>HTML контент</p>",
      "author": "Автор",
      "date": "2024-01-15",
      "category": "SEO",
      "tags": ["SEO", "Трафик"],
      "image": "https://example.com/image.jpg",
      "readTime": 8,
      "featured": true
    }
  ]
}
```

#### GET /api/cases - Список кейсов

**Response:**
```json
{
  "cases": [
    {
      "id": 1,
      "title": "Название кейса",
      "client": "Клиент",
      "description": "Описание",
      "category": "SEO",
      "period": "6 месяцев",
      "results": [
        { "label": "Рост трафика", "value": "+250%" }
      ],
      "tags": ["SEO"],
      "featured": true
    }
  ]
}
```

---

### Админские API (требуют токен)

Все запросы должны включать заголовок:
```
Authorization: Bearer <jwt-token>
```

#### POST /api/admin/login - Вход

**Request:**
```json
{
  "email": "admin@example.com",
  "password": "password"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt-token-here",
  "user": {
    "id": 1,
    "email": "admin@example.com",
    "name": "Admin"
  }
}
```

#### GET /api/admin/blog - Список постов (админка)

**Query параметры:**
- `search` - поиск по заголовку
- `page` - номер страницы
- `limit` - постов на странице

#### POST /api/admin/blog - Создать пост

**Request:** (те же поля что в GET /api/blog)

#### PUT /api/admin/blog/:id - Обновить пост

#### DELETE /api/admin/blog/:id - Удалить пост

#### GET /api/admin/cases - Список кейсов (админка)

#### POST /api/admin/cases - Создать кейс

#### PUT /api/admin/cases/:id - Обновить кейс

#### DELETE /api/admin/cases/:id - Удалить кейс

#### GET /api/admin/requests - Список заявок

**Response:**
```json
{
  "requests": [
    {
      "id": 1,
      "name": "Иван",
      "contact": "ivan@example.com",
      "service": "SEO-продвижение",
      "status": "new",
      "createdAt": "2024-01-15T10:00:00Z"
    }
  ]
}
```

#### PUT /api/admin/requests/:id/status - Обновить статус

**Request:**
```json
{
  "status": "viewed"
}
```

Статусы: `new`, `viewed`, `processed`, `archived`

#### GET /api/admin/statistics - Статистика

**Query параметры:**
- `dateFrom` - дата начала (YYYY-MM-DD)
- `dateTo` - дата конца (YYYY-MM-DD)

---

## ⚙️ Конфигурация

### Переменные окружения

Фронтенд использует:

```bash
REACT_APP_API_URL=http://localhost:3001/api
```

### CORS

Бекенд должен разрешить запросы с:

```javascript
const cors = require('cors');

app.use(cors({
  origin: ['http://localhost:3000', 'https://yourdomain.com'],
  credentials: true
}));
```

### Обработка ошибок

Формат ошибок:

```json
{
  "success": false,
  "error": "Общее сообщение",
  "errors": {
    "field": "Ошибка поля"
  }
}
```

HTTP коды:
- 200 - Успешно
- 400 - Ошибка валидации
- 401 - Не авторизован
- 404 - Не найдено
- 500 - Ошибка сервера

---

## 🔐 Безопасность

### Обязательно реализовать:

1. **Валидация** всех входных данных
2. **Sanitization** HTML контента (защита от XSS)
3. **Rate limiting** (особенно для контактной формы)
4. **CORS** только для разрешенных доменов
5. **JWT** токены для админки
6. **Хеширование** паролей (bcrypt)

### Пример валидации (Express):

```javascript
const { body, validationResult } = require('express-validator');

app.post('/api/contact', [
  body('email').isEmail().normalizeEmail(),
  body('name').trim().isLength({ min: 2 }),
  body('website').optional().isURL(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      success: false, 
      errors: errors.mapped() 
    });
  }
  // обработка...
});
```

---

## 🗄️ База данных

### Рекомендуемые таблицы:

```sql
-- Заявки
CREATE TABLE requests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  contact_type VARCHAR(10) NOT NULL,
  contact VARCHAR(255) NOT NULL,
  company VARCHAR(200),
  service VARCHAR(100) NOT NULL,
  website VARCHAR(255),
  goal VARCHAR(100) NOT NULL,
  budget VARCHAR(100) NOT NULL,
  timeline VARCHAR(100),
  comment TEXT,
  source VARCHAR(50),
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Посты блога
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(100) NOT NULL,
  date DATE NOT NULL,
  category VARCHAR(50) NOT NULL,
  tags TEXT[],
  image VARCHAR(255),
  read_time INTEGER,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Кейсы
CREATE TABLE cases (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  client VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  period VARCHAR(100) NOT NULL,
  results JSONB NOT NULL,
  tags TEXT[],
  featured BOOLEAN DEFAULT false,
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Админы
CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 📧 Email уведомления

При получении заявки отправляйте email:

```javascript
const nodemailer = require('nodemailer');

async function sendNotification(request) {
  const transporter = nodemailer.createTransport({
    // настройки SMTP
  });

  await transporter.sendMail({
    from: 'noreply@yourdomain.com',
    to: 'admin@yourdomain.com',
    subject: `Новая заявка: ${request.service}`,
    html: `
      <h2>Новая заявка с сайта</h2>
      <p><strong>Имя:</strong> ${request.name}</p>
      <p><strong>Контакт:</strong> ${request.contact}</p>
      <p><strong>Услуга:</strong> ${request.service}</p>
      <p><strong>Бюджет:</strong> ${request.budget}</p>
    `
  });
}
```

---

## 🧪 Тестирование

### Проверка API через curl:

```bash
# Контактная форма
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "contactType": "email",
    "contact": "test@test.com",
    "service": "SEO-продвижение",
    "goal": "Рост трафика",
    "budget": "70 000 – 150 000 ₽",
    "privacyAgreed": true,
    "source": "test"
  }'

# Логин
curl -X POST http://localhost:3001/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@test.com", "password": "password"}'
```

---

## 🚀 Deployment

### Production checklist:

- [ ] HTTPS настроен
- [ ] Environment variables настроены
- [ ] CORS для production домена
- [ ] Rate limiting включен
- [ ] Логирование настроено
- [ ] База данных с бэкапами
- [ ] Email уведомления работают
- [ ] JWT токены с секретным ключом
- [ ] Валидация всех эндпоинтов

### Nginx конфигурация:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    # Frontend
    location / {
        root /var/www/seoeleven/build;
        try_files $uri /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## 🐛 Troubleshooting

### "Failed to fetch" на фронтенде

**Причины:**
1. Бекенд не запущен
2. Неправильный URL в `.env`
3. CORS не настроен

**Решение:**
1. Проверьте что бекенд работает: `curl http://localhost:3001/api/blog`
2. Проверьте `.env`: `REACT_APP_API_URL=http://localhost:3001/api`
3. Добавьте CORS на бекенде

### CORS ошибка

**Решение:**
```javascript
app.use(cors({ origin: 'http://localhost:3000' }));
```

### 401 Unauthorized в админке

**Причины:**
1. Неправильный токен
2. Токен не передается в заголовке
3. Токен истек

**Решение:**
Проверьте что бекенд принимает `Authorization: Bearer <token>`

---

## 📚 Структура фронтенда

```
src/
├── services/api.js       # Все API запросы
├── config/constants.js   # Константы (списки услуг, статусы)
├── utils/
│   ├── validation.js     # Валидация форм
│   ├── formatters.js     # Форматирование данных
│   └── errorHandlers.js  # Обработка ошибок
├── context/
│   ├── DataContext.jsx   # Данные (блог, кейсы)
│   └── AuthContext.jsx   # Аутентификация
└── hooks/                # Custom hooks для API
```

---

## ✅ Минимальная интеграция (30 минут)

1. ✅ Создать Express сервер
2. ✅ Добавить CORS
3. ✅ Реализовать POST /api/contact
4. ✅ Создать `.env` на фронтенде
5. ✅ Протестировать контактную форму

## 🎯 Полная интеграция (1-2 дня)

1. ✅ Настроить БД (PostgreSQL/MySQL)
2. ✅ Реализовать все публичные API
3. ✅ Реализовать админские API
4. ✅ Добавить JWT аутентификацию
5. ✅ Настроить email уведомления
6. ✅ Добавить валидацию и безопасность
7. ✅ Протестировать все эндпоинты

---

**Фронтенд готов к интеграции!** 🚀

Если возникнут вопросы - проверьте код в `/src/services/api.js`

