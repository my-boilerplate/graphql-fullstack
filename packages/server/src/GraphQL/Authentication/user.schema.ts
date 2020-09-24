import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Usuario {
    id: Int!
    email: String!
    usuario: String!
    senha: String!
    nome: String
  }

  type GrupoPermissao {
    id: Int!
    nome: String!
  }

  type AcessoGrupoPermissao {
    id: Int!
    idGrupoPermissao: GrupoPermissao!
    idTelas: Telas!
    isMenu: Boolean
    isAcesso: Boolean
    isSalvar: Boolean
    isEditar: Boolean
    isDeletar: Boolean
  }

  type AcessoUsuarioPermissao {
    id: Int!
    idUsuario: Usuario!
    idTelas: Telas!
    isMenu: Boolean
    isAcesso: Boolean
    isSalvar: Boolean
    isEditar: Boolean
    isDeletar: Boolean
  }

  type Query {
    getUsuarios: [Usuario!]!
    getUsuario(id: Int!): Usuario!
  }
`

export default typeDefs
