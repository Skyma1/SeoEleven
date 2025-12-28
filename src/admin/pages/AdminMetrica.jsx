import React, { useState, useEffect } from 'react';
import { Link2, Check, X, RefreshCw, BarChart3 } from 'lucide-react';
import apiService from '../../services/api';
import styles from '../../styles/AdminMetrica.module.css';

const AdminMetrica = () => {
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    token: '',
    counterId: '',
  });
  const [stats, setStats] = useState(null);
  const [dateRange, setDateRange] = useState({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    to: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = async () => {
    setLoading(true);
    const { data, error: err } = await apiService.adminGetMetricaStatus();
    if (err) {
      setError(err);
    } else {
      setConnected(data?.connected || false);
      if (data?.connected) {
        setFormData({
          token: '••••••••',
          counterId: data.counterId || '',
        });
      }
    }
    setLoading(false);
  };

  const handleConnect = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const { data, error: err } = await apiService.adminConnectMetrica(formData);
    if (err) {
      setError(err);
    } else {
      setConnected(true);
      setFormData({ ...formData, token: '••••••••' });
    }
    setSaving(false);
  };

  const handleDisconnect = async () => {
    if (!window.confirm('Вы уверены, что хотите отключить Яндекс.Метрику?')) {
      return;
    }
    const { error: err } = await apiService.adminDisconnectMetrica();
    if (err) {
      setError(err);
    } else {
      setConnected(false);
      setFormData({ token: '', counterId: '' });
      setStats(null);
    }
  };

  const fetchStats = async () => {
    setLoading(true);
    const { data, error: err } = await apiService.adminGetMetricaStats(
      dateRange.from,
      dateRange.to
    );
    if (err) {
      setError(err);
    } else {
      setStats(data?.data);
    }
    setLoading(false);
  };

  return (
    <div className={styles.metricaAdmin}>
      <div className={styles.header}>
        <div>
          <h1>Яндекс.Метрика</h1>
          <p>Подключение и просмотр статистики</p>
        </div>
        {connected && (
          <button onClick={fetchStats} className={styles.refreshBtn} disabled={loading}>
            <RefreshCw size={20} strokeWidth={1.5} />
            Обновить данные
          </button>
        )}
      </div>

      {error && (
        <div className={styles.error}>
          Ошибка: {error}
        </div>
      )}

      {loading && !connected ? (
        <div className={styles.loading}>Загрузка...</div>
      ) : !connected ? (
        <div className={styles.connectCard}>
          <div className={styles.connectIcon}>
            <Link2 size={32} strokeWidth={1.5} />
          </div>
          <h2>Подключить Яндекс.Метрику</h2>
          <p className={styles.connectDescription}>
            Для подключения вам понадобится OAuth токен и ID счётчика из Яндекс.Метрики.
          </p>

          <form onSubmit={handleConnect} className={styles.connectForm}>
            <div className={styles.formGroup}>
              <label htmlFor="token">OAuth токен *</label>
              <input
                type="text"
                id="token"
                value={formData.token}
                onChange={(e) => setFormData({ ...formData, token: e.target.value })}
                placeholder="Вставьте OAuth токен"
                required
                className={styles.input}
              />
              <small>
                Получить токен можно в{' '}
                <a
                  href="https://oauth.yandex.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  настройках OAuth приложения
                </a>
              </small>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="counterId">ID счётчика *</label>
              <input
                type="text"
                id="counterId"
                value={formData.counterId}
                onChange={(e) => setFormData({ ...formData, counterId: e.target.value })}
                placeholder="Например: 12345678"
                required
                className={styles.input}
              />
              <small>ID счётчика можно найти в настройках Яндекс.Метрики</small>
            </div>

            <button type="submit" className={styles.connectBtn} disabled={saving}>
              {saving ? 'Подключение...' : 'Подключить'}
            </button>
          </form>
        </div>
      ) : (
        <div className={styles.connectedCard}>
          <div className={styles.connectedHeader}>
            <div className={styles.connectedStatus}>
              <Check size={20} strokeWidth={2} />
              <span>Подключено</span>
            </div>
            <button onClick={handleDisconnect} className={styles.disconnectBtn}>
              <X size={18} strokeWidth={1.5} />
              Отключить
            </button>
          </div>

          <div className={styles.counterInfo}>
            <strong>ID счётчика:</strong> {formData.counterId}
          </div>

          <div className={styles.dateRange}>
            <label>Период:</label>
            <input
              type="date"
              value={dateRange.from}
              onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
              className={styles.dateInput}
            />
            <span>-</span>
            <input
              type="date"
              value={dateRange.to}
              onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
              className={styles.dateInput}
            />
            <button onClick={fetchStats} className={styles.loadBtn} disabled={loading}>
              Загрузить
            </button>
          </div>

          {stats && (
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <BarChart3 size={24} strokeWidth={1.5} />
                </div>
                <div className={styles.statValue}>{stats.sessions || 0}</div>
                <div className={styles.statLabel}>Сессии</div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <BarChart3 size={24} strokeWidth={1.5} />
                </div>
                <div className={styles.statValue}>{stats.users || 0}</div>
                <div className={styles.statLabel}>Пользователи</div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <BarChart3 size={24} strokeWidth={1.5} />
                </div>
                <div className={styles.statValue}>{stats.pageviews || 0}</div>
                <div className={styles.statLabel}>Просмотры</div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <BarChart3 size={24} strokeWidth={1.5} />
                </div>
                <div className={styles.statValue}>
                  {stats.bounceRate ? `${stats.bounceRate.toFixed(1)}%` : '0%'}
                </div>
                <div className={styles.statLabel}>Показатель отказов</div>
              </div>
            </div>
          )}

          {loading && stats && (
            <div className={styles.loading}>Загрузка статистики...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminMetrica;

