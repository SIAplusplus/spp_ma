import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";



import Boton from '../style/Boton';
import Home from './Home';



const Login = ({ navigation }) =>{
    return (
        <ImageBackground
            style={styles.containerImg}
            source={require('./assets/unal2.jpg')}
            
        >
            <View style={styles.container}>
                <Image source={require('./assets/logoun.png')}></Image>
                
                <Text style ={styles.subTitle}>Ingrese su usuario y contraseña</Text>
                <TextInput
                    placeholder='Usuario'
                    style={styles.textInput}
                >
                </TextInput>
                <TextInput
                    placeholder='Contraseña'
                    style={styles.textInput}
                >
                </TextInput>  
                <Boton
                    text= 'Iniciar Sesión'
                    onPress ={ () => (
                        navigation.navigate('Home')
                    )}
                />
            </View>
        </ImageBackground>
    );
} 
export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerImg:{
        flex:1,
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 60,
        color: '#000',
        fontWeight: 'bold',
    },
    subTitle:{
        fontSize: 20,
        color: '#fff',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        paddingStart:30,
        width: '80%',
        height:50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff'
    },

  });