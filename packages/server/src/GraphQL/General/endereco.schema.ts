import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Endereco {
    id: Int!
    cep: String!
    rua: String!
    bairro: String!
    cidade: String!
    estado: String!
  }
`
export default typeDefs
