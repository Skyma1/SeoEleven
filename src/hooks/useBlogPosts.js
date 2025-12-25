/**
 * Хук для загрузки списка постов блога
 */

import { useState, useEffect, useCallback } from 'react';
import apiService from '../services/api';
import { blogPosts as localBlogPosts, getPostsByCategory, getFeaturedPosts } from '../data/blogData';
import { handleApiError } from '../utils/errorHandlers';

/**
 * Хук для получения списка постов
 * @param {Object} options - опции фильтрации { category, featured, search }
 * @returns {Object} - { posts, loading, error, refresh }
 */
export const useBlogPosts = (options = {}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPosts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, error: apiError } = await apiService.getBlogPosts(options);

      if (apiError) {
        throw new Error(apiError);
      }

      // API может вернуть { posts: [...] } или массив напрямую
      const postsData = data.posts || data;
      setPosts(postsData);
    } catch (err) {
      console.warn('Ошибка загрузки постов из API, используем локальные данные:', err);
      
      // Фоллбэк на локальные данные с фильтрацией
      let localPosts = localBlogPosts;

      if (options.category) {
        localPosts = getPostsByCategory(options.category);
      } else if (options.featured) {
        localPosts = getFeaturedPosts();
      }

      if (options.search) {
        const searchLower = options.search.toLowerCase();
        localPosts = localPosts.filter(
          post =>
            post.title.toLowerCase().includes(searchLower) ||
            post.excerpt.toLowerCase().includes(searchLower) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
      }

      setPosts(localPosts);
      setError(null); // Не показываем ошибку если есть локальные данные
    } finally {
      setLoading(false);
    }
  }, [options.category, options.featured, options.search]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return {
    posts,
    loading,
    error,
    refresh: loadPosts,
  };
};

export default useBlogPosts;

