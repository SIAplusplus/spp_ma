import { gql, useQuery } from '@apollo/client'
import { Text, View } from 'react-native-web';

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
  if(loading) return <Text>Loading</Text>
  if(error) return <Text>Error</Text>
  console.log(data)
  return(
    <View>
      
    </View>
  )
}