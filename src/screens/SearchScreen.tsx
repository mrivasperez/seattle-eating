import React, { FC, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {};

const SearchScreen: FC<Props> = ({}) => {
  const [term, setTerm] = useState('');
  const [searchHandler, results, errorMessage] = useResults();

  const groupResultsByPrice = (price: string) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm: string) => setTerm(newTerm)}
        onTermSubmit={(term: string) => searchHandler(term)}
      />
      {/* <Text>{results.length}</Text> */}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <ScrollView>
        <ResultsList title='Under $10' results={groupResultsByPrice('$')} />
        <ResultsList title='$10 - $30' results={groupResultsByPrice('$$')} />
        <ResultsList title='$30 - $60' results={groupResultsByPrice('$$$')} />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
