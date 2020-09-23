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
      url: string
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
    port: process.env.SERVER_PORT || 4000
  }
}
