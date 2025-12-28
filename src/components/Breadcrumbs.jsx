import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import styles from '../styles/Breadcrumbs.module.css';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Маппинг путей на читаемые названия
  const pathLabels = {
    'services': 'Услуги',
    'uslugi': 'Услуги',
    'ai-seo': 'AI SEO',
    'telegram-bots': 'Telegram-боты',
    'no-code-automation': 'Автоматизация',
    'scripts': 'Скрипты',
    'analytics': 'Аналитика',
    'kontekstnaya-reklama': 'Контекстная реклама',
    'targetirovannaya-reklama': 'Таргетированная реклама',
    'seo-dlya-marketpleysov': 'SEO для маркетплейсов',
    'nastrojka-yandex-direct': 'Настройка Яндекс.Директ',
    'seo-prodvizhenie': 'SEO-продвижение',
    'prodvizhenie-molodyh-sajtov': 'Продвижение молодых сайтов',
    'bazovaya-optimizaciya': 'Базовая оптимизация',
    'stateinoe-prodvizhenie': 'Статейное продвижение',
    'semanticheskoe-yadro': 'Семантическое ядро',
    'ssylki': 'Ссылки',
    'prodvizhenie-po-slovam': 'Продвижение по словам',
    'seo-audit': 'SEO-аудит',
    'web-development': 'Веб-разработка',
    'support': 'Поддержка',
    'hosting-setup': 'Настройка хостинга',
    'logo-design': 'Дизайн логотипов',
    'about': 'О нас',
    'contact': 'Контакты',
    'cases': 'Кейсы',
    'blog': 'Блог',
    'privacy': 'Политика конфиденциальности',
  };

  // Не показываем breadcrumbs на главной странице
  if (pathnames.length === 0) {
    return null;
  }

  const buildPath = (index) => {
    return '/' + pathnames.slice(0, index + 1).join('/');
  };

  const getLabel = (pathname) => {
    return pathLabels[pathname] || pathname;
  };

  return (
    <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            <Home size={16} strokeWidth={2} />
            <span className={styles.homeText}>Главная</span>
          </Link>
        </li>
        {pathnames.map((pathname, index) => {
          const isLast = index === pathnames.length - 1;
          const routeTo = buildPath(index);
          const label = getLabel(pathname);

          return (
            <li key={routeTo} className={styles.item}>
              <ChevronRight size={16} className={styles.separator} />
              {isLast ? (
                <span className={styles.current} aria-current="page">
                  {label}
                </span>
              ) : (
                <Link to={routeTo} className={styles.link}>
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

