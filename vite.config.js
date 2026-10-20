import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Use repository base path for GitHub Pages in production, root in local development
  base: process.env.NODE_ENV === 'production' ? '/inkora-black-ink/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
