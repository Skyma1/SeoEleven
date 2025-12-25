/**
 * Универсальный хук для работы с асинхронными операциями
 * 
 * Управляет состояниями loading, error, data для любой async функции
 */

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Хук для выполнения асинхронных операций
 * @param {Function} asyncFunction - асинхронная функция для выполнения
 * @param {boolean} immediate - выполнить сразу при монтировании
 * @returns {Object} - { execute, status, data, error, loading }
 */
export const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);

  // Функция для выполнения запроса
  const execute = useCallback(
    async (...params) => {
      setStatus('pending');
      setData(null);
      setError(null);

      try {
        const response = await asyncFunction(...params);
        
        // Проверяем, что компонент еще смонтирован
        if (!mountedRef.current) return response;

        if (response.error) {
          throw new Error(response.error);
        }

        setData(response.data);
        setStatus('success');
        return response;
      } catch (err) {
        if (!mountedRef.current) return { data: null, error: err.message };
        
        setError(err.message);
        setStatus('error');
        return { data: null, error: err.message };
      }
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  // Cleanup при размонтировании
  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return {
    execute,
    status,
    data,
    error,
    loading: status === 'pending',
    idle: status === 'idle',
    success: status === 'success',
  };
};

/**
 * Хук для ленивого выполнения асинхронной операции (только по вызову execute)
 * @param {Function} asyncFunction - асинхронная функция
 * @returns {Object} - { execute, status, data, error, loading }
 */
export const useAsyncCallback = (asyncFunction) => {
  return useAsync(asyncFunction, false);
};

/**
 * Хук для периодического выполнения асинхронной операции
 * @param {Function} asyncFunction - асинхронная функция
 * @param {number} interval - интервал в миллисекундах
 * @param {boolean} immediate - выполнить сразу
 * @returns {Object} - { execute, status, data, error, loading, start, stop }
 */
export const useAsyncPolling = (asyncFunction, interval = 5000, immediate = true) => {
  const [isPolling, setIsPolling] = useState(immediate);
  const asyncResult = useAsync(asyncFunction, immediate);
  const intervalRef = useRef(null);

  const start = useCallback(() => {
    setIsPolling(true);
  }, []);

  const stop = useCallback(() => {
    setIsPolling(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isPolling) {
      intervalRef.current = setInterval(() => {
        asyncResult.execute();
      }, interval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [isPolling, interval, asyncResult]);

  return {
    ...asyncResult,
    start,
    stop,
    isPolling,
  };
};

export default useAsync;

