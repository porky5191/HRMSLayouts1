/**
 * This file is to navigate around different screens
 */
import React from 'react';
//Navigation
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { Login, ForgotPassword } from '../screens/index'
import { Colors } from '../res/index';


//create two const to create the Navigator
const { Screen, Navigator } = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* This container is to navigate around different screen */}
      <Navigator>
        <Screen name='Sign In' component={Login} options={{
          headerStyle: {
            backgroundColor: Colors.primary.regular,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Screen name='forgotPassword' component={ForgotPassword} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
