import React from 'react'
import {Button,StyleSheet, Text, View, TextInput } from 'react-native';


import {ApolloProvider,useQuery, ApolloClient, InMemoryCache, HttpLink, gql} from '@apollo/client'
import List from '../graphql/queries';


const client = new ApolloClient({
  uri: 'http://192.168.5.109:5000/graphql', 
  //uri: 'https://siapp-authentication-ms-iyunovxiwq-uc.a.run.app',
  cache: new InMemoryCache()
})

export default function Main () {
  return(
    <ApolloProvider client={client}>
      <View>
        <Text>Hola MAIN</Text>
        <List></List>
      </View>
    </ApolloProvider>
  )
}

/*const Main = () =>{
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri:'http://192.168.5.109:5000/graphql'
        })
    })
    
    const query = gql`
    query {
      allProcedure{
          id
          student_id
          motive
          request_text
        }
    }
    `
    client.query({ query })
      .then(res => {
        console.log(res.data)
      })
}*/
