import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

export const env = createEnv({
  clientPrefix: "",
  client: {},
  server: {
    NODE_ENV: z.enum(["production", "development", "test"]),
    POLYGONSCAN_API_KEY: z.string(),
    MNEMONIC: z.string().min(1),
    INFURA_API_KEY: z.string(),
    FREED_TOKEN_CONTRACT_ADDRESS: z.string(),
    PORT: z.coerce.number().min(0).max(65535),
    ETHERNAL_API_TOKEN: z.string().optional(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    POLYGONSCAN_API_KEY: process.env.POLYGONSCAN_API_KEY,
    MNEMONIC: process.env.MNEMONIC,
    INFURA_API_KEY: process.env.INFURA_API_KEY,
    FREED_TOKEN_CONTRACT_ADDRESS: process.env.FREED_TOKEN_CONTRACT_ADDRESS,
    PORT: process.env.SERVER_PORT,
    ETHERNAL_API_TOKEN: process.env.ETHERNAL_API_TOKEN,
  }
})
