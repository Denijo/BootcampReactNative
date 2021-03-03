import React, { useState } from 'react'
import { 
    Platform,
    CheckBox,
    StyleSheet, 
    Text,
    TextInput, 
    View, 
    Image, 
    TouchableOpacity,
    Button,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacityComponent,} from 'react-native'


export default function LoginForm (){
    const [isSelected, setSelection] = useState(false)
    const [text, setText] = useState('');
    return(
        <KeyboardAvoidingView
        behavior = {Platform.OS =="ios"? "padding":"height"}
        style={styles.container}>

        <ScrollView>   
            <View style={styles.container}>             
                <Image style={styles.imageLogo} 
                source={require('./images/LogoSanberCode.png')}/>
                
            </View>
            {/* <View>
                <Image style={styles.imageCoding} 
                source={require('./images/Gambar.png')}/>
            </View> */}
            <View style={styles.text_masuk}>
                <Text style={styles.formatTextLogin}>Masuk</Text>
            </View>
            
            <View style={styles.formInput}>
                <Text style={styles.formText}>Email</Text>
                <TextInput style={styles.input} placeholder="example@gmail.com"
                onChangeText={text => setText(text)}
                defaultValue={text}/>
            </View>
            <View style={styles.formInput}>
                <Text style={styles.formText}>Password</Text>
                <TextInput style={styles.input} secureTextEntry={true} >codinger123</TextInput>
            </View>
            <View style={styles.loginBtnView}>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.textBtnLogin}>Masuk</Text>
                </TouchableOpacity>
            <View style={styles.containerBottomText}>   
                <View style={styles.formatBottom}>
                    <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    />
                    <Text style={styles.bottomText}>Ingat saya ?</Text>
                    {/* <Text style={styles.bottomText}>Lupa Kata Sandi ?</Text> */}
                </View>
                <View>
                    <Text style={styles.bottomText}>Lupa Kata Sandi ?</Text>
                </View>
            </View> 
            </View>



        </ScrollView>

        </KeyboardAvoidingView>
        )
        
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:40,
        flex:1,
        backgroundColor:'#67C5E5'
                
    },
    imageLogo:{
        height :80,
        width:265,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20
        
    },
    text_masuk:{
        marginTop:10,
        color:'#fff',
        marginVertical:30

    },
    formatTextLogin:{
        color:'#263238',
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold'

    },
    formInput:{
        marginHorizontal:10,
        marginVertical:20,
        width:294,
        alignContent:'center'
    },
    formText:{
        color:'#241E1E',
        fontSize:18,
        marginBottom:5

    },
    input:{
        height:40,
        borderColor:'#003366',
        padding:10,
        borderRadius:15,
        backgroundColor:'#FFF',
        fontStyle:'italic',
        color:'#787474'
    },
    btnLogin:{
        backgroundColor:'#003A74',
        padding:10,
        borderRadius:25,
        marginTop:20,
        marginBottom:10,
        width:120,
        alignItems:'center',
        alignSelf:'center'
    },
    textBtnLogin:{
        color:'#FFF'
    },
    formatBottom:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    bottomText:{
        //  marginTop:20
    },
    checkbox:{
        // alignSelf: "center",
    },
    containerBottomText:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        justifyContent:'space-between',
        marginTop: 20
    }

})

