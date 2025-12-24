import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Calculator, Check } from 'lucide-react';
import styles from '../styles/Quiz.module.css';

const Quiz = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [answers, setAnswers] = useState({});

  // Структура услуг с ценами и вопросами
  const services = {
    seo: {
      name: 'SEO-продвижение',
      price: 'от 70 000 ₽ / месяц',
      format: 'Подписка',
      questions: [
        {
          question: 'Тип сайта',
      options: [
            { value: 'corporate', label: 'Корпоративный сайт' },
            { value: 'ecommerce', label: 'Интернет-магазин' },
            { value: 'landing', label: 'Лендинг' },
        { value: 'other', label: 'Другое' }
      ]
    },
    {
          question: 'Объём работ',
          options: [
            { value: 'small', label: 'До 50 страниц' },
            { value: 'medium', label: '50–200 страниц' },
            { value: 'large', label: 'Более 200 страниц' }
          ]
        },
        {
          question: 'Стадия проекта',
      options: [
            { value: 'new', label: 'Новый сайт' },
            { value: 'existing', label: 'Существующий сайт' },
            { value: 'redesign', label: 'Планируется редизайн' }
          ]
        }
      ]
    },
    geo: {
      name: 'GEO (SEO под AI)',
      price: 'от 120 000 ₽ / проект',
      format: 'Проект',
      questions: [
        {
          question: 'Тип сайта',
          options: [
            { value: 'corporate', label: 'Корпоративный сайт' },
            { value: 'ecommerce', label: 'Интернет-магазин' },
            { value: 'landing', label: 'Лендинг' },
            { value: 'other', label: 'Другое' }
          ]
        },
        {
          question: 'Объём контента',
          options: [
            { value: 'small', label: 'До 30 страниц' },
            { value: 'medium', label: '30–100 страниц' },
            { value: 'large', label: 'Более 100 страниц' }
          ]
        },
        {
          question: 'Стадия проекта',
      options: [
            { value: 'new', label: 'Новый проект' },
            { value: 'existing', label: 'Существующий сайт' },
            { value: 'optimization', label: 'Оптимизация под AI' }
          ]
        }
      ]
    },
    advertising: {
      name: 'Контекстная реклама',
      price: 'от 30 000 ₽ настройка + бюджет',
      format: 'Настройка + управление',
      questions: [
        {
          question: 'Платформа',
          options: [
            { value: 'yandex', label: 'Яндекс.Директ' },
            { value: 'google', label: 'Google Ads' },
            { value: 'both', label: 'Обе платформы' }
          ]
        },
        {
          question: 'Регион',
          options: [
            { value: 'local', label: 'Один город' },
            { value: 'region', label: 'Регион' },
            { value: 'russia', label: 'Вся Россия' }
      ]
    },
    {
      question: 'Основная цель',
      options: [
            { value: 'leads', label: 'Заявки и звонки' },
            { value: 'sales', label: 'Продажи' },
            { value: 'traffic', label: 'Трафик на сайт' }
          ]
        }
      ]
    },
    development: {
      name: 'Разработка сайта',
      price: 'от 150 000 ₽',
      format: 'Проект',
      questions: [
        {
          question: 'Тип сайта',
          options: [
            { value: 'corporate', label: 'Корпоративный сайт' },
            { value: 'ecommerce', label: 'Интернет-магазин' },
            { value: 'landing', label: 'Лендинг' },
            { value: 'platform', label: 'Веб-платформа' }
          ]
        },
        {
          question: 'Стадия проекта',
          options: [
            { value: 'idea', label: 'Есть идея, нужна разработка' },
            { value: 'design', label: 'Есть дизайн, нужна вёрстка' },
            { value: 'redesign', label: 'Редизайн существующего сайта' }
          ]
        },
        {
          question: 'Сроки',
          options: [
            { value: 'urgent', label: 'Срочно (до 1 месяца)' },
            { value: 'normal', label: 'Обычные (1–3 месяца)' },
            { value: 'flexible', label: 'Гибкие сроки' }
          ]
        }
      ]
    },
    support: {
      name: 'Поддержка / доработка',
      price: 'от 20 000 ₽ / месяц',
      format: 'Подписка',
      questions: [
        {
          question: 'Тип поддержки',
          options: [
            { value: 'technical', label: 'Техническая поддержка' },
            { value: 'content', label: 'Обновление контента' },
            { value: 'development', label: 'Доработки и новые функции' },
            { value: 'complex', label: 'Комплексная поддержка' }
          ]
        },
        {
          question: 'Объём работ',
          options: [
            { value: 'minimal', label: 'Минимальный (до 10 часов/мес)' },
            { value: 'standard', label: 'Стандартный (10–30 часов/мес)' },
            { value: 'extended', label: 'Расширенный (30+ часов/мес)' }
          ]
        }
      ]
    },
    analytics: {
      name: 'Аналитика и аудит',
      price: 'от 15 000 ₽',
      format: 'Проект',
      questions: [
        {
          question: 'Тип аудита',
          options: [
            { value: 'seo', label: 'SEO-аудит' },
            { value: 'technical', label: 'Технический аудит' },
            { value: 'analytics', label: 'Настройка аналитики' },
            { value: 'complex', label: 'Комплексный аудит' }
          ]
        },
        {
          question: 'Размер сайта',
          options: [
            { value: 'small', label: 'До 50 страниц' },
            { value: 'medium', label: '50–200 страниц' },
            { value: 'large', label: 'Более 200 страниц' }
          ]
        }
      ]
    },
    other: {
      name: 'Другое',
      price: 'По запросу',
      format: 'Индивидуально',
      questions: [
        {
          question: 'Опишите задачу',
          type: 'textarea',
          placeholder: 'Расскажите о вашем проекте и задачах'
        }
      ]
    }
  };

  const serviceList = [
    { id: 'seo', ...services.seo },
    { id: 'geo', ...services.geo },
    { id: 'advertising', ...services.advertising },
    { id: 'development', ...services.development },
    { id: 'support', ...services.support },
    { id: 'analytics', ...services.analytics },
    { id: 'other', ...services.other }
  ];

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setAnswers({ service: serviceId });
    setCurrentStep(1);
  };

  const handleQuestionAnswer = (questionIndex, value) => {
    const newAnswers = { ...answers, [`question_${questionIndex}`]: value };
    setAnswers(newAnswers);
    
    const service = services[selectedService];
    
    // Переход к следующему вопросу
    if (questionIndex < service.questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(1);
      }, 200);
    } else {
      // Все вопросы отвечены, переходим к результату
      setTimeout(() => {
        setCurrentStep(2);
      }, 200);
    }
  };

  const handleTextareaChange = (value) => {
    setAnswers({ ...answers, question_0: value });
  };

  const handleTextareaContinue = () => {
    if (answers.question_0) {
      setCurrentStep(2);
    }
  };

  const handleBack = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (currentStep === 1) {
      const answeredQuestions = Object.keys(answers).filter(k => k.startsWith('question_') && answers[k]).length;
      if (answeredQuestions === 0) {
        // Возврат к выбору услуги
        setCurrentStep(0);
        setSelectedService(null);
        setAnswers({});
      } else {
        // Удаляем последний ответ и остаёмся на том же шаге
        const newAnswers = { ...answers };
        const lastQuestionIndex = answeredQuestions - 1;
        delete newAnswers[`question_${lastQuestionIndex}`];
        setAnswers(newAnswers);
      }
    } else if (currentStep === 2) {
      // Возврат к вопросам - показываем последний отвеченный вопрос
      setCurrentStep(1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const contact = formData.get('contact');
    
    setAnswers({ ...answers, contact });
    
    // Здесь можно отправить данные на сервер
    console.log('Calculator data:', { ...answers, contact, service: selectedService });
    
    // Переход к финальному шагу
    setCurrentStep(3);
  };

  const handleStart = () => {
    setIsStarted(true);
    setCurrentStep(0);
    setSelectedService(null);
    setAnswers({});
  };

  const handleReset = () => {
    setIsStarted(false);
    setCurrentStep(0);
    setSelectedService(null);
    setAnswers({});
  };

  // Начальное состояние
  if (!isStarted) {
    return (
      <section id="calculator" className={styles.quiz}>
        <div className={styles.quizCard}>
          <div className={styles.quizIcon}>
            <Calculator size={32} strokeWidth={1.5} />
          </div>
          <h2 className={styles.quizTitle}>Рассчитать стоимость услуг</h2>
          <p className={styles.quizSubtitle}>
            Выберите услугу и ответьте на несколько вопросов — мы покажем ориентир по бюджету и формату работы
          </p>
          <button 
            className={styles.startButton}
            onClick={handleStart}
          >
            Узнать ориентир по бюджету
            <ArrowRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </section>
    );
  }

  // Шаг 0: Выбор услуги
  if (currentStep === 0) {
    return (
      <section id="calculator" className={styles.quiz}>
        <div className={styles.quizCard}>
          <div className={styles.quizHeader}>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: '33%' }}
              ></div>
            </div>
            <div className={styles.stepIndicator}>
              Шаг 1 из 3
            </div>
          </div>

          <div className={styles.quizContent}>
            <h3 className={styles.question}>Выберите услугу</h3>
            
            <div className={styles.serviceGrid}>
              {serviceList.map((service) => (
                <button
                  key={service.id}
                  className={`${styles.serviceCard} ${selectedService === service.id ? styles.serviceCardSelected : ''}`}
                  onClick={() => handleServiceSelect(service.id)}
                >
                  <div className={styles.serviceCardContent}>
                    <h4 className={styles.serviceName}>{service.name}</h4>
                    <div className={styles.servicePrice}>{service.price}</div>
                    <div className={styles.serviceFormat}>{service.format}</div>
                  </div>
                  {selectedService === service.id && (
                    <div className={styles.serviceCheck}>
                      <Check size={20} strokeWidth={2.5} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Шаг 1: Вопросы
  if (currentStep === 1) {
    const service = services[selectedService];
    if (!service) return null;

    // Определяем текущий вопрос на основе отвеченных
    const answeredQuestions = Object.keys(answers).filter(k => k.startsWith('question_') && answers[k]).length;
    let currentQuestionIndex = answeredQuestions;
    
    // Если все вопросы отвечены, показываем последний вопрос (для возможности вернуться назад)
    if (currentQuestionIndex >= service.questions.length) {
      currentQuestionIndex = service.questions.length - 1;
    }
    
    const currentQuestion = service.questions[currentQuestionIndex];

    // Если вопросов нет, возвращаемся к выбору услуги
    if (!currentQuestion) {
      setCurrentStep(0);
      setSelectedService(null);
      setAnswers({});
      return null;
    }

    const progress = ((currentQuestionIndex + 1) / (service.questions.length + 1)) * 100;

    return (
      <section id="calculator" className={styles.quiz}>
        <div className={styles.quizCard}>
          <div className={styles.quizHeader}>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className={styles.stepIndicator}>
              Шаг 2 из 3 • Вопрос {currentQuestionIndex + 1} из {service.questions.length}
            </div>
          </div>

          <div className={styles.quizContent}>
            <h3 className={styles.question}>{currentQuestion.question}</h3>
            
            {currentQuestion.type === 'textarea' ? (
              <div className={styles.textareaWrapper}>
                <textarea
                  value={answers[`question_${currentQuestionIndex}`] || ''}
                  onChange={(e) => handleTextareaChange(e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  className={styles.textarea}
                  rows={5}
                />
                <button
                  className={styles.nextButton}
                  onClick={handleTextareaContinue}
                  disabled={!answers[`question_${currentQuestionIndex}`]}
                >
                  Продолжить
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            ) : (
              <>
                <div className={styles.options}>
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.value}
                      className={`${styles.option} ${answers[`question_${currentQuestionIndex}`] === option.value ? styles.optionSelected : ''}`}
                      onClick={() => handleQuestionAnswer(currentQuestionIndex, option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
            
            <button 
              className={styles.backButton}
              onClick={handleBack}
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
              Назад
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Шаг 2: Результат с ценой
  if (currentStep === 2) {
    const service = services[selectedService];
    const progress = 100;

  return (
    <section id="calculator" className={styles.quiz}>
      <div className={styles.quizCard}>
        <div className={styles.quizHeader}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className={styles.stepIndicator}>
              Шаг 3 из 3
            </div>
          </div>

          <div className={styles.quizContent}>
            <div className={styles.resultSection}>
              <h3 className={styles.resultTitle}>Ориентир по бюджету</h3>
              
              <div className={styles.priceCard}>
                <div className={styles.priceLabel}>Выбранная услуга</div>
                <div className={styles.priceService}>{service.name}</div>
                
                <div className={styles.priceDivider}></div>
                
                <div className={styles.priceLabel}>Стоимость</div>
                <div className={styles.priceValue}>{service.price}</div>
                <div className={styles.priceFormat}>{service.format}</div>
        </div>

              <div className={styles.disclaimer}>
                Финальная стоимость уточняется после анализа проекта
              </div>
          
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <label className={styles.contactLabel}>
                  Куда отправить детальный расчёт?
                </label>
              <input
                type="text"
                name="contact"
                  placeholder="Email или мессенджер"
                required
                className={styles.contactInput}
              />
              <div className={styles.formActions}>
                  <button
                    type="button"
                    className={styles.backButton}
                    onClick={handleBack}
                  >
                    <ArrowLeft size={18} strokeWidth={1.5} />
                    Назад
                  </button>
                <button type="submit" className={styles.submitButton}>
                  Получить расчёт
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>
            </form>
            </div>
          </div>
              </div>
      </section>
    );
  }

  // Финальное состояние (после отправки)
  if (currentStep === 3) {
    return (
      <section id="calculator" className={styles.quiz}>
        <div className={styles.quizCard}>
          <div className={styles.successContent}>
            <h2 className={styles.quizTitle}>Спасибо!</h2>
            <p className={styles.successText}>
              Мы подготовим детальный расчёт с учётом ваших ответов и свяжемся с вами в ближайшее время.
            </p>
                <button
              className={styles.resetButton}
              onClick={handleReset}
                >
              Рассчитать ещё раз
                </button>
        </div>
      </div>
    </section>
  );
  }

  return null;
};

export default Quiz;
