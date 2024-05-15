import { Hono, MiddlewareHandler } from 'hono'
import { getContract, requestFaucet } from './lib'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { Freed } from '@freed/contract/types'
import { logger } from 'hono/logger'

const schema = z.object({
  address: z.string().startsWith('0x', { message: "Invalid address" })
})

const contractMiddleware: MiddlewareHandler<{
  Variables: {
    contract: Freed
  }
}> = async (c, next) => {
  c.set("contract", await getContract())

  await next()
}

export const app = new Hono()
  .use(logger())
  .use(contractMiddleware)
  .post('/faucet',
    zValidator('json', schema),
    async (c) => {
      const { address } = c.req.valid('json')
      const { contract } = c.var

      return c.json(
        await requestFaucet(contract, address)
      )
    }
  )

export type App = typeof app
