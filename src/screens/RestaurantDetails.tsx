import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import yelp from '../api/yelp';
import RestaurantPhotos from '../components/RestaurantPhotos';

type Types = {
  navigation: any;
};

const RestaurantDetails: FC<Types> = ({ navigation }) => {
  const [details, setDetails] = useState<any>(null);

  console.log(details?.photos);

  const id = navigation.getParam('id');

  const getRestaurantDetails = async (id: string) => {
    const response = await yelp.get(`/${id}`);
    setDetails(response.data);
  };

  useEffect(() => {
    getRestaurantDetails(id);
  }, []);

  if (!details) return <Text>Loading...</Text>;

  return (
    <View>
      <RestaurantPhotos photos={details.photos} />

      <Text style={styles.titleStyle}>{details.name}</Text>
      <Text style={styles.reviewStyle}>
        Rated {details.rating} stars by {details.review_count} people.
      </Text>
      {/* Display if open */}
      <Text style={styles.statusStyle}>
        Currently {details.is_closed ? 'Closed' : 'Open'}
      </Text>
      {/* Address */}
      <Text style={styles.address}>{details.location.address1}</Text>
      {details.location.address2 && <Text>{details.location.address2}</Text>}
      <Text style={styles.address}>{details.location.city}</Text>
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    marginHorizontal: 18,
    fontWeight: 'bold',
  },
  reviewStyle: {
    marginHorizontal: 18,
    fontSize: 18,
    marginBottom: 24,
  },
  statusStyle: {
    marginHorizontal: 18,
    fontWeight: 'bold',
  },
  address: {
    marginHorizontal: 18,
    fontSize: 18,
  },
});
