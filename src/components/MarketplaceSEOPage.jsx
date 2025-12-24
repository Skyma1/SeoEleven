import React from 'react';
import { ArrowRight, Check, X, ShoppingBag, TrendingUp, BarChart3, Search, Target } from 'lucide-react';
import styles from '../styles/SEOPage.module.css';

const MarketplaceSEOPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>SEO для маркетплейсов (WB, Ozon)</h1>
          <p className={styles.heroSubtitle}>
            Оптимизация карточек товаров и продвижение на маркетплейсах для увеличения продаж
          </p>
          <p className={styles.heroDescription}>
            SEO для маркетплейсов — это оптимизация карточек товаров, работа с рейтингами, отзывами, 
            поисковыми запросами внутри маркетплейсов. Правильная оптимизация позволяет товарам 
            появляться выше в поиске маркетплейса, получать больше просмотров и продаж. Мы работаем 
            с Wildberries, Ozon и другими платформами.
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
              <li>Продавцы на маркетплейсах Wildberries, Ozon</li>
              <li>Бизнесы, которые хотят увеличить продажи на маркетплейсах</li>
              <li>Компании с большим каталогом товаров</li>
              <li>Проекты, готовые работать над рейтингами и отзывами</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Компании без товаров на маркетплейсах</li>
              <li>Бизнесы с очень малым количеством товаров</li>
              <li>Проекты без ресурсов для работы с отзывами</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Как работает SEO на маркетплейсах</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              SEO на маркетплейсах работает по своим правилам. Важны оптимизация названий и описаний 
              товаров под поисковые запросы покупателей, работа с рейтингами и отзывами, правильная 
              категоризация, использование ключевых слов в характеристиках.
            </p>
            <p className={styles.paragraph}>
              Мы оптимизируем карточки товаров, работаем над рейтингами, помогаем получать отзывы, 
              анализируем поисковые запросы и конкурентов. Это позволяет товарам появляться выше в 
              поиске маркетплейса и получать больше продаж.
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
            <h3 className={styles.stepTitle}>Анализ</h3>
            <p className={styles.stepDescription}>
              Изучаем ваш каталог товаров, текущую оптимизацию карточек, анализируем конкурентов, поисковые 
              запросы на маркетплейсе, определяем задачи оптимизации.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Работа с запросами</h3>
            <p className={styles.stepDescription}>
              Анализируем поисковые запросы покупателей, подбираем ключевые слова, определяем приоритетные 
              запросы для оптимизации.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Оптимизация карточек</h3>
            <p className={styles.stepDescription}>
              Оптимизируем названия, описания, характеристики товаров под поисковые запросы покупателей, 
              улучшаем структуру и информативность карточек.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Работа с рейтингами</h3>
            <p className={styles.stepDescription}>
              Разрабатываем стратегию работы с рейтингами и отзывами, помогаем получать качественные отзывы, 
              улучшаем репутацию.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Мониторинг и развитие</h3>
            <p className={styles.stepDescription}>
              Отслеживаем позиции товаров, анализируем эффективность, корректируем оптимизацию, развиваем 
              продвижение.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. ЧТО ВХОДИТ В УСЛУГУ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <ShoppingBag size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Оптимизация карточек</h3>
            <p className={styles.serviceDescription}>
              Оптимизация названий, описаний, характеристик товаров под поисковые запросы покупателей
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Search size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Работа с запросами</h3>
            <p className={styles.serviceDescription}>
              Анализ поисковых запросов, подбор ключевых слов, оптимизация под популярные запросы
            </p>
          </div>
          <div className={styles.serviceItem}>
            <TrendingUp size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Рейтинги и отзывы</h3>
            <p className={styles.serviceDescription}>
              Стратегия работы с рейтингами, помощь в получении отзывов, улучшение репутации
            </p>
          </div>
          <div className={styles.serviceItem}>
            <BarChart3 size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Аналитика</h3>
            <p className={styles.serviceDescription}>
              Анализ эффективности, отслеживание позиций, отчёты о результатах
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
              Клиенты получают оптимизированные карточки товаров, которые лучше появляются в поиске маркетплейса 
              и привлекают больше покупателей. Товары начинают показываться выше по релевантным запросам, получают 
              больше просмотров и продаж.
            </p>
            <p className={styles.paragraph}>
              Результаты проявляются постепенно, обычно через 2–4 недели после оптимизации: улучшаются позиции 
              товаров в поиске маркетплейса, увеличивается видимость, растут просмотры и продажи. Правильная 
              оптимизация карточек работает долгосрочно и продолжает привлекать покупателей.
            </p>
            <p className={styles.paragraph}>
              Важно понимать: результаты зависят от конкурентности ниши, качества товаров, рейтингов и отзывов. 
              Оптимизация карточек — важная часть, но также важна работа над рейтингами, ценами, качеством товаров. 
              Мы работаем над всеми аспектами для максимальной эффективности.
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
              работы над карточками. Каждый проект начинается с анализа каталога и определения задач.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от количества товаров, маркетплейсов, необходимого объёма работ по оптимизации. 
              SEO для маркетплейсов начинается от 60 000 рублей за проект. При работе по подписке стоимость 
              рассчитывается индивидуально.
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

export default MarketplaceSEOPage;

