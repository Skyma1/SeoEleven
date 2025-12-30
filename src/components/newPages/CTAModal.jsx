import React, { useState, useEffect } from 'react';
import apiService from '../../services/api';
import { CONTACT_TYPES } from '../../config/constants';
import { applyPhoneMask, cleanPhoneNumber, isValidPhoneNumber } from '../../utils/phoneMask';
import { validators } from '../../utils/validation';

function CTAModal({ isOpen, onClose, source = 'header' }) {
  const [formData, setFormData] = useState({
    name: '',
    contactType: CONTACT_TYPES.EMAIL,
    contact: '',
    comment: '',
    privacyAgreed: true
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  // Блокировка скролла при открытом модальном окне
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

  // Обработка ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen && !isSubmitting) {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, isSubmitting]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setSubmitStatus(null);
      setErrors({});
    }, 200);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Очищаем ошибку при изменении поля
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }));
    }
  };

  const handleContactTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      contactType: type,
      contact: ''
    }));
    setErrors(prev => ({
      ...prev,
      contact: null
    }));
  };

  const handlePhoneChange = (e) => {
    const masked = applyPhoneMask(e.target.value);
    handleChange('contact', masked);
  };

  const validateForm = () => {
    const newErrors = {};

    // Валидация имени
    const nameError = validators.required(formData.name, 'Введите ваше имя');
    if (nameError) newErrors.name = nameError;

    // Валидация контакта
    if (formData.contactType === CONTACT_TYPES.EMAIL) {
      const emailError = validators.email(formData.contact, 'Введите корректный email');
      if (emailError) newErrors.contact = emailError;
    } else if (formData.contactType === CONTACT_TYPES.PHONE) {
      const phoneError = validators.phone(formData.contact, 'Введите корректный телефон');
      if (phoneError) newErrors.contact = phoneError;
    } else if (formData.contactType === CONTACT_TYPES.TELEGRAM || formData.contactType === CONTACT_TYPES.MAX) {
      if (!formData.contact.trim()) {
        newErrors.contact = 'Введите username';
      } else if (!formData.contact.startsWith('@')) {
        newErrors.contact = 'Username должен начинаться с @';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getContactPlaceholder = () => {
    switch (formData.contactType) {
      case CONTACT_TYPES.EMAIL:
        return 'example@mail.com';
      case CONTACT_TYPES.PHONE:
        return '+7 (999) 123-45-67';
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
        contact: formData.contactType === CONTACT_TYPES.PHONE 
          ? cleanPhoneNumber(formData.contact)
          : formData.contact.trim(),
        company: null,
        service: null,
        website: null,
        goal: null,
        budget: null,
        timeline: null,
        comment: formData.comment.trim() || null,
        privacyAgreed: true,
        source: source || 'cta-modal'
      };

      const { data, error } = await apiService.submitContactForm(payload);

      if (error) {
        throw new Error(error);
      }

      if (data && data.success) {
        setSubmitStatus('success');
        // Очищаем форму
        setFormData({
          name: '',
          contactType: CONTACT_TYPES.EMAIL,
          contact: '',
          comment: '',
          privacyAgreed: true
        });
        // Закрываем модалку через 2 секунды
        setTimeout(() => {
          handleClose();
        }, 2000);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div 
        className={`relative z-50 w-full max-w-lg bg-surface dark:bg-zinc-900 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-200 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Header */}
        <div className="relative bg-graphite text-white p-4 sm:p-6">
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-1 text-white">Свяжитесь с нами</h2>
              <p className="text-xs sm:text-sm text-white/70">Мы ответим в течение 24 часов</p>
            </div>
            <button
              onClick={handleClose}
              disabled={isSubmitting}
              className="size-8 sm:size-10 flex-shrink-0 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 transition-colors flex items-center justify-center"
              aria-label="Закрыть"
            >
              <span className="material-symbols-outlined text-lg sm:text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 lg:p-8 max-h-[calc(100vh-200px)] overflow-y-auto">
          {submitStatus === 'success' ? (
            <div className="text-center py-6 sm:py-8">
              <div className="size-14 sm:size-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-5">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400 !text-3xl sm:!text-4xl">check_circle</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-graphite dark:text-white mb-3">Заявка отправлена!</h3>
              <p className="text-sm sm:text-base text-graphite/70 dark:text-gray-400">
                Мы свяжемся с вами в ближайшее время
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Имя */}
              <div>
                <label className="block text-sm sm:text-base font-medium text-graphite dark:text-white mb-2 sm:mb-2.5">
                  Ваше имя <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full h-12 sm:h-12 px-4 sm:px-4 rounded-lg border-2 transition-colors text-sm sm:text-base ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-graphite/10 dark:border-white/10 focus:border-primary'
                  } bg-background-light dark:bg-zinc-800 text-graphite dark:text-white focus:outline-none`}
                  placeholder="Иван Иванов"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs sm:text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Тип контакта */}
              <div>
                <label className="block text-sm sm:text-base font-medium text-graphite dark:text-white mb-2 sm:mb-2.5">
                  Как с вами связаться? <span className="text-primary">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-3">
                  <button
                    type="button"
                    onClick={() => handleContactTypeChange(CONTACT_TYPES.EMAIL)}
                    disabled={isSubmitting}
                    className={`h-12 sm:h-12 px-3 sm:px-3 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-1.5 ${
                      formData.contactType === CONTACT_TYPES.EMAIL
                        ? 'border-primary bg-primary text-white'
                        : 'border-graphite/10 dark:border-white/10 hover:border-primary/30 bg-background-light dark:bg-zinc-800'
                    } disabled:opacity-50`}
                  >
                    <span className="material-symbols-outlined text-lg sm:text-xl">mail</span>
                    <span className="text-xs sm:text-xs font-medium leading-tight">Email</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleContactTypeChange(CONTACT_TYPES.PHONE)}
                    disabled={isSubmitting}
                    className={`h-12 sm:h-12 px-3 sm:px-3 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-1.5 ${
                      formData.contactType === CONTACT_TYPES.PHONE
                        ? 'border-primary bg-primary text-white'
                        : 'border-graphite/10 dark:border-white/10 hover:border-primary/30 bg-background-light dark:bg-zinc-800'
                    } disabled:opacity-50`}
                  >
                    <span className="material-symbols-outlined text-lg sm:text-xl">phone</span>
                    <span className="text-xs sm:text-xs font-medium leading-tight">Телефон</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleContactTypeChange(CONTACT_TYPES.TELEGRAM)}
                    disabled={isSubmitting}
                    className={`h-12 sm:h-12 px-3 sm:px-3 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-1.5 ${
                      formData.contactType === CONTACT_TYPES.TELEGRAM
                        ? 'border-primary bg-primary text-white'
                        : 'border-graphite/10 dark:border-white/10 hover:border-primary/30 bg-background-light dark:bg-zinc-800'
                    } disabled:opacity-50`}
                  >
                    <span className="material-symbols-outlined text-lg sm:text-xl">chat</span>
                    <span className="text-xs sm:text-xs font-medium leading-tight">Telegram</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleContactTypeChange(CONTACT_TYPES.MAX)}
                    disabled={isSubmitting}
                    className={`h-12 sm:h-12 px-3 sm:px-3 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-1.5 ${
                      formData.contactType === CONTACT_TYPES.MAX
                        ? 'border-primary bg-primary text-white'
                        : 'border-graphite/10 dark:border-white/10 hover:border-primary/30 bg-background-light dark:bg-zinc-800'
                    } disabled:opacity-50`}
                  >
                    <span className="material-symbols-outlined text-lg sm:text-xl">forum</span>
                    <span className="text-xs sm:text-xs font-medium leading-tight">Max</span>
                  </button>
                </div>

                {/* Поле контакта */}
                <input
                  type={getContactInputType()}
                  value={formData.contact}
                  onChange={formData.contactType === CONTACT_TYPES.PHONE ? handlePhoneChange : (e) => handleChange('contact', e.target.value)}
                  className={`w-full h-12 sm:h-12 px-4 sm:px-4 rounded-lg border-2 transition-colors text-sm sm:text-base ${
                    errors.contact
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-graphite/10 dark:border-white/10 focus:border-primary'
                  } bg-background-light dark:bg-zinc-800 text-graphite dark:text-white focus:outline-none`}
                  placeholder={getContactPlaceholder()}
                  disabled={isSubmitting}
                />
                {errors.contact && (
                  <p className="mt-1.5 text-xs sm:text-sm text-red-500">{errors.contact}</p>
                )}
              </div>

              {/* Комментарий */}
              <div>
                <label className="block text-sm sm:text-base font-medium text-graphite dark:text-white mb-2 sm:mb-2.5">
                  Сообщение (необязательно)
                </label>
                <textarea
                  value={formData.comment}
                  onChange={(e) => handleChange('comment', e.target.value)}
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-graphite/10 dark:border-white/10 focus:border-primary bg-background-light dark:bg-zinc-800 text-graphite dark:text-white focus:outline-none resize-none text-sm sm:text-base"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>

              {/* Privacy */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={formData.privacyAgreed}
                  onChange={(e) => handleChange('privacyAgreed', e.target.checked)}
                  disabled={isSubmitting}
                  className="mt-0.5 sm:mt-1 size-4 sm:size-4 rounded border-graphite/20 text-primary focus:ring-primary focus:ring-2 focus:ring-offset-0 flex-shrink-0"
                />
                <label htmlFor="privacy" className="text-xs sm:text-sm text-graphite/60 dark:text-gray-400 leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className="w-full h-12 sm:h-12 px-6 sm:px-6 bg-primary hover:bg-[#c41f18] disabled:bg-graphite/20 disabled:cursor-not-allowed text-white text-sm sm:text-base font-bold rounded-lg transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined text-lg sm:text-xl animate-spin">refresh</span>
                    <span>Отправка...</span>
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <span className="material-symbols-outlined text-lg sm:text-xl">error</span>
                    <span>Ошибка. Попробуйте еще раз</span>
                  </>
                ) : (
                  <>
                    <span>Отправить заявку</span>
                    <span className="material-symbols-outlined text-base sm:text-lg">arrow_forward</span>
                  </>
                )}
              </button>

              {submitStatus === 'error' && (
                <p className="text-xs sm:text-sm text-red-500 text-center">
                  Произошла ошибка. Пожалуйста, попробуйте еще раз или свяжитесь с нами напрямую.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default CTAModal;
