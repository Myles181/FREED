import { env } from "./env";

export default {
  contracts: {
    freedToken: {
      address: env.FREED_TOKEN_CONTRACT_ADDRESS,
      symbol: "FREED",
      decimals: 18,
      image: `${window.location.origin}/images/logo.svg`,
    },
  },
};
