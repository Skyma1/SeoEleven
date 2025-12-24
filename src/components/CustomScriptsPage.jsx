import React from 'react';
import { ArrowRight, Check, X, Code, Zap, Settings, Terminal, BarChart3 } from 'lucide-react';
import styles from '../styles/SEOPage.module.css';

const CustomScriptsPage = () => {
  return (
    <>
      {/* БЛОК 1. HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Индивидуальные скрипты</h1>
          <p className={styles.heroSubtitle}>
            Разработка скриптов и утилит для автоматизации специфических задач вашего бизнеса
          </p>
          <p className={styles.heroDescription}>
            Иногда стандартные решения не подходят для специфических задач бизнеса. Индивидуальные 
            скрипты позволяют автоматизировать уникальные процессы, работать с данными в нужном формате, 
            интегрировать системы, которые не имеют готовых интеграций, и решать задачи, для которых 
            нет готовых инструментов.
          </p>
          <button className={styles.heroCTA}>
            Обсудить задачу
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
            <h2 className={styles.sectionTitle}>Кому подходят скрипты</h2>
            <ul className={styles.list}>
              <li>Компании с уникальными бизнес-процессами</li>
              <li>Проекты, которым нужна работа с данными в специфических форматах</li>
              <li>Бизнесы, требующие интеграции систем без готовых решений</li>
              <li>Компании, которым нужна автоматизация узкоспециализированных задач</li>
              <li>Проекты с требованиями к производительности и масштабируемости</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Задачи, которые можно решить стандартными инструментами</li>
              <li>Проекты без чётко определённых требований</li>
              <li>Компании, которым нужны только готовые решения</li>
              <li>Задачи, требующие постоянных изменений без технической поддержки</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что такое индивидуальные скрипты</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Индивидуальные скрипты — это программы, написанные специально под ваши задачи. 
              Они могут обрабатывать данные, взаимодействовать с API, автоматизировать рутинные 
              операции, парсить информацию, генерировать отчёты и выполнять множество других задач.
            </p>
            <p className={styles.paragraph}>
              Скрипты могут быть написаны на различных языках (Python, JavaScript, PHP и других) 
              в зависимости от задачи. Они могут работать как разовые утилиты, так и постоянно 
              работающие сервисы. Скрипты могут быть интегрированы в существующие системы или работать 
              автономно.
            </p>
            <p className={styles.paragraph}>
              Преимущество индивидуальных скриптов — полный контроль над функционалом и возможность 
              решить любую задачу, даже самую специфическую. Скрипты могут быть оптимизированы под 
              ваши требования по производительности, безопасности и интеграциям.
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
            <h3 className={styles.stepTitle}>Анализ задачи</h3>
            <p className={styles.stepDescription}>
              Изучаем задачу, требования, существующие системы и ограничения. Определяем оптимальный 
              подход к решению.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Проектирование</h3>
            <p className={styles.stepDescription}>
              Проектируем архитектуру решения, выбираем технологии, определяем интерфейсы и форматы данных.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Разработка</h3>
            <p className={styles.stepDescription}>
              Пишем скрипт, реализуем необходимый функционал, настраиваем интеграции и обработку данных.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Тестирование</h3>
            <p className={styles.stepDescription}>
              Тестируем скрипт на реальных данных, проверяем обработку ошибок, производительность и надёжность.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Внедрение и поддержка</h3>
            <p className={styles.stepDescription}>
              Внедряем скрипт в рабочий процесс, настраиваем запуск, документируем решение и обеспечиваем поддержку.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. ЧТО ВХОДИТ В УСЛУГУ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <Code size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Разработка скрипта</h3>
            <p className={styles.serviceDescription}>
              Написание скрипта на подходящем языке программирования с нужным функционалом и логикой
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Zap size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Интеграции</h3>
            <p className={styles.serviceDescription}>
              Интеграция с API, базами данных, файловыми системами и другими необходимыми системами
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Terminal size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Обработка данных</h3>
            <p className={styles.serviceDescription}>
              Парсинг, преобразование, валидация и обработка данных в нужных форматах
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Settings size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Настройка и запуск</h3>
            <p className={styles.serviceDescription}>
              Настройка окружения, настройка автоматического запуска, мониторинг и логирование
            </p>
          </div>
          <div className={styles.serviceItem}>
            <BarChart3 size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Документация и поддержка</h3>
            <p className={styles.serviceDescription}>
              Документация по использованию, техническая поддержка и развитие функционала
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
              Клиенты получают решение, точно соответствующее их задачам. Скрипт автоматизирует 
              специфические процессы, обрабатывает данные в нужном формате и интегрируется с 
              существующими системами. Это экономит время, снижает ошибки и позволяет решать задачи, 
              для которых нет готовых инструментов.
            </p>
            <p className={styles.paragraph}>
              Индивидуальные скрипты могут быть оптимизированы под требования по производительности, 
              безопасности и масштабируемости. Они могут работать как разовые утилиты или постоянно 
              работающие сервисы, в зависимости от задачи.
            </p>
            <p className={styles.paragraph}>
              Результаты зависят от сложности задачи и объёма работ. Простые скрипты могут быть готовы 
              за несколько дней, комплексные решения — за 2–4 недели.
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
              с анализа задачи и проектирования, затем идёт разработка, тестирование и внедрение.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от сложности задачи, необходимых интеграций, объёма обработки данных 
              и требований к производительности. Простые скрипты начинаются от 40 000 рублей, 
              комплексные решения — от 120 000 рублей.
            </p>
            <p className={styles.paragraph}>
              <a href="/contact" className={styles.pricingLink}>
                Обсудить задачу и получить оценку
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomScriptsPage;

