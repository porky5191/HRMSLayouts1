/**
 * Written on: 28-01-2022
 */
 import React from 'react'
 import { StyleSheet, Text, TouchableOpacity } from 'react-native'
 
 import { Colors } from '../res/index'
 import { LayoutConstants } from '../constants/index'
 
 //********************************* FUNCTIONAL COMPONENT ****************************************
 const Input = props => {
    return (
        <TouchableOpacity>
            <Text style={{...styles.text, ...props.style}}>
                {props.children}
            </Text>
        </TouchableOpacity>
        
    )
 }
 
 //*********************************** STYLING *********************************************
 const styles = StyleSheet.create({
     text: {
         marginVertical: 5,
         color: Colors.primary.regular,
         fontSize: LayoutConstants.highlightedTextSize,
         fontStyle: 'normal'
     }
 })
 
 export default Input
 