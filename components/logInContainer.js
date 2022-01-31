import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native'

import { Colors } from '../res/index'

const logInContainer = props => {
  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <Text style={styles.headerText}>
        {props.headerText}
      </Text>
      <View style={styles.mainContainer}>
        {props.children}
      </View>
    </View>
  )
}


//********************************************** STYLING *********************************************
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    // marginTop: 90,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: Colors.white.max,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 80
  },
  headerText: {
    color: Colors.white.max,
    // fontFamily: fonts.OpenSansRegular,
    fontSize: 16,
    paddingLeft: 15,
    paddingVertical: 30
  }
})

export default logInContainer;
