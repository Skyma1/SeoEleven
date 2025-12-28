import React, { useState, useEffect, useMemo } from 'react';
import { X, Send, CheckCircle, Phone, Mail, AlertCircle, MessageCircle } from 'lucide-react';
import apiService from '../services/api';
import { validateContactForm } from '../utils/validation';
import { handleApiError, parseFormErrors } from '../utils/errorHandlers';
import { applyPhoneMask, cleanPhoneNumber, isValidPhoneNumber } from '../utils/phoneMask';
import {
  FORM_SERVICES as SERVICES,
  FORM_GOALS as GOALS,
  FORM_BUDGETS as BUDGETS,
  FORM_TIMELINES as TIMELINES,
  SERVICES_REQUIRING_WEBSITE,
  SERVICE_MAPPING,
  CONTACT_TYPES,
  SUCCESS_MESSAGES,
} from '../config/constants';
import { getServiceConfig } from '../config/serviceConfig';
import { PRICING_CONFIG } from '../config/pricingConfig';
import { getPricingKey } from '../utils/servicePriceMapping';
import styles from '../styles/ContactModal.module.css';

// Иконка для Max (VK Max мессенджер)
const MaxIcon = ({ size = 18, strokeWidth = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
    <path d="M2 17L12 22L22 17" />
    <path d="M2 12L12 17L22 12" />
  </svg>
);

/**
 * Модальное окно контактной формы
 * 
 * Отправляет данные через API сервис,
 * валидирует форму на клиенте,
 * обрабатывает ошибки с сервера
 */

const ContactModal = ({ isOpen, onClose, service = null, source = 'modal' }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactType: CONTACT_TYPES.EMAIL,
    contact: '',
    company: '',
    service: service || '',
    website: '',
    goal: '',
    budget: '',
    timeline: '',
    comment: '',
    privacyAgreed: false,
    source: source
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (service) {
      // Сохраняем исходное название услуги, если она есть в списке доступных услуг
      // Если услуги нет в списке, но есть в маппинге, используем маппинг
      // Иначе используем исходное значение
      let finalService = service;
      
      if (SERVICES.includes(service)) {
        // Услуга есть в списке - используем её напрямую
        finalService = service;
      } else if (SERVICE_MAPPING[service]) {
        // Услуги нет в списке, но есть маппинг - используем маппинг
        finalService = SERVICE_MAPPING[service];
      }
      // Иначе используем исходное значение
      
      // Получаем конфигурацию новой услуги и проверяем цель
      const serviceConfig = getServiceConfig(finalService);
      setFormData(prev => {
        let goal = prev.goal;
        // Если цель не подходит для новой услуги, сбрасываем её
        if (goal && serviceConfig.availableGoals && !serviceConfig.availableGoals.includes(goal)) {
          goal = '';
        }
        
        return {
          ...prev,
          service: finalService,
          goal: goal
        };
      });
    }
  }, [service]);

  useEffect(() => {
    if (!isOpen) {
      // При закрытии сбрасываем форму, но сохраняем услугу, если она была передана
      let finalService = '';
      if (service) {
        // Сохраняем исходное название, если оно есть в списке, иначе используем маппинг
        finalService = SERVICES.includes(service) ? service : (SERVICE_MAPPING[service] || '');
      }
      setFormData({
        name: '',
        contactType: CONTACT_TYPES.EMAIL,
        contact: '',
        company: '',
        service: finalService,
        website: '',
        goal: '',
        budget: '',
        timeline: '',
        comment: '',
        privacyAgreed: false,
        source: source || 'contact-modal'
      });
      setErrors({});
      setSubmitStatus(null);
    } else {
      // При открытии обновляем source и услугу
      let finalService = formData.service;
      if (service) {
        // Сохраняем исходное название, если оно есть в списке, иначе используем маппинг
        finalService = SERVICES.includes(service) ? service : (SERVICE_MAPPING[service] || service);
      }
      
      // Получаем конфигурацию услуги и сбрасываем цель, если она не подходит
      const serviceConfig = getServiceConfig(finalService);
      let goal = formData.goal;
      if (goal && serviceConfig.availableGoals && !serviceConfig.availableGoals.includes(goal)) {
        goal = ''; // Сбрасываем цель, если она не подходит для новой услуги
      }
      
      setFormData(prev => ({
        ...prev,
        service: finalService,
        goal: goal,
        source: source || 'contact-modal'
      }));
    }
  }, [isOpen, service, source]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Прокручиваем к верху страницы при открытии модалки
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleContactTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      contactType: type,
      contact: '' // Очищаем поле контакта при смене типа
    }));
    
    // Очищаем ошибки
    if (errors.contact) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.contact;
        return newErrors;
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'contact' && formData.contactType === CONTACT_TYPES.PHONE) {
      // Применяем маску для телефона
      const masked = applyPhoneMask(value);
      setFormData(prev => ({
        ...prev,
        [name]: masked
      }));
    } else if (name === 'service') {
      // При смене услуги проверяем и сбрасываем цель, если она не подходит
      const serviceConfig = getServiceConfig(value);
      setFormData(prev => {
        let goal = prev.goal;
        // Если цель не подходит для новой услуги, сбрасываем её
        if (goal && serviceConfig.availableGoals && !serviceConfig.availableGoals.includes(goal)) {
          goal = '';
        }
        return {
          ...prev,
          [name]: value,
          goal: goal
        };
      });
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const getContactPlaceholder = () => {
    switch (formData.contactType) {
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
    switch (formData.contactType) {
      case CONTACT_TYPES.EMAIL:
        return 'email';
      case CONTACT_TYPES.PHONE:
        return 'tel';
      default:
        return 'text';
    }
  };

  // Используем централизованную валидацию
  const scrollToFirstError = (errors) => {
    // Порядок полей для проверки (учитываем конфигурацию услуги)
    const serviceConfig = getServiceConfig(formData.service);
    const fieldOrder = ['name', 'contact', 'company', 'service', 'website'];
    
    // Добавляем goal только если он требуется для услуги
    if (serviceConfig.requiresGoal !== false) {
      fieldOrder.push('goal');
    }
    
    fieldOrder.push('budget', 'timeline', 'comment', 'privacyAgreed');
    
    for (const fieldName of fieldOrder) {
      if (errors[fieldName]) {
        // Для модалки прокручиваем внутри контента
        const fieldId = `modal-${fieldName}`;
        const fieldElement = document.getElementById(fieldId);
        
        if (fieldElement) {
          // Прокручиваем внутри модального контента
          const modalContent = fieldElement.closest(`.${styles.content}`);
          if (modalContent) {
            // Вычисляем центр экрана
            const viewportHeight = window.innerHeight;
            const centerY = viewportHeight / 2;
            
            // Получаем позицию поля относительно модального контента
            const fieldRect = fieldElement.getBoundingClientRect();
            const modalRect = modalContent.getBoundingClientRect();
            
            // Вычисляем позицию поля относительно контента модалки
            const fieldTopRelative = fieldRect.top - modalRect.top + modalContent.scrollTop;
            
            // Прокручиваем так, чтобы поле было в центре экрана
            const scrollPosition = fieldTopRelative - centerY + (fieldRect.height / 2);
            
            modalContent.scrollTo({
              top: Math.max(0, scrollPosition),
              behavior: 'smooth'
            });
          }
          
          // Фокус на поле
          setTimeout(() => {
            fieldElement.focus();
          }, 300);
          break;
        }
      }
    }
  };

  const validateForm = () => {
    const { isValid, errors: validationErrors } = validateContactForm(formData);
    setErrors(validationErrors);
    
    if (!isValid) {
      // Прокручиваем к первому полю с ошибкой
      setTimeout(() => {
        scrollToFirstError(validationErrors);
      }, 100);
    }
    
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Получаем конфигурацию услуги для определения обязательности полей
      const serviceConfig = getServiceConfig(formData.service);
      
      const payload = {
        name: formData.name.trim(),
        contactType: formData.contactType,
        contact: formData.contactType === CONTACT_TYPES.PHONE 
          ? cleanPhoneNumber(formData.contact)
          : formData.contact.trim(),
        company: formData.company.trim() || null,
        service: formData.service,
        website: formData.website.trim() || null,
        goal: serviceConfig.requiresGoal !== false ? formData.goal : null,
        budget: formData.budget,
        timeline: formData.timeline || null,
        comment: formData.comment.trim() || null,
        privacyAgreed: formData.privacyAgreed,
        source: source || formData.source || 'contact-modal'
      };

      // Используем централизованный API сервис
      const { data, error } = await apiService.submitContactForm(payload);

      if (error) {
        throw new Error(error);
      }

      if (data && data.success) {
        setSubmitStatus('success');
        // Закрываем модалку через 3 секунды после успешной отправки
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        // Если есть ошибки валидации с сервера
        if (data && data.errors) {
          const serverErrors = parseFormErrors(data.errors);
          setErrors(serverErrors);
          // Прокручиваем к первому полю с ошибкой
          setTimeout(() => {
            scrollToFirstError(serverErrors);
          }, 100);
        }
        setSubmitStatus('error');
      }
    } catch (error) {
      const errorMessage = handleApiError(error, 'Ошибка отправки формы');
      console.error(errorMessage, error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Рассчитываем базовую цену для выбранной услуги (ДО раннего возврата!)
  const servicePrice = useMemo(() => {
    if (!formData.service) return null;
    
    const pricingKey = getPricingKey(formData.service);
    if (!pricingKey || !PRICING_CONFIG[pricingKey]) return null;
    
    const config = PRICING_CONFIG[pricingKey];
    if (!config.basePrice) return null;
    
    const base = config.basePrice;
    const range = config.range || 0.15;
    const min = Math.round(base * (1 - range));
    const max = Math.round(base * (1 + range));
    
    return {
      base,
      min,
      max,
      format: config.format || 'Индивидуально',
      formatted: {
        base: `от ${new Intl.NumberFormat('ru-RU').format(base)} ₽`,
        min: new Intl.NumberFormat('ru-RU').format(min),
        max: new Intl.NumberFormat('ru-RU').format(max),
        range: `${new Intl.NumberFormat('ru-RU').format(min)} – ${new Intl.NumberFormat('ru-RU').format(max)} ₽`
      }
    };
  }, [formData.service]);

  if (!isOpen) return null;

  // Получаем конфигурацию для текущей услуги
  const serviceConfig = getServiceConfig(formData.service);
  
  // Проверяем, требуется ли сайт для услуги (проверяем и исходную услугу, и маппированную)
  const requiresWebsite = serviceConfig.requiresWebsite || 
    SERVICES_REQUIRING_WEBSITE.includes(formData.service) || 
    (service && SERVICES_REQUIRING_WEBSITE.includes(service));
  
  // Если услуга передана через prop, делаем поле disabled
  // Проверяем, что услуга либо есть в маппинге, либо в списке доступных услуг
  const isServicePreselected = service && (
    SERVICE_MAPPING[service] || 
    SERVICES.includes(service) || 
    service
  );
  
  // Получаем доступные цели для текущей услуги
  const availableGoals = serviceConfig.availableGoals || GOALS;

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Обсудить проект</h2>
          <button 
            className={styles.closeButton} 
            onClick={onClose}
            aria-label="Закрыть"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formSection}>
            <div className={styles.formGroup}>
              <label htmlFor="modal-name" className={styles.label}>
                Как к вам обращаться *
              </label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                placeholder="Имя"
                disabled={isSubmitting}
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Как с вами связаться? *
              </label>
              <div className={styles.contactTypeToggle}>
                <button
                  type="button"
                  className={`${styles.contactTypeButton} ${formData.contactType === CONTACT_TYPES.EMAIL ? styles.contactTypeButtonActive : ''}`}
                  onClick={() => handleContactTypeChange(CONTACT_TYPES.EMAIL)}
                  disabled={isSubmitting}
                >
                  <Mail size={18} strokeWidth={1.5} />
                  <span>Email</span>
                </button>
                <button
                  type="button"
                  className={`${styles.contactTypeButton} ${formData.contactType === CONTACT_TYPES.PHONE ? styles.contactTypeButtonActive : ''}`}
                  onClick={() => handleContactTypeChange(CONTACT_TYPES.PHONE)}
                  disabled={isSubmitting}
                >
                  <Phone size={18} strokeWidth={1.5} />
                  <span>Телефон</span>
                </button>
                <button
                  type="button"
                  className={`${styles.contactTypeButton} ${formData.contactType === CONTACT_TYPES.TELEGRAM ? styles.contactTypeButtonActive : ''}`}
                  onClick={() => handleContactTypeChange(CONTACT_TYPES.TELEGRAM)}
                  disabled={isSubmitting}
                >
                  <MessageCircle size={18} strokeWidth={1.5} />
                  <span>Telegram</span>
                </button>
                <button
                  type="button"
                  className={`${styles.contactTypeButton} ${formData.contactType === CONTACT_TYPES.MAX ? styles.contactTypeButtonActive : ''}`}
                  onClick={() => handleContactTypeChange(CONTACT_TYPES.MAX)}
                  disabled={isSubmitting}
                >
                  <MaxIcon size={18} strokeWidth={1.5} />
                  <span>Max</span>
                </button>
              </div>
              <input
                type={getContactInputType()}
                id="modal-contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className={`${styles.input} ${errors.contact ? styles.inputError : ''}`}
                placeholder={getContactPlaceholder()}
                required
                disabled={isSubmitting}
              />
              {errors.contact && <span className={styles.error}>{errors.contact}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="modal-company" className={styles.label}>
                Компания или проект
              </label>
              <input
                type="text"
                id="modal-company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Название компании"
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="modal-service" className={styles.label}>
                Какая услуга вас интересует *
              </label>
              <select
                id="modal-service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={`${styles.select} ${errors.service ? styles.inputError : ''} ${isServicePreselected ? styles.selectDisabled : ''}`}
                disabled={isSubmitting || isServicePreselected}
              >
                <option value="">Выберите услугу</option>
                {SERVICES.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              {isServicePreselected && (
                <span className={styles.helperText} style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                  Услуга выбрана автоматически на основе страницы
                </span>
              )}
              {errors.service && <span className={styles.error}>{errors.service}</span>}
              
              {/* Отображение цены для выбранной услуги */}
              {servicePrice && (
                <div className={styles.servicePriceDisplay}>
                  <div className={styles.servicePriceLabel}>Ориентировочная стоимость:</div>
                  <div className={styles.servicePriceValue}>{servicePrice.formatted.range}</div>
                  <div className={styles.servicePriceFormat}>{servicePrice.format}</div>
                  <div className={styles.servicePriceNote}>
                    Финальная стоимость уточняется после анализа проекта
                  </div>
                </div>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="modal-website" className={styles.label}>
                Сайт или проект (если есть)
                {requiresWebsite && <span className={styles.required}> *</span>}
              </label>
              <input
                type="url"
                id="modal-website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className={`${styles.input} ${errors.website ? styles.inputError : ''}`}
                placeholder="https://"
                disabled={isSubmitting}
              />
              {errors.website && <span className={styles.error}>{errors.website}</span>}
              {requiresWebsite && (
                <span className={styles.helperText}>
                  Для этой услуги указание сайта обязательно
                </span>
              )}
            </div>

            {(() => {
              const serviceConfig = getServiceConfig(formData.service);
              if (serviceConfig.requiresGoal === false) return null;
              
              const availableGoals = serviceConfig.availableGoals || GOALS;
              return (
                <div className={styles.formGroup}>
                  <label htmlFor="modal-goal" className={styles.label}>
                    Основная цель {serviceConfig.requiresGoal ? '*' : ''}
                  </label>
                  <select
                    id="modal-goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                    className={`${styles.select} ${errors.goal ? styles.inputError : ''}`}
                    disabled={isSubmitting}
                  >
                    <option value="">Выберите цель</option>
                    {availableGoals.map(goal => (
                      <option key={goal} value={goal}>{goal}</option>
                    ))}
                  </select>
                  {errors.goal && <span className={styles.error}>{errors.goal}</span>}
                </div>
              );
            })()}

            <div className={styles.formGroup}>
              <label htmlFor="modal-budget" className={styles.label}>
                Примерный бюджет *
              </label>
              <select
                id="modal-budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className={`${styles.select} ${errors.budget ? styles.inputError : ''}`}
                disabled={isSubmitting}
              >
                <option value="">Выберите бюджет</option>
                {BUDGETS.map(budget => (
                  <option key={budget} value={budget}>{budget}</option>
                ))}
              </select>
              {errors.budget && <span className={styles.error}>{errors.budget}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="modal-timeline" className={styles.label}>
                Сроки
              </label>
              <select
                id="modal-timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className={styles.select}
                disabled={isSubmitting}
              >
                <option value="">Выберите сроки</option>
                {TIMELINES.map(timeline => (
                  <option key={timeline} value={timeline}>{timeline}</option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="modal-comment" className={styles.label}>
                Кратко опишите задачу
              </label>
              <textarea
                id="modal-comment"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                className={styles.textarea}
                rows={4}
                placeholder="Например: что сейчас не работает, что хотите улучшить, какие есть ограничения"
                disabled={isSubmitting}
              />
              <span className={styles.helperText}>
                Необязательно, но поможет нам быстрее понять задачу
              </span>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="privacyAgreed"
                  checked={formData.privacyAgreed}
                  onChange={handleInputChange}
                  className={styles.checkbox}
                  disabled={isSubmitting}
                />
                <span>
                  Я согласен с{' '}
                  <a 
                    href="/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.link} 
                    onClick={(e) => e.stopPropagation()}
                  >
                    политикой конфиденциальности
                  </a>
                  *
                </span>
              </label>
              {errors.privacyAgreed && <span className={styles.error}>{errors.privacyAgreed}</span>}
            </div>
          </div>

          {submitStatus === 'error' && (
            <div className={styles.errorMessage}>
              <AlertCircle size={24} strokeWidth={2} className={styles.errorIcon} />
              <div className={styles.messageContent}>
                <strong>Ошибка отправки</strong>
                <span>Произошла ошибка при отправке. Попробуйте ещё раз или свяжитесь с нами напрямую.</span>
              </div>
            </div>
          )}

          {submitStatus === 'success' && (
            <div className={styles.successMessage}>
              <CheckCircle size={24} strokeWidth={2} className={styles.successIcon} />
              <div className={styles.messageContent}>
                <strong>Заявка успешно отправлена!</strong>
                <span>{SUCCESS_MESSAGES.FORM_SUBMITTED}</span>
              </div>
            </div>
          )}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
              disabled={isSubmitting}
            >
              Отмена
            </button>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Отправка...'
              ) : (
                <>
                  Обсудить проект
                  <Send size={18} strokeWidth={1.5} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
