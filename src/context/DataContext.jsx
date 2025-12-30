/**
 * Context для глобального управления данными приложения
 * 
 * Предоставляет посты блога и кейсы всем компонентам,
 * загружает их из API с фоллбэком на локальные данные
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import apiService from '../services/api';
import { blogPosts as localBlogPosts } from '../data/blogData';
import { casesData as localCasesData } from '../data/casesData';

const DataContext = createContext();

/**
 * Хук для использования DataContext
 */
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }
  return context;
};

/**
 * Provider для данных приложения
 */
export const DataProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Загрузить все данные при монтировании
   */
  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Параллельная загрузка данных
      const [blogResponse, casesResponse] = await Promise.allSettled([
        apiService.getBlogPosts(),
        apiService.getCases(),
      ]);

      // Обработка постов блога
      if (blogResponse.status === 'fulfilled' && !blogResponse.value.error && blogResponse.value.data) {
        const posts = blogResponse.value.data.posts || blogResponse.value.data;
        setBlogPosts(posts);
      } else {
        // Используем локальные данные без предупреждения, если сервер недоступен
        const isServerError = blogResponse.status === 'rejected' || 
                              (blogResponse.status === 'fulfilled' && 
                               (blogResponse.value.error?.includes('Proxy error') || 
                                blogResponse.value.error?.includes('Failed to fetch')));
        if (!isServerError && process.env.NODE_ENV === 'development') {
          console.info('Используем локальные данные для блога (сервер недоступен)');
        }
        setBlogPosts(localBlogPosts);
      }

      // Обработка кейсов
      if (casesResponse.status === 'fulfilled' && !casesResponse.value.error && casesResponse.value.data) {
        const casesData = casesResponse.value.data.cases || casesResponse.value.data;
        setCases(casesData);
      } else {
        // Используем локальные данные без предупреждения, если сервер недоступен
        const isServerError = casesResponse.status === 'rejected' || 
                              (casesResponse.status === 'fulfilled' && 
                               (casesResponse.value.error?.includes('Proxy error') || 
                                casesResponse.value.error?.includes('Failed to fetch')));
        if (!isServerError && process.env.NODE_ENV === 'development') {
          console.info('Используем локальные данные для кейсов (сервер недоступен)');
        }
        setCases(localCasesData);
      }
    } catch (err) {
      console.error('Ошибка загрузки данных:', err);
      setError(err.message);
      
      // В случае критической ошибки используем локальные данные
      setBlogPosts(localBlogPosts);
      setCases(localCasesData);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Обновить только посты блога
   */
  const refreshBlogPosts = useCallback(async () => {
    try {
      const { data, error } = await apiService.getBlogPosts();
      if (!error) {
        const posts = data.posts || data;
        setBlogPosts(posts);
      }
    } catch (err) {
      console.error('Ошибка обновления постов:', err);
    }
  }, []);

  /**
   * Обновить только кейсы
   */
  const refreshCases = useCallback(async () => {
    try {
      const { data, error } = await apiService.getCases();
      if (!error) {
        const casesData = data.cases || data;
        setCases(casesData);
      }
    } catch (err) {
      console.error('Ошибка обновления кейсов:', err);
    }
  }, []);

  /**
   * Получить пост по ID
   */
  const getPostById = useCallback(
    (id) => {
      return blogPosts.find(post => post.id === parseInt(id));
    },
    [blogPosts]
  );

  /**
   * Получить кейс по ID
   */
  const getCaseById = useCallback(
    (id) => {
      return cases.find(caseItem => caseItem.id === parseInt(id));
    },
    [cases]
  );

  /**
   * Получить избранные посты
   */
  const getFeaturedPosts = useCallback(() => {
    return blogPosts.filter(post => post.featured);
  }, [blogPosts]);

  /**
   * Получить избранные кейсы
   */
  const getFeaturedCases = useCallback(() => {
    return cases.filter(caseItem => caseItem.featured);
  }, [cases]);

  // Загрузить данные при монтировании
  useEffect(() => {
    loadData();
  }, [loadData]);

  const value = {
    // Данные
    blogPosts,
    cases,
    
    // Состояния
    loading,
    error,
    
    // Методы для обновления
    refreshBlogPosts,
    refreshCases,
    reloadData: loadData,
    
    // Методы для получения
    getPostById,
    getCaseById,
    getFeaturedPosts,
    getFeaturedCases,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

