/**
 * Страница управления пользователями
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Plus, 
  Edit, 
  Trash2, 
  Shield,
  Eye,
  EyeOff,
  Search
} from 'lucide-react';
import apiService from '../../services/api';
import styles from '../../styles/AdminUsers.module.css';

const AdminUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data, error: apiError } = await apiService.adminGetUsers();
      
      if (apiError) {
        throw new Error(apiError);
      }

      setUsers(data.users || []);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError(err.message || 'Не удалось загрузить пользователей');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { error: apiError } = await apiService.adminDeleteUser(id);
      
      if (apiError) {
        throw new Error(apiError);
      }

      setUsers(users.filter(user => user.id !== id));
      setShowDeleteConfirm(null);
    } catch (err) {
      console.error('Error deleting user:', err);
      alert('Ошибка при удалении пользователя: ' + err.message);
    }
  };

  const getRoleLabel = (role) => {
    const labels = {
      admin: 'Администратор',
      editor: 'Редактор',
      viewer: 'Просмотр',
    };
    return labels[role] || role;
  };

  const getRoleColor = (role) => {
    const colors = {
      admin: '#ef4444',
      editor: '#3b82f6',
      viewer: '#6b7280',
    };
    return colors[role] || '#6b7280';
  };

  const filteredUsers = users.filter(user => {
    const search = searchTerm.toLowerCase();
    return (
      user.email.toLowerCase().includes(search) ||
      user.name.toLowerCase().includes(search) ||
      user.role.toLowerCase().includes(search)
    );
  });

  if (loading) {
    return (
      <div className={styles.container}>
        <p>Загрузка пользователей...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Shield size={24} strokeWidth={1.5} />
          <h1 className={styles.title}>Пользователи</h1>
        </div>
        <button
          className={styles.createButton}
          onClick={() => navigate('/admin/users/new')}
        >
          <Plus size={20} strokeWidth={1.5} />
          Создать пользователя
        </button>
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
          placeholder="Поиск по email, имени или роли..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {filteredUsers.length === 0 ? (
        <div className={styles.emptyState}>
          <Users size={48} strokeWidth={1.5} />
          <p>Пользователи не найдены</p>
          <button
            className={styles.createButton}
            onClick={() => navigate('/admin/users/new')}
          >
            <Plus size={20} strokeWidth={1.5} />
            Создать первого пользователя
          </button>
        </div>
      ) : (
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Имя</th>
                <th>Роль</th>
                <th>Статус</th>
                <th>Создан</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>
                    <span
                      className={styles.roleBadge}
                      style={{ backgroundColor: getRoleColor(user.role) }}
                    >
                      {getRoleLabel(user.role)}
                    </span>
                  </td>
                  <td>
                    {user.active ? (
                      <span className={styles.statusActive}>
                        <Eye size={16} strokeWidth={1.5} />
                        Активен
                      </span>
                    ) : (
                      <span className={styles.statusInactive}>
                        <EyeOff size={16} strokeWidth={1.5} />
                        Неактивен
                      </span>
                    )}
                  </td>
                  <td>
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString('ru-RU')
                      : '-'}
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <button
                        className={styles.editButton}
                        onClick={() => navigate(`/admin/users/${user.id}/edit`)}
                        title="Редактировать"
                      >
                        <Edit size={16} strokeWidth={1.5} />
                      </button>
                      <button
                        className={styles.deleteButton}
                        onClick={() => setShowDeleteConfirm(user.id)}
                        title="Удалить"
                      >
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showDeleteConfirm && (
        <div className={styles.modalOverlay} onClick={() => setShowDeleteConfirm(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>Подтверждение удаления</h3>
            <p>Вы уверены, что хотите удалить этого пользователя? Это действие нельзя отменить.</p>
            <div className={styles.modalActions}>
              <button
                className={styles.cancelButton}
                onClick={() => setShowDeleteConfirm(null)}
              >
                Отмена
              </button>
              <button
                className={styles.confirmDeleteButton}
                onClick={() => handleDelete(showDeleteConfirm)}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;

