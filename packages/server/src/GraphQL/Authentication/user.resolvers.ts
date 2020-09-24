import { Prisma__UsuarioClient, Usuario } from '@prisma/client'
import { IResolvers } from 'graphql-tools'
import { Context } from '../context'

const resolvers: IResolvers = {
  Query: {
    getUsuarios: async (
      _: void,
      args: void,
      ctx: Context
    ): Promise<Usuario[]> => {
      return await ctx.prisma.usuario.findMany()
    },
    getUsuario: async (
      _: void,
      args: Usuario,
      ctx: Context
    ): Promise<Prisma__UsuarioClient<Usuario | null>> => {
      return await ctx.prisma.usuario.findOne({ where: args })
    }
  }
}

export default resolvers
