import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Pessoa {
    id: Int!
    idFisica: Fisica
    idJuridica: Juridica
  }

  type Fisica {
    id: Int!
    nome: String!
    cpf: String!
    aniversario: DateTime!
    mae: String!
  }

  type Juridica {
    id: Int!
    nome: String!
    cnpj: String!
    fantasia: String
  }
`

export default typeDefs
