import React from 'react'
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native'
import LoginForm from './Tugas-13/LoginForm.js'
import AboutPage from './Tugas-13/AboutPage.js'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#67C5E5'
      barStyle='light-content'/>
      {/* <Text style={{
        color:'#fff', 
        fontSize:18}}>
        Welcome to my page</Text> */}
        <LoginForm/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#67C5E5',
    // alignItems:'center',
    // justifyContent:'center'
    
  }
})
