import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Phone, Mail } from 'lucide-react';
import styles from '../styles/ContactModal.module.css';

/**
 * Структура данных формы для отправки на бекенд:
 * 
 * POST /api/contact
 * Content-Type: application/json
 * 
 * {
 *   "name": string,                    // Имя (обязательное)
 *   "contactType": "phone" | "email",  // Тип контакта (обязательное)
 *   "contact": string,                 // Телефон или email (обязательное)
 *   "company": string,                 // Компания (опциональное)
 *   "service": string,                 // Услуга (обязательное)
 *   "website": string,                 // Сайт (обязателен для SEO/GEO/аудита)
 *   "goal": string,                    // Цель (обязательное)
 *   "budget": string,                  // Бюджет (обязательное)
 *   "timeline": string,                // Сроки (опциональное)
 *   "comment": string,                 // Комментарий (опциональное)
 *   "privacyAgreed": boolean,          // Согласие (обязательное)
 *   "source": string                   // Источник заявки
 * }
 */

const SERVICES = [
  'SEO-продвижение',
  'GEO / AI SEO',
  'Контекстная реклама',
  'Разработка сайта',
  'Поддержка / доработка',
  'Автоматизация / боты',
  'Аудит / аналитика'
];

const GOALS = [
  'Рост заявок',
  'Рост трафика',
  'Запуск нового проекта',
  'Аудит текущего состояния',
  'Автоматизация процессов',
  'Другое'
];

const BUDGETS = [
  'До 30 000 ₽',
  '30 000 – 70 000 ₽',
  '70 000 – 150 000 ₽',
  '150 000 ₽ и выше',
  'Пока не определились'
];

const TIMELINES = [
  'Как можно быстрее',
  'В течение месяца',
  '1–3 месяца',
  'Без жёстких сроков'
];

// Услуги, для которых сайт обязателен
const SERVICES_REQUIRING_WEBSITE = ['SEO-продвижение', 'GEO / AI SEO', 'Аудит / аналитика'];

// Маппинг услуг для автоподстановки
const SERVICE_MAPPING = {
  'AI SEO (GEO)': 'GEO / AI SEO',
  'SEO-продвижение под AI (GEO)': 'GEO / AI SEO',
  'Комплексное SEO-продвижение': 'SEO-продвижение',
  'Контекстная реклама': 'Контекстная реклама',
  'Таргетированная реклама': 'Контекстная реклама',
  'Web development': 'Разработка сайта',
  'Веб-разработка': 'Разработка сайта',
  'Support & maintenance': 'Поддержка / доработка',
  'Telegram bots & Mini Apps': 'Автоматизация / боты',
  'No-code automation': 'Автоматизация / боты',
  'Advanced analytics & audit': 'Аудит / аналитика',
};

