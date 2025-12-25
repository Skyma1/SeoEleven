import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Search, Calendar, User, Tag } from 'lucide-react';
import styles from '../../styles/AdminBlog.module.css';

const AdminBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // TODO: Загрузка данных с API
    // fetchPosts();
    setLoading(false);
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этот пост?')) {
      // TODO: Удаление через API
      // await deletePost(id);
      // fetchPosts();
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Mock данные для примера
  const mockPosts = [
    {
      id: 1,
      title: "Как увеличить органический трафик на 250% за 6 месяцев",
      excerpt: "Комплексный подход к SEO-продвижению...",
      author: "Команда Студии",
      date: "2024-01-15",
      category: "SEO",
      featured: true
    }
  ];

  const displayPosts = posts.length > 0 ? filteredPosts : mockPosts;

  return (
    <div className={styles.blogAdmin}>
      <div className={styles.header}>
        <div>
          <h1>Блог</h1>
          <p>Управление статьями блога</p>
        </div>
        <Link to="/admin/blog/new" className={styles.addBtn}>
          <Plus size={20} strokeWidth={1.5} />
          Создать пост
        </Link>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <Search size={20} strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Поиск по заголовку или описанию..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      {loading ? (
        <div className={styles.loading}>Загрузка...</div>
      ) : (
        <div className={styles.postsList}>
          {displayPosts.length === 0 ? (
            <div className={styles.empty}>
              <p>Нет постов. Создайте первый пост!</p>
            </div>
          ) : (
            displayPosts.map((post) => (
              <div key={post.id} className={styles.postCard}>
                <div className={styles.postContent}>
                  <div className={styles.postHeader}>
                    <h3>{post.title}</h3>
                    {post.featured && (
                      <span className={styles.featuredBadge}>Избранное</span>
                    )}
                  </div>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <div className={styles.metaItem}>
                      <User size={16} strokeWidth={1.5} />
                      <span>{post.author}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Calendar size={16} strokeWidth={1.5} />
                      <span>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Tag size={16} strokeWidth={1.5} />
                      <span>{post.category}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.postActions}>
                  <Link
                    to={`/admin/blog/${post.id}/edit`}
                    className={styles.editBtn}
                  >
                    <Edit size={18} strokeWidth={1.5} />
                    Редактировать
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
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

export default AdminBlog;

