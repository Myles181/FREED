import config from "@freed/contract/config"
import { Freed } from "@freed/contract/types"
import { ethers } from "hardhat"

export const getContract = async () => {
  const provider = new ethers.JsonRpcProvider()
  const [defaultSigner] = await ethers.getSigners()
  const signer = defaultSigner.connect(provider)
  const contract = await ethers.getContractAt("Freed", config.contracts.freedToken.address, signer)

  return contract
}

export const requestFaucet = async (contract: Freed, address: string) => {
  const tx = await contract.faucetMint(address)
  await tx.wait()

  return { message: "Check your wallet for some $FREED" }
}
