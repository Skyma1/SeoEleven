/**
 * Форма создания/редактирования пользователя
 */

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Save, 
  Mail, 
  Lock, 
  User as UserIcon,
  Shield,
  Eye,
  EyeOff
} from 'lucide-react';
import apiService from '../../services/api';
import styles from '../../styles/UserEdit.module.css';

const UserEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isNew = !id;

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: 'viewer',
    active: true,
    permissions: {
      blog: [],
      cases: [],
      requests: [],
      users: [],
      services: [],
    },
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!isNew) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    try {
      const { data, error: apiError } = await apiService.adminGetUser(id);
      
      if (apiError) {
        throw new Error(apiError);
      }

      setFormData({
        email: data.email || '',
        password: '', // Не загружаем пароль
        name: data.name || '',
        role: data.role || 'viewer',
        active: data.active !== undefined ? data.active : true,
        permissions: data.permissions || {
          blog: [],
          cases: [],
          requests: [],
          users: [],
          services: [],
        },
      });
    } catch (err) {
      console.error('Error fetching user:', err);
      alert('Ошибка загрузки пользователя: ' + err.message);
      navigate('/admin/users');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handlePermissionChange = (resource, action) => {
    setFormData(prev => {
      const permissions = { ...prev.permissions };
      const resourcePerms = [...(permissions[resource] || [])];
      
      if (resourcePerms.includes(action)) {
        permissions[resource] = resourcePerms.filter(p => p !== action);
      } else {
        permissions[resource] = [...resourcePerms, action];
      }
      
      return { ...prev, permissions };
    });
  };

  const handleRoleChange = (role) => {
    setFormData(prev => {
      let permissions = { ...prev.permissions };
      
      // Автоматически устанавливаем права в зависимости от роли
      if (role === 'admin') {
        permissions = {
          blog: ['create', 'read', 'update', 'delete'],
          cases: ['create', 'read', 'update', 'delete'],
          requests: ['read', 'update'],
          users: ['create', 'read', 'update', 'delete'],
          services: ['read', 'update'],
        };
      } else if (role === 'editor') {
        permissions = {
          blog: ['create', 'read', 'update'],
          cases: ['create', 'read', 'update'],
          requests: ['read', 'update'],
          users: [],
          services: ['read', 'update'],
        };
      } else if (role === 'viewer') {
        permissions = {
          blog: ['read'],
          cases: ['read'],
          requests: ['read'],
          users: [],
          services: ['read'],
        };
      }
      
      return { ...prev, role, permissions };
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email обязателен';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Некорректный email';
    }

    if (isNew && !formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }

    if (!formData.name) {
      newErrors.name = 'Имя обязательно';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const userData = {
        email: formData.email,
        name: formData.name,
        role: formData.role,
        active: formData.active,
        permissions: formData.permissions,
      };

      if (formData.password) {
        userData.password = formData.password;
      }

      let result;
      if (isNew) {
        result = await apiService.adminCreateUser(userData);
      } else {
        result = await apiService.adminUpdateUser(id, userData);
      }

      if (result.error) {
        throw new Error(result.error);
      }

      navigate('/admin/users');
    } catch (err) {
      console.error('Error saving user:', err);
      alert('Ошибка сохранения пользователя: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resources = [
    { key: 'blog', label: 'Блог' },
    { key: 'cases', label: 'Кейсы' },
    { key: 'requests', label: 'Заявки' },
    { key: 'users', label: 'Пользователи' },
    { key: 'services', label: 'Услуги' },
  ];

  const actions = [
    { key: 'create', label: 'Создание' },
    { key: 'read', label: 'Просмотр' },
    { key: 'update', label: 'Редактирование' },
    { key: 'delete', label: 'Удаление' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          className={styles.backButton}
          onClick={() => navigate('/admin/users')}
        >
          <ArrowLeft size={20} strokeWidth={1.5} />
          Назад к списку
        </button>
        <h1 className={styles.title}>
          {isNew ? 'Создать пользователя' : 'Редактировать пользователя'}
        </h1>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Основная информация</h2>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              <Mail size={16} strokeWidth={1.5} />
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              placeholder="user@example.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className={styles.errorText}>{errors.email}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              <Lock size={16} strokeWidth={1.5} />
              Пароль {isNew ? '*' : '(оставьте пустым, чтобы не менять)'}
            </label>
            <div className={styles.passwordInput}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
                placeholder={isNew ? 'Минимум 6 символов' : 'Новый пароль'}
                disabled={isSubmitting}
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={18} strokeWidth={1.5} />
                ) : (
                  <Eye size={18} strokeWidth={1.5} />
                )}
              </button>
            </div>
            {errors.password && (
              <span className={styles.errorText}>{errors.password}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              <UserIcon size={16} strokeWidth={1.5} />
              Имя *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
              placeholder="Имя пользователя"
              disabled={isSubmitting}
            />
            {errors.name && (
              <span className={styles.errorText}>{errors.name}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="role" className={styles.label}>
              <Shield size={16} strokeWidth={1.5} />
              Роль *
            </label>
            <div className={styles.roleButtons}>
              {['admin', 'editor', 'viewer'].map(role => (
                <button
                  key={role}
                  type="button"
                  className={`${styles.roleButton} ${formData.role === role ? styles.roleButtonActive : ''}`}
                  onClick={() => handleRoleChange(role)}
                  disabled={isSubmitting}
                >
                  {role === 'admin' && 'Администратор'}
                  {role === 'editor' && 'Редактор'}
                  {role === 'viewer' && 'Просмотр'}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="active"
                checked={formData.active}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <span>Активен</span>
            </label>
          </div>
        </div>

        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Права доступа</h2>
          <p className={styles.sectionDescription}>
            Выберите права доступа для каждого ресурса. Роль "{formData.role}" уже установила базовые права.
          </p>

          <div className={styles.permissionsGrid}>
            {resources.map(resource => (
              <div key={resource.key} className={styles.permissionGroup}>
                <h3 className={styles.permissionTitle}>{resource.label}</h3>
                <div className={styles.permissionActions}>
                  {actions.map(action => {
                    const hasPermission = formData.permissions[resource.key]?.includes(action.key);
                    return (
                      <label key={action.key} className={styles.permissionCheckbox}>
                        <input
                          type="checkbox"
                          checked={hasPermission}
                          onChange={() => handlePermissionChange(resource.key, action.key)}
                          disabled={isSubmitting}
                        />
                        <span>{action.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formActions}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={() => navigate('/admin/users')}
            disabled={isSubmitting}
          >
            Отмена
          </button>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            <Save size={18} strokeWidth={1.5} />
            {isSubmitting ? 'Сохранение...' : 'Сохранить'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserEdit;

