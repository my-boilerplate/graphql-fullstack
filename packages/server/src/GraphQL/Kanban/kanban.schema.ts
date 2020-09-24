import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Quadro {
    id: Int!
    nome: String!
    descricao: String
    ColunaQuadro: [ColunaQuadro!]!
  }

  type ColunaQuadro {
    id: Int!
    idQuadro: Quadro!
    nome: String!
    descricao: String
    CartaoColuna: [CartaoColuna!]!
  }

  type CartaoColuna {
    id: Int!
    idColunaQuadro: ColunaQuadro!
    idTarefas: Tarefas
    nome: String
  }
`

export default typeDefs
