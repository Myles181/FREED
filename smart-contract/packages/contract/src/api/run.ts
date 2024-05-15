import config from "@freed/contract/config";
import { app } from "./app";
import { serve } from '@hono/node-server'

serve({
  port: config.server.port,
  fetch: app.fetch,
}, info => console.log(`Server running on port ${info.address}:${info.port}`))
