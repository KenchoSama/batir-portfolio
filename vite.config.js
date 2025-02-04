import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.PNG"], // Add this line to include PNG files
  base: "/batir-portfolio/", // Add this line to set the base path
})
