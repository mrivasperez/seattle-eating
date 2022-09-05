import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

const useResults = () => {
  const [results, setResults] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const searchHandler: Function = async (searchTerm: string) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Seattle',
        },
      });

      setResults(response.data.businesses);

      setErrorMessage('');

      return;
    } catch (error) {
      return setErrorMessage('Something went wrong...');
    }
  };

  useEffect(() => {
    searchHandler('');
  }, []);

  return [searchHandler, results, errorMessage] as const; // TODO: Remember this is how you export statically typed variables from react hooks in ts
};

export default useResults;
