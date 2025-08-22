import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 666,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
