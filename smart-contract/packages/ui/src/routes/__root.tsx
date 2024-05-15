import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Toaster } from "@freed/contract-ui/components/ui/toaster"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export const Route = createRootRoute({
  component: () => {
    const client = new QueryClient()

    return (
      <>
        <QueryClientProvider client={client}>
          <Outlet />
        </QueryClientProvider>
        <TanStackRouterDevtools />
        <Toaster />
      </>
    )
  },
})
