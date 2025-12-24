import React from 'react';
import { ArrowRight, Check, X, Search, FileText, Settings, BarChart3, Target } from 'lucide-react';
import styles from '../styles/SEOPage.module.css';

const SEOAuditPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>SEO-аудит (классический)</h1>
          <p className={styles.heroSubtitle}>
            Комплексный аудит сайта для выявления проблем и возможностей улучшения SEO
          </p>
          <p className={styles.heroDescription}>
            SEO-аудит — это глубокий анализ сайта, который выявляет технические проблемы, ошибки 
            оптимизации, возможности для улучшения. Аудит даёт полное понимание текущего состояния 
            сайта и рекомендации по улучшению для роста позиций и трафика.
          </p>
          <button className={styles.heroCTA}>
            Заказать аудит
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
            <h2 className={styles.sectionTitle}>Кому нужен SEO-аудит</h2>
            <ul className={styles.list}>
              <li>Сайты, которые не растут в поисковых системах</li>
              <li>Проекты, которым нужно понять текущее состояние SEO</li>
              <li>Бизнесы, планирующие начать или улучшить продвижение</li>
              <li>Компании, которые хотят выявить проблемы и возможности</li>
              <li>Сайты после изменений, которым нужна оценка состояния</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Проекты без доступа к сайту для проведения аудита</li>
              <li>Компании, не готовые действовать на основе рекомендаций</li>
              <li>Сайты, которые уже прошли недавний комплексный аудит</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что такое SEO-аудит</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              SEO-аудит — это комплексный анализ сайта, который выявляет технические проблемы, ошибки оптимизации, 
              возможности для улучшения. Аудит даёт полное понимание текущего состояния сайта с точки зрения SEO: 
              что работает хорошо, что требует внимания, что можно улучшить. Это основа для принятия решений о 
              стратегии продвижения.
            </p>
            <p className={styles.paragraph}>
              Аудит включает проверку технических параметров (скорость, индексация, мобильная версия), анализ контента 
              (мета-теги, заголовки, оптимизация), изучение ссылочной массы, анализ конкурентов, оценку видимости в 
              поисковых системах. Все найденные проблемы документируются с приоритетами и рекомендациями по исправлению.
            </p>
            <p className={styles.paragraph}>
              Аудит особенно важен перед началом продвижения или при наличии проблем: он показывает, с чего начать, 
              какие проблемы критичны, что даст наибольший эффект. Правильно проведённый аудит экономит время и ресурсы, 
              направляя усилия на самые важные задачи.
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
            <h3 className={styles.stepTitle}>Сбор данных</h3>
            <p className={styles.stepDescription}>
              Собираем данные о сайте: технические параметры, контент, ссылочную массу, позиции, аналитику, 
              изучаем конкурентов.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Технический анализ</h3>
            <p className={styles.stepDescription}>
              Проверяем технические параметры: скорость, индексацию, мобильную версию, структурированные данные, 
              выявляем технические проблемы.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Анализ контента</h3>
            <p className={styles.stepDescription}>
              Анализируем контент, мета-теги, заголовки, оптимизацию под запросы, структуру, выявляем проблемы 
              и возможности.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Анализ конкурентов</h3>
            <p className={styles.stepDescription}>
              Изучаем конкурентов, их оптимизацию, ссылочную массу, позиции, выявляем возможности для улучшения.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Рекомендации</h3>
            <p className={styles.stepDescription}>
              Формируем детальный отчёт с приоритизированными рекомендациями, планом действий, оценкой потенциала.
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
            <h3 className={styles.serviceTitle}>Технический аудит</h3>
            <p className={styles.serviceDescription}>
              Проверка технических параметров, индексации, скорости, мобильной версии
            </p>
          </div>
          <div className={styles.serviceItem}>
            <FileText size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Аудит контента</h3>
            <p className={styles.serviceDescription}>
              Анализ контента, мета-тегов, структуры, оптимизации под запросы
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Settings size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Анализ конкурентов</h3>
            <p className={styles.serviceDescription}>
              Сравнение с конкурентами, выявление возможностей для улучшения
            </p>
          </div>
          <div className={styles.serviceItem}>
            <BarChart3 size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Рекомендации</h3>
            <p className={styles.serviceDescription}>
              Подготовка детального отчёта с приоритизированными рекомендациями
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
              Клиенты получают детальный отчёт с анализом текущего состояния сайта, выявленными проблемами, 
              возможностями для улучшения и приоритизированными рекомендациями. Отчёт даёт полное понимание, 
              что нужно исправить, с чего начать продвижение, какие задачи критичны.
            </p>
            <p className={styles.paragraph}>
              Аудит выявляет как проблемы, которые нужно исправить в первую очередь, так и возможности для 
              улучшения, которые могут дать значительный эффект. С аудитом можно сразу начинать работу по 
              улучшению сайта и продвижению, зная приоритеты и направления работы.
            </p>
            <p className={styles.paragraph}>
              Результаты видны сразу после получения отчёта: появляется чёткий план действий, понимание 
              текущего состояния, приоритетов. Аудит экономит время и ресурсы, направляя усилия на самые 
              важные задачи и избегая ошибок.
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
              с определения задач аудита и сбора данных.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от размера сайта (количества страниц), сложности структуры, необходимой 
              глубины анализа и задач. SEO-аудит начинается от 50 000 рублей. После аудита можно продолжить 
              с работами по улучшению сайта или комплексным продвижением.
            </p>
            <p className={styles.paragraph}>
              <a href="/contact" className={styles.pricingLink}>
                Заказать аудит и получить оценку
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SEOAuditPage;

