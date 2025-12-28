import React from 'react';
import { ArrowRight, Check, X, Target, Search, TrendingUp, BarChart3 } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import styles from '../styles/SEOPage.module.css';

const KeywordPromotionPage = () => {
  const { openModal } = useModal();

  const handleCTA = () => {
    openModal('Продвижение по словам', 'service-page');
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Продвижение по словам</h1>
          <p className={styles.heroSubtitle}>
            Целевое продвижение сайта по конкретным ключевым словам и запросам
          </p>
          <p className={styles.heroDescription}>
            Продвижение по словам — это фокус на конкретных ключевых запросах, которые важны для 
            вашего бизнеса. Мы оптимизируем страницы под целевые запросы, работаем над улучшением 
            позиций и привлечением трафика по этим запросам.
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
            <h2 className={styles.sectionTitle}>Кому нужно продвижение по словам</h2>
            <ul className={styles.list}>
              <li>Компании, которым важно продвинуться по конкретным ключевым запросам</li>
              <li>Бизнесы с чётко определёнными целевыми запросами</li>
              <li>Проекты, которым нужно улучшить позиции по важным запросам</li>
              <li>Компании, готовые работать над оптимизацией страниц</li>
              <li>Бизнесы с качественным контентом для оптимизации</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Проекты без чётко определённых целевых запросов</li>
              <li>Сайты с техническими проблемами, которые нужно решить сначала</li>
              <li>Бизнесы без ресурсов для создания или улучшения контента</li>
              <li>Проекты, требующие комплексного продвижения по многим запросам</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что такое продвижение по словам</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Продвижение по словам — это фокус на конкретных ключевых запросах, которые важны для вашего бизнеса. 
              Мы оптимизируем страницы под целевые запросы, работаем над улучшением позиций и привлечением трафика 
              по этим запросам. Это более узкий подход, чем комплексное SEO, но позволяет сконцентрироваться на 
              наиболее важных запросах.
            </p>
            <p className={styles.paragraph}>
              Работа включает подбор целевых запросов, анализ их конкурентности и потенциала, оптимизацию страниц 
              под эти запросы, работу с контентом, мета-тегами, внутренними ссылками. Важно оптимизировать страницы 
              естественно, чтобы они были полезными для пользователей, а не только для поисковых систем.
            </p>
            <p className={styles.paragraph}>
              Продвижение по словам эффективно, когда нужно улучшить позиции по конкретным важным запросам. Результаты 
              проявляются постепенно, обычно через 2–4 месяца после оптимизации, в зависимости от конкурентности запросов. 
              Это требует постоянной работы и мониторинга позиций.
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
            <h3 className={styles.stepTitle}>Подбор запросов</h3>
            <p className={styles.stepDescription}>
              Анализируем и подбираем целевые ключевые слова для продвижения, оцениваем их конкурентность, 
              потенциал, определяем приоритеты.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Анализ страниц</h3>
            <p className={styles.stepDescription}>
              Анализируем текущее состояние страниц, их оптимизацию под запросы, определяем необходимые изменения.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Оптимизация</h3>
            <p className={styles.stepDescription}>
              Оптимизируем страницы под целевые запросы: улучшаем контент, мета-теги, заголовки, внутренние ссылки.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Внедрение</h3>
            <p className={styles.stepDescription}>
              Внедряем изменения на сайте, проверяем корректность оптимизации, тестируем результат.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Мониторинг позиций</h3>
            <p className={styles.stepDescription}>
              Отслеживаем позиции по целевым запросам, анализируем результаты, корректируем стратегию при необходимости.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. ЧТО ВХОДИТ В УСЛУГУ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <Target size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Подбор запросов</h3>
            <p className={styles.serviceDescription}>
              Анализ и подбор целевых ключевых слов для продвижения
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Search size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Оптимизация</h3>
            <p className={styles.serviceDescription}>
              Оптимизация страниц под целевые запросы, работа с контентом
            </p>
          </div>
          <div className={styles.serviceItem}>
            <TrendingUp size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Мониторинг позиций</h3>
            <p className={styles.serviceDescription}>
              Отслеживание позиций по целевым запросам, анализ результатов
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
              Клиенты получают оптимизированные страницы, которые лучше ранжируются по целевым запросам. 
              Позиции по важным запросам улучшаются, увеличивается видимость в поисковых системах, растёт 
              трафик по целевым запросам.
            </p>
            <p className={styles.paragraph}>
              Результаты проявляются постепенно, обычно через 2–4 месяца после оптимизации: улучшаются позиции 
              по целевым запросам, увеличивается трафик, растёт видимость сайта в поисковых системах. Эффективность 
              зависит от конкурентности запросов и качества оптимизации.
            </p>
            <p className={styles.paragraph}>
              Важно понимать: продвижение по словам требует постоянной работы и мониторинга. Позиции могут 
              меняться, конкуренты также работают над улучшением, поэтому нужно постоянно развивать оптимизацию. 
              Результаты зависят от многих факторов: конкурентности, качества сайта, контента, ссылочной массы.
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
              Мы работаем в формате проекта с фиксированным объёмом работ или по подписке для постоянной 
              работы над позициями. Каждый проект начинается с подбора целевых запросов и анализа текущей ситуации.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от количества запросов, конкурентности, необходимого объёма работ по оптимизации. 
              Продвижение по словам начинается от 40 000 рублей за проект. При работе по подписке стоимость 
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

export default KeywordPromotionPage;

