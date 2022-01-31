/**
 * written on 28-01-2022
 * This is the screen where all the codes regarding the login are written
 */

import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native'

import { Colors } from '../res/index'
import { RoundedButton, RoundedInput, HighlightedText, LogInContainer } from '../components/index'



//********************************* FUNCTIONAL COMPONENT ****************************************
const Login = props => {

    //================================ ALL STATES ============================================
    const [screen, setScreen] = useState(Dimensions.get('screen')) //state to keep track of screenSize

    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()
    console.log(inputRef1)
    


    //=========================== USER DEFINED FUNCTIONS =====================================
    //To update the buttons based on screen sizes everytime the orientation changes

    useEffect(() => {
        // inputRef1.current.focus()

        const updateDimension = () => setScreen(Dimensions.get('window'))

        //Listen when orientation has changed and do something
        Dimensions.addEventListener('change', updateDimension)
        return Dimensions.removeEventListener('change', updateDimension) //remove the old listener and set new listener
    }, [])



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
            <HighlightedText style={styles.highlightedText}>Forgot Password</HighlightedText>
        </LogInContainer>
    )
}

//*************************************** HEADER OPTIONS *********************************************
// This is optional property to style header
/*
Login.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'LogIn',
        headerStyle:{
            backgroundColor: Colors.primary.regular
        },
        headerTintColor: Colors.grey[800]
    }
}
*/


//********************************************** STYLING *********************************************
const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: Colors.primary.regular
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
