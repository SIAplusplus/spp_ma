import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Boton from '../style/Boton';

const Home=({ navigation }) => {
    return (
        <ImageBackground
            style={styles.containerImg}
            source={require('./assets/unal.jpg')}           
        >
            <View style={styles.container}>   
            <Image source={require('./assets/logoun.png')}></Image>      
                <Boton
                    text= 'Busqueda de asignaturas'
                    onPress ={ () => (
                        navigation.navigate('Busqueda')
                    )}
                />      
                <Boton
                    text= 'Cerrar sesión'
                    onPress ={ () => (
                        navigation.navigate('Login')
                    )}
                />   
            </View>
        </ImageBackground>
    );
}

export default Home
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#gray',
        alignItems: 'center',
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
        color: '#000',
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