/**
 * Author: Ashraf Morningstar
 * GitHub: https://github.com/AshrafMorningstar
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
})

