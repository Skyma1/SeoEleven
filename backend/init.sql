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

