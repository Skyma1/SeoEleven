CREATE DATABASE IF NOT EXISTS `seoeleven` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `seoeleven`;

CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  contact_type ENUM('email','phone') NOT NULL,
  contact VARCHAR(190) NOT NULL,
  company VARCHAR(190),
  service VARCHAR(120),
  website VARCHAR(190),
  goal VARCHAR(190),
  budget VARCHAR(120),
  timeline VARCHAR(120),
  comment TEXT,
  privacy_agreed BOOLEAN DEFAULT TRUE,
  source VARCHAR(80),
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content LONGTEXT,
  author VARCHAR(120),
  date DATE,
  category VARCHAR(120),
  tags JSON,
  image VARCHAR(255),
  read_time INT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cases (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  client VARCHAR(190),
  description TEXT,
  category VARCHAR(120),
  period VARCHAR(120),
  results JSON,
  tags JSON,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO blog_posts (title, excerpt, content, author, date, category, tags, image, read_time, featured)
VALUES
('Пример поста', 'Короткое описание статьи', '<p>HTML контент статьи</p>', 'SeoEleven', CURDATE(), 'SEO', JSON_ARRAY('SEO','Продвижение'), 'https://placehold.co/600x400', 8, TRUE);

INSERT INTO cases (title, client, description, category, period, results, tags, featured)
VALUES
('Пример кейса', 'Клиент ООО', 'Описание кейса', 'SEO', '6 месяцев', JSON_ARRAY(JSON_OBJECT('label','Рост трафика','value','+250%')), JSON_ARRAY('SEO','Трафик'), TRUE);

CREATE TABLE IF NOT EXISTS metrica_settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  token VARCHAR(500) NOT NULL,
  counter_id VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(120) NOT NULL,
  role ENUM('admin', 'editor', 'viewer') DEFAULT 'viewer',
  permissions JSON,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  created_by INT,
  FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Создаем первого админа (пароль: changeme)
-- Хеш будет создан при первом входе через старую систему или через API
-- Для создания пользователя через API используйте POST /api/admin/users

-- Таблица для хранения контента страниц
CREATE TABLE IF NOT EXISTS page_content (
  id INT AUTO_INCREMENT PRIMARY KEY,
  page_path VARCHAR(255) UNIQUE NOT NULL,
  page_name VARCHAR(255) NOT NULL,
  content LONGTEXT,
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords VARCHAR(500),
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  updated_by INT,
  FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Вставляем начальные записи для основных страниц
INSERT INTO page_content (page_path, page_name, content) VALUES
('/', 'Главная страница', '<p>Добро пожаловать на главную страницу!</p>'),
('/blog', 'Блог', '<p>Наш блог с полезными статьями</p>'),
('/cases', 'Кейсы', '<p>Наши успешные проекты</p>'),
('/about', 'О нас', '<p>Информация о компании</p>'),
('/contact', 'Контакты', '<p>Свяжитесь с нами</p>'),
('/services/ai-seo', 'AI SEO', '<p>Услуга AI SEO</p>'),
('/services/telegram-bots', 'Telegram боты', '<p>Разработка Telegram ботов</p>'),
('/services/no-code-automation', 'Автоматизация без кода', '<p>Автоматизация процессов</p>'),
('/services/scripts', 'Индивидуальные скрипты', '<p>Разработка скриптов</p>')
ON DUPLICATE KEY UPDATE page_name=page_name;

