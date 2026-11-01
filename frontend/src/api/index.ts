import { client } from './generated/client.gen'

client.setConfig({
  baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
})

export * from './generated'
