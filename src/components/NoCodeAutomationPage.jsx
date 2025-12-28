import React from 'react';
import { ArrowRight, Check, X, Workflow, Zap, Link as LinkIcon, Settings, BarChart3 } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import styles from '../styles/SEOPage.module.css';

const NoCodeAutomationPage = () => {
  const { openModal } = useModal();

  const handleCTA = () => {
    openModal('Автоматизация без кода (Make, n8n)', 'service-page');
  };

  return (
    <>
      {/* БЛОК 1. HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Автоматизация без кода (Make, n8n)</h1>
          <p className={styles.heroSubtitle}>
            Автоматизация бизнес-процессов через no-code платформы без программирования
          </p>
          <p className={styles.heroDescription}>
            No-code автоматизация позволяет создавать сложные бизнес-процессы без написания кода. 
            Платформы вроде Make (Integromat) и n8n дают возможность соединять различные сервисы, 
            обрабатывать данные, отправлять уведомления и выполнять действия по заданным сценариям. 
            Это ускоряет процессы, снижает ошибки и освобождает время сотрудников.
          </p>
          <button className={styles.heroCTA} onClick={handleCTA}>
            Обсудить автоматизацию
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
            <h2 className={styles.sectionTitle}>Кому подходит автоматизация</h2>
            <ul className={styles.list}>
              <li>Компании с повторяющимися рутинными процессами</li>
              <li>Бизнесы, использующие несколько сервисов и систем</li>
              <li>Компании, которым нужно синхронизировать данные между системами</li>
              <li>Проекты, где важна скорость внедрения решений</li>
              <li>Компании без собственной IT-команды</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Процессы, требующие сложной логики и алгоритмов</li>
              <li>Системы с очень специфическими требованиями безопасности</li>
              <li>Проекты, где нужна полная кастомизация на уровне кода</li>
              <li>Процессы, которые уже полностью автоматизированы</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что такое no-code автоматизация</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              No-code платформы позволяют создавать автоматизации через визуальный интерфейс: 
              вы соединяете блоки (модули), которые выполняют определённые действия. Например, 
              при поступлении новой заявки в CRM можно автоматически создать задачу, отправить 
              уведомление и добавить данные в таблицу.
            </p>
            <p className={styles.paragraph}>
              Make (бывший Integromat) и n8n — это мощные платформы с тысячами готовых интеграций. 
              Они позволяют работать с CRM, email, мессенджерами, базами данных, API и многими 
              другими сервисами. Автоматизации могут быть простыми (одна цепочка действий) или 
              сложными (множество условий, циклов, обработка ошибок).
            </p>
            <p className={styles.paragraph}>
              Преимущество no-code подхода — скорость внедрения. Автоматизацию можно создать 
              и запустить за дни или недели, а не месяцы разработки. Это особенно важно для 
              малого и среднего бизнеса, где нужно быстро решать задачи без больших IT-бюджетов.
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
            <h3 className={styles.stepTitle}>Анализ процессов</h3>
            <p className={styles.stepDescription}>
              Изучаем текущие бизнес-процессы, определяем задачи для автоматизации, выявляем 
              узкие места и возможности оптимизации.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Проектирование сценариев</h3>
            <p className={styles.stepDescription}>
              Проектируем автоматизации: определяем триггеры, действия, условия, обработку ошибок, 
              выбираем платформу (Make или n8n).
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Разработка</h3>
            <p className={styles.stepDescription}>
              Создаём автоматизации на выбранной платформе, настраиваем интеграции, тестируем 
              работу сценариев.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Тестирование</h3>
            <p className={styles.stepDescription}>
              Проводим тестирование в реальных условиях, проверяем обработку ошибок, оптимизируем 
              производительность.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Запуск и обучение</h3>
            <p className={styles.stepDescription}>
              Запускаем автоматизации, обучаем команду работе с системой, настраиваем мониторинг 
              и обеспечиваем поддержку.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. ЧТО ВХОДИТ В УСЛУГУ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <Workflow size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Разработка автоматизаций</h3>
            <p className={styles.serviceDescription}>
              Создание сценариев автоматизации на Make или n8n с нужной логикой, условиями и обработкой ошибок
            </p>
          </div>
          <div className={styles.serviceItem}>
            <LinkIcon size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Интеграции</h3>
            <p className={styles.serviceDescription}>
              Подключение к CRM, email, мессенджерам, базам данных, API и другим необходимым сервисам
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Zap size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Оптимизация процессов</h3>
            <p className={styles.serviceDescription}>
              Анализ и оптимизация бизнес-процессов для максимальной эффективности автоматизации
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Settings size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Настройка и поддержка</h3>
            <p className={styles.serviceDescription}>
              Настройка платформы, обучение команды, техническая поддержка и развитие автоматизаций
            </p>
          </div>
          <div className={styles.serviceItem}>
            <BarChart3 size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Мониторинг и аналитика</h3>
            <p className={styles.serviceDescription}>
              Настройка мониторинга работы автоматизаций, аналитика эффективности и отчёты
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
              Клиенты получают автоматизированные процессы, которые работают без участия сотрудников. 
              Это освобождает время команды, снижает количество ошибок и ускоряет выполнение задач. 
              Например, обработка заявок, синхронизация данных между системами, отправка уведомлений 
              — всё это может работать автоматически.
            </p>
            <p className={styles.paragraph}>
              Автоматизация позволяет масштабировать бизнес без пропорционального роста штата. 
              Процессы становятся более предсказуемыми и контролируемыми. Команда может сосредоточиться 
              на задачах, требующих человеческого участия, а рутину выполняют автоматизации.
            </p>
            <p className={styles.paragraph}>
              Результаты зависят от сложности процессов и объёма работ. Простые автоматизации могут 
              быть готовы за несколько дней, комплексные решения с множеством интеграций — за 2–4 недели.
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
              постоянной поддержки и развития автоматизаций. Каждый проект начинается с анализа 
              процессов и проектирования.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от количества автоматизаций, сложности сценариев, количества 
              интеграций и объёма работ. Простые автоматизации начинаются от 50 000 рублей, 
              комплексные решения — от 150 000 рублей.
            </p>
            <p className={styles.paragraph}>
              <button 
                onClick={handleCTA}
                className={styles.pricingLink}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', color: 'inherit', font: 'inherit' }}
              >
                Обсудить автоматизацию и получить оценку
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoCodeAutomationPage;