const ContactModal = ({ isOpen, onClose, service = null, source = 'modal' }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactType: 'email',
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
    if (service && SERVICE_MAPPING[service]) {
      setFormData(prev => ({
        ...prev,
        service: SERVICE_MAPPING[service]
      }));
    }
  }, [service]);

  useEffect(() => {
    if (!isOpen) {
      const mappedService = service && SERVICE_MAPPING[service] ? SERVICE_MAPPING[service] : '';
      setFormData({
        name: '',
        contactType: 'email',
        contact: '',
        company: '',
        service: mappedService,
        website: '',
        goal: '',
        budget: '',
        timeline: '',
        comment: '',
        privacyAgreed: false,
        source: source
      });
      setErrors({});
      setSubmitStatus(null);
    }
  }, [isOpen, service, source]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    // Очищаем поле контакта при смене типа
    if (name === 'contactType') {
      setFormData(prev => ({ ...prev, contact: '' }));
      if (errors.contact) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.contact;
          return newErrors;
        });
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Укажите, как к вам обращаться';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Минимум 2 символа';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = `Укажите ${formData.contactType === 'phone' ? 'телефон' : 'email'}`;
    } else if (formData.contactType === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact)) {
      newErrors.contact = 'Введите корректный email';
    } else if (formData.contactType === 'phone' && formData.contact.trim().length < 5) {
      newErrors.contact = 'Введите корректный телефон';
    }

    if (!formData.service) {
      newErrors.service = 'Выберите услугу';
    }

    if (SERVICES_REQUIRING_WEBSITE.includes(formData.service)) {
      if (!formData.website.trim()) {
        newErrors.website = 'Для этой услуги требуется указать сайт';
      } else if (!/^https?:\/\/.+/.test(formData.website.trim())) {
        newErrors.website = 'Введите корректный URL (начинается с http:// или https://)';
      }
    } else if (formData.website.trim() && !/^https?:\/\/.+/.test(formData.website.trim())) {
      newErrors.website = 'Введите корректный URL (начинается с http:// или https://)';
    }

    if (!formData.goal) {
      newErrors.goal = 'Укажите основную цель';
    }

    if (!formData.budget) {
      newErrors.budget = 'Укажите примерный бюджет';
    }

    if (!formData.privacyAgreed) {
      newErrors.privacyAgreed = 'Необходимо согласие на обработку данных';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
      
      const payload = {
        name: formData.name.trim(),
        contactType: formData.contactType,
        contact: formData.contact.trim(),
        company: formData.company.trim() || null,
        service: formData.service,
        website: formData.website.trim() || null,
        goal: formData.goal,
        budget: formData.budget,
        timeline: formData.timeline || null,
        comment: formData.comment.trim() || null,
        privacyAgreed: formData.privacyAgreed,
        source: formData.source
      };

      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        if (data.errors) {
          setErrors(data.errors);
        }
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const requiresWebsite = SERVICES_REQUIRING_WEBSITE.includes(formData.service);

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
                Как с вами связаться *
              </label>
              <div className={styles.contactToggle}>
                <button
                  type="button"
                  className={`${styles.toggleButton} ${formData.contactType === 'email' ? styles.toggleButtonActive : ''}`}
                  onClick={() => {
                    handleInputChange({ target: { name: 'contactType', value: 'email', type: 'text' } });
                  }}
                  disabled={isSubmitting}
                >
                  <Mail size={16} strokeWidth={1.5} />
                  Email
                </button>
                <button
                  type="button"
                  className={`${styles.toggleButton} ${formData.contactType === 'phone' ? styles.toggleButtonActive : ''}`}
                  onClick={() => {
                    handleInputChange({ target: { name: 'contactType', value: 'phone', type: 'text' } });
                  }}
                  disabled={isSubmitting}
                >
                  <Phone size={16} strokeWidth={1.5} />
                  Телефон
                </button>
              </div>
              <input
                type={formData.contactType === 'email' ? 'email' : 'tel'}
                id="modal-contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className={`${styles.input} ${errors.contact ? styles.inputError : ''}`}
                placeholder={formData.contactType === 'email' ? 'your@email.com' : '+7 (___) ___-__-__'}
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
                className={`${styles.select} ${errors.service ? styles.inputError : ''}`}
                disabled={isSubmitting}
              >
                <option value="">Выберите услугу</option>
                {SERVICES.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              {errors.service && <span className={styles.error}>{errors.service}</span>}
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

            <div className={styles.formGroup}>
              <label htmlFor="modal-goal" className={styles.label}>
                Основная цель *
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
                {GOALS.map(goal => (
                  <option key={goal} value={goal}>{goal}</option>
                ))}
              </select>
              {errors.goal && <span className={styles.error}>{errors.goal}</span>}
            </div>

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
              Произошла ошибка при отправке. Попробуйте ещё раз или свяжитесь с нами напрямую.
            </div>
          )}

          {submitStatus === 'success' && (
            <div className={styles.successMessage}>
              <CheckCircle size={20} strokeWidth={1.5} />
              <span>Спасибо! Мы изучим запрос и свяжемся с вами в ближайшее время.</span>
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
