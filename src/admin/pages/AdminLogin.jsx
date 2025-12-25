/**
 * Страница логина в админ-панель
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { validateAdminLogin } from '../../utils/validation';
import { ROUTES } from '../../config/constants';
import styles from '../../styles/AdminLogin.module.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Если уже авторизован, редиректим в админку
  useEffect(() => {
    if (user) {
      navigate(ROUTES.ADMIN);
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Очищаем ошибку для поля при изменении
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    // Очищаем общую ошибку
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Валидация
    const { isValid, errors: validationErrors } = validateAdminLogin(formData);
    
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await login(formData);
      
      if (!result.success) {
        setSubmitError(result.error || 'Неверный email или пароль');
      }
    } catch (error) {
      setSubmitError('Произошла ошибка при входе. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <LogIn size={32} strokeWidth={1.5} />
          </div>
          <h1 className={styles.title}>Вход в админ-панель</h1>
          <p className={styles.subtitle}>Введите ваши учетные данные</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {submitError && (
            <div className={styles.errorAlert}>
              <AlertCircle size={20} strokeWidth={1.5} />
              <span>{submitError}</span>
            </div>
          )}

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <div className={styles.inputWrapper}>
              <Mail className={styles.inputIcon} size={20} strokeWidth={1.5} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                placeholder="admin@example.com"
                disabled={isSubmitting}
                autoFocus
              />
            </div>
            {errors.email && (
              <span className={styles.errorText}>{errors.email}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Пароль
            </label>
            <div className={styles.inputWrapper}>
              <Lock className={styles.inputIcon} size={20} strokeWidth={1.5} />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
                placeholder="••••••••"
                disabled={isSubmitting}
              />
            </div>
            {errors.password && (
              <span className={styles.errorText}>{errors.password}</span>
            )}
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              'Вход...'
            ) : (
              <>
                <LogIn size={20} strokeWidth={1.5} />
                Войти
              </>
            )}
          </button>
        </form>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            {process.env.NODE_ENV === 'development' && (
              <span className={styles.devHint}>
                Development: используйте любой email/пароль
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

