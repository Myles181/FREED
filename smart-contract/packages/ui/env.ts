import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

export const env = createEnv({
  clientPrefix: "",
  client: {},
  server: {
    SERVER_PORT: z.coerce.number().min(0).max(65535)
  },
  runtimeEnv: {
    SERVER_PORT: process.env.SERVER_PORT
  }
})
