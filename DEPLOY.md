# Инструкция по выкладке на GitHub

## Инициализация Git репозитория

Если репозиторий еще не инициализирован:

```bash
git init
git add .
git commit -m "Initial commit: Studio website"
```

## Подключение к GitHub

1. Создайте новый репозиторий на GitHub
2. Подключите удаленный репозиторий:

```bash
git remote add origin https://github.com/yourusername/seoeleven3.git
git branch -M main
git push -u origin main
```

## Проверка перед коммитом

Убедитесь, что в `.gitignore` есть:
- `/node_modules`
- `/build`
- `.env.local`
- `.DS_Store`

## Структура для бекендера

После клонирования репозитория бекендер должен:

1. Установить зависимости: `npm install`
2. Запустить проект: `npm start`
3. Для production сборки: `npm run build`

## Интеграция с API

См. раздел "Интеграция с бекендом" в README.md

