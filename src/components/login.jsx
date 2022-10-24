import React from 'react';
import { Formik, useField} from 'formik';
import {Button,StyleSheet, Text, View, TextInput } from 'react-native';

import { loginValidationSchema } from '../ValidationSchemas/login.js';

const initialValues ={
    email: '',
    password: '',
}

const FormikInputValue = ({ name, ...props}) => {
    const [field,meta,helpers] = useField(name)
    return (
        <TextInput
            value={field.value}
            onChangeText={value => helpers.setValue(value)}
            {...props}
        />
    )
}

const validate =values =>{
    const errors={}

    if (!values.email) {
        errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    console.log(errors)

    return errors
}


export default function Main() {
    return (
        <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
            {({ handleSubmit }) => {
                return (
                    <View style={styles.container}>
                        <Text style ={styles.title}>SIA ++</Text>
                        <Text style ={styles.subTitle}>Ingrese su usuario y contraseña</Text>
                        <FormikInputValue
                            name='email'
                            placeholder='Usuario'
                            style= {styles.textInput}
                        />
                        <FormikInputValue
                            name='password'
                            placeholder='Contraseña'
                            style= {styles.textInput}
                            secureTextEntry
                        />
                        <Button onPress={handleSubmit} title="Iniciar Sesión"></Button>
                    </View>
                )
            }}
        </Formik>
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

  /*
  useEffect(() => {
    fetch('http://192.168.5.109:5000/graphql', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query:`
        query{
          allProcedure{
            id
            student_id
            motive
            request_text
          }
        }
      `})
    })
    .then(res => res.json())
    .then(res => {
      console.log(res.data)
    })
  })
  */ 