import express from 'express'
import { PrismaClient } from '@prisma/client'
import { environment as env } from '../../../../environment'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: env.server?.prisma.url
    }
  }
})

const secret = String(env.server?.authentication?.secret)

export interface Context {
  req: express.Request;
  res: express.Response;
  prisma: PrismaClient;
  secret: string;
}

const context = ({ req, res }: Context): Context => {
  return { req, res, prisma, secret }
}

export default context
