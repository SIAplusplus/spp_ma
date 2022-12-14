import React, { useEffect } from 'react'
import {ScrollView, ImageBackground, Image,Button,StyleSheet, Text, View, TextInput } from 'react-native';

import { ApolloProvider,useQuery, ApolloClient, InMemoryCache, HttpLink, gql} from '@apollo/client'
import List from '../graphql/queries';


const client = new ApolloClient({
    uri: 'http://192.168.5.109:5000/graphql', 
    cache: new InMemoryCache()
})


export default function Busqueda () {

    return(
      
      <ApolloProvider client={client}>
        <ImageBackground
            style={styles.containerImg}
            source={require('./assets/cytimg.jpg')}           
      >
          <ScrollView>
            <Text style={styles.title}>
              Busqueda Asignaturas
            </Text>
            <List></List>
             
          </ScrollView>
        </ImageBackground>
      </ApolloProvider>
    )
  }

/*
const Busqueda = () =>{
    useEffect(()=>{
      fetch('http://localhost:5000/graphql',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ query:`
          query {
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
        console.log(res.data.id)
      })
    })

}
*/ 
//export default Busqueda


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
    },
    title: {
        fontSize: 60,
        color: '#fff',
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