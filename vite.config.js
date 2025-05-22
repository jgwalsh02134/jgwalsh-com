import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // required for correct asset paths on Cloudflare Pages
  plugins: [react()],
})
