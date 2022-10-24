import React from 'react';
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar';
import {Button,StyleSheet, Text, View, TextInput } from 'react-native';


const ButtonMain = () => {
    return (
        <View style={
          styles.container
        }>
          <Text style ={styles.title}>SIA ++</Text>
          <Text style ={styles.subTitle}>Ingrese su usuario y contraseña</Text>
          <TextInput 
              placeholder='Usuario'
              style= {styles.textInput}
          ></TextInput>
          <TextInput 
              placeholder='Contraseña'
              style= {styles.textInput}
           ></TextInput>
           <Button
                title="Iniciar Sesión"
                marginTop 
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center',
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
  

export default ButtonMain