import { useCallback, useEffect, useState } from 'react';

type useFetchProps = { url: string };

// The basic hook
export const useFetch = ({ url }: useFetchProps) => {
  const [data, setData] = useState<any>(null);
  const [status, setStatus] = useState<
    'idle' | 'fetching' | 'success' | 'fail'
  >('idle');

  // Basic fetch hook with some test delays
  const fetchData = useCallback(async () => {
    setStatus('fetching');
    console.log('useFetch', 'fetching data');
    try {
      const response = await fetch(url);
      const json = await response.json();

      // Artificial delay to simulate fetching data
      setTimeout(() => {
        console.log('useFetch', 'fetching data success');
        setStatus('success');
        setTimeout(() => {
          setData(json);
        }, 200);
      }, 100);
    } catch (error) {
      // Artificial delay to simulate fetching data
      setStatus('fail');
    }
  }, [url, setStatus]);

  // INITIALOR
  useEffect(() => {
    setTimeout(() => {
      console.log('useFetch', 'mounted');
      fetchData();
    }, 100);
  }, [fetchData]);

  return {
    data: data,
    status: status
  };
};
