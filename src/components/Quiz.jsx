import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, Calculator, Check, Mail, Phone, MessageCircle } from 'lucide-react';
import { PRICING_CONFIG } from '../config/pricingConfig';
import { calculatePriceAdvanced } from '../utils/calculatePrice';
import { CONTACT_TYPES } from '../config/constants';
import { applyPhoneMask, cleanPhoneNumber, isValidPhoneNumber } from '../utils/phoneMask';
import apiService from '../services/api';
import styles from '../styles/Quiz.module.css';

// Иконка для Max (VK Max мессенджер)
const MaxIcon = ({ size = 18, strokeWidth = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
    <path d="M2 17L12 22L22 17" />
    <path d="M2 12L12 17L22 12" />
  </svg>
);

const Quiz = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [answers, setAnswers] = useState({});
  const [contactType, setContactType] = useState(CONTACT_TYPES.EMAIL);
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const calculatorRef = useRef(null);

  // Структура услуг с вопросами (цены теперь берутся из PRICING_CONFIG)
  const services = {
    seo: {
      name: 'SEO-продвижение',
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
      questions: [
        {
          question: 'Тип сайта',
          options: [
            { value: 'landing', label: 'Лендинг' },
            { value: 'corporate', label: 'Корпоративный сайт' },
            { value: 'ecommerce', label: 'Интернет-магазин' },
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

  // Рассчитываем цену на основе ответов
  const calculatedPrice = useMemo(() => {
    if (!selectedService || selectedService === 'other') {
      return null;
    }
    
    const answeredCount = Object.keys(answers).filter(k => k.startsWith('question_') && answers[k]).length;
    const service = services[selectedService];
    
    // Если еще нет ответов, возвращаем базовую цену
    if (answeredCount === 0) {
      const config = PRICING_CONFIG[selectedService];
      if (!config || !config.basePrice) return null;
      
      const base = config.basePrice;
      const range = config.range || 0.15;
      const min = Math.round(base * (1 - range));
      const max = Math.round(base * (1 + range));
      
      return {
        base,
        min,
        max,
        formatted: {
          base: `от ${new Intl.NumberFormat('ru-RU').format(base)} ₽`,
          min: new Intl.NumberFormat('ru-RU').format(min),
          max: new Intl.NumberFormat('ru-RU').format(max),
          range: `${new Intl.NumberFormat('ru-RU').format(min)} – ${new Intl.NumberFormat('ru-RU').format(max)} ₽`
        },
        isCalculated: false
      };
    }
    
    // Рассчитываем цену на основе ответов
    return {
      ...calculatePriceAdvanced(selectedService, answers),
      isCalculated: true
    };
  }, [selectedService, answers]);

  // Получаем базовую цену для отображения в карточке услуги
  const getServicePrice = (serviceId) => {
    const config = PRICING_CONFIG[serviceId];
    if (!config || !config.basePrice) {
      return 'По запросу';
    }
    return `от ${new Intl.NumberFormat('ru-RU').format(config.basePrice)} ₽`;
  };

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

  const handleContactTypeChange = (type) => {
    setContactType(type);
    setContact('');
    setSubmitError(null);
  };

  const handleContactChange = (e) => {
    const value = e.target.value;
    
    if (contactType === CONTACT_TYPES.PHONE) {
      // Применяем маску для телефона
      const masked = applyPhoneMask(value);
      setContact(masked);
    } else {
      setContact(value);
    }
    
    setSubmitError(null);
  };

  const getContactPlaceholder = () => {
    switch (contactType) {
      case CONTACT_TYPES.EMAIL:
        return 'your@email.com';
      case CONTACT_TYPES.PHONE:
        return '+7 (___) ___-__-__';
      case CONTACT_TYPES.TELEGRAM:
        return '@username';
      case CONTACT_TYPES.MAX:
        return '@username';
      default:
        return '';
    }
  };

  const getContactInputType = () => {
    switch (contactType) {
      case CONTACT_TYPES.EMAIL:
        return 'email';
      case CONTACT_TYPES.PHONE:
        return 'tel';
      default:
        return 'text';
    }
  };

  const validateContact = () => {
    if (!contact || !contact.trim()) {
      return 'Укажите контактные данные';
    }

    if (contactType === CONTACT_TYPES.PHONE) {
      if (!isValidPhoneNumber(contact)) {
        return 'Введите корректный номер телефона';
      }
    } else if (contactType === CONTACT_TYPES.EMAIL) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contact.trim())) {
        return 'Введите корректный email';
      }
    } else if (contactType === CONTACT_TYPES.TELEGRAM || contactType === CONTACT_TYPES.MAX) {
      if (!contact.startsWith('@')) {
        return 'Username должен начинаться с @';
      }
    }

    return null;
  };

  const scrollToFirstError = () => {
    // В Quiz есть только одно поле контакта
    const contactInput = document.getElementById('calculator-contact');
    if (contactInput) {
      // Вычисляем центр экрана
      const viewportHeight = window.innerHeight;
      const centerY = viewportHeight / 2;
      
      // Получаем позицию поля
      const fieldRect = contactInput.getBoundingClientRect();
      const fieldTop = fieldRect.top + window.pageYOffset;
      
      // Прокручиваем так, чтобы поле было в центре экрана
      const scrollPosition = fieldTop - centerY + (fieldRect.height / 2);
      
      window.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
      
      // Фокус на поле
      setTimeout(() => {
        contactInput.focus();
      }, 300);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateContact();
    if (validationError) {
      setSubmitError(validationError);
      // Прокручиваем к полю с ошибкой
      setTimeout(() => {
        scrollToFirstError();
      }, 100);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Подготавливаем данные для отправки
      const service = services[selectedService];
      const serviceName = service.name;
      
      // Формируем комментарий с информацией о калькуляторе
      const commentParts = [];
      commentParts.push(`Заявка из калькулятора: ${serviceName}`);
      
      // Добавляем ответы на вопросы
      Object.keys(answers)
        .filter(k => k.startsWith('question_'))
        .sort()
        .forEach((key, index) => {
          const question = service.questions[index];
          if (question && answers[key]) {
            if (question.type === 'textarea') {
              commentParts.push(`${question.question}: ${answers[key]}`);
            } else {
              const option = question.options?.find(opt => opt.value === answers[key]);
              if (option) {
                commentParts.push(`${question.question}: ${option.label}`);
              }
            }
          }
        });
      
      // Добавляем рассчитанную цену
      if (calculatedPrice && calculatedPrice.isCalculated) {
        commentParts.push(`Рассчитанная стоимость: ${calculatedPrice.formatted.range}`);
      }
      
      const comment = commentParts.join('\n');

      // Подготавливаем payload для API
      const payload = {
        name: 'Клиент из калькулятора', // Можно будет улучшить, добавив поле имени
        contactType: contactType,
        contact: contactType === CONTACT_TYPES.PHONE 
          ? cleanPhoneNumber(contact)
          : contact.trim(),
        company: null,
        service: serviceName,
        website: null,
        goal: 'Расчёт стоимости',
        budget: calculatedPrice?.formatted.range || 'Не рассчитан',
        timeline: null,
        comment: comment,
        privacyAgreed: true,
        source: 'calculator'
      };

      const { data, error } = await apiService.submitContactForm(payload);

      if (error) {
        throw new Error(error);
      }

      if (data && data.success) {
        // Переход к финальному шагу
        setCurrentStep(3);
        
        // Прокручиваем к калькулятору, чтобы форма оставалась видимой
        setTimeout(() => {
          if (calculatorRef.current) {
            const headerHeight = 73;
            const elementPosition = calculatorRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
            
            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: 'smooth'
            });
          }
        }, 200);
      } else {
        setSubmitError('Ошибка отправки. Попробуйте ещё раз.');
      }
    } catch (error) {
      console.error('Ошибка отправки заявки:', error);
      setSubmitError(error.message || 'Ошибка отправки. Попробуйте ещё раз.');
    } finally {
      setIsSubmitting(false);
    }
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
    setContactType(CONTACT_TYPES.EMAIL);
    setContact('');
    setSubmitError(null);
    setIsSubmitting(false);
  };

  // Прокручиваем к калькулятору при смене шага
  useEffect(() => {
    if (calculatorRef.current && isStarted) {
      // Небольшая задержка для полного рендера
      setTimeout(() => {
        if (calculatorRef.current) {
          const headerHeight = 73;
          const elementPosition = calculatorRef.current.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
          
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
        }
      }, 150);
    }
  }, [currentStep, isStarted]);

  // Начальное состояние
  if (!isStarted) {
    return (
      <section id="calculator" ref={calculatorRef} className={styles.quiz}>
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
      <section id="calculator" ref={calculatorRef} className={styles.quiz}>
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
              {serviceList.map((service) => {
                const config = PRICING_CONFIG[service.id];
                const price = getServicePrice(service.id);
                const format = config?.format || 'Индивидуально';
                
                return (
                  <button
                    key={service.id}
                    className={`${styles.serviceCard} ${selectedService === service.id ? styles.serviceCardSelected : ''}`}
                    onClick={() => handleServiceSelect(service.id)}
                  >
                    <div className={styles.serviceCardContent}>
                      <h4 className={styles.serviceName}>{service.name}</h4>
                      <div className={styles.servicePrice}>{price}</div>
                      <div className={styles.serviceFormat}>{format}</div>
                    </div>
                    {selectedService === service.id && (
                      <div className={styles.serviceCheck}>
                        <Check size={20} strokeWidth={2.5} />
                      </div>
                    )}
                  </button>
                );
              })}
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
      <section id="calculator" ref={calculatorRef} className={styles.quiz}>
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
            
            {/* Показываем текущую рассчитанную цену, если есть ответы */}
            {calculatedPrice && calculatedPrice.isCalculated && (
              <div className={styles.pricePreview}>
                <div className={styles.pricePreviewLabel}>Текущая оценка:</div>
                <div className={styles.pricePreviewValue}>{calculatedPrice.formatted.range}</div>
              </div>
            )}
            
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
    const config = PRICING_CONFIG[selectedService];
    const progress = 100;
    const format = config?.format || 'Индивидуально';

    return (
      <section id="calculator" ref={calculatorRef} className={styles.quiz}>
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
                {calculatedPrice && calculatedPrice.isCalculated ? (
                  <>
                    <div className={styles.priceValue}>{calculatedPrice.formatted.base}</div>
                    <div className={styles.priceRange}>{calculatedPrice.formatted.range}</div>
                    <div className={styles.priceFormat}>{format}</div>
                  </>
                ) : calculatedPrice ? (
                  <>
                    <div className={styles.priceValue}>{calculatedPrice.formatted.base}</div>
                    <div className={styles.priceFormat}>{format}</div>
                  </>
                ) : (
                  <>
                    <div className={styles.priceValue}>По запросу</div>
                    <div className={styles.priceFormat}>{format}</div>
                  </>
                )}
              </div>

              <div className={styles.disclaimer}>
                Финальная стоимость уточняется после анализа проекта
              </div>
          
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <label className={styles.contactLabel}>
                  Как с вами связаться? *
                </label>
                <div className={styles.contactTypeToggle}>
                  <button
                    type="button"
                    className={`${styles.contactTypeButton} ${contactType === CONTACT_TYPES.EMAIL ? styles.contactTypeButtonActive : ''}`}
                    onClick={() => handleContactTypeChange(CONTACT_TYPES.EMAIL)}
                    disabled={isSubmitting}
                  >
                    <Mail size={18} strokeWidth={1.5} />
                    <span>Email</span>
                  </button>
                  <button
                    type="button"
                    className={`${styles.contactTypeButton} ${contactType === CONTACT_TYPES.PHONE ? styles.contactTypeButtonActive : ''}`}
                    onClick={() => handleContactTypeChange(CONTACT_TYPES.PHONE)}
                    disabled={isSubmitting}
                  >
                    <Phone size={18} strokeWidth={1.5} />
                    <span>Телефон</span>
                  </button>
                  <button
                    type="button"
                    className={`${styles.contactTypeButton} ${contactType === CONTACT_TYPES.TELEGRAM ? styles.contactTypeButtonActive : ''}`}
                    onClick={() => handleContactTypeChange(CONTACT_TYPES.TELEGRAM)}
                    disabled={isSubmitting}
                  >
                    <MessageCircle size={18} strokeWidth={1.5} />
                    <span>Telegram</span>
                  </button>
                  <button
                    type="button"
                    className={`${styles.contactTypeButton} ${contactType === CONTACT_TYPES.MAX ? styles.contactTypeButtonActive : ''}`}
                    onClick={() => handleContactTypeChange(CONTACT_TYPES.MAX)}
                    disabled={isSubmitting}
                  >
                    <MaxIcon size={18} strokeWidth={1.5} />
                    <span>Max</span>
                  </button>
                </div>
                <input
                  type={getContactInputType()}
                  id="calculator-contact"
                  value={contact}
                  onChange={handleContactChange}
                  placeholder={getContactPlaceholder()}
                  required
                  className={`${styles.contactInput} ${submitError ? styles.contactInputError : ''}`}
                  disabled={isSubmitting}
                />
                {submitError && (
                  <div className={styles.errorText}>{submitError}</div>
                )}
                <div className={styles.formActions}>
                  <button
                    type="button"
                    className={styles.backButton}
                    onClick={handleBack}
                    disabled={isSubmitting}
                  >
                    <ArrowLeft size={18} strokeWidth={1.5} />
                    Назад
                  </button>
                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : (
                      <>
                        Получить расчёт
                        <ArrowRight size={18} strokeWidth={1.5} />
                      </>
                    )}
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
      <section id="calculator" ref={calculatorRef} className={styles.quiz}>
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
