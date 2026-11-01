import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: '../backend/openapi/api.json',
  output: 'src/api/generated',
  plugins: ['@hey-api/typescript', '@hey-api/client-fetch', '@hey-api/sdk'],
})
