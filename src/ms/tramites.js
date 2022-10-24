import { useQuery } from "@apollo/client";
import { GET_PROCEDURE } from "../graphql/queries.js";

const useProcedure =() => {
    const { data = {}, loading, refetch} = useQuery(GET_PROCEDURE)
    const { tramites = null} = data

    const tramitesNodes = tramites
    ? tramites.edges.map(edges => edges.node)
    : []

    return { loading, tramites: tramitesNodes, refetch }
}

export default useProcedure