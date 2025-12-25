/**
 * Хук для загрузки одного поста блога
 */

import { useState, useEffect } from 'react';
import apiService from '../services/api';
import { getPostById } from '../data/blogData';
import { handleApiError } from '../utils/errorHandlers';

/**
 * Хук для получения поста по ID
 * @param {number|string} id - ID поста
 * @returns {Object} - { post, loading, error, refresh }
 */
export const useBlogPost = (id) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPost = async () => {
    if (!id) {
      setLoading(false);
      setError('ID поста не указан');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data, error: apiError } = await apiService.getBlogPost(id);

      if (apiError) {
        throw new Error(apiError);
      }

      setPost(data);
    } catch (err) {
      console.warn('Ошибка загрузки поста из API, используем локальные данные:', err);
      
      // Фоллбэк на локальные данные
      const localPost = getPostById(id);
      
      if (localPost) {
        setPost(localPost);
        setError(null);
      } else {
        setError(handleApiError(err, 'Пост не найден'));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    post,
    loading,
    error,
    refresh: loadPost,
  };
};

export default useBlogPost;

