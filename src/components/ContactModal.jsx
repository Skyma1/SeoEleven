import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Phone, Mail } from 'lucide-react';
import apiService from '../services/api';
import { validateContactForm } from '../utils/validation';
import { handleApiError, parseFormErrors } from '../utils/errorHandlers';
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
import styles from '../styles/ContactModal.module.css';

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
        contactType: CONTACT_TYPES.EMAIL,
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

  // Используем централизованную валидацию
  const validateForm = () => {
    const { isValid, errors: validationErrors } = validateContactForm(formData);
    setErrors(validationErrors);
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
                  className={`${styles.toggleButton} ${formData.contactType === CONTACT_TYPES.EMAIL ? styles.toggleButtonActive : ''}`}
                  onClick={() => {
                    handleInputChange({ target: { name: 'contactType', value: CONTACT_TYPES.EMAIL, type: 'text' } });
                  }}
                  disabled={isSubmitting}
                >
                  <Mail size={16} strokeWidth={1.5} />
                  Email
                </button>
                <button
                  type="button"
                  className={`${styles.toggleButton} ${formData.contactType === CONTACT_TYPES.PHONE ? styles.toggleButtonActive : ''}`}
                  onClick={() => {
                    handleInputChange({ target: { name: 'contactType', value: CONTACT_TYPES.PHONE, type: 'text' } });
                  }}
                  disabled={isSubmitting}
                >
                  <Phone size={16} strokeWidth={1.5} />
                  Телефон
                </button>
              </div>
              <input
                type={formData.contactType === CONTACT_TYPES.EMAIL ? 'email' : 'tel'}
                id="modal-contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className={`${styles.input} ${errors.contact ? styles.inputError : ''}`}
                placeholder={formData.contactType === CONTACT_TYPES.EMAIL ? 'your@email.com' : '+7 (___) ___-__-__'}
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
              <span>{SUCCESS_MESSAGES.FORM_SUBMITTED}</span>
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
