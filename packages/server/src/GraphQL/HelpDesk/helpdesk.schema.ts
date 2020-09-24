import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Tarefas {
    id: Int!
    autor: Usuario!
    abertura: DateTime!
    classe: Int!
    tipo: Int
    estado: Int
    prioridade: Int
    titulo: String!
    descricao: String
  }

  type Categorias {
    id: Int!
    tipo: Int!
    nome: String!
    descricao: String
    categoriaPai: Int
  }

  type Checklist {
    id: Int!
    idTarefas: Tarefas!
    titulo: String!
    descricao: String
  }

  type ChecklistItem {
    id: Int!
    idChecklist: Checklist!
    nome: String!
    descricao: String
  }
`

export default typeDefs
