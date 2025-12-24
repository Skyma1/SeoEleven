import React from 'react';
import { ArrowRight, Check, X, Rocket, Search, Target, FileText, BarChart3 } from 'lucide-react';
import styles from '../styles/SEOPage.module.css';

const YoungSitesSEOPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Продвижение молодых сайтов</h1>
          <p className={styles.heroSubtitle}>
            Специализированное SEO для новых сайтов и проектов на ранних этапах развития
          </p>
          <p className={styles.heroDescription}>
            Молодые сайты требуют особого подхода к SEO. Нужно заложить правильную техническую основу, 
            создать качественный контент, получить первые ссылки и начать рост в поисковых системах. 
            Мы помогаем новым сайтам правильно стартовать и заложить фундамент для долгосрочного роста.
          </p>
          <button className={styles.heroCTA}>
            Обсудить продвижение
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.twoColumns}>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <Check size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому подходит</h2>
            <ul className={styles.list}>
              <li>Новые сайты и проекты на ранних этапах</li>
              <li>Сайты возрастом до 1 года</li>
              <li>Проекты, которые только начинают продвижение</li>
              <li>Бизнесы, готовые заложить правильную основу</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Сайты с серьёзными техническими проблемами</li>
              <li>Проекты без ресурсов для создания контента</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что такое продвижение молодых сайтов</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Молодые сайты (возрастом до года) требуют особого подхода к SEO. Поисковые системы 
              настороженно относятся к новым сайтам и дают им меньше доверия. Нужно правильно заложить 
              техническую основу, создать качественный контент, получить первые ссылки и начать рост 
              органического трафика.
            </p>
            <p className={styles.paragraph}>
              Особенность продвижения молодых сайтов — необходимость заложить правильную основу с самого 
              начала. Это включает техническую оптимизацию, создание качественного контента, получение 
              первых естественных ссылок, регистрацию в каталогах. Важно избегать ошибок, которые могут 
              замедлить рост в будущем.
            </p>
            <p className={styles.paragraph}>
              Молодые сайты имеют потенциал для быстрого роста, если всё сделано правильно. Правильный 
              старт позволяет избежать проблем в будущем и создаёт основу для долгосрочного развития. 
              Первые результаты обычно появляются через 2–4 месяца после начала работ.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 4. КАК МЫ РАБОТАЕМ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Как мы работаем</h2>
        <div className={styles.processGrid}>
          <div className={`${styles.processStep} ${styles.processStepDominant}`}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Анализ и планирование</h3>
            <p className={styles.stepDescription}>
              Изучаем сайт, определяем текущее состояние, потенциал, формируем стратегию продвижения 
              с учётом особенностей молодого сайта.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Техническая основа</h3>
            <p className={styles.stepDescription}>
              Закладываем правильную техническую основу: настраиваем индексацию, структуру, скорость, 
              мобильную версию, базовую оптимизацию.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Базовый контент</h3>
            <p className={styles.stepDescription}>
              Создаём базовый качественный контент, оптимизируем мета-теги, структурируем информацию, 
              собираем начальное семантическое ядро.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Первые шаги</h3>
            <p className={styles.stepDescription}>
              Получаем первые естественные ссылки, регистрируем в каталогах, начинаем работу над видимостью 
              в поисковых системах.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Мониторинг и развитие</h3>
            <p className={styles.stepDescription}>
              Отслеживаем индексацию, первые позиции, анализируем результаты, корректируем стратегию, 
              развиваем продвижение.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. ЧТО ВХОДИТ В УСЛУГУ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <Rocket size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Техническая основа</h3>
            <p className={styles.serviceDescription}>
              Заложение правильной технической основы, настройка индексации, структуры сайта
            </p>
          </div>
          <div className={styles.serviceItem}>
            <FileText size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Базовый контент</h3>
            <p className={styles.serviceDescription}>
              Создание базового контента, оптимизация мета-тегов, структурирование информации
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Target size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Первые шаги</h3>
            <p className={styles.serviceDescription}>
              Получение первых ссылок, регистрация в каталогах, начальное продвижение
            </p>
          </div>
          <div className={styles.serviceItem}>
            <BarChart3 size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Мониторинг</h3>
            <p className={styles.serviceDescription}>
              Отслеживание индексации, первых позиций, анализ начальных результатов
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 6. РЕЗУЛЬТАТЫ */}
      <section className={styles.section}>
        <div className={styles.resultsBlock}>
          <h2 className={styles.sectionTitle}>Что обычно получают клиенты</h2>
          <div className={styles.resultsContent}>
            <p className={styles.paragraph}>
              Клиенты получают правильно настроенный молодой сайт с заложенной основой для долгосрочного 
              роста. Сайт начинает индексироваться, появляться в поисковых системах, получать первые 
              позиции по низкочастотным запросам. Это создаёт основу для дальнейшего развития.
            </p>
            <p className={styles.paragraph}>
              Первые результаты обычно появляются через 2–4 месяца после начала работ: сайт индексируется, 
              появляется в поиске, начинают расти позиции по целевым запросам. Правильный старт позволяет 
              избежать проблем в будущем и ускоряет дальнейший рост.
            </p>
            <p className={styles.paragraph}>
              Важно понимать: молодые сайты растут медленнее, чем старые. Поисковые системы дают им 
              меньше доверия, и для высоких позиций нужно время и постоянная работа. Но правильный старт 
              закладывает основу для успешного долгосрочного развития.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 7. ФОРМАТ РАБОТЫ И ЦЕНЫ */}
      <section className={styles.section}>
        <div className={styles.pricingBlock}>
          <h2 className={styles.sectionTitle}>Формат работы и цены</h2>
          <div className={styles.pricingContent}>
            <p className={styles.paragraph}>
              Мы работаем в формате проекта с фиксированным объёмом работ. Каждый проект начинается 
              с анализа сайта и формирования стратегии продвижения.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от размера сайта, необходимого контента, количества страниц и объёма работ. 
              Продвижение молодых сайтов начинается от 50 000 рублей за проект. После завершения начального 
              этапа можно продолжить с комплексным продвижением.
            </p>
            <p className={styles.paragraph}>
              <a href="/contact" className={styles.pricingLink}>
                Обсудить продвижение и получить оценку
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default YoungSitesSEOPage;

