import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Search, Calendar, Tag } from 'lucide-react';
import apiService from '../../services/api';
import styles from '../../styles/AdminCases.module.css';

const AdminCases = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  const fetchCases = async () => {
    setLoading(true);
    setError(null);
    const { data, error: err } = await apiService.adminGetCases();
    if (err) {
      setError(err);
      setCases([]);
    } else {
      setCases(data?.cases || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCases();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этот кейс?')) {
      const { error: err } = await apiService.adminDeleteCase(id);
      if (err) {
        alert(`Ошибка при удалении: ${err}`);
      } else {
        fetchCases();
      }
    }
  };

  const filteredCases = cases.filter(caseItem =>
    caseItem.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    caseItem.client?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.casesAdmin}>
      <div className={styles.header}>
        <div>
          <h1>Кейсы</h1>
          <p>Управление кейсами компании</p>
        </div>
        <Link to="/admin/cases/new" className={styles.addBtn}>
          <Plus size={20} strokeWidth={1.5} />
          Создать кейс
        </Link>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <Search size={20} strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Поиск по названию или клиенту..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      {error && (
        <div className={styles.error}>
          Ошибка загрузки: {error}
        </div>
      )}

      {loading ? (
        <div className={styles.loading}>Загрузка...</div>
      ) : (
        <div className={styles.casesList}>
          {filteredCases.length === 0 ? (
            <div className={styles.empty}>
              <p>Нет кейсов. Создайте первый кейс!</p>
            </div>
          ) : (
            filteredCases.map((caseItem) => (
              <div key={caseItem.id} className={styles.caseCard}>
                <div className={styles.caseContent}>
                  <div className={styles.caseHeader}>
                    <h3>{caseItem.title}</h3>
                    {caseItem.featured && (
                      <span className={styles.featuredBadge}>Избранное</span>
                    )}
                  </div>
                  <div className={styles.caseClient}>
                    <strong>Клиент:</strong> {caseItem.client}
                  </div>
                  <div className={styles.caseMeta}>
                    <div className={styles.metaItem}>
                      <Tag size={16} strokeWidth={1.5} />
                      <span>{caseItem.category}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Calendar size={16} strokeWidth={1.5} />
                      <span>{caseItem.period}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.caseActions}>
                  <Link
                    to={`/admin/cases/${caseItem.id}/edit`}
                    className={styles.editBtn}
                  >
                    <Edit size={18} strokeWidth={1.5} />
                    Редактировать
                  </Link>
                  <button
                    onClick={() => handleDelete(caseItem.id)}
                    className={styles.deleteBtn}
                  >
                    <Trash2 size={18} strokeWidth={1.5} />
                    Удалить
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default AdminCases;

