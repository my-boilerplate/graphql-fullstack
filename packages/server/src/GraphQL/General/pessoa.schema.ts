import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Pessoa {
    id: Int!
    idFisica: Fisica
    idJuridica: Juridica
  }

  type Fisica{
    id: Int!
    nome: String!
    cpf: String!
    aniversario: Date!
    mae: String!
  }

  type Juridica{
    id: Int!
    nome: String!
    cnpj: String!
    fantasia: String
  }

  type Query {

  }
`

export default typeDefs
