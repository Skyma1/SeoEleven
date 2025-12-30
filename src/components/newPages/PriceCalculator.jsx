import React, { useState, useMemo, useEffect, useRef } from 'react';
import { PRICING_CONFIG } from '../../config/pricingConfig';
import { calculatePriceAdvanced } from '../../utils/calculatePrice';
import { CONTACT_TYPES } from '../../config/constants';
import { applyPhoneMask, cleanPhoneNumber, isValidPhoneNumber } from '../../utils/phoneMask';
import apiService from '../../services/api';

const services = {
  seo: {
    name: 'SEO-продвижение',
    icon: 'search',
    questions: [
      {
        question: 'Тип сайта',
        key: 'question_0',
        options: [
          { value: 'corporate', label: 'Корпоративный сайт' },
          { value: 'ecommerce', label: 'Интернет-магазин' },
          { value: 'landing', label: 'Лендинг' },
          { value: 'other', label: 'Другое' }
        ]
      },
      {
        question: 'Объём работ',
        key: 'question_1',
        options: [
          { value: 'small', label: 'До 50 страниц' },
          { value: 'medium', label: '50–200 страниц' },
          { value: 'large', label: 'Более 200 страниц' }
        ]
      },
      {
        question: 'Стадия проекта',
        key: 'question_2',
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
    icon: 'smart_toy',
    questions: [
      {
        question: 'Тип сайта',
        key: 'question_0',
        options: [
          { value: 'corporate', label: 'Корпоративный сайт' },
          { value: 'ecommerce', label: 'Интернет-магазин' },
          { value: 'landing', label: 'Лендинг' },
          { value: 'other', label: 'Другое' }
        ]
      },
      {
        question: 'Объём контента',
        key: 'question_1',
        options: [
          { value: 'small', label: 'До 30 страниц' },
          { value: 'medium', label: '30–100 страниц' },
          { value: 'large', label: 'Более 100 страниц' }
        ]
      },
      {
        question: 'Стадия проекта',
        key: 'question_2',
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
    icon: 'ads_click',
    questions: [
      {
        question: 'Платформа',
        key: 'question_0',
        options: [
          { value: 'yandex', label: 'Яндекс.Директ' },
          { value: 'google', label: 'Google Ads' },
          { value: 'both', label: 'Обе платформы' }
        ]
      },
      {
        question: 'Регион',
        key: 'question_1',
        options: [
          { value: 'local', label: 'Один город' },
          { value: 'region', label: 'Регион' },
          { value: 'russia', label: 'Вся Россия' }
        ]
      },
      {
        question: 'Основная цель',
        key: 'question_2',
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
    icon: 'code',
    questions: [
      {
        question: 'Тип сайта',
        key: 'question_0',
        options: [
          { value: 'landing', label: 'Лендинг' },
          { value: 'corporate', label: 'Корпоративный сайт' },
          { value: 'ecommerce', label: 'Интернет-магазин' },
          { value: 'platform', label: 'Веб-платформа' }
        ]
      },
      {
        question: 'Стадия проекта',
        key: 'question_1',
        options: [
          { value: 'idea', label: 'Есть идея, нужна разработка' },
          { value: 'design', label: 'Есть дизайн, нужна вёрстка' },
          { value: 'redesign', label: 'Редизайн существующего сайта' }
        ]
      },
      {
        question: 'Сроки',
        key: 'question_2',
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
    icon: 'support_agent',
    questions: [
      {
        question: 'Тип поддержки',
        key: 'question_0',
        options: [
          { value: 'technical', label: 'Техническая поддержка' },
          { value: 'content', label: 'Обновление контента' },
          { value: 'development', label: 'Доработки и новые функции' },
          { value: 'complex', label: 'Комплексная поддержка' }
        ]
      },
      {
        question: 'Объём работ',
        key: 'question_1',
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
    icon: 'monitoring',
    questions: [
      {
        question: 'Тип аудита',
        key: 'question_0',
        options: [
          { value: 'seo', label: 'SEO-аудит' },
          { value: 'technical', label: 'Технический аудит' },
          { value: 'analytics', label: 'Настройка аналитики' },
          { value: 'complex', label: 'Комплексный аудит' }
        ]
      },
      {
        question: 'Размер сайта',
        key: 'question_1',
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
    icon: 'help',
    questions: [
      {
        question: 'Опишите задачу',
        key: 'question_0',
        type: 'textarea',
        placeholder: 'Расскажите о вашем проекте и задачах'
      }
    ]
  }
};

function PriceCalculator() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0: выбор услуги, 1: вопросы, 2: результат, 3: успех
  const [selectedService, setSelectedService] = useState(null);
  const [answers, setAnswers] = useState({});
  const [contactType, setContactType] = useState(CONTACT_TYPES.EMAIL);
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const calculatorRef = useRef(null);

  const serviceList = Object.keys(services).map(id => ({ id, ...services[id] }));

  // Рассчитываем цену
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
    
    return {
      ...calculatePriceAdvanced(selectedService, answers),
      isCalculated: true
    };
  }, [selectedService, answers]);

  const getServicePrice = (serviceId) => {
    const config = PRICING_CONFIG[serviceId];
    if (!config || !config.basePrice) {
      return 'По запросу';
    }
    return `от ${new Intl.NumberFormat('ru-RU').format(config.basePrice)} ₽`;
  };

  const handleStart = () => {
    setIsStarted(true);
    setCurrentStep(0);
    setSelectedService(null);
    setAnswers({});
  };

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setAnswers({});
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

  const handleBack = () => {
    if (currentStep === 1) {
      const answeredQuestions = Object.keys(answers).filter(k => k.startsWith('question_') && answers[k]).length;
      if (answeredQuestions === 0) {
        setCurrentStep(0);
        setSelectedService(null);
        setAnswers({});
      } else {
        const newAnswers = { ...answers };
        const lastQuestionIndex = answeredQuestions - 1;
        delete newAnswers[`question_${lastQuestionIndex}`];
        setAnswers(newAnswers);
      }
    } else if (currentStep === 2) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateContact();
    if (validationError) {
      setSubmitError(validationError);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const service = services[selectedService];
      const serviceName = service.name;
      
      const commentParts = [];
      commentParts.push(`Заявка из калькулятора: ${serviceName}`);
      
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
      
      if (calculatedPrice && calculatedPrice.isCalculated) {
        commentParts.push(`Рассчитанная стоимость: ${calculatedPrice.formatted.range}`);
      }
      
      const comment = commentParts.join('\n');

      const payload = {
        name: 'Клиент из калькулятора',
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
        setCurrentStep(3);
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

  // Начальный экран
  if (!isStarted) {
    return (
      <div ref={calculatorRef} className="bg-surface dark:bg-zinc-900 rounded-2xl p-4 sm:p-8 lg:p-12 shadow-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-3xl -mr-16 sm:-mr-20 -mt-16 sm:-mt-20 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="size-12 sm:size-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 sm:mb-6">
            <span className="material-symbols-outlined !text-3xl sm:!text-4xl">calculate</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-graphite dark:text-white px-2">
            Рассчитать стоимость услуг
          </h2>
          <p className="text-base sm:text-lg text-graphite/70 dark:text-gray-400 max-w-2xl mb-6 sm:mb-8 px-2">
            Выберите услугу и ответьте на несколько вопросов — мы покажем ориентир по бюджету и формату работы
          </p>
          <button 
            onClick={handleStart}
            className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 bg-primary hover:bg-[#c41f18] text-white text-sm sm:text-base font-bold rounded-xl transition-all shadow-xl shadow-primary/25 hover:shadow-primary/40 flex items-center justify-center gap-2"
          >
            Узнать ориентир по бюджету
            <span className="material-symbols-outlined text-lg sm:text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    );
  }

  // Шаг 0: Выбор услуги
  if (currentStep === 0) {
    const progress = 33;

    return (
      <div ref={calculatorRef} className="bg-surface dark:bg-zinc-900 rounded-2xl p-4 sm:p-8 lg:p-12 shadow-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-3xl -mr-16 sm:-mr-20 -mt-16 sm:-mt-20 pointer-events-none"></div>
        
        <div className="relative z-10">
          {/* Прогресс бар */}
          <div className="mb-6 sm:mb-8">
            <div className="w-full bg-background-light dark:bg-zinc-800 rounded-full h-1.5 sm:h-2 overflow-hidden mb-3 sm:mb-4">
              <div 
                className="bg-primary h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-xs sm:text-sm text-graphite/60 dark:text-gray-400">Шаг 1 из 3</div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-graphite dark:text-white">Выберите услугу</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {serviceList.map((service) => {
              const config = PRICING_CONFIG[service.id];
              const price = getServicePrice(service.id);
              const format = config?.format || 'Индивидуально';
              
              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className={`p-4 sm:p-6 rounded-xl border-2 transition-all text-left relative ${
                    selectedService === service.id
                      ? 'border-primary bg-primary/5 dark:bg-primary/10'
                      : 'border-graphite/10 dark:border-white/10 hover:border-primary/30 bg-background-light dark:bg-zinc-800'
                  } bento-card`}
                >
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className={`size-10 sm:size-12 rounded-xl flex items-center justify-center ${
                      selectedService === service.id
                        ? 'bg-primary text-white'
                        : 'bg-primary/10 text-primary'
                    }`}>
                      <span className="material-symbols-outlined !text-xl sm:!text-2xl">{service.icon}</span>
                    </div>
                    {selectedService === service.id && (
                      <div className="size-5 sm:size-6 rounded-full bg-primary flex items-center justify-center text-white">
                        <span className="material-symbols-outlined !text-xs sm:!text-sm">check</span>
                      </div>
                    )}
                  </div>
                  <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-graphite dark:text-white">{service.name}</h4>
                  <div className="text-xs sm:text-sm font-semibold text-primary mb-0.5 sm:mb-1">{price}</div>
                  <div className="text-[10px] sm:text-xs text-graphite/50 dark:text-gray-500">{format}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Шаг 1: Вопросы
  if (currentStep === 1) {
    const service = services[selectedService];
    if (!service) return null;

    const answeredQuestions = Object.keys(answers).filter(k => k.startsWith('question_') && answers[k]).length;
    let currentQuestionIndex = answeredQuestions;
    
    if (currentQuestionIndex >= service.questions.length) {
      currentQuestionIndex = service.questions.length - 1;
    }
    
    const currentQuestion = service.questions[currentQuestionIndex];

    if (!currentQuestion) {
      setCurrentStep(0);
      setSelectedService(null);
      setAnswers({});
      return null;
    }

    const progress = ((currentQuestionIndex + 1) / (service.questions.length + 1)) * 100;

    return (
      <div ref={calculatorRef} className="bg-surface dark:bg-zinc-900 rounded-2xl p-4 sm:p-8 lg:p-12 shadow-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-3xl -mr-16 sm:-mr-20 -mt-16 sm:-mt-20 pointer-events-none"></div>
        
        <div className="relative z-10">
          {/* Прогресс бар */}
          <div className="mb-6 sm:mb-8">
            <div className="w-full bg-background-light dark:bg-zinc-800 rounded-full h-1.5 sm:h-2 overflow-hidden mb-3 sm:mb-4">
              <div 
                className="bg-primary h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-xs sm:text-sm text-graphite/60 dark:text-gray-400">
              Шаг 2 из 3 • Вопрос {currentQuestionIndex + 1} из {service.questions.length}
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-graphite dark:text-white">{currentQuestion.question}</h3>
          
          {/* Показываем текущую рассчитанную цену, если есть ответы */}
          {calculatedPrice && calculatedPrice.isCalculated && (
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
              <div className="text-xs sm:text-sm text-graphite/60 dark:text-gray-400">Текущая оценка:</div>
              <div className="text-base sm:text-lg font-bold text-primary break-words">{calculatedPrice.formatted.range}</div>
            </div>
          )}
          
          {currentQuestion.type === 'textarea' ? (
            <div className="space-y-4">
              <textarea
                value={answers[`question_${currentQuestionIndex}`] || ''}
                onChange={(e) => handleTextareaChange(e.target.value)}
                placeholder={currentQuestion.placeholder}
                rows={5}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-graphite/10 dark:border-white/10 focus:border-primary bg-background-light dark:bg-zinc-800 text-graphite dark:text-white focus:outline-none resize-none text-sm sm:text-base"
              />
              <button
                onClick={handleTextareaContinue}
                disabled={!answers[`question_${currentQuestionIndex}`]}
                className="w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-6 bg-primary hover:bg-[#c41f18] disabled:bg-graphite/20 disabled:cursor-not-allowed text-white text-sm sm:text-base font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Продолжить
                <span className="material-symbols-outlined text-sm sm:text-base">arrow_forward</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleQuestionAnswer(currentQuestionIndex, option.value)}
                  className={`p-3 sm:p-4 rounded-xl border-2 transition-all text-left ${
                    answers[`question_${currentQuestionIndex}`] === option.value
                      ? 'border-primary bg-primary/5 dark:bg-primary/10'
                      : 'border-graphite/10 dark:border-white/10 hover:border-primary/30 bg-background-light dark:bg-zinc-800'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-sm sm:text-base text-graphite dark:text-white break-words">{option.label}</span>
                    {answers[`question_${currentQuestionIndex}`] === option.value && (
                      <span className="material-symbols-outlined text-primary flex-shrink-0">check_circle</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
          
          <button 
            onClick={handleBack}
            className="text-xs sm:text-sm text-graphite/60 dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm sm:text-base">arrow_back</span>
            Назад
          </button>
        </div>
      </div>
    );
  }

  // Шаг 2: Результат с ценой и формой контакта
  if (currentStep === 2) {
    const service = services[selectedService];
    const config = PRICING_CONFIG[selectedService];
    const progress = 100;
    const format = config?.format || 'Индивидуально';

    return (
      <div ref={calculatorRef} className="bg-surface dark:bg-zinc-900 rounded-2xl p-4 sm:p-8 lg:p-12 shadow-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-3xl -mr-16 sm:-mr-20 -mt-16 sm:-mt-20 pointer-events-none"></div>
        
        <div className="relative z-10">
          {/* Прогресс бар */}
          <div className="mb-6 sm:mb-8">
            <div className="w-full bg-background-light dark:bg-zinc-800 rounded-full h-1.5 sm:h-2 overflow-hidden mb-3 sm:mb-4">
              <div 
                className="bg-primary h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-xs sm:text-sm text-graphite/60 dark:text-gray-400">Шаг 3 из 3</div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-graphite dark:text-white">Ориентир по бюджету</h3>
              
              <div className="bg-background-light dark:bg-zinc-800 rounded-xl p-4 sm:p-6 border-2 border-graphite/10 dark:border-white/10">
                <div className="text-[10px] sm:text-xs font-semibold text-graphite/60 dark:text-gray-400 uppercase tracking-wide mb-1 sm:mb-2">Выбранная услуга</div>
                <div className="text-lg sm:text-xl font-bold text-graphite dark:text-white mb-4 sm:mb-6 break-words">{service.name}</div>
                
                <div className="h-px bg-graphite/10 dark:bg-white/10 mb-4 sm:mb-6"></div>
                
                <div className="text-[10px] sm:text-xs font-semibold text-graphite/60 dark:text-gray-400 uppercase tracking-wide mb-1 sm:mb-2">Стоимость</div>
                {calculatedPrice && calculatedPrice.isCalculated ? (
                  <>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2 break-words">{calculatedPrice.formatted.base}</div>
                    <div className="text-base sm:text-lg text-primary font-semibold mb-1 sm:mb-2 break-words">{calculatedPrice.formatted.range}</div>
                    <div className="text-xs sm:text-sm text-graphite/50 dark:text-gray-500">{format}</div>
                  </>
                ) : calculatedPrice ? (
                  <>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2 break-words">{calculatedPrice.formatted.base}</div>
                    <div className="text-xs sm:text-sm text-graphite/50 dark:text-gray-500">{format}</div>
                  </>
                ) : (
                  <>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-graphite dark:text-white mb-1 sm:mb-2">По запросу</div>
                    <div className="text-xs sm:text-sm text-graphite/50 dark:text-gray-500">{format}</div>
                  </>
                )}
              </div>

              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-graphite/60 dark:text-gray-400 text-center p-3 sm:p-4 bg-background-light dark:bg-zinc-800 rounded-lg">
                Финальная стоимость уточняется после анализа проекта
              </div>
            </div>
        
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm sm:text-base font-semibold text-graphite dark:text-white mb-2 sm:mb-3">
                  Как с вами связаться? <span className="text-primary">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2 sm:mb-3">
                  <button
                    type="button"
                    onClick={() => handleContactTypeChange(CONTACT_TYPES.EMAIL)}
                    disabled={isSubmitting}
                    className={`h-11 sm:h-12 px-2 sm:px-3 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-0.5 sm:gap-1 ${
                      contactType === CONTACT_TYPES.EMAIL
                        ? 'border-primary bg-primary text-white'
                        : 'border-graphite/10 dark:border-white/10 hover:border-primary/30 bg-background-light dark:bg-zinc-800'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm sm:text-base">mail</span>
                    <span className="text-[10px] sm:text-xs font-medium">Email</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleContactTypeChange(CONTACT_TYPES.PHONE)}
                    disabled={isSubmitting}
                    className={`h-11 sm:h-12 px-2 sm:px-3 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-0.5 sm:gap-1 ${
                      contactType === CONTACT_TYPES.PHONE
                        ? 'border-primary bg-primary text-white'
                        : 'border-graphite/10 dark:border-white/10 hover:border-primary/30 bg-background-light dark:bg-zinc-800'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm sm:text-base">phone</span>
                    <span className="text-[10px] sm:text-xs font-medium">Телефон</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleContactTypeChange(CONTACT_TYPES.TELEGRAM)}
                    disabled={isSubmitting}
                    className={`h-11 sm:h-12 px-2 sm:px-3 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-0.5 sm:gap-1 ${
                      contactType === CONTACT_TYPES.TELEGRAM
                        ? 'border-primary bg-primary text-white'
                        : 'border-graphite/10 dark:border-white/10 hover:border-primary/30 bg-background-light dark:bg-zinc-800'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm sm:text-base">chat</span>
                    <span className="text-[10px] sm:text-xs font-medium">Telegram</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleContactTypeChange(CONTACT_TYPES.MAX)}
                    disabled={isSubmitting}
                    className={`h-11 sm:h-12 px-2 sm:px-3 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-0.5 sm:gap-1 ${
                      contactType === CONTACT_TYPES.MAX
                        ? 'border-primary bg-primary text-white'
                        : 'border-graphite/10 dark:border-white/10 hover:border-primary/30 bg-background-light dark:bg-zinc-800'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm sm:text-base">forum</span>
                    <span className="text-[10px] sm:text-xs font-medium">Max</span>
                  </button>
                </div>
                <input
                  type={getContactInputType()}
                  value={contact}
                  onChange={handleContactChange}
                  placeholder={getContactPlaceholder()}
                  required
                  className={`w-full h-11 sm:h-12 px-3 sm:px-4 rounded-lg border-2 transition-colors text-sm sm:text-base ${
                    submitError
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-graphite/10 dark:border-white/10 focus:border-primary'
                  } bg-background-light dark:bg-zinc-800 text-graphite dark:text-white focus:outline-none`}
                  disabled={isSubmitting}
                />
                {submitError && (
                  <div className="mt-2 text-xs sm:text-sm text-red-500">{submitError}</div>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-graphite/10 dark:border-white/10 hover:border-primary/30 text-graphite dark:text-white text-sm sm:text-base font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm sm:text-base">arrow_back</span>
                  Назад
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 h-11 sm:h-12 px-4 sm:px-6 bg-primary hover:bg-[#c41f18] disabled:bg-graphite/20 disabled:cursor-not-allowed text-white text-sm sm:text-base font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined text-sm sm:text-base animate-spin">refresh</span>
                      Отправка...
                    </>
                  ) : (
                    <>
                      Получить расчёт
                      <span className="material-symbols-outlined text-sm sm:text-base">arrow_forward</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Финальное состояние (после отправки)
  if (currentStep === 3) {
    return (
      <div ref={calculatorRef} className="bg-surface dark:bg-zinc-900 rounded-2xl p-4 sm:p-8 lg:p-12 shadow-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-primary/5 rounded-full blur-3xl -mr-16 sm:-mr-20 -mt-16 sm:-mt-20 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="size-12 sm:size-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <span className="material-symbols-outlined text-green-600 dark:text-green-400 !text-3xl sm:!text-4xl">check_circle</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-graphite dark:text-white px-2">Спасибо!</h2>
          <p className="text-base sm:text-lg text-graphite/70 dark:text-gray-400 max-w-2xl mb-6 sm:mb-8 px-2">
            Мы подготовим детальный расчёт с учётом ваших ответов и свяжемся с вами в ближайшее время.
          </p>
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-background-light dark:bg-zinc-800 hover:bg-graphite/5 dark:hover:bg-zinc-700 border-2 border-graphite/10 dark:border-white/10 hover:border-primary text-graphite dark:text-white text-sm sm:text-base font-medium rounded-lg transition-colors"
          >
            Рассчитать ещё раз
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default PriceCalculator;
