import React from 'react';
import { ArrowRight, Check, X, Settings, Shield, Zap, Clock, Target } from 'lucide-react';
import styles from '../styles/SEOPage.module.css';

const SupportPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Поддержка и обслуживание</h1>
          <p className={styles.heroSubtitle}>
            Техническая поддержка и обслуживание сайтов для стабильной работы
          </p>
          <p className={styles.heroDescription}>
            Поддержка включает обновления, исправление ошибок, мониторинг работы, резервное копирование, 
            безопасность. Мы обеспечиваем стабильную работу вашего сайта, оперативно решаем проблемы 
            и поддерживаем актуальность всех систем.
          </p>
          <button className={styles.heroCTA}>
            Обсудить поддержку
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
            <h2 className={styles.sectionTitle}>Кому нужна поддержка</h2>
            <ul className={styles.list}>
              <li>Компании с рабочими сайтами, которым нужна стабильная работа</li>
              <li>Бизнесы без собственной IT-команды для поддержки</li>
              <li>Проекты, которым важна безопасность и актуальность систем</li>
              <li>Компании, которым нужно быстрое решение технических проблем</li>
              <li>Бизнесы, требующие регулярных обновлений и улучшений</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Компании с собственной сильной IT-командой</li>
              <li>Проекты без активного сайта или приложения</li>
              <li>Бизнесы, которым нужна только разовая поддержка</li>
              <li>Компании без бюджета на постоянную поддержку</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что такое техническая поддержка сайтов</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Техническая поддержка включает комплекс работ по обеспечению стабильной работы сайта: 
              исправление ошибок, обновление систем, мониторинг работы, резервное копирование, 
              обеспечение безопасности. Поддержка позволяет сайту работать без простоев и проблем, 
              быть защищённым от угроз и постоянно обновляться.
            </p>
            <p className={styles.paragraph}>
              Регулярная поддержка предотвращает накопление проблем, обеспечивает безопасность данных, 
              поддерживает актуальность систем и позволяет быстро реагировать на любые технические проблемы. 
              Это особенно важно для бизнесов, где сайт — важная часть работы компании.
            </p>
            <p className={styles.paragraph}>
              Поддержка может включать как реактивные работы (решение проблем по запросу), так и 
              проактивные (регулярные проверки, обновления, мониторинг). Мы комбинируем оба подхода 
              для максимальной надёжности.
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
            <h3 className={styles.stepTitle}>Анализ и настройка</h3>
            <p className={styles.stepDescription}>
              Изучаем текущее состояние сайта, настраиваем мониторинг, системы резервного копирования, 
              определяем приоритеты поддержки.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Регулярный мониторинг</h3>
            <p className={styles.stepDescription}>
              Отслеживаем работу сайта, производительность, безопасность, доступность. Выявляем проблемы 
              до того, как они станут критичными.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Обслуживание</h3>
            <p className={styles.stepDescription}>
              Регулярно обновляем системы, исправляем ошибки, оптимизируем производительность, 
              обеспечиваем безопасность.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Реакция на проблемы</h3>
            <p className={styles.stepDescription}>
              Быстро реагируем на технические проблемы, исправляем ошибки, восстанавливаем работу 
              при сбоях.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Отчёты и развитие</h3>
            <p className={styles.stepDescription}>
              Регулярно отчитываемся о проделанной работе, рекомендуем улучшения, развиваем функционал.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. ЧТО ВХОДИТ В УСЛУГУ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <Settings size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Техническая поддержка</h3>
            <p className={styles.serviceDescription}>
              Исправление ошибок, обновления, решение технических проблем
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Shield size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Безопасность</h3>
            <p className={styles.serviceDescription}>
              Мониторинг безопасности, защита от атак, обновления безопасности
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Clock size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Мониторинг</h3>
            <p className={styles.serviceDescription}>
              Отслеживание работы сайта, производительности, доступности
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Zap size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Резервное копирование</h3>
            <p className={styles.serviceDescription}>
              Регулярное резервное копирование данных, восстановление при необходимости
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
              Клиенты получают стабильно работающий сайт без простоев и технических проблем. 
              Все системы обновляются, безопасность обеспечивается, проблемы решаются быстро. 
              Это позволяет сосредоточиться на бизнесе, а не на технических вопросах.
            </p>
            <p className={styles.paragraph}>
              Регулярная поддержка предотвращает накопление проблем, обеспечивает безопасность 
              данных и конфиденциальность пользователей, поддерживает актуальность всех систем. 
              Резервное копирование защищает от потери данных, а мониторинг позволяет быстро 
              реагировать на любые изменения.
            </p>
            <p className={styles.paragraph}>
              Результаты заметны сразу: сайт работает стабильно, проблемы решаются быстро, 
              обновления устанавливаются регулярно. Компания получает надёжного технического 
              партнёра, который заботится о её цифровом присутствии.
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
              Мы работаем по подписке с фиксированной ежемесячной стоимостью. Объём работ определяется 
              индивидуально в зависимости от сложности сайта, частоты обновлений, необходимого уровня 
              поддержки. Стоимость начинается от 20 000 рублей в месяц.
            </p>
            <p className={styles.paragraph}>
              Подписка включает регулярные работы по мониторингу, обновлениям, безопасности, а также 
              реакцию на технические проблемы в рамках оговорённого времени реагирования.
            </p>
            <p className={styles.paragraph}>
              <a href="/contact" className={styles.pricingLink}>
                Обсудить поддержку и получить оценку
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportPage;

