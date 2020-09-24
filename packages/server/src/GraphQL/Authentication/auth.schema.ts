import { gql } from 'apollo-server-express'

const typeDefs = gql`
  input SignIn {
    username: String!
    password: String!
  }

  input SignUp {
    username: String!
    password: String!
    name: String!
    email: String!
  }

  type Token {
    token: String
  }

  type Query {
    verifyToken: String!
  }

  type Mutation {
    signIn(args: SignIn!): Token!
  }
`
export default typeDefs
