import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jgwalsh-com/', // <-- set this if deploying to GitHub Pages
  plugins: [react()],
})
