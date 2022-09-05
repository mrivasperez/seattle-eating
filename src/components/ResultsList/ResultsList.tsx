import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC } from 'react';
import ResultsListItem from '../ResultsListItem/ResultsListItem';
import { withNavigation } from 'react-navigation';

type Props = {
  title: string;
  results: any[];
  navigation: any;
};

const ResultsList: FC<Props> = ({ title, results, navigation }) => {
  if (!results.length) return null;

  return (
    <View>
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.resultsCountStyle}>{results?.length} Results</Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RestaurantDetails', { id: item.id })
            }
          >
            <ResultsListItem resultsItem={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default withNavigation(ResultsList);

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginBottom: 12,
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  resultsCountStyle: {
    fontSize: 16,
  },
});
