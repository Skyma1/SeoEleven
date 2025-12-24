import React from 'react';
import { ArrowRight, Check, X, Search, Target, FileText, BarChart3 } from 'lucide-react';
import styles from '../styles/SEOPage.module.css';

const SemanticCorePage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Сбор семантического ядра</h1>
          <p className={styles.heroSubtitle}>
            Формирование полного семантического ядра для эффективного SEO-продвижения
          </p>
          <p className={styles.heroDescription}>
            Семантическое ядро — это основа SEO-продвижения. Правильно собранное ядро позволяет 
            продвигать сайт по релевантным запросам, привлекать целевую аудиторию и получать 
            качественный трафик. Мы собираем полное семантическое ядро с кластеризацией и 
            распределением по страницам.
          </p>
          <button className={styles.heroCTA}>
            Обсудить сбор ядра
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
            <h2 className={styles.sectionTitle}>Кому нужен сбор семантического ядра</h2>
            <ul className={styles.list}>
              <li>Сайты, которые начинают SEO-продвижение</li>
              <li>Проекты без собранного семантического ядра</li>
              <li>Бизнесы, которым нужно понимать, по каким запросам продвигать сайт</li>
              <li>Компании, планирующие комплексное SEO-продвижение</li>
              <li>Проекты с большим количеством страниц, требующих оптимизации</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Сайты с уже собранным и актуальным семантическим ядром</li>
              <li>Проекты без планов на SEO-продвижение</li>
              <li>Бизнесы с очень узкой нишей и небольшим количеством запросов</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что такое семантическое ядро</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Семантическое ядро — это основа SEO-продвижения, список всех релевантных поисковых запросов, 
              по которым планируется продвигать сайт. Правильно собранное ядро позволяет понимать, по каким 
              запросам оптимизировать страницы, какой контент создавать, какие темы раскрывать. Это фундамент 
              для всех дальнейших SEO-работ.
            </p>
            <p className={styles.paragraph}>
              Сбор семантического ядра включает поиск всех релевантных запросов, анализ их частотности, 
              конкурентности, коммерческого потенциала. Затем запросы группируются (кластеризуются) по смыслу 
              и распределяются по страницам сайта. Это позволяет оптимизировать каждую страницу под конкретные 
              запросы и избежать конкуренции страниц друг с другом.
            </p>
            <p className={styles.paragraph}>
              Качественное семантическое ядро должно быть полным (охватывать все релевантные запросы), 
              структурированным (разбитым на кластеры), актуальным (учитывающим текущие тренды и изменения). 
              Это долгосрочный инструмент, который используется на протяжении всего продвижения.
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
            <h3 className={styles.stepTitle}>Исследование</h3>
            <p className={styles.stepDescription}>
              Изучаем бизнес, тематику, конкурентов, анализируем существующие запросы, определяем направления 
              для сбора ядра.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Сбор запросов</h3>
            <p className={styles.stepDescription}>
              Собираем все релевантные поисковые запросы из различных источников: поисковых систем, 
              конкурентов, подсказок, связанных запросов.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Анализ</h3>
            <p className={styles.stepDescription}>
              Анализируем частотность, конкурентность, коммерческий потенциал запросов, очищаем от 
              нерелевантных, группируем по смыслу.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Кластеризация</h3>
            <p className={styles.stepDescription}>
              Группируем запросы в кластеры, распределяем по страницам сайта, определяем приоритеты 
              и стратегию продвижения.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Документация</h3>
            <p className={styles.stepDescription}>
              Подготавливаем полную документацию с распределением запросов, рекомендациями по использованию, 
              стратегией продвижения.
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
            <h3 className={styles.serviceTitle}>Сбор запросов</h3>
            <p className={styles.serviceDescription}>
              Сбор всех релевантных поисковых запросов по тематике сайта
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Target size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Кластеризация</h3>
            <p className={styles.serviceDescription}>
              Группировка запросов по смыслу и распределение по страницам
            </p>
          </div>
          <div className={styles.serviceItem}>
            <FileText size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Документация</h3>
            <p className={styles.serviceDescription}>
              Подготовка полной документации с рекомендациями по использованию
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
              Клиенты получают полное семантическое ядро с кластеризацией и распределением запросов по страницам. 
              Это даёт понимание, по каким запросам продвигать сайт, какой контент создавать, как оптимизировать 
              страницы. Ядро становится основой для всех дальнейших SEO-работ.
            </p>
            <p className={styles.paragraph}>
              Правильно собранное семантическое ядро экономит время и ресурсы на дальнейшем продвижении, 
              позволяет избежать ошибок и создаёт структурированный план работы. С ядром можно сразу начинать 
              оптимизацию страниц, создание контента, работу над позициями.
            </p>
            <p className={styles.paragraph}>
              Результаты видны сразу после получения ядра: появляется чёткий план продвижения, понимание объёма 
              работ, приоритетов. Ядро используется на протяжении всего продвижения и регулярно обновляется 
              с учётом новых запросов и изменений.
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
              с исследования бизнеса и тематики.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от тематики, объёма запросов, сложности кластеризации и необходимых работ. 
              Сбор семантического ядра начинается от 25 000 рублей. После получения ядра можно продолжить 
              с оптимизацией страниц и комплексным продвижением.
            </p>
            <p className={styles.paragraph}>
              <a href="/contact" className={styles.pricingLink}>
                Обсудить сбор ядра и получить оценку
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SemanticCorePage;

