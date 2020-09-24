import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Programas {
    id: Int!
    nome: String!
    Telas: [Telas!]!
  }

  type Telas {
    id: Int!
    idPrograma: Programas!
    nome: String!
    tipo: Int!
    rota: String!
  }
`

export default typeDefs
