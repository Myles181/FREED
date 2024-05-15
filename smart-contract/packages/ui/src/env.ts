import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

export const env = createEnv({
  clientPrefix: "",
  client: {
    NODE_ENV: z.enum(["production", "development", "test"]),
    FREED_TOKEN_CONTRACT_ADDRESS: z.string().startsWith("0x").length(42)
  },
  server: {},
  runtimeEnv: {
    NODE_ENV: import.meta.env.MODE,
    FREED_TOKEN_CONTRACT_ADDRESS: import.meta.env.VITE_FREED_TOKEN_CONTRACT_ADDRESS
  }
})
