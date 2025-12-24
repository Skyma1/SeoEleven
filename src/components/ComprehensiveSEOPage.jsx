import React from 'react';
import { ArrowRight, Check, X, Search, Target, FileText, Settings, BarChart3 } from 'lucide-react';
import styles from '../styles/SEOPage.module.css';

const ComprehensiveSEOPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Комплексное SEO-продвижение</h1>
          <p className={styles.heroSubtitle}>
            Полноценное продвижение сайта в поисковых системах с комплексным подходом
          </p>
          <p className={styles.heroDescription}>
            Комплексное SEO включает техническую оптимизацию, работу с контентом, ссылочное продвижение, 
            аналитику и постоянное развитие. Это долгосрочная стратегия для роста органического трафика 
            и улучшения позиций в поисковых системах. Мы работаем над всеми аспектами SEO для достижения 
            максимального результата.
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
              <li>Компании, которым нужен долгосрочный рост трафика</li>
              <li>Бизнесы с готовым сайтом и ресурсами для развития</li>
              <li>Проекты, готовые инвестировать в SEO на постоянной основе</li>
              <li>Компании с качественным продуктом или услугой</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Проекты, которым нужен быстрый результат за неделю</li>
              <li>Сайты с техническими ограничениями, которые нельзя устранить</li>
              <li>Бизнесы без ресурсов для создания контента</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что такое комплексное SEO-продвижение</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Комплексное SEO — это системный подход к продвижению сайта, включающий все аспекты 
              поисковой оптимизации: техническую оптимизацию, работу с контентом, ссылочное продвижение, 
              аналитику и постоянное развитие. В отличие от отдельных работ, комплексный подход обеспечивает 
              согласованность всех действий и максимальную эффективность.
            </p>
            <p className={styles.paragraph}>
              Техническая оптимизация обеспечивает правильную работу сайта для поисковых систем: скорость, 
              индексация, мобильная версия, структурированные данные. Работа с контентом делает сайт 
              полезным и релевантным для пользователей и поисковых систем. Ссылочное продвижение повышает 
              авторитет и доверие поисковых систем к сайту.
            </p>
            <p className={styles.paragraph}>
              Комплексное SEO — это долгосрочная стратегия. Результаты проявляются постепенно, обычно 
              в течение 3–6 месяцев, но создают устойчивый рост трафика и позиций. Постоянная работа 
              над всеми аспектами обеспечивает конкурентоспособность в долгосрочной перспективе.
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
            <h3 className={styles.stepTitle}>Аудит и анализ</h3>
            <p className={styles.stepDescription}>
              Проводим комплексный аудит сайта, анализируем конкурентов, определяем потенциал и формируем 
              стратегию продвижения.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Техническая оптимизация</h3>
            <p className={styles.stepDescription}>
              Исправляем технические проблемы, оптимизируем скорость, индексацию, мобильную версию, 
              настраиваем структурированные данные.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Работа с контентом</h3>
            <p className={styles.stepDescription}>
              Оптимизируем существующий контент, создаём новый, работаем с мета-тегами, собираем семантическое 
              ядро и распределяем запросы.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Ссылочное продвижение</h3>
            <p className={styles.stepDescription}>
              Строим качественную ссылочную массу, работаем с анкорами, развиваем авторитет сайта.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Мониторинг и развитие</h3>
            <p className={styles.stepDescription}>
              Постоянно отслеживаем позиции, анализируем результаты, корректируем стратегию, развиваем 
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
            <Search size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Техническая оптимизация</h3>
            <p className={styles.serviceDescription}>
              Исправление технических ошибок, улучшение скорости, индексации, мобильной версии
            </p>
          </div>
          <div className={styles.serviceItem}>
            <FileText size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Работа с контентом</h3>
            <p className={styles.serviceDescription}>
              Оптимизация существующего контента, создание нового, работа с мета-тегами
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Target size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Семантика и ссылки</h3>
            <p className={styles.serviceDescription}>
              Сбор семантического ядра, ссылочное продвижение, работа с анкорами
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Settings size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Постоянное развитие</h3>
            <p className={styles.serviceDescription}>
              Регулярная работа над улучшением позиций, анализ конкурентов, развитие стратегии
            </p>
          </div>
          <div className={styles.serviceItem}>
            <BarChart3 size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Аналитика и отчёты</h3>
            <p className={styles.serviceDescription}>
              Настройка аналитики, отслеживание позиций, регулярные отчёты о результатах
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
              Клиенты получают системное продвижение сайта со всеми необходимыми работами. Результаты 
              проявляются постепенно, обычно в течение 3–6 месяцев: растут позиции по ключевым запросам, 
              увеличивается органический трафик, улучшается видимость в поисковых системах.
            </p>
            <p className={styles.paragraph}>
              Комплексный подход обеспечивает согласованность всех работ и максимальную эффективность. 
              Постоянная работа над всеми аспектами SEO создаёт устойчивый рост, который продолжается 
              долгосрочно. Трафик становится более стабильным и качественным, конверсия улучшается.
            </p>
            <p className={styles.paragraph}>
              Важно понимать: SEO — это долгосрочная стратегия. Результаты зависят от ниши, конкурентности, 
              качества сайта и других факторов. Мы не даём гарантий конкретных цифр, но работаем над 
              максимальной реализацией потенциала сайта.
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
              Мы работаем по подписке с ежемесячной оплатой. Подписка включает полный комплекс работ 
              по SEO: техническую оптимизацию, работу с контентом, ссылочное продвижение, аналитику 
              и постоянное развитие.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от размера сайта, конкурентности ниши, объёма работ и задач. Подписка 
              начинается от 70 000 рублей в месяц. Каждый проект начинается с аудита и формирования 
              стратегии.
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

export default ComprehensiveSEOPage;

