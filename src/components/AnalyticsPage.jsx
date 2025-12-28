import React from 'react';
import { ArrowRight, Check, X, BarChart3, Search, Target, TrendingUp, FileText } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import styles from '../styles/SEOPage.module.css';

const AnalyticsPage = () => {
  const { openModal } = useModal();

  const handleCTA = () => {
    openModal('Аналитика и аудит', 'service-page');
  };

  return (
    <>
      {/* БЛОК 1. HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Продвинутая аналитика и аудит</h1>
          <p className={styles.heroSubtitle}>
            Глубокий анализ данных, метрик и процессов для принятия обоснованных бизнес-решений
          </p>
          <p className={styles.heroDescription}>
            Продвинутая аналитика помогает понять, что происходит в бизнесе, почему происходят 
            изменения и что можно улучшить. Мы проводим комплексные аудиты, настраиваем системы 
            аналитики, строим дашборды и отчёты, которые дают реальное понимание эффективности 
            процессов и помогают принимать решения на основе данных.
          </p>
          <button className={styles.heroCTA} onClick={handleCTA}>
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
            <h2 className={styles.sectionTitle}>Кому нужна аналитика</h2>
            <ul className={styles.list}>
              <li>Компании, которым нужно понять эффективность процессов</li>
              <li>Бизнесы, работающие с несколькими каналами и системами</li>
              <li>Проекты, требующие обоснованных решений на основе данных</li>
              <li>Компании, которым нужно отслеживать ключевые метрики</li>
              <li>Бизнесы, планирующие масштабирование и оптимизацию</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Проекты без доступа к данным для анализа</li>
              <li>Компании, не готовые действовать на основе аналитики</li>
              <li>Бизнесы с очень простыми процессами без необходимости анализа</li>
              <li>Проекты без ресурсов для внедрения рекомендаций</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что такое продвинутая аналитика</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Продвинутая аналитика — это не просто сбор данных, а комплексный подход к пониманию 
              бизнеса. Мы анализируем метрики из различных источников, находим связи между процессами, 
              выявляем узкие места и возможности для оптимизации. Аналитика помогает ответить на вопросы: 
              что работает хорошо, что можно улучшить, куда инвестировать ресурсы.
            </p>
            <p className={styles.paragraph}>
              Аудит — это глубокое исследование текущего состояния: процессов, систем, данных, 
              эффективности. Аудит выявляет проблемы, несоответствия, неиспользуемые возможности 
              и даёт рекомендации по улучшению. Это основа для принятия решений о развитии и оптимизации.
            </p>
            <p className={styles.paragraph}>
              Мы настраиваем системы аналитики, которые автоматически собирают данные, строят отчёты 
              и визуализируют метрики. Это позволяет постоянно отслеживать состояние бизнеса и быстро 
              реагировать на изменения.
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
              Собираем данные из всех источников: аналитика, CRM, системы, базы данных. Определяем 
              ключевые метрики и показатели для анализа.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Анализ</h3>
            <p className={styles.stepDescription}>
              Проводим глубокий анализ данных, выявляем закономерности, проблемы, возможности. 
              Строим модели и прогнозы.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Аудит</h3>
            <p className={styles.stepDescription}>
              Проводим аудит процессов, систем, эффективности. Выявляем узкие места, несоответствия, 
              неиспользуемые возможности.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Рекомендации</h3>
            <p className={styles.stepDescription}>
              Формируем рекомендации по улучшению, приоритизируем задачи, оцениваем потенциальный 
              эффект от изменений.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Внедрение аналитики</h3>
            <p className={styles.stepDescription}>
              Настраиваем системы аналитики, дашборды, автоматические отчёты. Обучаем команду 
              работе с данными и обеспечиваем поддержку.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. ЧТО ВХОДИТ В УСЛУГУ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <BarChart3 size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Комплексный аудит</h3>
            <p className={styles.serviceDescription}>
              Глубокий анализ процессов, систем, данных и эффективности с выявлением проблем и возможностей
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Search size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Анализ данных</h3>
            <p className={styles.serviceDescription}>
              Сбор, обработка и анализ данных из различных источников, выявление закономерностей и трендов
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Target size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Настройка метрик</h3>
            <p className={styles.serviceDescription}>
              Определение ключевых метрик, настройка систем отслеживания, построение KPI-системы
            </p>
          </div>
          <div className={styles.serviceItem}>
            <TrendingUp size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Дашборды и отчёты</h3>
            <p className={styles.serviceDescription}>
              Создание дашбордов, автоматических отчётов и визуализаций для мониторинга метрик
            </p>
          </div>
          <div className={styles.serviceItem}>
            <FileText size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Рекомендации и стратегия</h3>
            <p className={styles.serviceDescription}>
              Формирование рекомендаций по улучшению, приоритизация задач, разработка стратегии развития
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
              Клиенты получают полное понимание текущего состояния бизнеса, выявленные проблемы 
              и возможности для улучшения. Аналитика показывает, что работает хорошо, а что требует 
              внимания, и помогает принимать обоснованные решения на основе данных, а не предположений.
            </p>
            <p className={styles.paragraph}>
              Настроенные системы аналитики позволяют постоянно отслеживать ключевые метрики, 
              быстро реагировать на изменения и видеть эффект от внесённых улучшений. Это создаёт 
              основу для постоянного развития и оптимизации бизнеса.
            </p>
            <p className={styles.paragraph}>
              Результаты зависят от объёма данных, сложности процессов и задач. Простой аудит может 
              быть готов за 1–2 недели, комплексная аналитика с настройкой систем — за 3–6 недель.
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
              Мы работаем в формате проекта с фиксированным объёмом работ или по подписке для 
              постоянной аналитики и поддержки. Каждый проект начинается с определения задач 
              и сбора данных.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от объёма данных, сложности анализа, количества систем для аудита 
              и задач. Простой аудит начинается от 80 000 рублей, комплексная аналитика с настройкой 
              систем — от 200 000 рублей.
            </p>
            <p className={styles.paragraph}>
              <button 
                onClick={handleCTA}
                className={styles.pricingLink}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', color: 'inherit', font: 'inherit' }}
              >
                Заказать аудит и получить оценку
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnalyticsPage;

