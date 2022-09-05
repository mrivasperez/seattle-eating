import { StyleSheet, Image, Text, View, ImageBackground } from 'react-native';
import React, { FC } from 'react';

type Props = {
  resultsItem: {
    id: string;
    name: string;
    image_url: string;
    url: string;
    rating: number;
    review_count: number;
    location: {
      city: string;
      country: string;
      address1: string;
      address2: string;
      address3: string;
      state: string;
      zip_code: string;
    };
  };
};

const ResultsListItem: FC<Props> = ({ resultsItem }) => {
  return (
    <View style={styles.resultItemStyle}>
      <Image
        source={{ uri: resultsItem.image_url }}
        style={styles.resultItemImageStyle}
      />
      <Text style={styles.resultItemNameStyle}>{resultsItem.name}</Text>
      <Text>
        {resultsItem.rating} Stars from {resultsItem.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultsListItem;

const styles = StyleSheet.create({
  resultItemStyle: {
    marginHorizontal: 12,
    marginBottom: 30,
  },
  resultItemImageStyle: {
    height: 150,
    width: 250,
    borderRadius: 12,
    marginBottom: 6
  },
  resultItemNameStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginVertical: 6,
  },
});
