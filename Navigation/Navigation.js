/**
 * This file is to navigate around different screens
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack' //Navigation
import { NavigationContainer } from '@react-navigation/native' //Navigation

import { Login, ForgotPassword } from '../screens/index'
import { Colors } from '../res/index';
import { ScreenNames } from '../constants/index'


//create two const to create the Navigator
const { Screen, Navigator } = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* This container is to navigate around different screen */}
      <Navigator>
        <Screen name={ScreenNames.LOGIN} component={Login} options={{
          headerStyle: {
            backgroundColor: Colors.primary.regular,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Screen name={ScreenNames.FORGOT_PASSWORD} component={ForgotPassword} options={{
          headerStyle: {
            backgroundColor: Colors.primary.regular,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
