import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use relative base so built assets load correctly on Netlify
export default defineConfig({
  base: './',
  plugins: [react()],
})
