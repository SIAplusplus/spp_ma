import { gql, useQuery } from '@apollo/client'
import {FlatList, StyleSheet, Text, View } from 'react-native';

const GET_PROCEDURE = gql`
  query {
    allProcedure{
        id
        student_id
        motive
        request_text
      }
  }
`;

const GET_Buscador = gql`
  query {
    allAsignaturas{
      Id_asignatura
      Nombre
      Tipologia
      Creditos
      Programas
    }
  }
`;

const VALIDATION = gql`
  mutation{
    SignIn(UserDataEntry:{username: "enriquito", password: "enriquito2001"}) {
      message
      token
      user {
        _id
        username
        type
        name
        surname
        doc
        career
        password
        createdAt
        updatedAt
      }
    }
  }
`


export default function List(){
  const {loading, error, data} = useQuery(GET_Buscador);
  if(loading) return <Text style={{color:'#fff'}}>Loading ...</Text>
  if(error) return <Text style={{color:'red'}}>Error</Text>
  //console.log(data)
  return(
    <View style={styles.body}>
      <View style={styles.list}>
          <Text style={styles.row}>Codigo</Text>
          <Text style={styles.row}>Nombre</Text>
          <Text style={styles.row}>Tipologia</Text>
          <Text style={styles.row}>Creditos</Text>
          
      </View>
      {data.allAsignaturas.map((post) => (
        <View style={styles.list}>
          <Text style={styles.row}>{post.Id_asignatura}</Text>
          <Text style={styles.row}>{post.Nombre}</Text>
          <Text style={styles.row}>{post.Tipologia}</Text>
          <Text style={styles.row}>{post.Creditos}</Text>
          
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  body:{
    backgroundColor:'#fff',
    flex:1,
  },
  list:{
    width:'80%',
    marginTop:75,
    flexDirection:'row',
    flexWrap:'wrap',
    borderBottomWidth: .5,
  },
  row:{
    backgroundColor:'"fff',
    flex:1,
    fontSize:13,
    paddingHorizontal:2,
    paddingVertical:10,
  }
})