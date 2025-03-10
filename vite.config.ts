import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  css: {
    postcss: {
      plugins: [autoprefixer],
      base: '/landing-grafica/',
    },
  },
})
