import React, { useState, useEffect } from 'react';
import { Search, Phone, Mail, Calendar, Filter, Download, MessageCircle } from 'lucide-react';
import apiService from '../../services/api';
import styles from '../../styles/AdminRequests.module.css';

const AdminRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sourceFilter, setSourceFilter] = useState('all');
  const [error, setError] = useState(null);

  const fetchRequests = async () => {
    setLoading(true);
    setError(null);
    const params = {};
    if (statusFilter !== 'all') params.status = statusFilter;
    if (sourceFilter !== 'all') params.source = sourceFilter;
    if (searchQuery) params.search = searchQuery;
    
    const { data, error: err } = await apiService.adminGetRequests(params);
    if (err) {
      setError(err);
      setRequests([]);
    } else {
      setRequests(data?.requests || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRequests();
  }, [statusFilter, sourceFilter]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery !== undefined) {
        fetchRequests();
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleStatusChange = async (id, newStatus) => {
    const { error: err } = await apiService.adminUpdateRequestStatus(id, newStatus);
    if (err) {
      alert(`Ошибка при обновлении статуса: ${err}`);
    } else {
      fetchRequests();
    }
  };

  const handleExport = async () => {
    const { data, error: err } = await apiService.adminExportRequests();
    if (err) {
      alert(`Ошибка при экспорте: ${err}`);
      return;
    }
    const url = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    a.href = url;
    a.download = `requests-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status) => {
    const statuses = {
      new: { label: 'Новая', class: styles.statusNew },
      viewed: { label: 'Просмотрена', class: styles.statusViewed },
      processed: { label: 'Обработана', class: styles.statusProcessed },
      archived: { label: 'Архив', class: styles.statusArchived }
    };
    const statusInfo = statuses[status] || statuses.new;
    return <span className={`${styles.statusBadge} ${statusInfo.class}`}>{statusInfo.label}</span>;
  };

  return (
    <div className={styles.requestsAdmin}>
      <div className={styles.header}>
        <div>
          <h1>Заявки</h1>
          <p>Просмотр и управление заявками с сайта</p>
        </div>
        <button className={styles.exportBtn} onClick={handleExport}>
          <Download size={20} strokeWidth={1.5} />
          Экспорт
        </button>
      </div>

      {error && (
        <div className={styles.error}>
          Ошибка загрузки: {error}
        </div>
      )}

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <Search size={20} strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Поиск по имени, компании, услуге..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filter}>
          <Filter size={20} strokeWidth={1.5} />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="all">Все статусы</option>
            <option value="new">Новые</option>
            <option value="viewed">Просмотренные</option>
            <option value="processed">Обработанные</option>
            <option value="archived">Архив</option>
          </select>
        </div>
        <div className={styles.filter}>
          <Filter size={20} strokeWidth={1.5} />
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="all">Все заявки</option>
            <option value="calculator">Калькулятор</option>
            <option value="contact-page">Контакты (напишите нам)</option>
            <option value="service-page">Страницы услуг</option>
            <option value="header">Хедер (модалка)</option>
            <option value="mobile-menu">Мобильное меню (модалка)</option>
            <option value="contact-modal">Модальное окно (прочее)</option>
          </select>
        </div>
      </div>

      <div className={styles.requestsTable}>
        <div className={styles.tableHeader}>
          <div className={styles.tableRow}>
            <div className={styles.colDate}>Дата</div>
            <div className={styles.colName}>Клиент</div>
            <div className={styles.colContact}>Контакты</div>
            <div className={styles.colService}>Услуга</div>
            <div className={styles.colBudget}>Бюджет</div>
            <div className={styles.colStatus}>Статус</div>
          </div>
        </div>
        <div className={styles.tableBody}>
          {loading ? (
            <div className={styles.loading}>Загрузка...</div>
          ) : requests.length === 0 ? (
            <div className={styles.empty}>
              <p>Заявки не найдены</p>
            </div>
          ) : (
            requests.map((request) => (
              <div key={request.id} className={styles.requestRow}>
                <div className={styles.colDate}>
                  <Calendar size={16} strokeWidth={1.5} />
                  <span>{formatDate(request.createdAt)}</span>
                </div>
                <div className={styles.colName}>
                  <div className={styles.name}>{request.name}</div>
                  {request.company && (
                    <div className={styles.company}>{request.company}</div>
                  )}
                </div>
                <div className={styles.colContact}>
                  <div className={styles.contactItem}>
                    {request.contactType === 'phone' ? (
                      <Phone size={16} strokeWidth={1.5} />
                    ) : request.contactType === 'telegram' ? (
                      <MessageCircle size={16} strokeWidth={1.5} />
                    ) : request.contactType === 'max' ? (
                      <MessageCircle size={16} strokeWidth={1.5} />
                    ) : (
                      <Mail size={16} strokeWidth={1.5} />
                    )}
                    <span>{request.contact}</span>
                  </div>
                  {request.source && (
                    <div className={styles.sourceBadge}>
                      {request.source === 'calculator' ? 'Калькулятор' : 
                       request.source === 'contact-page' ? 'Контакты' :
                       request.source === 'service-page' ? 'Страница услуги' :
                       request.source === 'header' ? 'Хедер' :
                       request.source === 'mobile-menu' ? 'Мобильное меню' :
                       request.source === 'contact-modal' ? 'Модалка' : request.source}
                    </div>
                  )}
                </div>
                <div className={styles.colService}>
                  <div className={styles.service}>{request.service}</div>
                  {request.website && (
                    <div className={styles.website}>{request.website}</div>
                  )}
                </div>
                <div className={styles.colBudget}>
                  <div className={styles.budget}>{request.budget}</div>
                  {request.goal && (
                    <div className={styles.goal}>Цель: {request.goal}</div>
                  )}
                </div>
                <div className={styles.colStatus}>
                  <select
                    value={request.status || 'new'}
                    onChange={(e) => handleStatusChange(request.id, e.target.value)}
                    className={styles.statusSelect}
                  >
                    <option value="new">Новая</option>
                    <option value="viewed">Просмотрена</option>
                    <option value="processed">Обработана</option>
                    <option value="archived">Архив</option>
                  </select>
                </div>
                <div className={styles.colDetails}>
                  <button 
                    className={styles.detailsBtn}
                    onClick={() => {
                      alert(`Детали заявки #${request.id}\n\nКомментарий: ${request.comment || 'нет'}\nСроки: ${request.timeline || 'не указаны'}\nИсточник: ${request.source}`);
                    }}
                  >
                    Детали
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminRequests;

