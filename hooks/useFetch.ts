/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios, { Method } from 'axios';

/**
 * https://github.com/ali-master/react-typescript-hooks-sample
 */
const useFetch = (url: string, method: Method, body: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios({
        url: url,
        method: method,
        data: body,
      });
      const data = response?.data;
      setData(data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const runAxios = async () => {
    await fetchData();
    return [loading, error, data];
  };

  return { runAxios, loading, error, data };
};

export { useFetch };
