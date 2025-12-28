import React from 'react';
import { ArrowRight, Check, X, FileText, Search, PenTool, Target } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import styles from '../styles/SEOPage.module.css';

const ArticleSEOPage = () => {
  const { openModal } = useModal();

  const handleCTA = () => {
    openModal('Статейное продвижение', 'service-page');
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Статейное продвижение</h1>
          <p className={styles.heroSubtitle}>
            Создание и размещение SEO-статей для продвижения сайта и привлечения трафика
          </p>
          <p className={styles.heroDescription}>
            Статейное продвижение — это создание качественных SEO-статей, которые привлекают органический 
            трафик и помогают продвигать сайт в поисковых системах. Статьи оптимизированы под поисковые 
            запросы, содержат полезную информацию и способствуют росту позиций сайта.
          </p>
          <button className={styles.heroCTA} onClick={handleCTA}>
            Обсудить продвижение
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* БЛОК 2. КОМУ ПОДХОДИТ / КОМУ НЕТ */}
      <section className={styles.section}>
        <div className={styles.twoColumns}>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <Check size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому подходит статейное продвижение</h2>
            <ul className={styles.list}>
              <li>Сайты, которым нужно привлекать трафик через информационный контент</li>
              <li>Бизнесы с ресурсами для размещения и поддержки статей</li>
              <li>Проекты, готовые создавать качественный контент</li>
              <li>Компании, работающие в нишах с высоким спросом на информацию</li>
              <li>Сайты, которым нужен долгосрочный рост органического трафика</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Проекты без ресурсов для размещения статей</li>
              <li>Сайты, которым нужен только быстрый результат</li>
              <li>Бизнесы без возможности создавать качественный контент</li>
              <li>Ниши, где статьи не помогают привлечению целевой аудитории</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что такое статейное продвижение</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Статейное продвижение — это создание и размещение качественных SEO-статей, которые привлекают 
              органический трафик и помогают продвигать сайт в поисковых системах. Статьи оптимизированы под 
              поисковые запросы пользователей, содержат полезную информацию и способствуют росту позиций сайта 
              по релевантным запросам.
            </p>
            <p className={styles.paragraph}>
              Правильно написанные статьи решают несколько задач: привлекают трафик по информационным запросам, 
              помогают продвигать сайт в поисковых системах, повышают экспертность и доверие к бренду, создают 
              возможность для получения естественных ссылок. Статьи могут быть размещены на самом сайте или 
              на внешних ресурсах с ссылками на ваш сайт.
            </p>
            <p className={styles.paragraph}>
              Эффективность статейного продвижения зависит от качества контента, правильной оптимизации под 
              запросы, релевантности тематике сайта и регулярности публикаций. Статьи должны быть полезными 
              для пользователей, тогда они будут привлекать трафик и помогать продвижению долгосрочно.
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
            <h3 className={styles.stepTitle}>Анализ и подбор тем</h3>
            <p className={styles.stepDescription}>
              Анализируем поисковые запросы, конкурентов, определяем темы для статей, которые будут привлекать 
              целевой трафик.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Планирование</h3>
            <p className={styles.stepDescription}>
              Формируем план статей, распределяем запросы, определяем структуру, объём, приоритеты публикаций.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Создание статей</h3>
            <p className={styles.stepDescription}>
              Пишем качественные SEO-статьи, оптимизированные под запросы, с полезным контентом и правильной 
              структурой.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Размещение</h3>
            <p className={styles.stepDescription}>
              Размещаем статьи на сайте или внешних ресурсах, настраиваем мета-теги, изображения, внутренние ссылки.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Мониторинг и развитие</h3>
            <p className={styles.stepDescription}>
              Отслеживаем эффективность статей, позиции, трафик, корректируем стратегию, развиваем контент.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. ЧТО ВХОДИТ В УСЛУГУ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <FileText size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Создание статей</h3>
            <p className={styles.serviceDescription}>
              Написание SEO-оптимизированных статей с полезным контентом
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Search size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Подбор тем</h3>
            <p className={styles.serviceDescription}>
              Анализ запросов, подбор тем для статей, планирование контента
            </p>
          </div>
          <div className={styles.serviceItem}>
            <PenTool size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Оптимизация</h3>
            <p className={styles.serviceDescription}>
              Оптимизация статей под поисковые запросы, работа с ключевыми словами
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
              Клиенты получают качественные SEO-статьи, которые привлекают органический трафик и помогают 
              продвигать сайт. Статьи начинают появляться в поисковых системах, привлекать посетителей по 
              информационным запросам, улучшать позиции сайта по релевантным запросам.
            </p>
            <p className={styles.paragraph}>
              Результаты проявляются постепенно, обычно через 1–3 месяца после публикации: статьи индексируются, 
              появляются в поиске, начинают привлекать трафик. Качественный контент работает долгосрочно и 
              продолжает привлекать трафик месяцами и годами.
            </p>
            <p className={styles.paragraph}>
              Важно понимать: эффективность зависит от качества контента, правильной оптимизации, релевантности 
              тематике и регулярности публикаций. Статейное продвижение — это долгосрочная стратегия, которая 
              требует постоянной работы, но даёт устойчивый рост трафика.
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
              Мы работаем в формате проекта с фиксированным объёмом работ или по подписке для регулярных 
              публикаций. Каждый проект начинается с анализа запросов и подбора тем.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от количества статей, объёма текста, сложности тематики и необходимых 
              работ. Создание статей начинается от 40 000 рублей за проект. При работе по подписке стоимость 
              рассчитывается индивидуально.
            </p>
            <p className={styles.paragraph}>
              <button 
                onClick={handleCTA}
                className={styles.pricingLink}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', color: 'inherit', font: 'inherit' }}
              >
                Обсудить продвижение и получить оценку
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleSEOPage;

