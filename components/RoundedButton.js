/**
 * Written on: 28-01-2022
 */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native'

import { Colors } from '../res/index'
import { LayoutConstants } from '../constants/index'



//********************************* FUNCTIONAL COMPONENT ****************************************
const MainButton = props => {
  return (
    <View style={{...props.style, ...styles.buttonContainer}}>
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    </View>
  )
}


//********************************************** STYLING *********************************************
const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: LayoutConstants.cornerRadious,
        backgroundColor: Colors.primary.regular,
        overflow: 'hidden', //hide any part of child that goes out of parent
        alignItems: 'center',
        justifyContent: 'center'
      },
    button: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      color: Colors.white.max,
      // fontFamily: fonts.OpenSansRegular,
      fontSize: 16,
  
    }
})

export default MainButton;
