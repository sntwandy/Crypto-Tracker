/**
 *
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

/* Screens Stack */
import CoinsScreen from './CoinsScreen';

const CoinsStack = () => {
  /* Initializations */
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Coins" component={CoinsScreen} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
