import { useState, useEffect } from 'react';

import { AxiosRequestConfig } from 'axios';
import { apiClient } from '../services/api-client';

interface Response<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);

      apiClient
        .get<Response<T>>(endpoint, { ...requestConfig })
        .then((response) => setData(response.data.results))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, isLoading };
};

export default useData;
