import React from 'react'
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native'
import LoginForm from './Tugas/Tugas-13/LoginForm.js'
import AboutPage from './Tugas/Tugas-13/AboutPage.js'
import RestApi from './Tugas/Tugas-14/RestApi'
import Login from './Tugas/Tugas-15/Pages/Login.js'
import Tugas15 from './Tugas/Tugas-15/index.js'

export default function App(){
  return(
    <Tugas15/>
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
