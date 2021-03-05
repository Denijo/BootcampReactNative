import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer} from '@react-navigation/native'

import HomeScreen from '../Pages/Home.js'
import AboutScreen from '../Pages/AboutScreen'
import AddScreen from '../Pages/AddScreen'
import LoginScreen from '../Pages/Login'
import ProjectScreen from '../Pages/ProjectScreen'
import Setting from '../Pages/Setting'
import SkillProject from '../Pages/SkillProject'

const Tab = createBottomTabNavigator()
const Drawwer = createDrawerNavigator()
const Stack = createStackNavigator()

export default function Router (){ 
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name ="LoginScreen" component={LoginScreen}/>
                <Stack.Screen  name ="HomeScreen" component={HomeScreen}/>
                <Stack.Screen  name ="MainApp" component={MainApp}/>
                <Stack.Screen  name ="MyDrawwer" component={MyDrawwer}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const MainApp = ()=>(
        <Tab.Navigator>
            <Tab.Screen name ="AboutScreen" component={AboutScreen}/>
            <Tab.Screen name ="AddScreen" component={AddScreen}/>
            <Tab.Screen name ="SkillProject" component={SkillProject}/> 
        </Tab.Navigator>
)
const MyDrawwer =()=>(
    <Drawwer.Navigator>
        <Drawwer.Screen name="App" component={MainApp}/>
        <Drawwer.Screen name="AboutScreen" component={AboutScreen}/>
        
    </Drawwer.Navigator>

)

const styles = StyleSheet.create({})
