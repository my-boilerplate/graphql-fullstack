import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import { context, typeDefs, resolvers } from './GraphQL'
import { environment as env } from '../../../environment'

console.log('int:' + env.server?.apollo?.introspection)
console.log('pg:' + env?.server?.apollo?.playground)

// Iniciando express
const app = express()
app.use('*', cors())
app.use(compression())
// Iniciando Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: env.server?.apollo?.introspection,
  playground: env.server?.apollo?.playground
})
server.applyMiddleware({ app })
// Subindo servidor com Express
app.listen({ port: env.server?.port }, (): void =>
  console.log(
    `Server ready at http://localhost:${env.server?.port}${server.graphqlPath}`
  )
)
