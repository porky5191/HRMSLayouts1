/**
 * Written on: 28-01-2022
 */
import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

import { Colors } from '../res/index'
import { LayoutConstants } from '../constants/index'

//********************************* FUNCTIONAL COMPONENT ****************************************
const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.style}}/>
}

//*********************************** STYLING *********************************************
const styles = StyleSheet.create({
    input: {
        borderColor: Colors.grey[100],
        borderWidth: 1,
        borderRadius: LayoutConstants.cornerRadious,
        marginVertical: 10,
        paddingLeft: 15,
        paddingRight: 15
    }
})

export default Input
