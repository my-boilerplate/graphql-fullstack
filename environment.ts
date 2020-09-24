import * as env from 'dotenv'
import path from 'path'

env.config({ path: path.join(__dirname, '.env') })

export interface Environment {
  server?: {
    apollo?: {
      introspection?: boolean,
      playground?: boolean
    },
    prisma: {
      url: string | undefined
    },
    authentication?: {
      secret?: string
    },
    port: number | string
  };
}

export const environment: Environment = {
  server: {
    apollo: {
      introspection: process.env.APOLLO_INTROSPECTION === 'true',
      playground: process.env.APOLLO_PLAYGROUND === 'true'
    },
    prisma: {
      url: process.env.DATABASE_URL
    },
    authentication: {
      secret:
        process.env.SERVER_SECRET ||
        '111b55a07597cabe04996109644c0d119175f935c42d254eea56b0b0360fa630ef5f4344512827117f9020dd3d8277ce4efc9ad7dad075d99813ec50896582d2'
    },
    port: process.env.SERVER_PORT || 4000
  }
}
