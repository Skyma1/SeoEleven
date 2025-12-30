import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const NewMegaMenu = forwardRef(({ headerHeight = 73, headerTop = 0, onClose, onMouseEnter, onMouseLeave, isClosing }, ref) => {
  const services = {
    seo: {
      title: 'SEO',
      subtitle: 'Классическое SEO',
      icon: 'search',
      items: [
        { name: 'Комплексное SEO-продвижение', url: '/uslugi/seo-prodvizhenie' },
        { name: 'Продвижение молодых сайтов', url: '/uslugi/prodvizhenie-molodyh-sajtov' },
        { name: 'Базовая оптимизация и мета-теги', url: '/uslugi/bazovaya-optimizaciya' },
        { name: 'Статейное продвижение', url: '/uslugi/stateinoe-prodvizhenie' },
        { name: 'Сбор семантического ядра', url: '/uslugi/semanticheskoe-yadro' },
        { name: 'Ссылочное продвижение', url: '/uslugi/ssylki' },
        { name: 'Продвижение по словам', url: '/uslugi/prodvizhenie-po-slovam' },
        { name: 'SEO-аудит (классический)', url: '/uslugi/seo-audit' },
      ]
    },
    tech: {
      title: 'Технологии и ИИ',
      subtitle: 'Флагман и УТП',
      icon: 'smart_toy',
      items: [
        { name: 'AI SEO (GEO)', url: '/services/ai-seo', featured: true },
        { name: 'Telegram-боты и Mini Apps', url: '/services/telegram-bots' },
        { name: 'Автоматизация без кода (Make, n8n)', url: '/services/no-code-automation' },
        { name: 'Индивидуальные скрипты', url: '/services/scripts' },
        { name: 'Продвинутая аналитика и аудит', url: '/services/analytics' },
      ]
    },
    development: {
      title: 'Разработка',
      subtitle: 'Разработка и поддержка',
      icon: 'code',
      items: [
        { name: 'Веб-разработка', url: '/services/web-development' },
        { name: 'Поддержка и обслуживание', url: '/services/support' },
        { name: 'Настройка хостинга', url: '/services/hosting-setup' },
        { name: 'Дизайн логотипа', url: '/services/logo-design' },
      ]
    },
    performance: {
      title: 'Реклама и трафик',
      subtitle: 'Трафик и реклама',
      icon: 'trending_up',
      items: [
        { name: 'Контекстная реклама', url: '/uslugi/kontekstnaya-reklama' },
        { name: 'Таргетированная реклама', url: '/uslugi/targetirovannaya-reklama' },
        { name: 'SEO для маркетплейсов (WB, Ozon)', url: '/uslugi/seo-dlya-marketpleysov' },
        { name: 'Яндекс Директ', url: '/uslugi/nastrojka-yandex-direct' },
      ]
    }
  };

  const megaMenuTop = headerTop + headerHeight;

  return (
    <div 
      ref={ref}
      className="hidden lg:block fixed inset-0 w-screen h-screen z-[998] pointer-events-none"
    >
      <div 
        className="fixed inset-0 bg-transparent pointer-events-auto"
        onClick={onClose}
      ></div>
      <div 
        className={`fixed left-0 w-full bg-surface dark:bg-zinc-900 border-b border-graphite/5 shadow-lg py-16 pointer-events-auto z-[999] ${
          isClosing ? 'mega-menu-slide-up' : 'mega-menu-slide-down'
        }`}
        style={{ top: `${megaMenuTop}px` }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* SEO Column */}
          <div className="flex flex-col">
            <div className="flex items-start gap-3 mb-6 pb-4 border-b border-graphite/10 dark:border-white/10">
              <span className="material-symbols-outlined text-primary text-xl">{services.seo.icon}</span>
              <div>
                <h3 className="text-base font-semibold text-graphite dark:text-white uppercase tracking-wide mb-1">{services.seo.title}</h3>
                {services.seo.subtitle && (
                  <p className="text-xs text-graphite/60 dark:text-gray-400">{services.seo.subtitle}</p>
                )}
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              {services.seo.items.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-sm text-graphite/70 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors block leading-relaxed"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Column */}
          <div className="flex flex-col">
            <div className="flex items-start gap-3 mb-6 pb-4 border-b border-graphite/10 dark:border-white/10">
              <span className="material-symbols-outlined text-primary text-xl">{services.tech.icon}</span>
              <div>
                <h3 className="text-base font-semibold text-graphite dark:text-white uppercase tracking-wide mb-1">{services.tech.title}</h3>
                {services.tech.subtitle && (
                  <p className="text-xs text-graphite/60 dark:text-gray-400">{services.tech.subtitle}</p>
                )}
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              {services.tech.items.map((item, index) => (
                <li key={index}>
                  {item.featured ? (
                    <Link 
                      to={item.url} 
                      className="flex items-start gap-2 text-sm font-medium text-graphite dark:text-white hover:text-primary transition-colors block leading-relaxed group"
                      onClick={onClose}
                    >
                      <span className="flex-1 min-w-0">{item.name}</span>
                      <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-[10px] font-semibold px-2 py-1 rounded uppercase tracking-wide whitespace-nowrap flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-xs">auto_awesome</span>
                        Новинка
                      </span>
                    </Link>
                  ) : (
                    <Link 
                      to={item.url} 
                      className="text-sm text-graphite/70 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors block leading-relaxed"
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Development Column */}
          <div className="flex flex-col">
            <div className="flex items-start gap-3 mb-6 pb-4 border-b border-graphite/10 dark:border-white/10">
              <span className="material-symbols-outlined text-primary text-xl">{services.development.icon}</span>
              <div>
                <h3 className="text-base font-semibold text-graphite dark:text-white uppercase tracking-wide mb-1">{services.development.title}</h3>
                {services.development.subtitle && (
                  <p className="text-xs text-graphite/60 dark:text-gray-400">{services.development.subtitle}</p>
                )}
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              {services.development.items.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-sm text-graphite/70 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors block leading-relaxed"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Performance Column */}
          <div className="flex flex-col">
            <div className="flex items-start gap-3 mb-6 pb-4 border-b border-graphite/10 dark:border-white/10">
              <span className="material-symbols-outlined text-primary text-xl">{services.performance.icon}</span>
              <div>
                <h3 className="text-base font-semibold text-graphite dark:text-white uppercase tracking-wide mb-1">{services.performance.title}</h3>
                {services.performance.subtitle && (
                  <p className="text-xs text-graphite/60 dark:text-gray-400">{services.performance.subtitle}</p>
                )}
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              {services.performance.items.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-sm text-graphite/70 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors block leading-relaxed"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

NewMegaMenu.displayName = 'NewMegaMenu';

export default NewMegaMenu;

