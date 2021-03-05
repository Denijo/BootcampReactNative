import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProjectScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ProjectScreen</Text>
        </View>
    )
}

export default ProjectScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
