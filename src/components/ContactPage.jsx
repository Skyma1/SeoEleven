import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin,
  Twitter,
  Github,
  Clock,
  MessageCircle
} from 'lucide-react';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Здесь будет отправка формы на сервер
    // Пока просто имитируем отправку
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Сбрасываем статус через 5 секунд
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
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
              <a href="mailto:hello@studio.com">hello@studio.com</a>
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
              <a href="tel:+1234567890">+1 (234) 567-890</a>
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
      <section className={styles.section}>
        <div className={styles.formSection}>
          <div className={styles.formHeader}>
            <h2 className={styles.sectionTitle}>Напишите нам</h2>
            <p className={styles.formSubtitle}>
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
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
                  className={styles.input}
                  required
                  placeholder="Ваше имя"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Сообщение *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={styles.textarea}
                required
                rows={6}
                placeholder="Расскажите о вашем проекте или задайте вопрос..."
              />
            </div>

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

            {submitStatus === 'success' && (
              <div className={styles.successMessage}>
                Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.
              </div>
            )}
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

