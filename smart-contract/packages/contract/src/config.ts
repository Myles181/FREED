import { env } from "./env";

export default {
  wallet: {
    mnemonic: env.MNEMONIC
  },
  apiKey: {
    infura: env.INFURA_API_KEY,
    polygonscan: env.POLYGONSCAN_API_KEY,
    ethernal: env.ETHERNAL_API_TOKEN,
  },
  contracts: {
    freedToken: {
      address: env.FREED_TOKEN_CONTRACT_ADDRESS
    }
  },
  server: {
    port: env.PORT
  }
}
