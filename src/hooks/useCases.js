/**
 * Хук для загрузки кейсов
 */

import { useState, useEffect, useCallback } from 'react';
import apiService from '../services/api';
import { casesData as localCasesData } from '../data/casesData';
import { handleApiError } from '../utils/errorHandlers';

/**
 * Хук для получения списка кейсов
 * @param {Object} options - опции фильтрации { category, featured }
 * @returns {Object} - { cases, loading, error, refresh }
 */
export const useCases = (options = {}) => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCases = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, error: apiError } = await apiService.getCases(options);

      if (apiError) {
        throw new Error(apiError);
      }

      // API может вернуть { cases: [...] } или массив напрямую
      const casesData = data.cases || data;
      setCases(casesData);
    } catch (err) {
      console.warn('Ошибка загрузки кейсов из API, используем локальные данные:', err);
      
      // Фоллбэк на локальные данные с фильтрацией
      let localCases = localCasesData;

      if (options.category) {
        localCases = localCases.filter(c => c.category === options.category);
      }

      if (options.featured !== undefined) {
        localCases = localCases.filter(c => c.featured === options.featured);
      }

      setCases(localCases);
      setError(null); // Не показываем ошибку если есть локальные данные
    } finally {
      setLoading(false);
    }
  }, [options.category, options.featured]);

  useEffect(() => {
    loadCases();
  }, [loadCases]);

  return {
    cases,
    loading,
    error,
    refresh: loadCases,
  };
};

/**
 * Хук для получения одного кейса по ID
 * @param {number|string} id - ID кейса
 * @returns {Object} - { caseItem, loading, error, refresh }
 */
export const useCase = (id) => {
  const [caseItem, setCaseItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCase = useCallback(async () => {
    if (!id) {
      setLoading(false);
      setError('ID кейса не указан');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data, error: apiError } = await apiService.getCase(id);

      if (apiError) {
        throw new Error(apiError);
      }

      setCaseItem(data);
    } catch (err) {
      console.warn('Ошибка загрузки кейса из API, используем локальные данные:', err);
      
      // Фоллбэк на локальные данные
      const localCase = localCasesData.find(c => c.id === parseInt(id));
      
      if (localCase) {
        setCaseItem(localCase);
        setError(null);
      } else {
        setError(handleApiError(err, 'Кейс не найден'));
      }
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadCase();
  }, [loadCase]);

  return {
    caseItem,
    loading,
    error,
    refresh: loadCase,
  };
};

export default useCases;

