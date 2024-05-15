import { Button } from '@freed/contract-ui/components/ui/button'
import { Input } from '@freed/contract-ui/components/ui/input'
import { createFileRoute } from '@tanstack/react-router'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRequestFaucet } from '@freed/contract-ui/lib/faucet'
import { useToast } from '@freed/contract-ui/components/ui/use-toast'
import { Form, FormItem, FormField, FormMessage, FormControl } from "@freed/contract-ui/components/ui/form"
import { env } from '@freed/contract-ui/env'
import * as lib from './-components/lib'
import { useState } from 'react'
import { Loader2Icon } from 'lucide-react'

export const Route = createFileRoute('/faucet')({
  component: FaucetPage
})

const schema = z.object({
  address: z.string()
})

type Schema = z.infer<typeof schema>

const defaultValues = env.NODE_ENV === "development"
  ? {
    address: "0xE9511db3D27C59E803F9f579abAe3fe927c2B5A4"
  } : {}

function FaucetPage() {
  const { toast } = useToast()

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues
  })

  const { mutate: requestFaucet } = useRequestFaucet()

  const onSubmit = async ({ address }: Schema) =>
    new Promise(res => {
      requestFaucet({
        address,
      },
        {
          onSuccess: msg => {
            toast({
              title: "Request successful",
              description: msg
            })
            res(undefined)
          },
          onError: err => {
            toast({
              variant: "destructive",
              title: "Request failed",
              description: err.message
            })
          }
        })
    })

  const isSubmitting = form.formState.isSubmitting

  return (
    <main className="grid grow place-items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-10">
          <div className="flex justify-center">
            <header className="font-bold text-2xl">FAUCET</header>
          </div>
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting
                ? <Loader2Icon className="size-6 animate-spin" />
                : "Request ⟶"
              }
            </Button>
          </div>
        </form>
      </Form>
      <div>
        <AddTokenToWalletButton />
      </div>
    </main>
  )
}

const AddTokenToWalletButton = () => {
  const [provider, setProvider] = useState<Awaited<ReturnType<typeof lib.getProvider>>>()
  const [isAddingToWallet, setIsAddingToWallet] = useState(false)

  const addTokenToWallet = async () => {
    setIsAddingToWallet(true)

    let currentProvider = provider

    try {
      if (!currentProvider) {
        currentProvider = await lib.getProvider()
        setProvider(currentProvider)
      }

      await lib.addTokenToWallet(currentProvider.rawProvider)

    }
    finally {
      setIsAddingToWallet(false)
    }
  }

  return (
    <Button onClick={addTokenToWallet}>
      {isAddingToWallet
        ? <Loader2Icon className="size-6 animate-spin" />
        : "Add token to wallet"
      }
    </Button>
  )
}
