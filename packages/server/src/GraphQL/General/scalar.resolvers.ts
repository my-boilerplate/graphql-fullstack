import { GraphQLScalarType } from 'graphql'
import { IResolvers } from 'apollo-server-express'
import { Kind, ValueNode } from 'graphql/language'

const resolvers: IResolvers = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'Date custom scalar type',
    parseValue(value: Date): Date {
      return new Date(value) // value from the client
    },
    serialize(value: Date): number {
      return value.getTime() // value sent to the client
    },
    parseLiteral(ast: ValueNode): Date | null {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value) // ast value is always in string format
      }
      return null
    }
  })
}

export default resolvers
