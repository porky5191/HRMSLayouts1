/**
 * Written on: 31-01-2022
 * This file contains the basic container for the login Screen
 */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Text, SafeAreaView, ScrollView } from 'react-native'

import { Colors } from '../res/index'


//********************************* FUNCTIONAL COMPONENT ****************************************
const logInContainer = props => {
  //split the headerText into an array
  const headerTextArray = props.headerText.split(" ")
  
  //================================ ALL STATES ============================================
  //state for the orientation of the screen
  const [orientation, setOrientation] = useState(Dimensions.get('screen').width < 600 ? 'PORTRAIT': 'LANDSCAPE')
  //state for the dimension size
  const [dimen, setDimen] = useState(Dimensions.get('screen'))

  //re-render whenever there is some change in the UI
  useEffect(() => {
    Dimensions.addEventListener('change', ({window:{width,height}})=>{
      // set the orientation
      if (width<height) {
        setOrientation("PORTRAIT")
      } else {
        setOrientation("LANDSCAPE")
      }
      //set the dimension size whenever screen orientation changes
      setDimen(Dimensions.get('screen'))
    })
  }, [dimen])
  

  //=========================== USER DEFINED FUNCTIONS =====================================
  //to render the ScrollView list to show the header Text in downward list
  const renderListItem = (value) => (
    <View key={value}>
        <Text style={styles.headerTextLandscape}>{value}</Text>
    </View>
  )


// **************************************** RETURN **********************************************
  //render different UI based on screen orientation
  if (orientation === 'PORTRAIT'){
    return (
      <View style={{ ...styles.screen, ...props.style }}>
        <Text style={styles.headerTextPortrait}>
          {props.headerText}
        </Text>
        <View style={styles.mainContainerPortrait}>
          <ScrollView style={styles.scrollPortrait}>
            {props.children}
          </ScrollView>
          
        </View>
      </View>  
    )
  }else {
    return (
      <View style={{ ...styles.screen, ...props.style }}>
        <View style={styles.rootContainerLandscape}>
          <View style={styles.headerTextLanscapeContainer}>
            <ScrollView contentContainerStyle={styles.list}>
              {headerTextArray.map(guess => renderListItem(guess))}
            </ScrollView>
          </View> 
          <View style={styles.mainContainerLandscape}>
            <ScrollView style={styles.scrollLandscape}>
              {props.children}
            </ScrollView>
          </View>
        </View>
      </View>  
    )
  }
}


//********************************************** STYLING *********************************************
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mainContainerPortrait: {
    width: '100%',
    height: '100%',
    // marginTop: 90,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: Colors.white.max,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 80,
    shadowColor: Colors.black.max,
    shadowOffset: {width: 2, height: 0},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 150,
  },
  rootContainerLandscape: {
    flexDirection: 'row',
    backgroundColor: Colors.primary.regular,
  },
  mainContainerLandscape: {
    width: '80%',
    height: '100%',
    borderTopLeftRadius: 30,
    backgroundColor: Colors.white.max,
    paddingLeft: 30,
    paddingTop: 20,
    paddingRight: 30,
    shadowColor: Colors.black.max,
    shadowOffset: {width: 2, height: 0},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 150,
  },
  headerTextPortrait: {
    color: Colors.white.max,
    // fontFamily: fonts.OpenSansRegular,
    fontSize: 16,
    paddingLeft: 15,
    paddingVertical: 30
  },
  headerTextLanscapeContainer: {
    flex: 1,
    // alignItems: 'flex-end',
    paddingLeft: 50,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 15,
  },
  headerTextLandscape: {
    color: Colors.white.max,
    // fontFamily: fonts.OpenSansRegular,
    fontSize: 16,
    alignSelf: 'flex-end'
    
  },
  scrollPortrait: {
    marginBottom: 55
  }, 
  scrollLandscape: {

  }
})

export default logInContainer;
