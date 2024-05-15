import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import { env } from "./env"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
  ],
  resolve: {
    alias: {
      "@freed/contract-ui": path.resolve(__dirname, "src"),
      "@freed/contract": path.resolve(__dirname, "..", "contract"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: `http://localhost:${env.SERVER_PORT}`,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
