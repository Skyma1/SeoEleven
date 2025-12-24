import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, X, Search, FileText, Settings, BarChart3, Target } from 'lucide-react';
import styles from '../styles/SEOPage.module.css';
import Quiz from './Quiz';

const SEOPage = () => {
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate('/contact');
  };

  return (
    <>
      {/* БЛОК 1. HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>SEO-продвижение под AI (GEO)</h1>
          <p className={styles.heroSubtitle}>
            Оптимизация сайта для появления в ответах AI-ассистентов, нейросетей и поисковых систем нового поколения
          </p>
          <p className={styles.heroDescription}>
            GEO (Generative Engine Optimization) — это подход к продвижению, учитывающий, 
            что всё больше пользователей получают информацию через AI-ответы, а не классические 
            результаты поиска. В отличие от традиционного SEO, GEO фокусируется на структурированном 
            контенте, который AI-системы могут корректно интерпретировать и использовать в ответах.
          </p>
          <button className={styles.heroCTA} onClick={handleCTA}>
            Рассчитать потенциал продвижения
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
            <h2 className={styles.sectionTitle}>Кому подходит GEO</h2>
            <ul className={styles.list}>
              <li>Сайты с экспертной информацией и подробными ответами</li>
              <li>Компании, работающие в нишах с высоким спросом на консультации</li>
              <li>Сервисные бизнесы, где важна видимость в локальных AI-ответах</li>
              <li>Проекты с качественным контентом, готовым к структурированию</li>
              <li>Сайты, которым нужен долгосрочный рост органического трафика</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Сайты с минимальным контентом или низким качеством текстов</li>
              <li>Проекты, требующие быстрого результата за месяц</li>
              <li>Ниши, где AI-ответы не влияют на принятие решений пользователями</li>
              <li>Сайты с техническими ограничениями, которые нельзя устранить</li>
              <li>Проекты без ресурсов для создания и поддержки контента</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ GEO И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что такое GEO и как это работает</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Когда пользователь задаёт вопрос в поисковой системе или AI-ассистенту, система 
              анализирует доступные источники и формирует ответ. В отличие от классического SEO, 
              где важно попасть в топ-10 результатов, в GEO важно, чтобы ваш контент был выбран 
              AI как источник для формирования ответа.
            </p>
            <p className={styles.paragraph}>
              AI-системы оценивают контент по другим критериям: структурированность данных, 
              полнота ответа, авторитетность источника, соответствие запросу по смыслу, а не только 
              по ключевым словам. Поэтому классические SEO-методы — плотность ключевиков, 
              внутренние ссылки, технические факторы — работают, но недостаточно.
            </p>
            <p className={styles.paragraph}>
              GEO требует переработки контента в формат, который AI может легко понять и использовать. 
              Это значит: чёткая структура, ответы на вопросы, экспертная позиция, фактологическая 
              база. Контент должен не только ранжироваться, но и быть полезным для формирования AI-ответов.
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
              Изучаем текущее состояние сайта, контент, технические параметры и конкурентов. 
              Определяем потенциал для GEO-продвижения.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Стратегия</h3>
            <p className={styles.stepDescription}>
              Формируем план оптимизации: какие страницы приоритетны, какой контент нужно создать 
              или переработать, какие структуры внедрить.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Подготовка контента</h3>
            <p className={styles.stepDescription}>
              Создаём или перерабатываем контент под GEO-принципы: структурируем информацию, 
              добавляем ответы на вопросы, оптимизируем под AI-понимание.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Внедрение</h3>
            <p className={styles.stepDescription}>
              Внедряем изменения на сайте: технические правки, обновление контента, 
              настройка структурированных данных, оптимизация под AI-форматы.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Контроль</h3>
            <p className={styles.stepDescription}>
              Отслеживаем появление в AI-ответах, анализируем изменения видимости, корректируем 
              стратегию на основе результатов.
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
            <h3 className={styles.serviceTitle}>Анализ сайта</h3>
            <p className={styles.serviceDescription}>
              Технический аудит, оценка контента, анализ структуры и потенциала для GEO
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Target size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>AI-ориентированная семантика</h3>
            <p className={styles.serviceDescription}>
              Формирование семантического ядра с учётом AI-запросов и интентов пользователей
            </p>
          </div>
          <div className={styles.serviceItem}>
            <FileText size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Переработка структуры контента</h3>
            <p className={styles.serviceDescription}>
              Реструктуризация существующего контента под формат, понятный AI-системам
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Settings size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Оптимизация под AI-ответы</h3>
            <p className={styles.serviceDescription}>
              Настройка структурированных данных, разметки и форматов для лучшего понимания AI
            </p>
          </div>
          <div className={styles.serviceItem}>
            <BarChart3 size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Рекомендации и внедрение</h3>
            <p className={styles.serviceDescription}>
              Технические рекомендации, помощь во внедрении, обучение команды принципам GEO
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
              Результаты GEO-продвижения проявляются постепенно, обычно в течение 3–6 месяцев. 
              Клиенты отмечают рост видимости в AI-ответах, увеличение органического трафика 
              из новых источников, появление в ответах ChatGPT, Google SGE и других AI-систем.
            </p>
            <p className={styles.paragraph}>
              Трафик из AI-источников отличается более высоким качеством — пользователи, получившие 
              ответ от AI, уже прошли часть воронки и приходят на сайт с более конкретным запросом. 
              Это повышает конверсию и качество заявок.
            </p>
            <p className={styles.paragraph}>
              Важно понимать: GEO — это долгосрочная стратегия. Результаты зависят от ниши, 
              качества контента, конкурентности и других факторов. Мы не даём гарантий конкретных 
              цифр, но работаем над максимальной реализацией потенциала сайта.
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
              Мы работаем в формате проекта с фиксированным объёмом работ или по подписке 
              для постоянной поддержки и развития. Каждый проект начинается с аудита и формирования 
              стратегии, затем идёт этап внедрения и сопровождение результатов.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от объёма работ: количества страниц для оптимизации, необходимости 
              создания нового контента, сложности технических изменений. Диапазон цен начинается 
              от 150 000 рублей за проект.
            </p>
            <p className={styles.paragraph}>
              <a href="/contact" className={styles.pricingLink}>
                Обсудить проект и получить оценку
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 8. CTA */}
      <section className={styles.section}>
        <div className={styles.ctaSection}>
          <div className={styles.quizWrapper}>
            <Quiz />
          </div>
        </div>
      </section>
    </>
  );
};

export default SEOPage;

