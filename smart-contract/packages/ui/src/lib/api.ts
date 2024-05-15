import type { App } from "@freed/contract/api"
import { hc } from 'hono/client'

export const client = hc<App>("/api")
