import config from "@freed/contract-ui/config";
import { BrowserProvider, Contract, Eip1193Provider } from "ethers"

export const addTokenToWallet = (provider: Eip1193Provider) =>
  provider.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: config.contracts.freedToken
    },
  })

export const getProvider = async () => {
  if ((window as any).ethereum == null) {
    const msg = "Metamask not installed!"
    alert(msg)
    throw new Error(msg)
  }

  const rawProvider = (window as any).ethereum as unknown as Eip1193Provider
  const provider = new BrowserProvider(rawProvider)
  const signer = await provider.getSigner();

  return { provider, signer, rawProvider }
}
