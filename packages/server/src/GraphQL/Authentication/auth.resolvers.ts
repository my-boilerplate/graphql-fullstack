import {
  ApolloError,
  AuthenticationError,
  IResolvers
} from 'apollo-server-express'
import { Context } from '../context'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

interface verifyToken {
  token: string;
}

interface SignIn {
  usuario: string;
  senha: string;
}

const resolvers: IResolvers = {
  Query: {
    verifyToken: async (
      _: void,
      args: verifyToken,
      ctx: Context
    ): Promise<string | undefined> => {
      if (args.token) {
        if (!(await jwt.verify(args.token, ctx.secret))) {
          throw new AuthenticationError('Error')
        }
        return 'Logged'
      }
    }
  },
  Mutation: {
    signIn: async (_: void, args: SignIn, ctx: Context): Promise<string> => {
      const usuario = await ctx.prisma.usuario.findOne({
        where: args
      })
      if (!(await bcrypt.compare(args.senha, String(usuario?.senha)))) {
        throw new ApolloError('Password Invalid!', '401')
      }
      const token = await jwt.sign({ id: usuario?.id }, ctx.secret, {
        expiresIn: '8h'
      })
      return token
    }
  }
}

export default resolvers
