import React from 'react';
import { ArrowRight, Check, X, Server, Settings, Zap, Shield, Target } from 'lucide-react';
import styles from '../styles/SEOPage.module.css';

const HostingSetupPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Настройка хостинга</h1>
          <p className={styles.heroSubtitle}>
            Настройка и оптимизация хостинга для быстрой и стабильной работы сайта
          </p>
          <p className={styles.heroDescription}>
            Правильная настройка хостинга критически важна для скорости и стабильности сайта. 
            Мы настраиваем серверы, оптимизируем производительность, настраиваем безопасность, 
            SSL-сертификаты, резервное копирование и мониторинг.
          </p>
          <button className={styles.heroCTA}>
            Обсудить настройку
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
            <h2 className={styles.sectionTitle}>Кому нужна настройка хостинга</h2>
            <ul className={styles.list}>
              <li>Компании с новыми сайтами, которым нужна правильная настройка</li>
              <li>Бизнесы, у которых сайт работает медленно или нестабильно</li>
              <li>Проекты, требующие настройки безопасности и SSL</li>
              <li>Компании, переезжающие на новый хостинг</li>
              <li>Бизнесы, которым нужна оптимизация производительности</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Проекты с уже правильно настроенным хостингом</li>
              <li>Компании с очень простыми статическими сайтами</li>
              <li>Бизнесы без доступа к серверу или хостингу</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что включает настройка хостинга</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Настройка хостинга — это комплексная работа по оптимизации серверной инфраструктуры 
              для быстрой, стабильной и безопасной работы сайта. Это включает настройку сервера, 
              оптимизацию производительности, настройку безопасности, SSL-сертификатов, кэширования, 
              CDN, мониторинга и резервного копирования.
            </p>
            <p className={styles.paragraph}>
              Правильная настройка хостинга критически важна для скорости загрузки сайта, которая 
              влияет на пользовательский опыт и SEO. Медленный сайт теряет посетителей и позиции 
              в поисковых системах. Оптимизация сервера, кэширование и CDN могут значительно ускорить 
              загрузку.
            </p>
            <p className={styles.paragraph}>
              Безопасность — ещё один важный аспект. Настройка SSL, файрволов, защита от атак, 
              регулярные обновления обеспечивают защиту сайта и данных пользователей. Мониторинг 
              позволяет отслеживать работу и быстро реагировать на проблемы.
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
              Изучаем текущую настройку хостинга, производительность, проблемы, определяем 
              задачи оптимизации и улучшения.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Настройка сервера</h3>
            <p className={styles.stepDescription}>
              Настраиваем сервер, оптимизируем конфигурацию, производительность, устанавливаем 
              необходимые компоненты.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Оптимизация</h3>
            <p className={styles.stepDescription}>
              Настраиваем кэширование, сжатие, CDN, оптимизируем базы данных для максимальной скорости.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Безопасность</h3>
            <p className={styles.stepDescription}>
              Настраиваем SSL-сертификаты, файрволы, защиту от атак, обновления безопасности.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Мониторинг и документирование</h3>
            <p className={styles.stepDescription}>
              Настраиваем мониторинг, резервное копирование, документируем настройки, обучаем команду.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. ЧТО ВХОДИТ В УСЛУГУ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <Server size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Настройка сервера</h3>
            <p className={styles.serviceDescription}>
              Настройка сервера, оптимизация производительности, конфигурация
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Zap size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Оптимизация</h3>
            <p className={styles.serviceDescription}>
              Оптимизация скорости, кэширование, сжатие, CDN
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Shield size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Безопасность</h3>
            <p className={styles.serviceDescription}>
              Настройка SSL, защита от атак, настройка файрволов
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Settings size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Мониторинг</h3>
            <p className={styles.serviceDescription}>
              Настройка мониторинга работы, алертов, логирования
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
              Клиенты получают правильно настроенный хостинг, который обеспечивает быструю и стабильную 
              работу сайта. Скорость загрузки значительно улучшается, что положительно влияет на 
              пользовательский опыт и SEO. Безопасность обеспечивается современными методами защиты.
            </p>
            <p className={styles.paragraph}>
              Оптимизированный хостинг может обрабатывать больше трафика, лучше справляться с нагрузкой, 
              обеспечивать стабильность работы. Настроенный мониторинг позволяет отслеживать состояние 
              и быстро реагировать на проблемы. Резервное копирование защищает от потери данных.
            </p>
            <p className={styles.paragraph}>
              Результаты заметны сразу после настройки: сайт загружается быстрее, работает стабильнее, 
              более защищён. Это создаёт основу для дальнейшего развития и масштабирования бизнеса.
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
              с анализа текущей настройки и определения задач оптимизации.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от сложности настройки, типа сервера, необходимых оптимизаций и объёма работ. 
              Настройка начинается от 30 000 рублей. При необходимости можно заказать дополнительную 
              поддержку и развитие.
            </p>
            <p className={styles.paragraph}>
              <a href="/contact" className={styles.pricingLink}>
                Обсудить настройку и получить оценку
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HostingSetupPage;

