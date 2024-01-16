import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'

export default function Input() {
  return (
    <View>
       <TextInput 
      placeholder = "Type something here"
      style = {styles.input}
      value = {text}
      onChangeText = {changeTextHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({  
    input:{
    borderBottomWidth: 2,
    borderBottomColor: 'purple',
    width:"50%",
  }})