import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import React, { FC } from 'react';

type Props = {
  photos: string[];
};

const RestaurantPhoto: FC<Props> = ({ photos }) => {
  return (
    <FlatList
      horizontal
      data={photos}
      keyExtractor={(photo) => photo}
      renderItem={({ item }: { item: any }) => (
        <Image style={styles.restaurantPhotoStyle} source={{ uri: item }} />
      )}
    />
  );
};

export default RestaurantPhoto;

const styles = StyleSheet.create({
  restaurantPhotoStyle: {
    height: 300,
    width: 300,
    borderRadius: 6,
    marginVertical: 24,
    marginHorizontal: 12,
  },
});
