import React from 'react'
import { StyleSheet, Text, View, Button, TabBarIOS } from 'react-native'


export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <Text>Login</Text>
            <Button onPress ={()=>navigation.navigate("MyDrawwer", {
                screen : 'App', params:{
                    screen:'AboutScreen'
                }
            }) }title = "Menuju halaman HomeScreen"/>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
