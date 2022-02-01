/**
 * written on 28-01-2022
 * This is the screen where all the codes regarding the login are written
 */

 import React, { useState, useEffect, useRef } from 'react';
 import { StyleSheet, Dimensions, TextInput } from 'react-native'
 
 import { Colors } from '../res/index'
 import { RoundedButton, RoundedInput, LogInContainer } from '../components/index'
 
 
 
 
 //********************************* FUNCTIONAL COMPONENT ****************************************
 const ForgotPassword = props => {
     //================================ ALL STATES ============================================
     const [screen, setScreen] = useState(Dimensions.get('window')) //state to keep track of screenSize
 
     const inputRef1 = useRef()
     // console.log(inputRef1)

     //To update the buttons based on screen sizes everytime the orientation changes
     useEffect(() => {
      // inputRef1.current.focus()
      Dimensions.addEventListener('change', ()=>{ setScreen(Dimensions.get('window')) }) 
    }, [])
 
     //================================ USER DEFINED VARIABLE ============================================
     //passing screen variable to screen
     const styles = getStyles(screen)
 
 
     //=========================== USER DEFINED FUNCTIONS =====================================
     const resetBtnHandler = () => {
      props.navigation.goBack()
     }
 
 
     // **************************************** RETURN **********************************************
     return (
         <LogInContainer style={styles.screen} headerText="Reset your password to continue">
             <RoundedInput ref={inputRef1} placeholder='enter your registered email'
                 keyboardType='email-address' blurOnSubmit={true} returnKeyType={"done"} style={styles.input}
             />
             <RoundedButton style={styles.button} onPress={resetBtnHandler}>Reset Password</RoundedButton>
         </LogInContainer>
     )
 }
 
 
 //********************************************** STYLING *********************************************
 const getStyles = screen => StyleSheet.create({
     screen: {
         width: '100%',
         height: '100%',
         flex: 1,
         backgroundColor: Colors.primary.regular
     },
     button: {
         width: '100%',
         height: 50,
         marginTop: 20,
         marginBottom: 15
     },
     input: {
         width: '100%',
         height: 50
     },
     highlightedText: {
         alignSelf: 'center'
     },
     text: {
         color: Colors.white.max,
         // fontFamily: fonts.OpenSansRegular,
         fontSize: 16,
         paddingLeft: 15,
         paddingVertical: 30
     }
 })
 
 export default ForgotPassword;
 
