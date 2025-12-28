/**
 * Страница управления контентом всех страниц проекта
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Edit, 
  Search,
  Globe
} from 'lucide-react';
import apiService from '../../services/api';
import styles from '../../styles/AdminPages.module.css';

const AdminPages = () => {
  const navigate = useNavigate();
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data, error: apiError } = await apiService.adminGetPages();
      
      if (apiError) {
        throw new Error(apiError);
      }

      setPages(data.pages || []);
    } catch (err) {
      console.error('Error fetching pages:', err);
      setError(err.message || 'Не удалось загрузить страницы');
    } finally {
      setLoading(false);
    }
  };

  const filteredPages = pages.filter(page => {
    const search = searchTerm.toLowerCase();
    return (
      page.page_name.toLowerCase().includes(search) ||
      page.page_path.toLowerCase().includes(search) ||
      (page.meta_title && page.meta_title.toLowerCase().includes(search))
    );
  });

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <p>Загрузка страниц...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Globe size={24} strokeWidth={1.5} />
          <h1 className={styles.title}>Редактор страниц</h1>
        </div>
      </div>

      {error && (
        <div className={styles.errorAlert}>
          <span>{error}</span>
        </div>
      )}

      <div className={styles.searchBar}>
        <Search size={20} strokeWidth={1.5} />
        <input
          type="text"
          placeholder="Поиск по названию или пути страницы..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {filteredPages.length === 0 ? (
        <div className={styles.emptyState}>
          <FileText size={48} strokeWidth={1.5} />
          <p>Страницы не найдены</p>
        </div>
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Название</th>
                <th>Путь</th>
                <th>Meta Title</th>
                <th>Обновлено</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {filteredPages.map((page) => (
                <tr key={page.id}>
                  <td>
                    <div className={styles.pageName}>
                      <FileText size={16} strokeWidth={1.5} />
                      {page.page_name}
                    </div>
                  </td>
                  <td>
                    <code className={styles.pagePath}>{page.page_path}</code>
                  </td>
                  <td>
                    {page.meta_title ? (
                      <span className={styles.metaTitle}>{page.meta_title}</span>
                    ) : (
                      <span className={styles.emptyMeta}>—</span>
                    )}
                  </td>
                  <td>
                    <span className={styles.date}>{formatDate(page.updated_at)}</span>
                  </td>
                  <td>
                    <button
                      className={styles.editButton}
                      onClick={() => navigate(`/admin/pages/${encodeURIComponent(page.page_path.slice(1))}/edit`)}
                      title="Редактировать"
                    >
                      <Edit size={16} strokeWidth={1.5} />
                      Редактировать
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPages;

