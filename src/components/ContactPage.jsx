import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  Send,
  Linkedin,
  Twitter,
  Github,
  Clock,
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import apiService from '../services/api';
import { CONTACT_TYPES } from '../config/constants';
import { applyPhoneMask, cleanPhoneNumber, isValidPhoneNumber } from '../utils/phoneMask';
import { validateSimpleContactForm } from '../utils/validation';
import styles from '../styles/ContactPage.module.css';

// Иконка для Max (VK Max мессенджер)
const MaxIcon = ({ size = 24, strokeWidth = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
    <path d="M2 17L12 22L22 17" />
    <path d="M2 12L12 17L22 12" />
  </svg>
);

const ContactPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    contactType: CONTACT_TYPES.EMAIL,
    contact: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Обработка якорной ссылки для плавной прокрутки к форме
  useEffect(() => {
    if (location.hash === '#form') {
      setTimeout(() => {
        const formElement = document.getElementById('form');
        if (formElement) {
          const headerHeight = 73;
          const elementPosition = formElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'contact' && formData.contactType === CONTACT_TYPES.PHONE) {
      // Применяем маску для телефона
      const masked = applyPhoneMask(value);
      setFormData(prev => ({
        ...prev,
        [name]: masked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Очищаем ошибку при изменении поля
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleContactTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      contactType: type,
      contact: '' // Очищаем поле контакта при смене типа
    }));
    
    // Очищаем ошибки
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors.contact;
      return newErrors;
    });
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

  const validateForm = () => {
    const validationData = {
      name: formData.name,
      contactType: formData.contactType,
      contact: formData.contact,
      message: formData.message
    };

    const { isValid, errors: validationErrors } = validateSimpleContactForm(validationData);
    
    // Дополнительная валидация для телефона (проверка формата с маской)
    if (formData.contactType === CONTACT_TYPES.PHONE && formData.contact) {
      if (!isValidPhoneNumber(formData.contact)) {
        validationErrors.contact = 'Введите корректный номер телефона';
      }
    }
    
    setErrors(validationErrors);
    
    if (!isValid) {
      // Прокручиваем к первому полю с ошибкой
      setTimeout(() => {
        scrollToFirstError(validationErrors);
      }, 100);
    }
    
    return isValid;
  };

  const scrollToFirstError = (errors) => {
    // Порядок полей для проверки
    const fieldOrder = ['name', 'contact', 'message'];
    
    for (const fieldName of fieldOrder) {
      if (errors[fieldName]) {
        // Для ContactPage поля имеют id="name", id="contact", id="message"
        const fieldId = fieldName;
        const fieldElement = document.getElementById(fieldId);
        
        if (fieldElement) {
          // Вычисляем центр экрана
          const viewportHeight = window.innerHeight;
          const centerY = viewportHeight / 2;
          
          // Получаем позицию поля
          const fieldRect = fieldElement.getBoundingClientRect();
          const fieldTop = fieldRect.top + window.pageYOffset;
          
          // Прокручиваем так, чтобы поле было в центре экрана
          const scrollPosition = fieldTop - centerY + (fieldRect.height / 2);
          
          window.scrollTo({
            top: Math.max(0, scrollPosition),
            behavior: 'smooth'
          });
          
          // Фокус на поле
          setTimeout(() => {
            fieldElement.focus();
          }, 300);
          break;
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Подготавливаем данные для отправки
      const payload = {
        name: formData.name.trim(),
        contactType: formData.contactType,
        contact: formData.contactType === CONTACT_TYPES.PHONE 
          ? cleanPhoneNumber(formData.contact)
          : formData.contact.trim(),
        company: null,
        service: null,
        website: null,
        goal: null,
        budget: null,
        timeline: null,
        comment: formData.message.trim() || null,
        privacyAgreed: true,
        source: 'contact-page'
      };

      const { data, error } = await apiService.submitContactForm(payload);

      if (error) {
        throw new Error(error);
      }

      if (data && data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          contactType: CONTACT_TYPES.EMAIL,
          contact: '',
          message: ''
        });
        setErrors({});
        
        // Сбрасываем статус через 5 секунд
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* БЛОК 1. HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            Свяжитесь с нами
          </h1>
          <p className={styles.heroSubtitle}>
            Готовы обсудить ваш проект или ответить на вопросы
          </p>
          <p className={styles.heroDescription}>
            Расскажите о вашей задаче, и мы оценим её потенциал. 
            Честно скажем, сможем ли помочь и какой подход будет наиболее эффективным.
          </p>
        </div>
      </section>

      {/* БЛОК 2. КОНТАКТНАЯ ИНФОРМАЦИЯ */}
      <section className={styles.section}>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <h3 className={styles.contactTitle}>Email</h3>
            <p className={styles.contactValue}>
              <a href="mailto:info@seoeleven.ru">info@seoeleven.ru</a>
            </p>
            <p className={styles.contactDescription}>
              Напишите нам на почту, ответим в течение рабочего дня
            </p>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <Phone size={24} strokeWidth={1.5} />
            </div>
            <h3 className={styles.contactTitle}>Телефон</h3>
            <p className={styles.contactValue}>
              <a href="tel:+79319703777">+7 931 970-37-77</a>
            </p>
            <p className={styles.contactDescription}>
              Позвоните нам или оставьте заявку для звонка
            </p>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <Clock size={24} strokeWidth={1.5} />
            </div>
            <h3 className={styles.contactTitle}>Время работы</h3>
            <p className={styles.contactValue}>
              Пн–Пт: 10:00–19:00
            </p>
            <p className={styles.contactDescription}>
              По будням с 10 утра до 7 вечера по московскому времени
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 3. ФОРМА ОБРАТНОЙ СВЯЗИ */}
      <section className={styles.section} id="form">
        <div className={styles.formSection}>
          <div className={styles.formHeader}>
            <h2 className={styles.sectionTitle}>Напишите нам</h2>
            <p className={styles.formSubtitle}>
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Имя *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                required
                placeholder="Ваше имя"
                disabled={isSubmitting}
              />
              {errors.name && (
                <span className={styles.errorText}>{errors.name}</span>
              )}
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
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className={`${styles.input} ${errors.contact ? styles.inputError : ''}`}
                required
                placeholder={getContactPlaceholder()}
                disabled={isSubmitting}
              />
              {errors.contact && (
                <span className={styles.errorText}>{errors.contact}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                rows={6}
                placeholder="Расскажите о вашем проекте или задайте вопрос (необязательно)..."
                disabled={isSubmitting}
              />
              {errors.message && (
                <span className={styles.errorText}>{errors.message}</span>
              )}
            </div>

            {submitStatus === 'error' && (
              <div className={styles.errorMessage}>
                <AlertCircle size={20} strokeWidth={1.5} />
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
                  <strong>Сообщение успешно отправлено!</strong>
                  <span>Спасибо за обращение. Мы получили вашу заявку и свяжемся с вами в ближайшее время по указанному способу связи.</span>
                </div>
              </div>
            )}

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Отправка...'
              ) : (
                <>
                  Отправить сообщение
                  <Send size={20} strokeWidth={1.5} />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* БЛОК 4. СОЦИАЛЬНЫЕ СЕТИ */}
      <section className={styles.section}>
        <div className={styles.socialSection}>
          <h2 className={styles.sectionTitle}>Мы в соцсетях</h2>
          <p className={styles.socialSubtitle}>
            Следите за нашими обновлениями и кейсами
          </p>
          <div className={styles.socialLinks}>
            <a 
              href="#linkedin" 
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <Linkedin size={24} strokeWidth={1.5} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="#twitter" 
              className={styles.socialLink}
              aria-label="Twitter"
            >
              <Twitter size={24} strokeWidth={1.5} />
              <span>Twitter</span>
            </a>
            <a 
              href="#github" 
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <Github size={24} strokeWidth={1.5} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://t.me/your_telegram" 
              className={styles.socialLink}
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={24} strokeWidth={1.5} />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
