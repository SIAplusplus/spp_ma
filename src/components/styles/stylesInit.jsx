import React from 'react';
import {StyleSheet,TextInput } from 'react-native';


const styles = StyleSheet.create({
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

  const StyledTextInput = ({ style = {}, ...props}) => {
    const inputStyle ={
        ...style.textInput,
        ...style
    }

    return <textInput style={inputStyle} {...props} />
  }

  export default StyledTextInput