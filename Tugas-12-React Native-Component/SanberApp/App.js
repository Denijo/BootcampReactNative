import React from 'react'
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native'
import LoginForm from './Tugas-13/LoginForm.js'
import AboutPage from './Tugas-13/AboutPage.js'
import RestApi from './Tugas-14/RestApi'


export default function App(){
  return(
    <RestApi/>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#67C5E5',
    alignItems:'center',
    justifyContent:'center'
    
  }
})
