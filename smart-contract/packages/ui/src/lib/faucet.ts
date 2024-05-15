import { useMutation, UseMutationResult } from "@tanstack/react-query"
import { client } from "./api"

export const useRequestFaucet =
  () =>
    useMutation({
      mutationFn: async ({ address }: { address: string }) => {
        const res = await client.faucet.$post({
          json: { address }
        })
        const json = await res.json()

        if (res.status !== 200)
          throw new Error(JSON.stringify(json))

        return json.message
      }
    })
