# Статические ресурсы

Эта папка содержит статические файлы, которые доступны напрямую по URL.

## Структура

```
public/
├── images/          # Логотипы и изображения
│   ├── logo.png     # Основной логотип
│   ├── logo.svg     # Векторный логотип
│   └── README.md    # Инструкции по логотипам
│
├── favicon/         # Фавиконы и иконки
│   ├── favicon.ico  # Классический фавикон
│   ├── favicon.svg  # Векторный фавикон
│   ├── apple-touch-icon.png
│   └── README.md    # Инструкции по фавиконам
│
└── index.html       # Главный HTML файл
```

## Использование

### Логотипы

Разместите файлы логотипа в `public/images/`:
- `logo.png` или `logo.svg` - основной логотип
- `logo-dark.png` - для темной темы (опционально)
- `logo-light.png` - для светлой темы (опционально)

Использование в коде:
```jsx
<img src="/images/logo.svg" alt="SeoEleven" />
```

### Фавиконы

Разместите файлы фавикона в `public/favicon/`:
- `favicon.ico` - классический фавикон
- `favicon.svg` - векторный фавикон
- `apple-touch-icon.png` - для iOS (180x180px)
- `favicon-16x16.png` и `favicon-32x32.png` - дополнительные размеры
- `android-chrome-192x192.png` и `android-chrome-512x512.png` - для Android
- `site.webmanifest` - манифест для PWA

Ссылки на фавиконы уже добавлены в `index.html`.

## Генерация фавиконов

Рекомендуемые сервисы для генерации всех необходимых размеров:
- https://realfavicongenerator.net/
- https://favicon.io/
- https://www.favicon-generator.org/

## Примечания

- Все файлы в `public/` доступны напрямую по URL: `/filename.ext`
- При изменении логотипа обновите также ссылки в `public/index.html` (Schema.org разметка)
- Файлы автоматически копируются в `build/` при сборке проекта

