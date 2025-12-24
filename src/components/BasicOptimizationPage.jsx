import React from 'react';
import { ArrowRight, Check, X, Settings, FileText, Search, Target } from 'lucide-react';
import styles from '../styles/SEOPage.module.css';

const BasicOptimizationPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Базовая оптимизация и мета-теги</h1>
          <p className={styles.heroSubtitle}>
            Оптимизация базовых элементов сайта для улучшения видимости в поисковых системах
          </p>
          <p className={styles.heroDescription}>
            Базовая оптимизация включает работу с мета-тегами, заголовками, описаниями, структурой 
            страниц. Это фундамент SEO, который необходим для правильной индексации и отображения 
            сайта в поисковых системах. Мы оптимизируем все базовые элементы для максимальной эффективности.
          </p>
          <button className={styles.heroCTA}>
            Обсудить оптимизацию
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
              <li>Сайты без базовой оптимизации</li>
              <li>Проекты, которым нужен быстрый старт SEO</li>
              <li>Бизнесы с ограниченным бюджетом</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Сайты с уже выполненной базовой оптимизацией</li>
              <li>Проекты, требующие комплексного продвижения</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что такое базовая оптимизация</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Базовая оптимизация — это фундамент SEO, включающий работу с основными элементами сайта, 
              которые влияют на индексацию и отображение в поисковых системах. Это мета-теги (title, 
              description), заголовки (H1-H6), структура страниц, внутренние ссылки. Без базовой оптимизации 
              поисковые системы могут неправильно понимать содержание страниц и показывать их некорректно.
            </p>
            <p className={styles.paragraph}>
              Правильно оптимизированные мета-теги помогают поисковым системам понять содержание страницы 
              и отображаются в результатах поиска. Заголовки структурируют контент и помогают как поисковым 
              системам, так и пользователям понимать иерархию информации. Структура страниц и навигация 
              облегчают индексацию и навигацию.
            </p>
            <p className={styles.paragraph}>
              Базовая оптимизация — это необходимый минимум для любого сайта, который хочет появляться 
              в поисковых системах. Это не обеспечивает высокие позиции само по себе, но создаёт основу 
              для дальнейшего продвижения. Для новых сайтов или сайтов без оптимизации это первый важный шаг.
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
            <h3 className={styles.stepTitle}>Анализ сайта</h3>
            <p className={styles.stepDescription}>
              Изучаем текущее состояние сайта, анализируем существующие мета-теги, заголовки, структуру, 
              определяем объём работ.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Планирование</h3>
            <p className={styles.stepDescription}>
              Определяем приоритетные страницы, формируем структуру оптимизации, планируем работу с мета-тегами 
              и заголовками.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Оптимизация</h3>
            <p className={styles.stepDescription}>
              Оптимизируем мета-теги, заголовки, улучшаем структуру страниц, навигацию, внутренние ссылки.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Внедрение</h3>
            <p className={styles.stepDescription}>
              Внедряем изменения на сайте, проверяем корректность отображения, тестируем индексацию.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Проверка и отчёт</h3>
            <p className={styles.stepDescription}>
              Проверяем результаты оптимизации, отслеживаем индексацию, готовим отчёт о проделанной работе.
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
            <h3 className={styles.serviceTitle}>Мета-теги</h3>
            <p className={styles.serviceDescription}>
              Оптимизация title, description, keywords для всех страниц сайта
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Settings size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Заголовки</h3>
            <p className={styles.serviceDescription}>
              Оптимизация H1-H6, структурирование заголовков на страницах
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Search size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Структура</h3>
            <p className={styles.serviceDescription}>
              Улучшение структуры страниц, навигации, внутренних ссылок
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
              Клиенты получают правильно оптимизированный сайт с корректными мета-тегами, заголовками 
              и структурой. Поисковые системы лучше понимают содержание страниц, правильно индексируют 
              сайт и корректно отображают его в результатах поиска. Это создаёт основу для дальнейшего 
              продвижения.
            </p>
            <p className={styles.paragraph}>
              Результаты заметны через несколько недель после внедрения: улучшается индексация, 
              правильнее отображаются сниппеты в поиске, пользователи видят более релевантные описания 
              страниц. Это первый важный шаг к появлению в поисковых системах.
            </p>
            <p className={styles.paragraph}>
              Важно понимать: базовая оптимизация — это фундамент, но не гарантирует высоких позиций 
              сама по себе. Для роста позиций нужна комплексная работа: контент, ссылки, техническая 
              оптимизация. Базовая оптимизация создаёт правильную основу для этой работы.
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
              с анализа сайта и определения объёма работ.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от количества страниц, сложности структуры и объёма работ. Оптимизация 
              начинается от 30 000 рублей. После завершения базовой оптимизации можно продолжить с 
              комплексным продвижением.
            </p>
            <p className={styles.paragraph}>
              <a href="/contact" className={styles.pricingLink}>
                Обсудить оптимизацию и получить оценку
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BasicOptimizationPage;

