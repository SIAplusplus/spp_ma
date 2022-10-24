import { ApolloClient } from "apollo-boost";

const createApolloClient = () => {
        uri: 'http://localhost:5000/graphql'
}

export default createApolloClient