/**
 *
 */

import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const Coins = ({navigation}) => {
  /* Initializations */

  /* Methods or Fns */
  const handlePress = () => {
    navigation.navigate('Coin Detail');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Coins Screen</Text>
      <Pressable style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>Go to detail</Text>
      </Pressable>
    </View>
  );
};

/* Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aee5d8',
  },
  titleText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: '#7BE0AD',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: '#000',
    textAlign: 'center',
  },
});

export default Coins;
