import { StyleSheet, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import React, { FC } from 'react';

export type Props = {
  term: string;
  onTermChange: (newTerm: string) => void;
  onTermSubmit: (term: string) => void;
};

const SearchBar: FC<Props> = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign name='search1' size={30} color='black' />
      <TextInput
        placeholder='Search'
        style={styles.inputStyle}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit(term)}
      />
    </View>
  );
};

export default SearchBar;

// TODO Extract
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 6,
    marginHorizontal: 12,
    marginVertical: 18,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  inputStyle: {
    flex: 1,
    fontSize: 24,
    paddingHorizontal: 6,
  },
});
