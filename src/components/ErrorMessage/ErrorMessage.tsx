import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { AntDesign } from '@expo/vector-icons';

type Props = {
  message: string;
};

const ErrorMessage: FC<Props> = ({ message }) => {
  return (
    <View style={styles.errorMessage}>
      <AntDesign name='warning' size={30} color='white' />
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  errorMessage: {
    margin: 18,
    padding: 24,
    backgroundColor: '#A51D2D',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  errorText: {
    paddingHorizontal: 12,
    color: 'white',
    fontSize: 18,
  },
});
