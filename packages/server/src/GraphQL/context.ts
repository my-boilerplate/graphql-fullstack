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

export interface Context {
  req: express.Request;
  res: express.Response;
  prisma: PrismaClient;
}

const context = ({ req, res }: Context): Context => {
  return { req, res, prisma }
}

export default context
