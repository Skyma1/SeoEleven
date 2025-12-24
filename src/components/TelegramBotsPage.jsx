import React from 'react';
import { ArrowRight, Check, X, Bot, Smartphone, Zap, MessageSquare, Settings } from 'lucide-react';
import styles from '../styles/SEOPage.module.css';

const TelegramBotsPage = () => {
  return (
    <>
      {/* БЛОК 1. HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Telegram-боты и Mini Apps</h1>
          <p className={styles.heroSubtitle}>
            Автоматизация коммуникаций, продаж и сервисов через Telegram-боты и мини-приложения
          </p>
          <p className={styles.heroDescription}>
            Telegram-боты позволяют автоматизировать общение с клиентами, принимать заказы, 
            обрабатывать платежи и предоставлять сервисы прямо в мессенджере. Mini Apps — это 
            полноценные веб-приложения внутри Telegram, которые расширяют возможности ботов 
            и создают более богатый пользовательский опыт.
          </p>
          <button className={styles.heroCTA}>
            Обсудить проект
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
            <h2 className={styles.sectionTitle}>Кому подходят боты</h2>
            <ul className={styles.list}>
              <li>Сервисные бизнесы, которым нужно автоматизировать приём заказов</li>
              <li>E-commerce проекты, желающие продавать через Telegram</li>
              <li>Компании с активной аудиторией в Telegram</li>
              <li>Стартапы, которым нужен быстрый MVP для тестирования гипотез</li>
              <li>Проекты, где важна скорость ответа клиентам</li>
            </ul>
          </div>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <X size={24} strokeWidth={1.5} />
            </div>
            <h2 className={styles.sectionTitle}>Кому не подойдёт</h2>
            <ul className={styles.list}>
              <li>Проекты без активной аудитории в Telegram</li>
              <li>Бизнесы, требующие сложной интеграции с устаревшими системами</li>
              <li>Проекты с очень специфическими требованиями к безопасности</li>
              <li>Компании, которым нужна только веб-платформа без мессенджера</li>
            </ul>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ЧТО ТАКОЕ И КАК ЭТО РАБОТАЕТ */}
      <section className={styles.section}>
        <div className={styles.explanationBlock}>
          <h2 className={styles.sectionTitle}>Что такое Telegram-боты и Mini Apps</h2>
          <div className={styles.explanationContent}>
            <p className={styles.paragraph}>
              Telegram-бот — это автоматизированный аккаунт в Telegram, который может отвечать 
              на сообщения, обрабатывать команды, отправлять уведомления и выполнять различные действия. 
              Боты могут работать 24/7, обрабатывать множество запросов одновременно и интегрироваться 
              с внешними системами.
            </p>
            <p className={styles.paragraph}>
              Mini Apps — это веб-приложения, которые открываются внутри Telegram. Они позволяют 
              создавать полноценные интерфейсы с формами, каталогами, картами и другими элементами. 
              Mini Apps расширяют возможности ботов, позволяя создавать более сложные сценарии взаимодействия.
            </p>
            <p className={styles.paragraph}>
              Вместе боты и Mini Apps создают мощную экосистему для автоматизации бизнес-процессов, 
              продаж и сервисов. Клиенты получают удобный способ взаимодействия, а бизнес — автоматизацию 
              рутинных операций и новые каналы продаж.
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
            <h3 className={styles.stepTitle}>Анализ задач</h3>
            <p className={styles.stepDescription}>
              Изучаем бизнес-процессы, определяем задачи для автоматизации, выбираем оптимальные 
              сценарии взаимодействия с клиентами.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Проектирование</h3>
            <p className={styles.stepDescription}>
              Проектируем структуру бота, диалоги, интерфейсы Mini Apps, определяем техническую 
              архитектуру и интеграции.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Разработка</h3>
            <p className={styles.stepDescription}>
              Создаём бота и Mini Apps, настраиваем логику работы, интегрируем с необходимыми 
              сервисами и системами.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3 className={styles.stepTitle}>Тестирование</h3>
            <p className={styles.stepDescription}>
              Проводим тестирование всех сценариев, проверяем работу интеграций, устраняем ошибки.
            </p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <h3 className={styles.stepTitle}>Запуск и поддержка</h3>
            <p className={styles.stepDescription}>
              Запускаем бота, обучаем команду работе с системой, обеспечиваем техническую поддержку 
              и развитие функционала.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5. ЧТО ВХОДИТ В УСЛУГУ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Что входит в услугу</h2>
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceItem} ${styles.serviceItemDominant}`}>
            <Bot size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Разработка Telegram-бота</h3>
            <p className={styles.serviceDescription}>
              Создание бота с нужным функционалом: обработка команд, диалоги, интеграции, 
              обработка платежей
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Smartphone size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Разработка Mini Apps</h3>
            <p className={styles.serviceDescription}>
              Создание веб-приложений внутри Telegram с формами, каталогами, картами и другими элементами
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Zap size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Интеграции</h3>
            <p className={styles.serviceDescription}>
              Подключение к CRM, платежным системам, базам данных, внешним API и другим сервисам
            </p>
          </div>
          <div className={styles.serviceItem}>
            <MessageSquare size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Диалоги и сценарии</h3>
            <p className={styles.serviceDescription}>
              Проектирование и реализация диалоговых сценариев для автоматизации коммуникаций
            </p>
          </div>
          <div className={styles.serviceItem}>
            <Settings size={24} strokeWidth={1.5} />
            <h3 className={styles.serviceTitle}>Настройка и поддержка</h3>
            <p className={styles.serviceDescription}>
              Настройка бота, обучение команды, техническая поддержка и развитие функционала
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
              Клиенты получают автоматизированную систему взаимодействия с клиентами, которая работает 
              24/7 и обрабатывает запросы без участия сотрудников. Это снижает нагрузку на поддержку, 
              ускоряет обработку заказов и повышает удовлетворённость клиентов скоростью ответа.
            </p>
            <p className={styles.paragraph}>
              Боты и Mini Apps открывают новые каналы продаж и позволяют тестировать бизнес-гипотезы 
              с минимальными затратами. Клиенты могут делать заказы, оплачивать услуги и получать 
              информацию прямо в мессенджере, что повышает конверсию.
            </p>
            <p className={styles.paragraph}>
              Результаты зависят от задач и объёма работ. Простые боты для автоматизации FAQ могут 
              быть готовы за 1–2 недели, комплексные решения с Mini Apps и интеграциями — за 1–3 месяца.
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
              с анализа задач и проектирования, затем идёт разработка, тестирование и запуск.
            </p>
            <p className={styles.paragraph}>
              Стоимость зависит от сложности функционала, необходимости разработки Mini Apps, 
              количества интеграций и объёма работ. Простые боты начинаются от 80 000 рублей, 
              комплексные решения с Mini Apps — от 200 000 рублей.
            </p>
            <p className={styles.paragraph}>
              <a href="/contact" className={styles.pricingLink}>
                Обсудить проект и получить оценку
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TelegramBotsPage;

