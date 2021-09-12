/**
 *
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

/* Screens Stack */
import Coins from './Screens/Coins';
import CoinDetail from './Screens/CoinDetail';

const CoinsStack = () => {
  /* Initializations */
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Coins" component={Coins} />
      <Stack.Screen name="Coin Detail" component={CoinDetail} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
