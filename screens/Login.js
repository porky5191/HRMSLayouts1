/**
 * written on 28-01-2022
 * This is the screen where all the codes regarding the login are written
 */

import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Dimensions } from 'react-native'

import { Colors } from '../res/index'
import { RoundedButton, RoundedInput, HighlightedText, LogInContainer } from '../components/index'
import { ScreenNames } from '../constants/index'




//********************************* FUNCTIONAL COMPONENT ****************************************
const Login = props => {
    //================================ ALL STATES ============================================
    const [screen, setScreen] = useState(Dimensions.get('window')) //state to keep track of screenSize

    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()
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
    const forgotPasswordHandler = () => {
        props.navigation.navigate(ScreenNames.FORGOT_PASSWORD)
    }


    // **************************************** RETURN **********************************************
    return (
        <LogInContainer style={styles.screen} headerText="Sign In now to begin an amazing journey">
            <RoundedInput ref={inputRef1}
                autofocus={true} placeholder='User Name' keyboardType='number-pad' blurOnSubmit={false}
                returnKeyType={"next"} style={styles.input}
                onSubmitEditing={() => inputRef2.current.focus()}
            />
            <RoundedInput ref={inputRef2} placeholder='Password' keyboardType='number-pad'
                blurOnSubmit={false} returnKeyType={"next"} style={styles.input}
                onSubmitEditing={() => inputRef3.current.focus()}
            />
            <RoundedInput ref={inputRef3} placeholder='last 4 digits of SSN'
                keyboardType='number-pad' blurOnSubmit={true} returnKeyType={"done"} style={styles.input}
            />
            <RoundedButton style={styles.button}>Sign In</RoundedButton>
            <HighlightedText style={styles.highlightedText} onPress={forgotPasswordHandler}>Forgot Password</HighlightedText>
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

export default Login;
