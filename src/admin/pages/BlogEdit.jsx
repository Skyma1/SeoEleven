import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import styles from '../../styles/BlogEdit.module.css';

const BlogEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === 'new';
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    category: '',
    tags: '',
    featured: false,
    readTime: 0,
    image: ''
  });
  
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isNew) {
      // TODO: Загрузка данных с API
      // fetchPost(id);
      setLoading(false);
    }
  }, [id, isNew]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(Boolean);
      const payload = {
        ...formData,
        tags: tagsArray,
        readTime: parseInt(formData.readTime) || 0
      };

      // TODO: Отправка на API
      // const url = isNew ? '/api/blog' : `/api/blog/${id}`;
      // const method = isNew ? 'POST' : 'PUT';
      // await fetch(url, { method, body: JSON.stringify(payload) });

      navigate('/admin/blog');
    } catch (error) {
      console.error('Ошибка сохранения:', error);
      alert('Ошибка при сохранении поста');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  return (
    <div className={styles.blogEdit}>
      <div className={styles.header}>
        <button onClick={() => navigate('/admin/blog')} className={styles.backBtn}>
          <ArrowLeft size={20} strokeWidth={1.5} />
          Назад к списку
        </button>
        <h1>{isNew ? 'Создать пост' : 'Редактировать пост'}</h1>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Заголовок *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="excerpt">Краткое описание *</label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              required
              rows="3"
              className={styles.textarea}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="content">Содержание (HTML) *</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows="15"
              className={styles.textareaLarge}
            />
          </div>
        </div>

        <div className={styles.formRowTwo}>
          <div className={styles.formGroup}>
            <label htmlFor="author">Автор *</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date">Дата публикации *</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRowTwo}>
          <div className={styles.formGroup}>
            <label htmlFor="category">Категория *</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="readTime">Время чтения (мин)</label>
            <input
              type="number"
              id="readTime"
              name="readTime"
              value={formData.readTime}
              onChange={handleChange}
              min="0"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="tags">Теги (через запятую)</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="SEO, Трафик, Оптимизация"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="image">URL изображения</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className={styles.checkbox}
              />
              Избранный пост
            </label>
          </div>
        </div>

        <div className={styles.formActions}>
          <button
            type="button"
            onClick={() => navigate('/admin/blog')}
            className={styles.cancelBtn}
          >
            Отмена
          </button>
          <button
            type="submit"
            disabled={saving}
            className={styles.saveBtn}
          >
            <Save size={18} strokeWidth={1.5} />
            {saving ? 'Сохранение...' : 'Сохранить'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogEdit;

